import { useEffect, useState } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";

export function DigitalPipeline() {
  const [scope, animate] = useAnimate();
  const [activeText, setActiveText] = useState<{ text: string; x: number } | null>(null);

  useEffect(() => {
    let isActive = true;

    // Constants for packets
    const MAIN_PACKET_LEN = 80;
    const BRANCH_PACKET_LEN = 15;
    
    // Offset helpers to position the *head* of the packet exactly at targetX
    const getMainOffset = (x: number) => -(x - MAIN_PACKET_LEN);
    const getBranchOffset = (x: number) => -(x - BRANCH_PACKET_LEN);

    const getRandomText = (options: string[]) => options[Math.floor(Math.random() * options.length)];

    const pulseNode = (id: string, text: string, x: number) => {
      if (!isActive) return;
      
      // Flash node
      animate(`#node-${id}`, { 
        scale: [1, 1.8, 1], 
        opacity: [0.2, 1, 0.4],
        stroke: ["#00E676", "#ffffff", "#00E676"],
        fill: ["#040705", "rgba(0,255,153,0.8)", "#040705"]
      }, { duration: 0.6, ease: "easeOut" });
      
      setActiveText({ text, x });
    };

    const hideText = () => setActiveText(null);

    const runSystem = async () => {
      while (isActive) {
        // --- 0. RESET STATE ---
        await Promise.all([
          animate(".main-packet", { strokeDashoffset: getMainOffset(0), opacity: 0 }, { duration: 0 }),
          animate(".branch-packet", { strokeDashoffset: getBranchOffset(0), opacity: 0 }, { duration: 0 }),
          animate(".branch-path", { strokeDashoffset: 100, opacity: 0 }, { duration: 0 }),
          animate(".node", { scale: 1, opacity: 0.2, stroke: "#00E676", fill: "#040705" }, { duration: 0 }),
          animate(".pipeline-main", { opacity: 0.15, filter: "brightness(1)" }, { duration: 0 })
        ]);
        
        hideText();
        await new Promise(r => setTimeout(r, 1500));
        if (!isActive) break;

        const SPEED = 500; // pixels per second

        // Fade in packet at start
        animate(".main-packet", { opacity: 1 }, { duration: 0.2 });

        // --- 1. COMMIT (x=200) ---
        await animate(".main-packet", { strokeDashoffset: getMainOffset(200) }, { duration: 200 / SPEED, ease: "linear" });
        pulseNode("200", getRandomText(["import", "const", "async", "function"]), 200);
        await new Promise(r => setTimeout(r, 800));
        hideText();

        // --- 2. BRANCH SPLIT (x=500) ---
        await animate(".main-packet", { strokeDashoffset: getMainOffset(500) }, { duration: 300 / SPEED, ease: "linear" });
        pulseNode("500", getRandomText(["branch", "checkout", "pull", "class"]), 500);
        
        // Draw branch path 1
        animate("#branch-path-1", { opacity: 0.4 }, { duration: 0 });
        await animate("#branch-path-1", { strokeDashoffset: 0 }, { duration: 0.4, ease: "easeOut" });
        hideText();
        
        // --- 3. PARALLEL TRAVEL TO MERGE (x=900) ---
        animate("#branch-packet-1", { opacity: 1 }, { duration: 0.1 });
        await Promise.all([
          animate(".main-packet", { strokeDashoffset: getMainOffset(900) }, { duration: 400 / SPEED, ease: "linear" }),
          animate("#branch-packet-1", { strokeDashoffset: getBranchOffset(100) }, { duration: 400 / SPEED, ease: "linear" })
        ]);

        // --- 4. MERGE (x=900) ---
        animate("#branch-packet-1", { opacity: 0 }, { duration: 0.1 });
        animate("#branch-path-1", { strokeDashoffset: -100 }, { duration: 0.4, ease: "easeIn" });
        
        pulseNode("900", getRandomText(["merge", "commit", "=>", "{}"]), 900);
        await new Promise(r => setTimeout(r, 800));
        hideText();

        // --- 5. BUILD (x=1200) ---
        await animate(".main-packet", { strokeDashoffset: getMainOffset(1200) }, { duration: 300 / SPEED, ease: "linear" });
        pulseNode("1200", getRandomText(["build", "compile", "</>", "[]"]), 1200);
        await new Promise(r => setTimeout(r, 800));
        hideText();

        // --- 6. TEST SPLIT (x=1400) ---
        await animate(".main-packet", { strokeDashoffset: getMainOffset(1400) }, { duration: 200 / SPEED, ease: "linear" });
        pulseNode("1400", getRandomText(["test", "lint", "()", "<>"]), 1400);
        
        // Draw branch path 2
        animate("#branch-path-2", { opacity: 0.4 }, { duration: 0 });
        await animate("#branch-path-2", { strokeDashoffset: 0 }, { duration: 0.4, ease: "easeOut" });
        hideText();

        // --- 7. PARALLEL TRAVEL TO DEPLOY (x=1700) ---
        animate("#branch-packet-2", { opacity: 1 }, { duration: 0.1 });
        await Promise.all([
          animate(".main-packet", { strokeDashoffset: getMainOffset(1700) }, { duration: 300 / SPEED, ease: "linear" }),
          animate("#branch-packet-2", { strokeDashoffset: getBranchOffset(100) }, { duration: 300 / SPEED, ease: "linear" })
        ]);

        // --- 8. DEPLOY / COMPILATION SUCCESS (x=1700) ---
        animate("#branch-packet-2", { opacity: 0 }, { duration: 0.1 });
        animate("#branch-path-2", { strokeDashoffset: -100 }, { duration: 0.4, ease: "easeIn" });
        
        pulseNode("1700", getRandomText(["deploy", "push", "release"]), 1700);
        
        // Global Success Glow
        animate(".pipeline-main", { 
          opacity: [0.15, 0.8, 0.15], 
          filter: ["brightness(1)", "brightness(2)", "brightness(1)"] 
        }, { duration: 1.5, ease: "easeInOut" });
        
        await new Promise(r => setTimeout(r, 1000));
        hideText();

        // --- 9. FINISH ---
        await animate(".main-packet", { strokeDashoffset: getMainOffset(2100) }, { duration: 400 / SPEED, ease: "linear" });
        
        // Cooldown before next loop
        await new Promise(r => setTimeout(r, 2000));
      }
    };

    runSystem();
    return () => { isActive = false; };
  }, [animate]);

  return (
    <div ref={scope} className="relative w-full h-[80px] bg-[#040705] overflow-hidden flex items-center border-t border-[#00E676]/10 cursor-default select-none">
      
      {/* Background bloom */}
      <div className="absolute inset-0 bg-[#00E676]/[0.02] blur-3xl pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#040705] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#040705] to-transparent z-20 pointer-events-none" />

      {/* Dynamic Keyword Label */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          {activeText && (
            <motion.div
              key={activeText.text}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute font-mono text-xs md:text-sm font-bold text-[#00FF99] tracking-widest whitespace-nowrap drop-shadow-[0_0_6px_rgba(0,255,153,0.8)]"
              style={{ 
                left: `calc((100% / 2000) * ${activeText.x})`, 
                bottom: "55%", 
                transform: "translateX(-50%)" 
              }}
            >
              {activeText.text}
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
          <linearGradient id="packet-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00E676" stopOpacity="0.4" />
            <stop offset="90%" stopColor="#00FF99" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          
          <filter id="glow-light">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 1. Main Static Line */}
        <path 
          className="pipeline-main" 
          d="M 0 40 L 2000 40" 
          stroke="#00E676" 
          strokeWidth="2" 
          opacity="0.15" 
          fill="none" 
          vectorEffect="non-scaling-stroke" 
        />

        {/* 2. Hidden Branches (Drawn via useAnimate) */}
        <g stroke="#00E676" strokeWidth="2" opacity="0" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="100" strokeDashoffset="100">
          {/* Branch 1: 500 -> 900 (Upper) */}
          <path id="branch-path-1" className="branch-path" d="M 500 40 C 530 40, 540 16, 570 16 L 830 16 C 860 16, 870 40, 900 40" pathLength="100" />
          {/* Branch 2: 1400 -> 1700 (Lower) */}
          <path id="branch-path-2" className="branch-path" d="M 1400 40 C 1430 40, 1440 64, 1470 64 L 1630 64 C 1660 64, 1670 40, 1700 40" pathLength="100" />
        </g>

        {/* 3. Static Nodes */}
        {[200, 500, 900, 1200, 1400, 1700].map(x => (
          <circle 
            key={x} 
            id={`node-${x}`} 
            className="node" 
            cx={x} 
            cy={40} 
            r="4" 
            fill="#040705" 
            stroke="#00E676" 
            strokeWidth="2" 
            opacity="0.2" 
            vectorEffect="non-scaling-stroke" 
          />
        ))}

        {/* 4. Packets */}
        <g fill="none" stroke="url(#packet-grad)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ filter: "url(#glow-light)" }}>
          {/* Main Packet */}
          <path 
            className="main-packet" 
            d="M 0 40 L 2000 40" 
            pathLength="2000" 
            strokeDasharray="80 2000" 
            strokeDashoffset="2000" 
          />
          
          {/* Branch Packets */}
          <path 
            id="branch-packet-1" 
            className="branch-packet" 
            d="M 500 40 C 530 40, 540 16, 570 16 L 830 16 C 860 16, 870 40, 900 40" 
            pathLength="100" 
            strokeDasharray="15 100" 
            strokeDashoffset="100" 
          />
          <path 
            id="branch-packet-2" 
            className="branch-packet" 
            d="M 1400 40 C 1430 40, 1440 64, 1470 64 L 1630 64 C 1660 64, 1670 40, 1700 40" 
            pathLength="100" 
            strokeDasharray="15 100" 
            strokeDashoffset="100" 
          />
        </g>
      </svg>
    </div>
  );
}
