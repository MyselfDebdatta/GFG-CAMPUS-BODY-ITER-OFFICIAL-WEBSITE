import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { CONTRIBUTORS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ContributorsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CONTRIBUTORS.length);
    }, 4000); // cycle every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[450px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        {CONTRIBUTORS.map((contributor, index) => {
          // Calculate offset relative to active index
          // We want it to wrap around to create an infinite effect
          let offset = index - activeIndex;
          
          // Handle wrapping for infinite carousel illusion
          const half = Math.floor(CONTRIBUTORS.length / 2);
          if (offset > half) offset -= CONTRIBUTORS.length;
          if (offset < -half) offset += CONTRIBUTORS.length;
          
          const isActive = offset === 0;
          // Show 2 items on the left and 2 on the right
          const isVisible = Math.abs(offset) <= 2; 

          if (!isVisible) return null;

          // Compute horizontal position dynamically
          // Use percentage so it's responsive (card width + gap)
          const xPos = `calc(${offset * 100}% + ${offset * 24}px)`;

          return (
            <motion.div
              key={contributor.id}
              initial={{ opacity: 0, scale: 0.8, x: xPos }}
              animate={{ 
                opacity: isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.4),
                scale: isActive ? 1 : 1 - Math.abs(offset) * 0.15,
                x: xPos,
                zIndex: 10 - Math.abs(offset)
              }}
              exit={{ opacity: 0, scale: 0.8, x: xPos }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "absolute w-[280px] sm:w-[320px] rounded-3xl border bg-[#020b06]/90 p-8 backdrop-blur-md transition-colors duration-500",
                isActive ? "border-[#00ff7f]/40 shadow-[0_0_40px_rgba(0,255,127,0.15)]" : "border-white/10"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <div className={cn(
                  "relative mb-5 h-24 w-24 overflow-hidden rounded-full border-2 transition-all duration-500",
                  isActive ? "border-[#00ff7f] shadow-[0_0_20px_rgba(0,255,127,0.3)]" : "border-white/10"
                )}>
                  <img
                    src={contributor.photo}
                    alt={contributor.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <h3 className={cn(
                  "text-xl font-bold transition-colors duration-500",
                  isActive ? "text-white" : "text-white/60"
                )}>
                  {contributor.name}
                </h3>
                
                <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-[#00ff7f]/80">
                  {contributor.role}
                </p>
                
                <p className={cn(
                  "mt-4 text-sm leading-relaxed transition-colors duration-500 line-clamp-3",
                  isActive ? "text-white/80" : "text-white/40"
                )}>
                  {contributor.achievement}
                </p>
                
                <div className="mt-8 flex gap-3">
                  {contributor.linkedin && (
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-full border transition-all duration-300",
                        isActive 
                          ? "bg-white/5 border-white/20 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]" 
                          : "bg-transparent border-white/10 text-white/40 hover:text-white hover:border-white/30"
                      )}
                      aria-label={`${contributor.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {contributor.github && (
                    <a
                      href={contributor.github}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "grid h-10 w-10 place-items-center rounded-full border transition-all duration-300",
                        isActive 
                          ? "bg-white/5 border-white/20 text-white hover:bg-white hover:text-black hover:border-white" 
                          : "bg-transparent border-white/10 text-white/40 hover:text-white hover:border-white/30"
                      )}
                      aria-label={`${contributor.name}'s GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
