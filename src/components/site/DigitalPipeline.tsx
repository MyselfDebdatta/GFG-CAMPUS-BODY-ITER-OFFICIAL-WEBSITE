import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROGRAMMING_SYMBOLS = ["</>", "{ }", "( )", "[ ]", "< />", "=>", "const", "function", "class"];

export function DigitalPipeline() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSymbols, setActiveSymbols] = useState<{ id: string; symbol: string; x: number; y: number }[]>([]);

  // Spawn random programming symbols occasionally
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const spawnSymbol = () => {
      const id = Math.random().toString(36).substr(2, 9);
      const symbol = PROGRAMMING_SYMBOLS[Math.floor(Math.random() * PROGRAMMING_SYMBOLS.length)];
      
      // Random position (x: 5% to 95%, y: above or below the line)
      const x = 5 + Math.random() * 90;
      const isAbove = Math.random() > 0.5;
      const y = isAbove ? 10 + Math.random() * 15 : 60 + Math.random() * 15;

      setActiveSymbols(prev => {
        // Keep max 2 symbols
        const newSymbols = [...prev, { id, symbol, x, y }];
        if (newSymbols.length > 2) {
          return newSymbols.slice(newSymbols.length - 2);
        }
        return newSymbols;
      });

      // Remove after 3-5 seconds
      setTimeout(() => {
        setActiveSymbols(prev => prev.filter(s => s.id !== id));
      }, 3000 + Math.random() * 2000);

      // Schedule next spawn (faster if hovered)
      const nextSpawnDelay = isHovered ? 800 + Math.random() * 1000 : 2000 + Math.random() * 3000;
      timeoutId = setTimeout(spawnSymbol, nextSpawnDelay);
    };

    timeoutId = setTimeout(spawnSymbol, 1000);
    return () => clearTimeout(timeoutId);
  }, [isHovered]);

  const [pulseKey, setPulseKey] = useState(0);

  // Trigger occasional compile pulse
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const triggerPulse = () => {
      setPulseKey(prev => prev + 1);
      const nextDelay = isHovered ? 3000 : 8000 + Math.random() * 5000;
      timeoutId = setTimeout(triggerPulse, nextDelay);
    };

    timeoutId = setTimeout(triggerPulse, 5000);
    return () => clearTimeout(timeoutId);
  }, [isHovered]);

  return (
    <div 
      className="relative w-full h-[80px] bg-[#040705] overflow-hidden flex items-center border-t border-[#00E676]/10 cursor-default"
      onMouseEnter={() => {
        setIsHovered(true);
        setPulseKey(prev => prev + 1); // Immediate pulse on hover
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background bloom */}
      <div className="absolute inset-0 bg-[#00E676]/[0.02] blur-3xl pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040705] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040705] to-transparent z-20 pointer-events-none" />

      {/* Floating Symbols */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {activeSymbols.map((sym) => (
            <motion.div
              key={sym.id}
              initial={{ opacity: 0, y: sym.y + 10 }}
              animate={{ opacity: isHovered ? 0.8 : 0.4, y: sym.y }}
              exit={{ opacity: 0, y: sym.y - 10 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ left: `${sym.x}%`, top: 0 }}
              className="absolute font-mono text-xs md:text-sm font-bold text-[#6EFFB5] tracking-widest whitespace-nowrap"
            >
              {sym.symbol}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 2000 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="packet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="80%" stopColor="#00FF99" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#6EFFB5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Base Lines */}
        <g stroke="#00E676" strokeWidth="1" opacity="0.15" fill="none" vectorEffect="non-scaling-stroke">
          <path d="M 0 40 L 2000 40" />
          
          {/* Git Branches / PCB Traces */}
          <path d="M 300 40 L 320 25 L 450 25 L 470 40" />
          <path d="M 800 40 L 830 55 L 950 55 L 980 40" />
          <path d="M 1400 40 L 1420 20 L 1500 20 L 1520 40" />
          <path d="M 1700 40 L 1730 60 L 1800 60 L 1830 40" />
        </g>

        {/* Nodes */}
        <g fill="rgba(0,255,140,0.35)" stroke="#00E676" strokeWidth="1" vectorEffect="non-scaling-stroke">
          {[300, 320, 450, 470, 800, 830, 950, 980, 1400, 1420, 1500, 1520, 1700, 1730, 1800, 1830].map((x, i) => {
            const isBranchNode = [320, 450, 1420, 1500].includes(x);
            const isBottomNode = [830, 950, 1730, 1800].includes(x);
            const cy = isBranchNode ? 25 : isBottomNode ? 60 : 40;
            return (
              <motion.circle
                key={`node-${i}`}
                cx={x}
                cy={cy}
                r="3"
                animate={{
                  opacity: [0.3, isHovered ? 0.9 : 0.6, 0.3],
                  scale: [1, isHovered ? 1.3 : 1.1, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </g>

        {/* Animated Data Packets */}
        <g fill="none" stroke="url(#packet-gradient)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke">
          {/* Main line packets */}
          <motion.path
            d="M 0 40 L 2000 40"
            strokeDasharray="100 2500"
            animate={{ strokeDashoffset: [2600, -100] }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 3 : 5,
              ease: "linear",
            }}
          />
          <motion.path
            d="M 0 40 L 2000 40"
            strokeDasharray="50 3000"
            animate={{ strokeDashoffset: [3100, -100] }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 4 : 7,
              ease: "linear",
              delay: 1.5,
            }}
          />
          
          {/* Branch packets */}
          <motion.path
            d="M 300 40 L 320 25 L 450 25 L 470 40"
            strokeDasharray="40 1000"
            animate={{ strokeDashoffset: [1040, -40] }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 2.5 : 4,
              ease: "linear",
              delay: 0.5,
            }}
          />
          <motion.path
            d="M 800 40 L 830 55 L 950 55 L 980 40"
            strokeDasharray="30 800"
            animate={{ strokeDashoffset: [830, -30] }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 2 : 3,
              ease: "linear",
              delay: 2,
            }}
          />
          <motion.path
            d="M 1400 40 L 1420 20 L 1500 20 L 1520 40"
            strokeDasharray="40 1200"
            animate={{ strokeDashoffset: [1240, -40] }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 3 : 4.5,
              ease: "linear",
              delay: 1,
            }}
          />
        </g>

        {/* Compile Pulse Effect */}
        <motion.path
          key={pulseKey}
          d="M 0 40 L 2000 40"
          fill="none"
          stroke="url(#pulse-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="400 3000"
          initial={{ strokeDashoffset: 3400, opacity: 0 }}
          animate={{ strokeDashoffset: -400, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ filter: "url(#glow)" }}
        />
      </svg>
    </div>
  );
}

