"use client";
import { useEffect, useRef, useCallback } from "react";

/*
 * DigitalPipeline – A live CI/CD animation rendered on <canvas> for 60 FPS.
 *
 * Architecture:
 *   1. One horizontal main pipeline across the full width at y-center.
 *   2. Nodes placed every ~250-350px along the main line.
 *   3. Two git-style branch paths (one above, one below the main line).
 *   4. A single glowing data packet travels left → right.
 *   5. When the packet reaches a node, the node brightens and a keyword appears.
 *   6. When the packet reaches a branch-start node, the branch draws itself.
 *   7. When the packet reaches the branch-end node, the branch merges back and fades.
 *   8. Every full cycle ends with a "compilation success" glow.
 *   9. Everything resets and loops seamlessly.
 *
 * Colors: #00E676 (pipeline), #00FF99 (glow), #6EFFB5 (accent), #040705 (bg)
 */

// ─── Data ──────────────────────────────────────────────────────────────────────

const KEYWORDS = [
  "const", "function", "class", "async", "await", "return",
  "import", "export", "commit", "merge", "push", "pull",
  "build", "test", "deploy", "React", "Next.js", "TypeScript",
];

const SYMBOLS = ["</>", "{}", "[]", "()", "<>", "=>", "λ"];

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Easing ────────────────────────────────────────────────────────────────────

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

// ─── Types ─────────────────────────────────────────────────────────────────────

interface PipelineNode {
  /** Normalized x position (0–1) across the viewport */
  nx: number;
  /** The keyword/symbol to show when activated */
  label: string;
  /** Is this node a branch start? */
  branchStart?: number; // index of branch
  /** Is this node a branch end? */
  branchEnd?: number;
  /** Activation glow (0–1) */
  glow: number;
  /** Keyword opacity (0–1) */
  labelOpacity: number;
}

interface Branch {
  /** Index of the start node */
  startNodeIdx: number;
  /** Index of the end node */
  endNodeIdx: number;
  /** Whether this branch goes above (negative y) or below */
  direction: -1 | 1;
  /** Draw progress (0–1, how much of the branch path is visible) */
  drawProgress: number;
  /** Overall opacity */
  opacity: number;
  /** Packet progress along the branch (0–1), -1 = inactive */
  packetProgress: number;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function DigitalPipeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Sizing ──────────────────────────────────────────────────────────────
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const CY = H / 2; // center Y of the main pipeline
    const NODE_R = 5;
    const DIAMOND_SIZE = 4;

    // ── Layout Nodes ────────────────────────────────────────────────────────
    // Spread 7 nodes evenly, with padding on each side
    const PAD = 60; // px padding from edges
    const nodeCount = 7;
    const nodes: PipelineNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const nx = (PAD + (i / (nodeCount - 1)) * (W - 2 * PAD)) / W;
      const useSymbol = Math.random() < 0.2;
      nodes.push({
        nx,
        label: useSymbol ? pickRandom(SYMBOLS) : pickRandom(KEYWORDS),
        glow: 0,
        labelOpacity: 0,
      });
    }

    // Assign branch connections
    // Branch 0: node 2 → node 3 (upper)
    nodes[2].branchStart = 0;
    nodes[3].branchEnd = 0;
    // Branch 1: node 4 → node 5 (lower)
    nodes[4].branchStart = 1;
    nodes[5].branchEnd = 1;

    const branches: Branch[] = [
      {
        startNodeIdx: 2,
        endNodeIdx: 3,
        direction: -1,
        drawProgress: 0,
        opacity: 0,
        packetProgress: -1,
      },
      {
        startNodeIdx: 4,
        endNodeIdx: 5,
        direction: 1,
        drawProgress: 0,
        opacity: 0,
        packetProgress: -1,
      },
    ];

    // ── State ───────────────────────────────────────────────────────────────
    let packetNx = -0.05; // normalized x of the main packet head
    let pipelineGlow = 0; // global pipeline brightness multiplier (0–1)
    let phase: "travel" | "compile" | "cooldown" = "travel";
    let phaseTime = 0;
    let currentNodeTarget = 0;
    let packetSpeed = 0.00035; // normalized units per ms
    let compileFlashProgress = 0;
    const BASE_SPEED = 0.00035;
    const COMPILE_SPEED = 0.0008;

    // ── Branch Bezier Helper ────────────────────────────────────────────────
    function getBranchPath(branch: Branch): { x1: number; y1: number; cx1: number; cy1: number; cx2: number; cy2: number; mx1: number; my1: number; mx2: number; my2: number; cx3: number; cy3: number; cx4: number; cy4: number; x2: number; y2: number } {
      const startX = nodes[branch.startNodeIdx].nx * W;
      const endX = nodes[branch.endNodeIdx].nx * W;
      const startY = CY;
      const endY = CY;
      const midX = (startX + endX) / 2;
      const offsetY = branch.direction * (H * 0.32);
      const branchY = CY + offsetY;

      // Start curve: main → branch
      const cx1 = startX + (endX - startX) * 0.08;
      const cy1 = startY;
      const cx2 = startX + (endX - startX) * 0.12;
      const cy2 = branchY;

      // Middle straight-ish portion control points
      const mx1 = startX + (endX - startX) * 0.15;
      const my1 = branchY;
      const mx2 = startX + (endX - startX) * 0.85;
      const my2 = branchY;

      // End curve: branch → main
      const cx3 = startX + (endX - startX) * 0.88;
      const cy3 = branchY;
      const cx4 = startX + (endX - startX) * 0.92;
      const cy4 = endY;

      return {
        x1: startX, y1: startY,
        cx1, cy1, cx2, cy2,
        mx1, my1, mx2, my2,
        cx3, cy3, cx4, cy4,
        x2: endX, y2: endY,
      };
    }

    function drawBranchCurve(
      ctx: CanvasRenderingContext2D,
      branch: Branch,
      progress: number
    ) {
      const p = getBranchPath(branch);
      ctx.beginPath();
      ctx.moveTo(p.x1, p.y1);

      // The full path has ~3 segments
      // Segment 1: start curve (0 → 0.25)
      // Segment 2: middle line (0.25 → 0.75)
      // Segment 3: end curve (0.75 → 1.0)

      if (progress <= 0) return;

      if (progress <= 0.25) {
        const t = progress / 0.25;
        // Partial cubic bezier from (x1,y1) to (mx1,my1)
        const steps = Math.max(2, Math.floor(t * 20));
        for (let i = 1; i <= steps; i++) {
          const st = (i / steps) * t;
          const u = 1 - st;
          const bx = u * u * u * p.x1 + 3 * u * u * st * p.cx1 + 3 * u * st * st * p.cx2 + st * st * st * p.mx1;
          const by = u * u * u * p.y1 + 3 * u * u * st * p.cy1 + 3 * u * st * st * p.cy2 + st * st * st * p.my1;
          ctx.lineTo(bx, by);
        }
      } else if (progress <= 0.75) {
        // Full start curve
        ctx.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, p.mx1, p.my1);
        // Partial middle line
        const t = (progress - 0.25) / 0.5;
        ctx.lineTo(lerp(p.mx1, p.mx2, t), lerp(p.my1, p.my2, t));
      } else {
        // Full start curve + full middle
        ctx.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, p.mx1, p.my1);
        ctx.lineTo(p.mx2, p.my2);
        // Partial end curve
        const t = (progress - 0.75) / 0.25;
        const steps = Math.max(2, Math.floor(t * 20));
        for (let i = 1; i <= steps; i++) {
          const st = (i / steps) * t;
          const u = 1 - st;
          const bx = u * u * u * p.mx2 + 3 * u * u * st * p.cx3 + 3 * u * st * st * p.cx4 + st * st * st * p.x2;
          const by = u * u * u * p.my2 + 3 * u * u * st * p.cy3 + 3 * u * st * st * p.cy4 + st * st * st * p.y2;
          ctx.lineTo(bx, by);
        }
      }

      ctx.stroke();
    }

    function getPointOnBranch(branch: Branch, t: number): { x: number; y: number } {
      const p = getBranchPath(branch);
      if (t <= 0.25) {
        const st = t / 0.25;
        const u = 1 - st;
        return {
          x: u * u * u * p.x1 + 3 * u * u * st * p.cx1 + 3 * u * st * st * p.cx2 + st * st * st * p.mx1,
          y: u * u * u * p.y1 + 3 * u * u * st * p.cy1 + 3 * u * st * st * p.cy2 + st * st * st * p.my1,
        };
      } else if (t <= 0.75) {
        const lt = (t - 0.25) / 0.5;
        return {
          x: lerp(p.mx1, p.mx2, lt),
          y: lerp(p.my1, p.my2, lt),
        };
      } else {
        const st = (t - 0.75) / 0.25;
        const u = 1 - st;
        return {
          x: u * u * u * p.mx2 + 3 * u * u * st * p.cx3 + 3 * u * st * st * p.cx4 + st * st * st * p.x2,
          y: u * u * u * p.my2 + 3 * u * u * st * p.cy3 + 3 * u * st * st * p.cy4 + st * st * st * p.y2,
        };
      }
    }

    // ── Render Loop ─────────────────────────────────────────────────────────
    let lastTime = performance.now();

    function frame(now: number) {
      const dt = Math.min(now - lastTime, 50); // cap at 50ms
      lastTime = now;
      phaseTime += dt;

      // ── Update ──────────────────────────────────────────────────────────
      if (phase === "travel") {
        packetNx += packetSpeed * dt;

        // Check if packet reached current target node
        if (currentNodeTarget < nodes.length) {
          const targetNx = nodes[currentNodeTarget].nx;

          if (packetNx >= targetNx) {
            // Activate node
            const node = nodes[currentNodeTarget];
            node.glow = 1;
            node.labelOpacity = 1;

            // If this node starts a branch, begin drawing it
            if (node.branchStart !== undefined) {
              const branch = branches[node.branchStart];
              branch.opacity = 1;
              branch.drawProgress = 0;
              branch.packetProgress = 0;
            }

            // If this node ends a branch, start merging it
            if (node.branchEnd !== undefined) {
              const branch = branches[node.branchEnd];
              branch.packetProgress = -1; // stop branch packet
            }

            currentNodeTarget++;

            // Check for compilation event at last node
            if (currentNodeTarget >= nodes.length) {
              phase = "compile";
              phaseTime = 0;
              compileFlashProgress = 0;
              packetSpeed = COMPILE_SPEED;
            }
          }
        }

        // Update branches
        for (const branch of branches) {
          if (branch.opacity > 0 && branch.drawProgress < 1) {
            branch.drawProgress = clamp(branch.drawProgress + dt * 0.0015, 0, 1);
          }
          if (branch.packetProgress >= 0 && branch.packetProgress < 1) {
            branch.packetProgress = clamp(branch.packetProgress + dt * 0.0008, 0, 1);
          }
          // Fade out branch after merge node activated
          const endNode = nodes[branch.endNodeIdx];
          if (endNode.glow > 0 && branch.drawProgress >= 1) {
            branch.opacity = clamp(branch.opacity - dt * 0.001, 0, 1);
          }
        }
      } else if (phase === "compile") {
        // Compilation flash: pipeline glows brightly, then fades
        compileFlashProgress += dt * 0.001;
        if (compileFlashProgress < 0.4) {
          pipelineGlow = easeInOutCubic(compileFlashProgress / 0.4);
        } else if (compileFlashProgress < 1.0) {
          pipelineGlow = 1 - easeInOutCubic((compileFlashProgress - 0.4) / 0.6);
        } else {
          pipelineGlow = 0;
          phase = "cooldown";
          phaseTime = 0;
        }

        // Keep moving packet off screen
        packetNx += packetSpeed * dt;
      } else if (phase === "cooldown") {
        if (phaseTime > 1800) {
          // Reset everything for next cycle
          packetNx = -0.05;
          pipelineGlow = 0;
          phase = "travel";
          phaseTime = 0;
          currentNodeTarget = 0;
          packetSpeed = BASE_SPEED;
          compileFlashProgress = 0;

          // Reset nodes
          for (const node of nodes) {
            node.glow = 0;
            node.labelOpacity = 0;
            // Re-randomize label
            const useSymbol = Math.random() < 0.2;
            node.label = useSymbol ? pickRandom(SYMBOLS) : pickRandom(KEYWORDS);
          }

          // Reset branches
          for (const branch of branches) {
            branch.drawProgress = 0;
            branch.opacity = 0;
            branch.packetProgress = -1;
          }
        }
      }

      // Decay node glow and label opacity
      for (const node of nodes) {
        if (node.glow > 0) {
          node.glow = clamp(node.glow - dt * 0.0008, 0, 1);
        }
        // Label stays visible longer then fades
        if (node.labelOpacity > 0 && node.glow < 0.3) {
          node.labelOpacity = clamp(node.labelOpacity - dt * 0.002, 0, 1);
        }
      }

      // ── Render ──────────────────────────────────────────────────────────

      // Clear
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#040705";
      ctx.fillRect(0, 0, W, H);

      // Subtle ambient glow behind the main line
      const ambientGrad = ctx.createRadialGradient(W / 2, CY, 0, W / 2, CY, W * 0.6);
      ambientGrad.addColorStop(0, `rgba(0, 230, 118, ${0.03 + pipelineGlow * 0.06})`);
      ambientGrad.addColorStop(1, "transparent");
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, W, H);

      // ── Main Pipeline Line ──────────────────────────────────────────────
      const mainAlpha = 0.15 + pipelineGlow * 0.6;
      ctx.strokeStyle = `rgba(0, 230, 118, ${mainAlpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, CY);
      ctx.lineTo(W, CY);
      ctx.stroke();

      // Pipeline glow line (wider, more transparent)
      if (pipelineGlow > 0.01) {
        ctx.strokeStyle = `rgba(0, 255, 153, ${pipelineGlow * 0.3})`;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, CY);
        ctx.lineTo(W, CY);
        ctx.stroke();
      }

      // ── Branch Paths ────────────────────────────────────────────────────
      for (const branch of branches) {
        if (branch.opacity <= 0.01) continue;

        // Draw the branch path
        ctx.strokeStyle = `rgba(0, 230, 118, ${0.35 * branch.opacity})`;
        ctx.lineWidth = 1.5;
        drawBranchCurve(ctx, branch, branch.drawProgress);

        // Glow line on branch
        ctx.strokeStyle = `rgba(0, 255, 153, ${0.15 * branch.opacity})`;
        ctx.lineWidth = 4;
        drawBranchCurve(ctx, branch, branch.drawProgress);

        // Branch packet
        if (branch.packetProgress >= 0 && branch.packetProgress <= 1) {
          const bp = getPointOnBranch(branch, branch.packetProgress);

          // Glow behind packet
          const bpGrad = ctx.createRadialGradient(bp.x, bp.y, 0, bp.x, bp.y, 18);
          bpGrad.addColorStop(0, `rgba(0, 255, 153, ${0.6 * branch.opacity})`);
          bpGrad.addColorStop(1, "transparent");
          ctx.fillStyle = bpGrad;
          ctx.fillRect(bp.x - 20, bp.y - 20, 40, 40);

          // Packet core
          ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * branch.opacity})`;
          ctx.beginPath();
          ctx.arc(bp.x, bp.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Nodes ───────────────────────────────────────────────────────────
      for (const node of nodes) {
        const x = node.nx * W;
        const r = NODE_R + node.glow * 3;

        // Node glow
        if (node.glow > 0.01) {
          const nodeGrad = ctx.createRadialGradient(x, CY, 0, x, CY, 25);
          nodeGrad.addColorStop(0, `rgba(0, 255, 153, ${node.glow * 0.5})`);
          nodeGrad.addColorStop(1, "transparent");
          ctx.fillStyle = nodeGrad;
          ctx.fillRect(x - 30, CY - 30, 60, 60);
        }

        // Node circle (filled when active)
        ctx.beginPath();
        ctx.arc(x, CY, r, 0, Math.PI * 2);
        const fillAlpha = node.glow * 0.8;
        ctx.fillStyle = `rgba(0, 230, 118, ${fillAlpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(0, 230, 118, ${0.2 + node.glow * 0.8})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Diamond marker below node
        const dY = CY + NODE_R + 7 + node.glow * 2;
        ctx.save();
        ctx.translate(x, dY);
        ctx.rotate(Math.PI / 4);
        const ds = DIAMOND_SIZE + node.glow * 1;
        ctx.fillStyle = `rgba(0, 230, 118, ${0.15 + node.glow * 0.7})`;
        ctx.fillRect(-ds / 2, -ds / 2, ds, ds);
        ctx.restore();

        // Keyword above node
        if (node.labelOpacity > 0.01) {
          ctx.save();
          ctx.globalAlpha = node.labelOpacity;
          ctx.font = "bold 11px 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace";
          ctx.fillStyle = "#00FF99";
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          // Text glow
          ctx.shadowColor = "rgba(0, 255, 153, 0.8)";
          ctx.shadowBlur = 8;
          ctx.fillText(node.label, x, CY - NODE_R - 12);
          ctx.shadowBlur = 0;
          ctx.restore();
        }
      }

      // ── Main Data Packet ────────────────────────────────────────────────
      if (packetNx > -0.04 && packetNx < 1.15) {
        const px = packetNx * W;

        // Trailing glow
        const trailLen = 80;
        const trailGrad = ctx.createLinearGradient(px - trailLen, CY, px, CY);
        trailGrad.addColorStop(0, "transparent");
        trailGrad.addColorStop(0.5, `rgba(0, 230, 118, 0.15)`);
        trailGrad.addColorStop(0.9, `rgba(0, 255, 153, 0.5)`);
        trailGrad.addColorStop(1, `rgba(255, 255, 255, 0.9)`);
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(Math.max(0, px - trailLen), CY);
        ctx.lineTo(px, CY);
        ctx.stroke();

        // Soft glow around packet head
        const headGrad = ctx.createRadialGradient(px, CY, 0, px, CY, 25);
        headGrad.addColorStop(0, "rgba(0, 255, 153, 0.6)");
        headGrad.addColorStop(0.5, "rgba(0, 230, 118, 0.15)");
        headGrad.addColorStop(1, "transparent");
        ctx.fillStyle = headGrad;
        ctx.fillRect(px - 30, CY - 30, 60, 60);

        // Bright core
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(px, CY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Edge Fades ──────────────────────────────────────────────────────
      // Left fade
      const leftFade = ctx.createLinearGradient(0, 0, 40, 0);
      leftFade.addColorStop(0, "#040705");
      leftFade.addColorStop(1, "transparent");
      ctx.fillStyle = leftFade;
      ctx.fillRect(0, 0, 40, H);

      // Right fade
      const rightFade = ctx.createLinearGradient(W - 40, 0, W, 0);
      rightFade.addColorStop(0, "transparent");
      rightFade.addColorStop(1, "#040705");
      ctx.fillStyle = rightFade;
      ctx.fillRect(W - 40, 0, 40, H);

      // ── Next Frame ──────────────────────────────────────────────────────
      animRef.current = requestAnimationFrame(frame);
    }

    animRef.current = requestAnimationFrame(frame);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    draw();
    const handleResize = () => {
      cancelAnimationFrame(animRef.current);
      draw();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);

  return (
    <div className="relative w-full h-[80px] bg-[#040705] overflow-hidden border-t border-[#00E676]/10 cursor-default select-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
