import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InnerPageBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020b06]">
      {/* 1. Deep Ambient Aurora Glows */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[#00FF66]/[0.04] blur-[150px] mix-blend-screen"
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-[30%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-[#00e65c]/[0.03] blur-[180px] mix-blend-screen"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* 2. Floating 3D Geometric Wireframes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <motion.div
          animate={{ rotateZ: 360, rotateX: 360, rotateY: 180 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] top-[20%] w-[40vw] h-[40vw] opacity-10"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="#00FF66" strokeWidth="0.2">
            <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" />
            <line x1="100" y1="10" x2="100" y2="100" />
            <line x1="190" y1="55" x2="100" y2="100" />
            <line x1="190" y1="145" x2="100" y2="100" />
            <line x1="100" y1="190" x2="100" y2="100" />
            <line x1="10" y1="145" x2="100" y2="100" />
            <line x1="10" y1="55" x2="100" y2="100" />
          </svg>
        </motion.div>
      </div>

      {/* 3. Mouse-Reactive Cyberpunk Grid */}
      {isClient && (
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-60"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83L0 54.628v-58.34h58.34l.83.83zM29.17 58.34L58.34 29.17 29.17 0 0 29.17l29.17 29.17z\' fill=\'%2300ff66\' fill-opacity=\'0.04\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            WebkitMaskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
            maskImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          }}
        />
      )}

      {/* 4. Global subtle faint grid so the background isn't completely empty when mouse is away */}
      <div
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83L0 54.628v-58.34h58.34l.83.83zM29.17 58.34L58.34 29.17 29.17 0 0 29.17l29.17 29.17z\' fill=\'%2300ff66\' fill-opacity=\'0.02\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}
      />

      {/* 5. Edge Vignette for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020b06_100%)] opacity-90" />
    </div>
  );
}
