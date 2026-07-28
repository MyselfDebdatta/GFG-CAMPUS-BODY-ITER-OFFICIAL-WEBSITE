import { useEffect, useRef } from "react";

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize by disabling alpha on canvas itself
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Handle DPI scaling
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    setSize();
    window.addEventListener("resize", setSize);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width) * 2 - 1;
      mouseY = (e.clientY / height) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initializing 3500 Particles for a dense starfield effect
    const PARTICLE_COUNT = 3500;
    const PIXEL_COUNT = 35;

    // We spread particles beyond viewport bounds to hide popping during parallax
    const particles: { x: number; y: number; z: number; size: number; phase: number; speed: number; network: boolean }[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width * 1.5 - width * 0.25, 
        y: Math.random() * height * 1.5 - height * 0.25,
        z: Math.random() * 2.5 + 0.5, // Depth from 0.5 (close) to 3.0 (far)
        size: Math.random() * 1.2 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
        network: Math.random() > 0.98, // Only 2% participate in networking lines
      });
    }

    const pixels: { x: number; y: number; z: number; size: number; opacity: number; floatSpeed: number }[] = [];
    for (let i = 0; i < PIXEL_COUNT; i++) {
      pixels.push({
        x: Math.random() * width * 1.2 - width * 0.1,
        y: Math.random() * height * 1.2 - height * 0.1,
        z: Math.random() * 3 + 1,
        size: Math.random() * 12 + 4,
        opacity: Math.random() * 0.15 + 0.05,
        floatSpeed: Math.random() * 0.5 + 0.1,
      });
    }

    const gridSize = 80;
    let animationFrameId: number;

    const draw = () => {
      // Smooth mouse interpolation (ease value)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Clear & Draw Deep Black Background (#020b06)
      ctx.fillStyle = "#020b06";
      ctx.fillRect(0, 0, width, height);

      // 1. Radial Center Emerald Glow
      const bgGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.6
      );
      bgGradient.addColorStop(0, "rgba(0, 255, 127, 0.06)");
      bgGradient.addColorStop(0.5, "rgba(0, 255, 127, 0.01)");
      bgGradient.addColorStop(1, "transparent");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Grid Overlay Removed as per user request

      // 3. Floating Pixel Squares with bloom
      pixels.forEach(px => {
        px.y -= px.floatSpeed;
        if (px.y < -px.size * 2) px.y = height + px.size * 2;

        const pxOffsetX = targetX * 80 * (1 / px.z);
        const pxOffsetY = targetY * 80 * (1 / px.z);
        
        let renderX = px.x + pxOffsetX;
        let renderY = px.y + pxOffsetY;
        
        // Simple wrap for X to keep them on screen if user moves mouse wildly
        if (renderX < -50) px.x = width + 50 - pxOffsetX;
        if (renderX > width + 50) px.x = -50 - pxOffsetX;

        ctx.fillStyle = `rgba(0, 255, 127, ${px.opacity})`;
        ctx.shadowColor = "rgba(0, 255, 127, 0.8)";
        ctx.shadowBlur = 15;
        
        ctx.fillRect(renderX, renderY, px.size, px.size);
      });

      // Clear heavy shadows for massive particle array (vital for 60fps)
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#00ff7f";
      
      const networkNodes: {x: number, y: number}[] = [];

      // 4. 3500 Glowing Particles (Digital Starfield)
      particles.forEach(p => {
        // Natural upward float
        p.y -= 0.3 * (1 / p.z);
        
        if (p.y < -height * 0.25) p.y = height * 1.25;
        
        // Twinkle phase
        p.phase += p.speed;
        const twinkle = Math.abs(Math.sin(p.phase));
        
        // Depth-based parallax offset
        const parallaxX = targetX * 100 * (1 / p.z);
        const parallaxY = targetY * 100 * (1 / p.z);
        
        let x = p.x + parallaxX;
        let y = p.y + parallaxY;
        
        // Horizontal wrap
        if (x < -width * 0.25) p.x = width * 1.25 - parallaxX;
        if (x > width * 1.25) p.x = -width * 0.25 - parallaxX;
        
        // Calculate dynamic alpha based on depth and twinkle
        const alpha = twinkle * (0.9 / p.z);
        ctx.globalAlpha = Math.min(alpha, 1);
        
        // Draw standard particle (using fillRect is slightly faster than arc for 3500 tiny dots)
        ctx.fillRect(x, y, p.size, p.size);

        if (p.network) {
          networkNodes.push({x, y});
        }
      });

      // 5. Abstract Network Connections between selected nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < networkNodes.length; i++) {
        for (let j = i + 1; j < networkNodes.length; j++) {
          const dx = networkNodes[i].x - networkNodes[j].x;
          const dy = networkNodes[i].y - networkNodes[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 15000) { // Distance threshold
            ctx.globalAlpha = 1 - (dist / 15000);
            ctx.strokeStyle = `rgba(0, 255, 127, ${ctx.globalAlpha * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(networkNodes[i].x, networkNodes[i].y);
            ctx.lineTo(networkNodes[j].x, networkNodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1.0;

      // 6. Dark Vignette Over Edges
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, Math.max(width, height) * 0.35,
        width / 2, height / 2, Math.max(width, height) * 0.85
      );
      vignette.addColorStop(0, "rgba(2, 11, 6, 0)");
      vignette.addColorStop(1, "rgba(2, 11, 6, 1)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
