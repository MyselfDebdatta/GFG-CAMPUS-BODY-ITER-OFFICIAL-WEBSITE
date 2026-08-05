import { ACHIEVEMENTS } from "@/lib/site-data";
import { motion } from "framer-motion";

export function AchievementWall() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[700px] md:h-[820px] rounded-3xl border border-white/10 bg-black/40 overflow-hidden shadow-inner">
      {/* Background grid texture to look like a plotting board */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#00ff7f 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* On mobile, we use a simpler scrollable stack since scattering is messy on small screens. On md+, we scatter. */}
        <div className="hidden md:block absolute inset-0">
          {ACHIEVEMENTS.map((achievement, i) => {
            // Distribute across the canvas roughly based on index to avoid total stacking
            const row = Math.floor(i / 3);
            const col = i % 3;
            
            const baseX = col * 33 + 8; // 8%, 41%, 74%
            const baseY = row * 45 + 16; // 16%, 61%
            
            return (
              <motion.div
                key={achievement.id}
                drag
                dragConstraints={{ left: -300, right: 300, top: -100, bottom: 200 }}
                dragElastic={0.1}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                whileDrag={{ scale: 1.1, zIndex: 40, cursor: "grabbing" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: achievement.rotation,
                  left: `calc(${baseX}% + ${achievement.x}px)`,
                  top: `calc(${baseY}% + ${achievement.y}px)`,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: i * 0.1 
                }}
                className="absolute w-[290px] p-4 rounded-sm border border-[#00ff7f]/30 bg-[#020b06]/85 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-grab origin-center"
                style={{ zIndex: i }}
              >
                {/* Tape / Pin visual (top center) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Glowing Pin Head */}
                  <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)] z-10 border-2 border-red-300" />
                  {/* Pin Needle */}
                  <div className="w-1 h-3 bg-gray-400 drop-shadow-md" />
                </div>
                
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#00ff7f] mb-2 flex justify-between border-b border-[#00ff7f]/20 pb-1.5">
                  <span>{achievement.category}</span>
                  <span className="text-white/60">{achievement.year}</span>
                </div>

                {/* Photo Placeholder */}
                {achievement.image && (
                  <div className="relative mb-2.5 h-32 w-full overflow-hidden rounded-md border border-white/10 bg-black/40">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <h3 className="text-lg font-bold text-white mb-1 leading-tight drop-shadow-md">
                  {achievement.title}
                </h3>
                
                <p className="text-xs text-white/70 font-medium line-clamp-3">
                  {achievement.description}
                </p>
                
                {/* Subtle map-like texture overlay on the card */}
                <div className="pointer-events-none absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Simple stacked cards (scrollable) */}
        <div className="md:hidden flex flex-col gap-8 w-full max-w-sm h-full overflow-y-auto py-8 px-4 scrollbar-hide relative z-10">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative w-full p-4 rounded-sm border border-[#00ff7f]/30 bg-[#020b06]/90 backdrop-blur-md shadow-xl"
            >
              {/* Pin visual */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)] z-10 border-2 border-red-300" />
                <div className="w-1 h-3 bg-gray-400" />
              </div>
              
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#00ff7f] mb-2 flex justify-between border-b border-[#00ff7f]/20 pb-1.5">
                <span>{achievement.category}</span>
                <span className="text-white/60">{achievement.year}</span>
              </div>

              {/* Photo Placeholder */}
              {achievement.image && (
                <div className="relative mb-2.5 h-36 w-full overflow-hidden rounded-md border border-white/10 bg-black/40">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                {achievement.title}
              </h3>
              
              <p className="text-xs text-white/70">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
