import { motion } from "framer-motion";

const snippets = [
  '<HelloWorld />',
  'printf("GFG");',
  'System.out.println("ITER");',
  'def is_geek():',
  'console.log("Code");',
  'cout << "Geeks";',
  'print("GFG ITER")',
  'while(coding) { build(); }',
  'npm run dev',
  'git commit -m "build"',
  'SELECT * FROM geeks',
  '<h1>GFG ITER</h1>',
  'import { GFG } from "@iter/geeks";',
  'docker build -t gfg-iter .',
  'func main() { fmt.Println("Geeks") }',
  'try { code() } catch (bugs) { fix() }'
];

// Duplicate multiple times to ensure it covers ultra-wide screens
const singleBlock = snippets.join("      ");
const TICKER_CONTENT = `${singleBlock}      ${singleBlock}      ${singleBlock}`;

export function CodeFooterStream() {
  return (
    <div className="relative w-full h-[50px] bg-[#060D09] overflow-hidden flex items-center border-t border-[#00FF66]/20 shadow-[inset_0_0_20px_rgba(0,255,102,0.05)]">
      {/* Subtle bloom/glow effect */}
      <div className="absolute inset-0 bg-[#00FF66]/5 blur-3xl pointer-events-none" />
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#060D09] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#060D09] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap font-mono text-xs md:text-sm font-bold text-[#00ff7f]/40 tracking-wider"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        {/* We render exactly two identical blocks so translating by -50% creates a perfect infinite loop */}
        <div className="flex px-4">{TICKER_CONTENT}</div>
        <div className="flex px-4">{TICKER_CONTENT}</div>
      </motion.div>
    </div>
  );
}

