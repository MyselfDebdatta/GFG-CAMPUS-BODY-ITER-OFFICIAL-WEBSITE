import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InnerPageBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[linear-gradient(to_bottom,#072213,#020b06)]">
      {/* Global Header Lighting Glow */}
      <div className="absolute inset-0 bg-radial-brand opacity-60 mix-blend-screen pointer-events-none" />

      {/* 1. Global Cyberpunk Grid Pattern (Full Coverage) */}
      <div
        className="absolute inset-0 opacity-[0.2] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83L0 54.628v-58.34h58.34l.83.83zM29.17 58.34L58.34 29.17 29.17 0 0 29.17l29.17 29.17z\' fill=\'%2300ff66\' fill-opacity=\'0.15\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}
      />

      {/* 2. Floating 3D Geometric Wireframes */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <motion.div
          animate={{ rotateZ: 360, rotateX: 360, rotateY: 180 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] top-[20%] w-[40vw] h-[40vw] opacity-[0.05]"
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

      {/* 3. Bright Glitter / Twinkling Stars Effect */}
      {isClient && (
        <div className="absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => {
            // Pseudo-random deterministic values for initial render to avoid hydration mismatch,
            // though isClient already prevents SSR mismatch.
            const size = Math.random() * 2 + 1;
            return (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full mix-blend-screen shadow-[0_0_8px_rgba(0,255,102,0.8)]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: size,
                  height: size,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      )}

      {/* 4. Edge Vignette for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020b06_100%)] opacity-80" />
    </div>
  );
}
