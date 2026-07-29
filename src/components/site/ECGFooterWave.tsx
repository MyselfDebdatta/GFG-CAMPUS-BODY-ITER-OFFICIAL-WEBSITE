import { motion } from "framer-motion";

export function ECGFooterWave() {
  // A seamless 2000-unit path consisting of 4 identical 500-unit heartbeats.
  // Each beat: Long flat (0-350) -> Up (350-375) -> Down (375-400) -> Return (400-425) -> Short delay (425-500)
  const path = `
    M 0 50 
    L 350 50 L 370 15 L 390 85 L 410 50 L 500 50
    L 850 50 L 870 15 L 890 85 L 910 50 L 1000 50
    L 1350 50 L 1370 15 L 1390 85 L 1410 50 L 1500 50
    L 1850 50 L 1870 15 L 1890 85 L 1910 50 L 2000 50
  `;

  return (
    <div className="relative w-full h-[80px] bg-[#060D09] overflow-hidden flex items-center border-t border-[#00FF66]/10 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Subtle bloom/glow effect behind the waveform */}
      <div className="absolute inset-0 bg-[#00FF66]/5 blur-3xl pointer-events-none" />

      {/* 
        The SVG is 200% width so that it extends beyond the screen. 
        It translates left by 50% (1 full screen width) while drawing 2 full screen widths,
        creating the illusion of a pen moving from left to right while the paper scrolls left.
      */}
      <svg
        className="absolute inset-0 w-[200%] h-full"
        viewBox="0 0 2000 100"
        preserveAspectRatio="none"
      >
        {/* Faint trail of the previous sweep */}
        <motion.path
          d={path}
          stroke="#00FF66"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-10"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />

        {/* The active drawing ECG line */}
        <motion.path
          d={path}
          stroke="#00FF66"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 6px #00FF66) drop-shadow(0 0 12px rgba(0, 255, 102, 0.4))" }}
          initial={{ pathLength: 0, x: 0 }}
          animate={{ pathLength: 1, x: "-50%" }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
}
