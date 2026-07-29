import { motion } from "framer-motion";

export function InnerPageBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020b06]">
      {/* Soft green light bloom (top right) */}
      <motion.div
        className="absolute -top-[30%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#00FF66]/[0.06] blur-[120px] mix-blend-screen"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle mesh gradient / bloom (bottom left) */}
      <motion.div
        className="absolute -bottom-[20%] -left-[20%] w-[70vw] h-[70vw] rounded-full bg-[#32CD32]/[0.04] blur-[150px] mix-blend-screen"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Center ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[80vw] h-[40vh] bg-[#00ff7f]/[0.03] blur-[120px] rounded-full"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Faint grid texture - 5-10% opacity, fading out at the edges */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#00ff7f0a_1px,transparent_1px),linear-gradient(to_bottom,#00ff7f0a_1px,transparent_1px)] bg-[size:3rem_3rem]"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 80%)",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 20%, transparent 80%)"
        }}
      />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Smooth vignette around the edges to focus content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020b06_100%)] opacity-80" />
    </div>
  );
}
