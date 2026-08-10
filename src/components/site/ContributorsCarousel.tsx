import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { CONTRIBUTORS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

// Helper to extract initials from full name
function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function ContributorsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play cycle every 3 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CONTRIBUTORS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // When user manually clicks controls, pause and auto-resume after 4s
  const resetInteractionTimer = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + CONTRIBUTORS.length) % CONTRIBUTORS.length);
    resetInteractionTimer();
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % CONTRIBUTORS.length);
    resetInteractionTimer();
  };

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-between min-h-[500px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        setIsPaused(false);
      }}
    >
      {/* Cards Display Stage */}
      <div className="relative w-full h-[410px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          {CONTRIBUTORS.map((lead, index) => {
            // Calculate offset relative to active index
            let offset = index - activeIndex;
            
            // Handle wrapping for infinite carousel illusion
            const half = Math.floor(CONTRIBUTORS.length / 2);
            if (offset > half) offset -= CONTRIBUTORS.length;
            if (offset < -half) offset += CONTRIBUTORS.length;
            
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2; 

            if (!isVisible) return null;

            const xPos = `calc(${offset * 100}% + ${offset * 24}px)`;

            return (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, scale: 0.8, x: xPos }}
                animate={{ 
                  opacity: isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.45),
                  scale: isActive ? 1 : 1 - Math.abs(offset) * 0.15,
                  x: xPos,
                  zIndex: 10 - Math.abs(offset)
                }}
                exit={{ opacity: 0, scale: 0.8, x: xPos }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className={cn(
                  "absolute w-[290px] sm:w-[350px] rounded-3xl border bg-[#040e08]/95 p-6 sm:p-7 backdrop-blur-xl transition-colors duration-500 shadow-2xl flex flex-col justify-between h-[390px]",
                  isActive 
                    ? "border-[#00ff7f]/50 shadow-[0_0_50px_rgba(0,255,127,0.2)] bg-[#06180d]" 
                    : "border-white/10 opacity-60"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Styled Initials Circle Badge (No Stock Photos) */}
                  <div className={cn(
                    "relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-500 bg-gradient-to-br from-[#00ff7f]/20 via-[#00ff7f]/10 to-transparent text-[#00ff7f] font-black text-2xl tracking-wider select-none",
                    isActive 
                      ? "border-[#00ff7f] shadow-[0_0_25px_rgba(0,255,127,0.35)] scale-105" 
                      : "border-white/15 text-white/50"
                  )}>
                    {getInitials(lead.name)}
                  </div>
                  
                  {/* Role Tag Pill */}
                  <span className="inline-block rounded-full border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-3 py-0.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#00ff7f] shadow-sm mb-2">
                    {lead.role}
                  </span>

                  {/* Name */}
                  <h3 className={cn(
                    "text-lg sm:text-xl font-black tracking-tight transition-colors duration-500 line-clamp-1",
                    isActive ? "text-white hover-gradient-text" : "text-white/70"
                  )}>
                    {lead.name}
                  </h3>
                  
                  {/* Role Quote */}
                  <p className={cn(
                    "mt-2 text-xs sm:text-sm leading-relaxed transition-colors duration-500 line-clamp-3 font-medium italic",
                    isActive ? "text-white/80" : "text-white/40"
                  )}>
                    {lead.achievement}
                  </p>
                </div>

                {/* Social Options: GitHub, LinkedIn, Email */}
                <div className="mt-4 flex items-center justify-center gap-3 pt-4 border-t border-white/10">
                  {lead.github && (
                    <a
                      href={lead.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 shadow-md"
                      aria-label={`${lead.name}'s GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {lead.linkedin && (
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:scale-110 active:scale-95 shadow-md"
                      aria-label={`${lead.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {lead.email && (
                    <a
                      href={`mailto:${lead.email}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 shadow-md"
                      aria-label={`Email ${lead.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons Placed Clearly Below Cards */}
      <div className="mt-8 flex items-center justify-center gap-5 z-50">
        <button 
          onClick={handlePrev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#020b06]/90 text-white backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-black hover:border-[#00ff7f] hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] active:scale-95 shadow-lg"
          aria-label="Previous lead profile"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button 
          onClick={handleNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#020b06]/90 text-white backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-black hover:border-[#00ff7f] hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] active:scale-95 shadow-lg"
          aria-label="Next lead profile"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
