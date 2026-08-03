import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SYMBOLS = ["</>", "{}", "[]", "()", "const", "function", "class", "=>", "import", "export"];
const NODES = [250, 550, 850, 1150, 1450, 1750];

export function DigitalPipeline() {
  const [pulseKey, setPulseKey] = useState(0);
  const [activeSymbol, setActiveSymbol] = useState<{ id: number, text: string, x: number } | null>(null);

  useEffect(() => {
    // Pulse every 6-8 seconds as requested
    const interval = setInterval(() => {
      setPulseKey(prev => prev + 1);
      
      // Spawn a symbol at a random node during the compile pulse
      const randomNode = NODES[Math.floor(Math.random() * NODES.length)];
      const text = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      
      setActiveSymbol({ id: Date.now(), text, x: randomNode });
      
      // Symbol fades out after 1 second
      setTimeout(() => {
        setActiveSymbol(null);
      }, 1000);
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80px] bg-[#040705] overflow-hidden flex items-center border-t border-[#00E676]/10 cursor-default">
      
      {/* Fade edges to blend smoothly */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040705] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040705] to-transparent z-20 pointer-events-none" />

      {/* Floating Symbol - exactly one at a time */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence>
          {activeSymbol && (
            <motion.div
              key={activeSymbol.id}
              initial={{ opacity: 0, y: 35, scale: 0.9 }}
              animate={{ opacity: 1, y: 15, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ left: `calc((100% / 2000) * ${activeSymbol.x})`, top: 0, position: "absolute", transform: "translateX(-50%)" }}
              className="font-mono text-xs md:text-sm font-bold text-[#6EFFB5] tracking-widest whitespace-nowrap drop-shadow-[0_0_8px_rgba(110,255,181,0.5)]"
            >
              {activeSymbol.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 2000 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="packet-slow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00E676" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00FF99" />
          </linearGradient>
          
          <linearGradient id="packet-fast" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="80%" stopColor="#00E676" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#00FF99" />
            <stop offset="80%" stopColor="#6EFFB5" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <filter id="glow-heavy">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Static Line (very dim) */}
        <path d="M 0 40 L 2000 40" stroke="#00E676" strokeWidth="2" opacity="0.15" fill="none" vectorEffect="non-scaling-stroke" />

        {/* Git Workflow Branches (Hidden by default, animate on pulse) */}
        <g stroke="#00E676" strokeWidth="2" fill="none" opacity="0.6" vectorEffect="non-scaling-stroke">
          {NODES.map((x, i) => {
            // Alternate branches above and below
            const isAbove = i % 2 === 0;
            const yOffset = isAbove ? -15 : 15;
            // Subtle branch path that grows and merges
            const d = `M ${x - 60} 40 C ${x - 30} 40, ${x - 40} ${40 + yOffset}, ${x} ${40 + yOffset} C ${x + 40} ${40 + yOffset}, ${x + 30} 40, ${x + 60} 40`;
            
            return (
              <motion.path
                key={`branch-${i}-${pulseKey}`}
                d={d}
                pathLength="1"
                strokeDasharray="1"
                initial={{ strokeDashoffset: 1, opacity: 0 }}
                animate={{ 
                  strokeDashoffset: [-1, 0, 1], // draw out, pause briefly, erase
                  opacity: [0, 0.8, 0.8, 0] 
                }}
                transition={{ 
                  duration: 2.5, 
                  times: [0, 0.4, 0.6, 1],
                  ease: "easeInOut",
                  delay: (x / 2000) * 1.5 // Cascading left to right
                }}
              />
            );
          })}
        </g>

        {/* Static Nodes Frame */}
        <g fill="#040705" stroke="#00E676" strokeWidth="2" vectorEffect="non-scaling-stroke">
          {NODES.map((x, i) => (
            <circle key={`node-bg-${i}`} cx={x} cy={40} r="3" opacity="0.2" />
          ))}
        </g>

        {/* Node Pulses triggered randomly/simulating packet hits */}
        {NODES.map((x, i) => {
          // Sync with the packets crossing the 2000px line
          const delay1 = (x / 2000) * 6; // Packet 1 (6s total)
          const delay2 = (x / 2000) * 4 + 1; // Packet 2 (4s total, 1s offset)
          
          return (
            <g key={`node-pulse-${i}`}>
              {/* Pulse for slow packet */}
              <motion.circle
                cx={x}
                cy={40}
                r="3"
                fill="rgba(0,255,140,0.8)"
                stroke="#6EFFB5"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                animate={{ opacity: [0, 1, 0], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: delay1, ease: "easeOut" }}
              />
              {/* Pulse for fast packet */}
              <motion.circle
                cx={x}
                cy={40}
                r="3"
                fill="#ffffff"
                stroke="#00FF99"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
                animate={{ opacity: [0, 1, 0], scale: [1, 1.4, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: delay2, ease: "easeOut" }}
              />
            </g>
          );
        })}

        {/* Animated Data Packets */}
        <g fill="none" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke">
          {/* Slow Background Packet */}
          <motion.path
            d="M 0 40 L 2000 40"
            stroke="url(#packet-slow)"
            strokeDasharray="200 2000"
            animate={{ strokeDashoffset: [2200, -200] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          {/* Faster Foreground Packet */}
          <motion.path
            d="M 0 40 L 2000 40"
            stroke="url(#packet-fast)"
            strokeDasharray="100 2500"
            animate={{ strokeDashoffset: [2600, -100] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
          />
        </g>

        {/* Strong Compile Pulse Effect */}
        <motion.path
          key={`compile-${pulseKey}`}
          d="M 0 40 L 2000 40"
          fill="none"
          stroke="url(#pulse-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="400 3000"
          initial={{ strokeDashoffset: 2400, opacity: 0 }}
          animate={{ strokeDashoffset: [-400], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, ease: "linear" }}
          style={{ filter: "url(#glow-heavy)" }}
        />
      </svg>
    </div>
  );
}
