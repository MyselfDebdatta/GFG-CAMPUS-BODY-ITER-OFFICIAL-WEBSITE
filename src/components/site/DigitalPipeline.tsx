"use client";
import { useEffect, useRef } from "react";

/*
 * DigitalPipeline – Continuous CI/CD footer animation (Canvas, 60 FPS).
 *
 * Key design: Two alternating packets overlap so the pipeline is NEVER idle.
 * When packet A is 60% through, packet B starts. By the time A exits,
 * B is already mid-journey. The animation never stops.
 */

const KEYWORDS = [
  "const", "function", "class", "async", "await", "return",
  "import", "export", "commit", "merge", "push", "pull",
  "build", "test", "deploy", "React", "Next.js", "TypeScript",
];
const SYMBOLS = ["</>", "{}", "[]", "()", "<>", "=>", "λ"];

function pick(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ─── Per-packet state ──────────────────────────────────────────────────────────

interface Packet {
  nx: number;          // normalized x (0–1), head position
  active: boolean;
  speed: number;       // normalized units / ms
  nodesHit: boolean[]; // which nodes this packet already activated
}

interface NodeState {
  glow: number;        // 0–1
  labelOpacity: number;
  label: string;
}

interface BranchState {
  drawProgress: number;
  opacity: number;
  packetT: number;     // branch packet progress, -1 = inactive
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function DigitalPipeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  // All mutable state in refs so resize doesn't reset the animation
  const stateRef = useRef<{
    packets: Packet[];
    nodes: NodeState[];
    branches: BranchState[];
    pipelineGlow: number;
    lastSpawnTime: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Node layout (normalized x positions) ────────────────────────────
    const NODE_COUNT = 7;
    const PAD = 0.04; // 4% padding from edges
    const nodePositions: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodePositions.push(PAD + (i / (NODE_COUNT - 1)) * (1 - 2 * PAD));
    }

    // Branch definitions: [startNodeIdx, endNodeIdx, direction]
    const branchDefs: [number, number, -1 | 1][] = [
      [2, 3, -1],  // upper branch
      [4, 5, 1],   // lower branch
    ];

    // Initialize state
    if (!stateRef.current) {
      const nodeStates: NodeState[] = nodePositions.map(() => ({
        glow: 0,
        labelOpacity: 0,
        label: Math.random() < 0.2 ? pick(SYMBOLS) : pick(KEYWORDS),
      }));

      stateRef.current = {
        packets: [
          { nx: -0.06, active: true, speed: 0.00045, nodesHit: new Array(NODE_COUNT).fill(false) },
        ],
        nodes: nodeStates,
        branches: branchDefs.map(() => ({
          drawProgress: 0,
          opacity: 0,
          packetT: -1,
        })),
        pipelineGlow: 0,
        lastSpawnTime: performance.now(),
      };
    }

    const state = stateRef.current;

    // ── Helpers ─────────────────────────────────────────────────────────

    function getSize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      return { W: rect.width, H: rect.height, dpr };
    }

    function resizeCanvas() {
      const { W, H, dpr } = getSize();
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ── Branch geometry ─────────────────────────────────────────────────

    function getBranchPoints(bIdx: number, W: number, H: number) {
      const [si, ei, dir] = branchDefs[bIdx];
      const CY = H / 2;
      const x1 = nodePositions[si] * W;
      const x2 = nodePositions[ei] * W;
      const span = x2 - x1;
      const offY = dir * H * 0.3;
      const branchY = CY + offY;

      return {
        x1, y1: CY, x2, y2: CY,
        cx1: x1 + span * 0.1, cy1: CY,
        cx2: x1 + span * 0.15, cy2: branchY,
        mx1: x1 + span * 0.18, my1: branchY,
        mx2: x1 + span * 0.82, my2: branchY,
        cx3: x1 + span * 0.85, cy3: branchY,
        cx4: x1 + span * 0.9, cy4: CY,
      };
    }

    function drawBranch(ctx: CanvasRenderingContext2D, bIdx: number, progress: number, W: number, H: number) {
      if (progress <= 0) return;
      const p = getBranchPoints(bIdx, W, H);
      ctx.beginPath();
      ctx.moveTo(p.x1, p.y1);

      if (progress <= 0.25) {
        const t = progress / 0.25;
        const steps = Math.ceil(t * 16);
        for (let i = 1; i <= steps; i++) {
          const s = (i / steps) * t;
          const u = 1 - s;
          ctx.lineTo(
            u*u*u*p.x1 + 3*u*u*s*p.cx1 + 3*u*s*s*p.cx2 + s*s*s*p.mx1,
            u*u*u*p.y1 + 3*u*u*s*p.cy1 + 3*u*s*s*p.cy2 + s*s*s*p.my1,
          );
        }
      } else if (progress <= 0.75) {
        ctx.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, p.mx1, p.my1);
        const t = (progress - 0.25) / 0.5;
        ctx.lineTo(lerp(p.mx1, p.mx2, t), lerp(p.my1, p.my2, t));
      } else {
        ctx.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, p.mx1, p.my1);
        ctx.lineTo(p.mx2, p.my2);
        const t = (progress - 0.75) / 0.25;
        const steps = Math.ceil(t * 16);
        for (let i = 1; i <= steps; i++) {
          const s = (i / steps) * t;
          const u = 1 - s;
          ctx.lineTo(
            u*u*u*p.mx2 + 3*u*u*s*p.cx3 + 3*u*s*s*p.cx4 + s*s*s*p.x2,
            u*u*u*p.my2 + 3*u*u*s*p.cy3 + 3*u*s*s*p.cy4 + s*s*s*p.y2,
          );
        }
      }
      ctx.stroke();
    }

    function branchPoint(bIdx: number, t: number, W: number, H: number) {
      const p = getBranchPoints(bIdx, W, H);
      if (t <= 0.25) {
        const s = t / 0.25; const u = 1 - s;
        return {
          x: u*u*u*p.x1 + 3*u*u*s*p.cx1 + 3*u*s*s*p.cx2 + s*s*s*p.mx1,
          y: u*u*u*p.y1 + 3*u*u*s*p.cy1 + 3*u*s*s*p.cy2 + s*s*s*p.my1,
        };
      } else if (t <= 0.75) {
        const lt = (t - 0.25) / 0.5;
        return { x: lerp(p.mx1, p.mx2, lt), y: lerp(p.my1, p.my2, lt) };
      } else {
        const s = (t - 0.75) / 0.25; const u = 1 - s;
        return {
          x: u*u*u*p.mx2 + 3*u*u*s*p.cx3 + 3*u*s*s*p.cx4 + s*s*s*p.x2,
          y: u*u*u*p.my2 + 3*u*u*s*p.cy3 + 3*u*s*s*p.cy4 + s*s*s*p.y2,
        };
      }
    }

    // ── Render loop ─────────────────────────────────────────────────────

    let lastTime = performance.now();

    function frame(now: number) {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;

      const { W, H, dpr } = getSize();
      const ctx = canvas!.getContext("2d")!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const CY = H / 2;
      const NODE_R = 4.5;

      // ── Spawn new packets to keep animation continuous ────────────────
      const SPAWN_INTERVAL = 4500; // ms between spawns
      if (now - state.lastSpawnTime > SPAWN_INTERVAL) {
        state.packets.push({
          nx: -0.06,
          active: true,
          speed: 0.0004 + Math.random() * 0.0001,
          nodesHit: new Array(NODE_COUNT).fill(false),
        });
        state.lastSpawnTime = now;
      }

      // ── Update packets ────────────────────────────────────────────────
      for (const pkt of state.packets) {
        if (!pkt.active) continue;
        pkt.nx += pkt.speed * dt;

        // Check node hits
        for (let ni = 0; ni < NODE_COUNT; ni++) {
          if (pkt.nodesHit[ni]) continue;
          if (pkt.nx >= nodePositions[ni]) {
            pkt.nodesHit[ni] = true;
            const node = state.nodes[ni];
            node.glow = 1;
            node.labelOpacity = 1;
            node.label = Math.random() < 0.2 ? pick(SYMBOLS) : pick(KEYWORDS);

            // Branch triggers
            for (let bi = 0; bi < branchDefs.length; bi++) {
              if (branchDefs[bi][0] === ni) {
                // Start drawing branch
                state.branches[bi].opacity = 1;
                state.branches[bi].drawProgress = 0;
                state.branches[bi].packetT = 0;
              }
              if (branchDefs[bi][1] === ni) {
                // Merge: stop branch packet
                state.branches[bi].packetT = -1;
              }
            }

            // Subtle pipeline flash at last node
            if (ni === NODE_COUNT - 1) {
              state.pipelineGlow = 0.4;
            }
          }
        }

        // Deactivate off-screen packets
        if (pkt.nx > 1.15) {
          pkt.active = false;
        }
      }

      // Remove dead packets (keep array clean)
      state.packets = state.packets.filter(p => p.active);

      // Ensure there's always at least one packet
      if (state.packets.length === 0) {
        state.packets.push({
          nx: -0.06,
          active: true,
          speed: 0.0004 + Math.random() * 0.0001,
          nodesHit: new Array(NODE_COUNT).fill(false),
        });
        state.lastSpawnTime = now;
      }

      // ── Update branches ───────────────────────────────────────────────
      for (const br of state.branches) {
        if (br.opacity > 0) {
          if (br.drawProgress < 1) {
            br.drawProgress = clamp01(br.drawProgress + dt * 0.002);
          }
          if (br.packetT >= 0 && br.packetT < 1) {
            br.packetT = clamp01(br.packetT + dt * 0.001);
          }
          // Fade out branch after fully drawn and packet gone
          if (br.drawProgress >= 1 && br.packetT < 0) {
            br.opacity = clamp01(br.opacity - dt * 0.0015);
            if (br.opacity <= 0) br.drawProgress = 0;
          }
        }
      }

      // ── Decay node states ─────────────────────────────────────────────
      for (const node of state.nodes) {
        node.glow = clamp01(node.glow - dt * 0.0012);
        if (node.glow < 0.2) {
          node.labelOpacity = clamp01(node.labelOpacity - dt * 0.003);
        }
      }

      // Decay pipeline glow (fast)
      state.pipelineGlow = clamp01(state.pipelineGlow - dt * 0.002);

      // ══════════════════════════════════════════════════════════════════
      //  RENDER
      // ══════════════════════════════════════════════════════════════════

      ctx.clearRect(0, 0, W, H);

      // Background (solid dark)
      ctx.fillStyle = "#040705";
      ctx.fillRect(0, 0, W, H);

      // ── Moving dot grid background ────────────────────────────────────
      ctx.fillStyle = "rgba(0, 230, 118, 0.04)"; 
      const spacing = 20;
      const offsetX = (now * 0.015) % spacing;
      for (let x = -spacing; x < W + spacing; x += spacing) {
        for (let y = (CY % spacing) - spacing; y < H + spacing; y += spacing) {
          ctx.beginPath();
          ctx.arc(x - offsetX, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Main pipeline line (very subtle, thin) ──────────────────────
      ctx.strokeStyle = `rgba(0,230,118,${0.12 + state.pipelineGlow * 0.15})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, CY);
      ctx.lineTo(W, CY);
      ctx.stroke();

      // ── Branch paths ────────────────────────────────────────────────
      for (let bi = 0; bi < state.branches.length; bi++) {
        const br = state.branches[bi];
        if (br.opacity < 0.01) continue;

        // Branch line
        ctx.strokeStyle = `rgba(0,230,118,${0.25 * br.opacity})`;
        ctx.lineWidth = 1;
        drawBranch(ctx, bi, br.drawProgress, W, H);

        // Branch packet
        if (br.packetT >= 0 && br.packetT <= 1) {
          const bp = branchPoint(bi, br.packetT, W, H);
          // Subtle glow
          const bg = ctx.createRadialGradient(bp.x, bp.y, 0, bp.x, bp.y, 10);
          bg.addColorStop(0, `rgba(0,255,153,${0.35 * br.opacity})`);
          bg.addColorStop(1, "transparent");
          ctx.fillStyle = bg;
          ctx.beginPath();
          ctx.arc(bp.x, bp.y, 10, 0, Math.PI * 2);
          ctx.fill();
          // Core
          ctx.fillStyle = `rgba(255,255,255,${0.8 * br.opacity})`;
          ctx.beginPath();
          ctx.arc(bp.x, bp.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Nodes ───────────────────────────────────────────────────────
      for (let ni = 0; ni < NODE_COUNT; ni++) {
        const node = state.nodes[ni];
        const x = nodePositions[ni] * W;
        const r = NODE_R + node.glow * 3;

        // Node halo (very subtle)
        if (node.glow > 0.05) {
          const ng = ctx.createRadialGradient(x, CY, 0, x, CY, 14);
          ng.addColorStop(0, `rgba(0,255,153,${node.glow * 0.25})`);
          ng.addColorStop(1, "transparent");
          ctx.fillStyle = ng;
          ctx.beginPath();
          ctx.arc(x, CY, 14, 0, Math.PI * 2);
          ctx.fill();
        }

        // Circle
        ctx.beginPath();
        ctx.arc(x, CY, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,230,118,${node.glow * 0.5})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(0,230,118,${0.2 + node.glow * 0.6})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Diamond marker below
        const dY = CY + NODE_R + 7;
        ctx.save();
        ctx.translate(x, dY);
        ctx.rotate(Math.PI / 4);
        const ds = 3 + node.glow * 0.5;
        ctx.fillStyle = `rgba(0,230,118,${0.15 + node.glow * 0.5})`;
        ctx.fillRect(-ds / 2, -ds / 2, ds, ds);
        ctx.restore();

        // Keyword label
        if (node.labelOpacity > 0.02) {
          ctx.save();
          ctx.globalAlpha = node.labelOpacity;
          ctx.font = "bold 10px 'JetBrains Mono','Fira Code','Cascadia Code','Consolas',monospace";
          ctx.fillStyle = "#00FF99";
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.shadowColor = "rgba(0,255,153,0.4)";
          ctx.shadowBlur = 4;
          ctx.fillText(node.label, x, CY - NODE_R - 10);
          ctx.shadowBlur = 0;
          ctx.restore();
        }
      }

      // ── Main packets ────────────────────────────────────────────────
      for (const pkt of state.packets) {
        if (pkt.nx < -0.04 || pkt.nx > 1.12) continue;
        const px = pkt.nx * W;

        // Short trailing glow
        const trailLen = 50;
        const tg = ctx.createLinearGradient(px - trailLen, CY, px, CY);
        tg.addColorStop(0, "transparent");
        tg.addColorStop(0.6, "rgba(0,230,118,0.08)");
        tg.addColorStop(0.9, "rgba(0,255,153,0.3)");
        tg.addColorStop(1, "rgba(110,255,181,0.7)");
        ctx.strokeStyle = tg;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(Math.max(0, px - trailLen), CY);
        ctx.lineTo(px, CY);
        ctx.stroke();

        // Compact head glow
        const hg = ctx.createRadialGradient(px, CY, 0, px, CY, 12);
        hg.addColorStop(0, "rgba(0,255,153,0.4)");
        hg.addColorStop(0.5, "rgba(0,230,118,0.08)");
        hg.addColorStop(1, "transparent");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(px, CY, 12, 0, Math.PI * 2);
        ctx.fill();

        // Bright core (small)
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.arc(px, CY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Edge fades ──────────────────────────────────────────────────
      const fadeW = 35;
      const lf = ctx.createLinearGradient(0, 0, fadeW, 0);
      lf.addColorStop(0, "#040705");
      lf.addColorStop(1, "transparent");
      ctx.fillStyle = lf;
      ctx.fillRect(0, 0, fadeW, H);

      const rf = ctx.createLinearGradient(W - fadeW, 0, W, 0);
      rf.addColorStop(0, "transparent");
      rf.addColorStop(1, "#040705");
      ctx.fillStyle = rf;
      ctx.fillRect(W - fadeW, 0, fadeW, H);

      animRef.current = requestAnimationFrame(frame);
    }

    animRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

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
