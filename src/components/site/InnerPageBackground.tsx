import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function InnerPageBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[linear-gradient(to_bottom,#072213,#020b06)]">
      {/* 1. Global Cyberpunk Grid Pattern (Full Coverage) */}
      <div
        className="absolute inset-0 opacity-[0.2] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83v58.34h-58.34l-.83-.83L0 54.628v-58.34h58.34l.83.83zM29.17 58.34L58.34 29.17 29.17 0 0 29.17l29.17 29.17z\' fill=\'%2300ff66\' fill-opacity=\'0.15\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}
      />

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
