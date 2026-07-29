import { useMemo } from "react";
import { motion } from "framer-motion";

function generateECGPath() {
  let seed = 42; // Fixed seed for deterministic SSR and client rendering
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const randomRange = (min: number, max: number) => min + random() * (max - min);

  const totalWidth = 2000;
  const baseline = 75;
  let currentX = 0;
  const points: { x: number, y: number }[] = [{ x: 0, y: baseline }];

  while (currentX < totalWidth) {
    // Gap before next heartbeat to ensure a repetition every 250-400 pixels
    const gap = randomRange(135, 285);
    currentX += gap;
    
    if (currentX >= totalWidth - 150) {
      break;
    }

    points.push({ x: currentX, y: baseline });

    // P Wave
    const pWidth = randomRange(15, 25);
    const pHeight = randomRange(4, 10);
    points.push({ x: currentX + pWidth / 2, y: baseline - pHeight });
    currentX += pWidth;
    points.push({ x: currentX, y: baseline });

    // PR Segment
    currentX += randomRange(10, 20);
    points.push({ x: currentX, y: baseline });

    // Q Wave
    currentX += randomRange(3, 6);
    points.push({ x: currentX, y: baseline + randomRange(3, 8) });

    // R Wave (Tall peak: 35-70px)
    currentX += randomRange(8, 12);
    points.push({ x: currentX, y: baseline - randomRange(35, 70) });

    // S Wave (Deep valley: 20-50px)
    currentX += randomRange(8, 12);
    points.push({ x: currentX, y: baseline + randomRange(20, 50) });

    // Return to baseline
    currentX += randomRange(5, 10);
    points.push({ x: currentX, y: baseline });

    // ST Segment
    currentX += randomRange(15, 30);
    points.push({ x: currentX, y: baseline });

    // T Wave
    const tWidth = randomRange(25, 45);
    const tHeight = randomRange(10, 25);
    points.push({ x: currentX + tWidth / 2, y: baseline - tHeight });
    currentX += tWidth;
    points.push({ x: currentX, y: baseline });
  }

  // Cap it off at the total width
  points.push({ x: totalWidth, y: baseline });

  // Duplicate for seamless 50% translation loop
  const duplicatedPoints = [
    ...points,
    ...points.slice(1).map(p => ({ x: p.x + totalWidth, y: p.y }))
  ];

  return duplicatedPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
}

export function ECGFooterWave() {
  // Generate the path once procedurally
  const path = useMemo(() => generateECGPath(), []);

  return (
    <div className="relative w-full h-[80px] bg-[#060D09] overflow-hidden flex items-center border-t border-[#00FF66]/10 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Subtle bloom/glow effect behind the waveform */}
      <div className="absolute inset-0 bg-[#00FF66]/5 blur-3xl pointer-events-none" />

      <svg
        className="absolute inset-0 w-[200%] h-full"
        viewBox="0 0 4000 140"
        preserveAspectRatio="none"
      >
        {/* Faint trail of the previous sweep */}
        <motion.path
          d={path}
          stroke="#00FF66"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.15]"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />

        {/* The active drawing ECG line */}
        <motion.path
          d={path}
          stroke="#00FF66"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 5px #00FF66) drop-shadow(0 0 10px rgba(0, 255, 102, 0.4))" }}
          initial={{ pathLength: 0, x: 0 }}
          animate={{ pathLength: 1, x: "-50%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
}
