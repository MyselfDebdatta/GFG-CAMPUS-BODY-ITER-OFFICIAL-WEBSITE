import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useTransform, animate as motionAnimate } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ExternalLink,
  Sparkles,
  Trophy,
  Users,
  Calendar,
  MapPin,
  Rocket,
  Zap,
  Terminal,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   HELPER — Wraps page content in a realistic printed-paper frame
   ═══════════════════════════════════════════════════════════════════ */

const pg = (isLeft: boolean, pageNum: number, children: ReactNode): ReactNode => (
  <div className="w-full h-full flex flex-col bg-[#F5F3EA] text-[#1A1A1A] overflow-hidden relative select-none">
    {/* Subtle paper texture (SVG noise) */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.25]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />

    {/* Subtle tonal depth (warm vignette) */}
    <div
      className="absolute inset-0 pointer-events-none mix-blend-multiply"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(200, 195, 180, 0.3) 100%)",
      }}
    />

    {/* Inner gutter shadow toward spine */}
    <div
      className={`absolute inset-y-0 w-16 pointer-events-none z-10 mix-blend-multiply ${
        isLeft
          ? "right-0 bg-gradient-to-l from-[#C4C0AE]/60 via-[#E3DFCD]/20 to-transparent"
          : "left-0 bg-gradient-to-r from-[#C4C0AE]/60 via-[#E3DFCD]/20 to-transparent"
      }`}
    />

    {/* Content area */}
    <div className="flex-1 flex flex-col p-5 sm:p-6 md:p-7 relative z-[1] min-h-0 overflow-hidden">
      {children}
    </div>

    {/* Running footer with page number */}
    <div className="mx-5 sm:mx-6 md:mx-7 pb-3 pt-2 flex items-center justify-between text-[10px] text-[#1A1A1A]/50 font-mono relative z-[1] shrink-0 border-t-[3px] border-[#008F4C]">
      {isLeft ? (
        <>
          <span className="tabular-nums font-semibold text-[#008F4C]">
            {String(pageNum).padStart(2, "0")}
          </span>
          <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]/40">
            GeeksforGeeks Campus Body ITER
          </span>
        </>
      ) : (
        <>
          <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]/40">
            Annual Report 2025–26
          </span>
          <span className="tabular-nums font-semibold text-[#008F4C]">
            {String(pageNum).padStart(2, "0")}
          </span>
        </>
      )}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */
const PersonCard = ({ name, role, src }: { name: string, role: string, src?: string }) => (
  <div className="relative rounded-[6px] sm:rounded-[8px] overflow-hidden aspect-[3/4] shadow-sm bg-[#789A5F] border-[0.5px] border-[#008F4C]/20">
    {src ? (
      <img src={src} alt={name} className="w-full h-full object-cover opacity-90 mix-blend-luminosity" />
    ) : (
      <div className="w-full h-full bg-gradient-to-br from-[#87A86E] to-[#688B4F] opacity-90 mix-blend-multiply" />
    )}
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-1.5 flex flex-col justify-end text-center h-[55%]">
      <div className="text-white font-black text-[7.5px] sm:text-[8.5px] leading-none tracking-wide uppercase drop-shadow-md">{name}</div>
      <div className="text-white/90 font-bold text-[5.5px] sm:text-[6.5px] uppercase tracking-widest mt-1 drop-shadow-md">{role}</div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   PAGE CONTENT — 8 pages, all existing content preserved
   ═══════════════════════════════════════════════════════════════════ */

const PAGES: ReactNode[] = [
  /* ─── PAGE 0 (Page 1): COVER — left page ─── */
  <div
    key="p1"
    className="w-full h-full flex flex-col justify-between bg-[#F5F3EA] text-[#1A1A1A] relative overflow-hidden select-none"
  >
    {/* Subtle paper texture (SVG noise) */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.25]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}
    />

    {/* Subtle tonal depth */}
    <div
      className="absolute inset-0 pointer-events-none mix-blend-multiply"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(200, 195, 180, 0.3) 100%)",
      }}
    />

    {/* Gutter shadow (right = toward spine) */}
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#C4C0AE]/60 via-[#E3DFCD]/20 to-transparent pointer-events-none z-10 mix-blend-multiply" />

    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-5 sm:pt-6 md:pt-7 px-5 sm:px-6 md:px-7">
      <div className="flex justify-between items-end mb-2">
        <div className="flex items-center">
          <img src="/Logo_light1.svg" alt="GFG Campus Body ITER" className="h-5 sm:h-6 w-auto object-contain brightness-0" />
        </div>
        <div className="text-right text-[9px] font-bold tracking-widest uppercase text-[#333]">
          ITER, SOA University
        </div>
      </div>
      
      <div className="border-t-[3px] border-[#008F4C] pt-3 pb-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#333] leading-none mb-1">
          Geeks <span className="text-[#008F4C]">For</span> Geeks
        </h1>
        <div className="text-sm sm:text-base font-extrabold tracking-widest text-[#008F4C]">
          2025 – 2026
        </div>
      </div>
      <div className="border-t-[1.5px] border-[#008F4C] mb-[3px]"></div>
      <div className="border-t-[4px] border-[#008F4C] mb-6"></div>

      <div className="flex-1 flex flex-col justify-center items-center pb-6">
        <div className="w-full max-w-[280px] sm:max-w-[340px] aspect-[16/10] overflow-hidden border-[4px] border-[#008F4C] relative mb-6 shadow-lg bg-white">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="GFG ITER Builders"
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111511]/90 via-[#111511]/20 to-transparent flex flex-col justify-end p-4">
            <span className="text-[12px] sm:text-[14px] font-bold text-white mb-0.5 leading-tight tracking-wide">
              ITER Campus Student Chapter
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium text-[#00ff7f]">
              Siksha 'O' Anusandhan
            </span>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-3 text-[10px] sm:text-[11px] font-mono text-[#008F4C] tracking-widest font-bold">
          <span>.CODE</span>
          <span className="text-[#1A1A1A]/30">·</span>
          <span>.CONNECT</span>
          <span className="text-[#1A1A1A]/30">·</span>
          <span>.CONQUER</span>
        </div>
      </div>
      
      {/* Unique Front Page Element */}
      <div className="flex justify-between items-end pb-4">
        <div className="text-[8px] font-mono text-[#1A1A1A]/60 flex flex-col gap-0.5">
          <span className="font-bold tracking-widest text-[#008F4C] uppercase text-[9px]">VOL. 01</span>
          <span className="uppercase tracking-wider">Annual Edition</span>
        </div>
        <div className="flex items-center gap-[2px] opacity-70">
          {/* Barcode-like visual */}
          {[12, 16, 8, 14, 6, 16, 12, 5, 10, 16, 14, 6, 16, 10, 12, 8, 16, 14].map((h, i) => (
            <div key={i} className={`bg-[#333] ${i % 3 === 0 ? 'w-[2px]' : 'w-[1px]'}`} style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between text-[8px] text-[#1A1A1A]/50 font-semibold z-10 border-t-2 border-[#1A1A1A]/10 pt-2 pb-3 px-5 sm:px-6 md:px-7 shrink-0">
      <span>Published by GFG ITER Media Board</span>
      <span>Bhubaneswar, Odisha</span>
    </div>
  </div>,

  /* ─── PAGE 1 (Page 2): TABLE OF CONTENTS — right page ─── */
  pg(false, 2, (
    <>
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        <div className="text-right text-[9px] font-bold tracking-widest uppercase text-[#333] mb-1">
          ITER
        </div>
        <div className="border-t-[3px] border-[#008F4C] pt-1 pb-1 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#333]">
            INDEX
          </h2>
        </div>
        <div className="border-t-[1.5px] border-[#008F4C] mb-[3px]"></div>
        <div className="border-t-[4px] border-[#008F4C] mb-4"></div>

        <div className="flex-1 overflow-y-auto pr-1">
          {[
            { n: "1.", t: "About the Club", d: "Introduction to vision , mission and purpose" },
            { n: "2.", t: "Core Team", d: "Meet the Leads" },
            { n: "3.", t: "CodeUnbound (Club Launch/Reignite)", d: "Kickstarting innovation and coding culture" },
            { n: "4.", t: "Events Conducted", d: "All 7 events details" },
            { n: "5.", t: "Members Achievement", d: "Showcasing Excellence" },
            { n: "6.", t: "Future Vission", d: "Looking Ahead" },
            { n: "7.", t: "Core Team Photo", d: "Core Members team 2025-26" },
          ].map((item) => (
            <div key={item.n} className="pb-1.5 mb-1.5 border-b border-[#008F4C]">
              <div className="flex items-start gap-2">
                <span className="text-[13px] sm:text-[15px] text-[#333] font-serif w-4 shrink-0 text-right mt-0.5">
                  {item.n}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold font-serif text-[13px] sm:text-[15px] text-[#111] leading-tight mb-1">
                    {item.t}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-[#555] font-medium leading-tight">
                    {item.d}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )),

  /* ─── PAGE 2 (Page 3): ABOUT THE CLUB — left page ─── */
  pg(true, 3, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="text-right text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333] mb-0.5">
        ITER
      </div>
      <div className="border-t-[2px] border-[#008F4C] pt-0.5 pb-0.5 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          ABOUT THE CLUB
        </h2>
      </div>
      <div className="border-t-[2px] border-[#008F4C] mb-2 mt-0.5"></div>
      
      {/* Banner Image */}
      <div className="relative w-full h-[60px] sm:h-[70px] mb-3">
        <div className="w-full h-full bg-[#ccc] overflow-hidden">
           <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="ITER Campus" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2.5 left-4 right-4 bg-[#666666] py-1 px-2 text-center text-white z-10 shadow-sm">
          <h3 className="font-bold text-[9px] sm:text-[10px] tracking-wide mb-0.5">GEEKSFORGEEKS CAMPUS BODY ITER:</h3>
          <p className="text-[7.5px] sm:text-[8.5px] font-medium">Building Coders and Creating Impact</p>
        </div>
      </div>

      {/* Two Columns */}
      <div className="flex gap-3 mt-1 flex-1">
        {/* Left Column */}
        <div className="flex-[5.5]">
          <div className="text-[7.5px] sm:text-[8.5px] font-bold uppercase tracking-widest text-[#333] mb-0.5">
            CORE TEAM – GFG ITER CAMPUS BODY
          </div>
          <div className="text-[7.5px] sm:text-[8.5px] font-bold text-[#333] mb-1">
            GFG ITER Campus Body · Tech Community · Student Driven
          </div>
          
          <h3 className="text-[13px] sm:text-[15px] font-bold text-[#111] mb-0.5 leading-none">
            About the Club
          </h3>
          <p className="text-[7.5px] sm:text-[8.5px] text-[#222] font-medium leading-snug mb-1 text-justify">
            The GeeksforGeeks ITER Campus Body is a student-driven tech community committed to fostering innovations, collaborations, and technical excellence among students. Built with the vision of bridging the gap between academic learning and industry demands, the club actively engages students through impactful initiatives.
          </p>
          <p className="text-[7.5px] sm:text-[8.5px] text-[#222] font-medium leading-snug mb-1 text-justify">
            Through sessions, workshops, and interactive events, students gain real-world exposure beyond academics. The club encourages peer learning and leadership.
          </p>
          <p className="text-[7.5px] sm:text-[8.5px] text-[#222] font-medium leading-snug mb-1.5 text-justify">
            With continuous growth and innovation, the community is shaping future developers and problem-solvers.
          </p>

          <h4 className="text-[10px] sm:text-[11px] font-bold text-[#111] mb-0.5">
            What We Do
          </h4>
          <ul className="text-[7.5px] sm:text-[8.5px] text-[#222] font-medium leading-tight space-y-0.5 mb-1.5 pl-1">
            <li>• Coding Contests & DSA Sessions</li>
            <li>• Skills Exchange Workshops</li>
            <li>• Tech Talks & Founder Sessions</li>
            <li>• ChaiLinks – Informal Knowledge Sharing Series</li>
            <li>• Personality Development & Career Guidance</li>
          </ul>

          <h4 className="text-[10px] sm:text-[11px] font-bold text-[#111] mb-0.5">
            Our Impact
          </h4>
          <ul className="text-[7.5px] sm:text-[8.5px] text-[#222] font-medium leading-tight space-y-0.5 mb-0.5 pl-1">
            <li>• Created a strong coding culture on campus</li>
            <li>• Helped students prepare for placements and Internships</li>
            <li>• Encouraged participation in hackathons and open-source</li>
            <li>• Built a supportive peer-learning environment</li>
            <li>• Organized hands-on workshops to enhance practical skills</li>
            <li>• Connected students with industry experts and mentors</li>
          </ul>
        </div>
        
        {/* Right Column */}
        <div className="flex-[4.5] flex flex-col gap-1">
          {/* Green box */}
          <div className="bg-[#008F4C] text-white p-1.5 text-[7.5px] sm:text-[8.5px] font-medium leading-snug text-justify">
            <p className="mb-1">Through sessions, workshops, and interactive events, students gain real-world exposure beyond traditional academics. These initiatives strengthen technical skills while encouraging practical learning. The club promotes peer learning, collaboration, and leadership, creating an environment where students grow together.</p>
            <p>With continuous growth and innovation, the community is shaping future developers and problem-solvers. By bridging the gap between theory and practice, the club helps students build industry-ready skills and prepare for their careers.</p>
          </div>
          
          {/* Square Image Placeholder */}
          <div className="w-full aspect-[4/3] bg-[#ccc] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Event" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
          </div>
          
          {/* Green Pill */}
          <div className="bg-[#008F4C] text-white text-center text-[7.5px] sm:text-[8.5px] font-bold py-0.5 uppercase tracking-wider mt-0.5">
            Core Team / Faculty Coordinator
          </div>
          
          {/* Quote */}
          <p className="text-[7.5px] sm:text-[8.5px] italic text-[#222] leading-snug text-justify font-bold px-1 mt-0.5">
            "Together, we are empowering future developers, encouraging innovation, and building a thriving tech community focused on growth and collaboration."
          </p>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 3 (Page 4): CORE TEAM — right page ─── */
  pg(false, 4, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header aligned perfectly with Page 3 */}
      <div className="text-right text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333] mb-0.5">
        ITER
      </div>
      <div className="border-t-[2px] border-[#008F4C] pt-0.5 pb-0.5 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          MEET OUR CORE
        </h2>
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px]"></div>
        <div className="text-[13px] sm:text-[15px] font-bold text-[#111] text-center pt-1 pb-1 leading-none uppercase tracking-wide">
          LEADS
        </div>
        <div className="border-t-[1px] border-[#008F4C] mb-2"></div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between pb-1">
        {/* Row 1: President & Vice President */}
        <div className="flex justify-center gap-2 px-1">
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="VIVEK RANJAN SAHOO" role="PRESIDENT" />
          </div>
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="SNEHANSU SEKHAR DASH" role="VICE-PRESIDENT" />
          </div>
        </div>
        
        {/* Row 2: Tech Leads */}
        <div className="flex justify-center gap-2 px-1 mt-1">
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="ABHIJIT DASH" role="TECH LEAD" />
          </div>
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="ABHIJIT DASH" role="TECH LEAD" />
          </div>
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="ABHIJIT DASH" role="TECH LEAD" />
          </div>
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="ABHIJIT DASH" role="TECH LEAD" />
          </div>
        </div>
        
        {/* Divider for Team Co-ordinators */}
        <div className="w-full mt-1.5">
          <div className="border-t-[2px] border-[#008F4C]"></div>
          <div className="border-t-[1px] border-[#008F4C] mt-[2px]"></div>
          <div className="text-[13px] sm:text-[15px] font-bold text-[#111] text-center pt-1 pb-1 leading-none uppercase tracking-wide">
            TEAM CO-ORDINATORS
          </div>
          <div className="border-t-[1px] border-[#008F4C] mb-1.5"></div>
        </div>
        
        {/* Row 3: Co-ordinators */}
        <div className="flex justify-center gap-2 px-1">
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="ANUBHAB SAMANTARAY" role="CLUB COORDINATOR" />
          </div>
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="AKANSHA AJAY" role="CLUB COORDINATOR" />
          </div>
          <div className="w-[23%] max-w-[105px]">
            <PersonCard name="AYUSH R. PRADHAN" role="COMMUNITY MENTOR" />
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 4 (Page 5): CODEUNBOUND LAUNCH — left page ─── */
  pg(true, 5, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header aligned perfectly with Page 3/4 */}
      <div className="text-right text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333] mb-0.5">
        ITER
      </div>
      <div className="border-t-[2px] border-[#008F4C] pt-0.5 pb-0.5 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          CODE UNBOUND
        </h2>
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-2.5 mb-2.5 mx-4">
        <div className="text-[13px] sm:text-[15px] font-bold text-[#111] leading-none uppercase tracking-wide">
          THE <span className="text-[#008F4C] font-black">GFG</span> LAUNCH
        </div>
        <div className="absolute left-1/2 -bottom-[8px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          7th November 2025
        </div>
      </div>
      
      {/* Content Area */}
      <div className="relative flex-1">
        {/* Top Image */}
        <div className="w-full h-[150px] sm:h-[180px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" alt="CodeUnbound Launch Event" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
        </div>
        
        {/* Two Columns */}
        <div className="flex gap-3 px-2 mt-3">
          {/* Left Column (Overlaps image via negative margin) */}
          <div className="w-[45%] -mt-[70px] sm:-mt-[90px] relative z-10">
            <div className="bg-[#008F4C] p-1.5 shadow-md">
              <div className="border-[1.5px] border-[#F5F3EA] bg-[#222] aspect-[4/3] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80" alt="Guess the logo" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
              </div>
              <ul className="text-white text-[7px] sm:text-[7.5px] list-disc pl-3.5 mt-2 pr-1 pb-1 space-y-0.5 font-medium leading-[1.4]">
                 <li>During the orientation, the club's vision was clearly articulated:</li>
                 <li>To create a collaborative coding culture at ITER</li>
                 <li>To help students strengthen their problem-solving and DSA skills</li>
                 <li>To prepare members for internships, hackathons, and placements</li>
                 <li>To encourage peer learning, mentorship, and real-world project building</li>
              </ul>
            </div>
          </div>
          
          {/* Right Column (Starts below the image) */}
          <div className="w-[55%] text-[#222] text-[7.5px] sm:text-[8px] font-medium text-justify leading-[1.6] pr-2">
             <p className="mb-2">
               The much-awaited launch of Code Unbound marked the official inauguration of the GeeksforGeeks (GFG) Club – ITER Student Chapter. The event was successfully conducted in the grand auditorium hall of Bansuri Guru, bringing together enthusiastic students passionate about technology, coding, and innovation.
             </p>
             <p>
               The session began with a warm welcome to all attendees, followed by the unveiling of the GFG Club at ITER. The respective leads and core team members were formally introduced, each sharing their journey, technical interests, and vision for building a strong developer community within the campus.
             </p>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 6 — left page ─── */
  pg(true, 6, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="text-right text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333] mb-0.5">
        ITER
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px]"></div>
        <div className="text-[13px] sm:text-[15px] font-bold text-[#111] text-center pt-1 pb-1 leading-none uppercase tracking-wide">
          OVERVIEW
        </div>
        <div className="border-t-[1px] border-[#008F4C] mb-2.5"></div>
      </div>
      
      {/* Three Green Columns */}
      <div className="flex gap-2 px-1 mb-3">
        <div className="flex-1 bg-[#008F4C] p-1 shadow-sm">
           <div className="border-[0.5px] border-white p-1 h-full flex items-center">
             <p className="text-white text-[6px] sm:text-[6.5px] leading-[1.4] text-justify font-medium">
               The session also highlighted upcoming workshops, coding contests, mentorship programs, and collaborative projects planned under the GFG banner. Students were introduced to the benefits of being part of the GeeksforGeeks ecosystem, including access to quality resources, coding practice platforms, and networking opportunities. Students were encouraged to actively participate and enhance their skills.
             </p>
           </div>
        </div>
        <div className="flex-1 bg-[#008F4C] p-1 shadow-sm">
           <div className="border-[0.5px] border-white p-1 h-full flex items-center">
             <p className="text-white text-[6px] sm:text-[6.5px] leading-[1.4] text-justify font-medium">
               To make the event lively and engaging, an interactive Menti Quiz was conducted at the end of the session. The quiz featured simple yet exciting tech-related questions covering programming basics, logical reasoning, and general technical awareness. The activity created a fun, competitive environment where students actively participated using their devices. Top performers were recognized and rewarded, adding excitement and leaving participants with a memorable experience.
             </p>
           </div>
        </div>
        <div className="flex-1 bg-[#008F4C] p-1 shadow-sm">
           <div className="border-[0.5px] border-white p-1 h-full flex items-center">
             <p className="text-white text-[6px] sm:text-[6.5px] leading-[1.4] text-justify font-medium">
               The top performers were recognized and awarded, adding an element of excitement and motivation to the event. The enthusiasm in the hall reflected the strong interest of students in being part of this growing tech community. This concluded on a high note, inspiring students to stay engaged and explore more opportunities within the tech community. It left students motivated to continue learning and growing together.
             </p>
           </div>
        </div>
      </div>
      
      {/* Body Text */}
      <div className="px-2 text-[#222] text-[7.5px] sm:text-[8px] font-medium text-justify leading-[1.6] mb-3">
        <p className="mb-1.5">
          Code Unbound was not just a launch event — it was the beginning of a movement towards technical excellence at ITER. The overwhelming response from students showcased their eagerness to learn, build, and grow together.
        </p>
        <p>
          With a strong leadership team and a clear vision, the GFG Club – ITER Student Chapter is set to empower students with knowledge, skills, and opportunities that go beyond the classroom.
        </p>
      </div>
      
      {/* Bottom Image */}
      <div className="w-full px-5 mb-3 flex justify-center">
        <div className="w-[90%] border-[3px] border-[#008F4C] aspect-[2/1] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" alt="Code Unbound Team" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
        </div>
      </div>
      
      {/* Bottom Text */}
      <div className="text-center px-4 mt-auto pb-2">
        <p className="text-[9px] sm:text-[10px] font-black text-[#111] tracking-wide">
          The journey has just begun — and the code is now truly unbound.
        </p>
      </div>
    </div>
  )),

  /* ─── PAGE 7 — right page ─── */
  pg(false, 7, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EVENT 1.
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          CHAILINKS
        </h2>
        <div className="absolute right-0 top-1 text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EPISODE:00
        </div>
      </div>
      
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-3 mb-3 mx-4">
        <div className="text-[9px] sm:text-[10px] font-bold text-[#111] leading-none uppercase tracking-widest">
          CUP THAT CONNECTS . CONVERSATION THAT MATTERS
        </div>
        <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          6th November 2025
        </div>
      </div>
      
      {/* Overlapping Image Section */}
      <div className="relative flex justify-center mb-1.5 pr-[70px] sm:pr-[90px] pl-2 mt-1">
        <div className="border-[3px] border-[#008F4C] w-full aspect-[2/1] bg-[#222]">
           <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="ChaiLinks Event" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 w-[110px] sm:w-[130px] bg-[#008F4C] p-2 shadow-md">
           <p className="text-white text-[7px] sm:text-[7.5px] text-center font-medium leading-[1.4]">
             ChainLinks Episode 0, organized by the GeeksforGeeks (GFG) Club, introduced a refreshing shift from conventional academic events, creating a space where conversations, curiosity, and connection took centre stage.
           </p>
        </div>
      </div>
      
      {/* Body Text */}
      <div className="px-2 text-[#222] text-[7.5px] sm:text-[8px] font-medium text-justify leading-[1.5] mb-1.5 flex flex-col gap-0.5">
         <p>
           Conceptualized around the idea of an informal Chai Pe Charcha, the event aimed to transform how students engage with faculty members. Instead of structured presentations or formal sessions, ChainLinks Episode 0 offered something far more dynamic — a setting designed for open interaction.
         </p>
         <p>
           The session began with participating faculty members introducing themselves, sharing insights into their respective domains, and briefly discussing their ongoing work and areas of interest. Representing diverse fields such as IoT, AI/ML, Cloud Computing, Networking, and emerging technologies, the introductions provided students with exposure to a broad academic landscape within a single session.
         </p>
      </div>
      
      {/* Section Heading */}
      <div className="px-2 mb-1">
        <h3 className="inline-block text-[9px] sm:text-[10px] font-bold text-[#111] uppercase tracking-wide border-b-[1.5px] border-[#111] pb-[1px]">
          WHAT FOLLOWED DEFINED THE ESSENCE OF THE EVENT.
        </h3>
      </div>
      
      {/* Bottom Text */}
      <div className="px-2 text-[#222] text-[7.5px] sm:text-[8px] font-medium text-justify leading-[1.5] flex flex-col gap-0.5">
         <p>
           The venue was arranged into multiple discussion circles, each associated with a specific technical domain. Faculty members were assigned to these circles, while students were free to join discussions based on their interests. This format immediately shifted the energy of the room — replacing passive listening with active participation.
         </p>
         <p>
           Within each circle, conversations unfolded naturally. Students asked questions, explored concepts, sought academic guidance, and engaged in discussions that extended beyond textbooks. The absence of rigid structure allowed interactions to evolve organically, making the exchanges more candid and meaningful. The discussions ranged across technical topics, project insights, and career-related queries. Students found themselves navigating unfamiliar subjects, clarifying doubts, and gaining perspectives that are rarely accessible in traditional classroom settings. The format encouraged curiosity, allowing participants to engage without hesitation.
         </p>
      </div>
    </div>
  )),

  /* ─── PAGE 8 — left page ─── */
  pg(true, 8, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="text-right text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333] mb-1">
        ITER
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C] mb-2"></div>
      </div>
      
      {/* Top Image */}
      <div className="w-full h-[160px] sm:h-[190px] border-[3px] border-[#008F4C] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="ChaiLinks Event" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-3 px-2 mt-2">
        {/* Left Column */}
        <div className="w-[45%] flex flex-col pt-1">
          <p className="text-[#222] text-[7.5px] sm:text-[8px] font-medium text-justify leading-[1.6] mb-3">
            The experience was defined by its informal and welcoming environment. Tea and refreshments, served during the discussions, subtly enhanced the relaxed atmosphere, making participants feel at ease. ChainLinks Episode 0 was open to all students through a registration-based system, with attendance intentionally limited to ensure meaningful interaction. Despite this, the event attracted strong interest, bringing together students from different academic years who shared a genuine enthusiasm for discussion-driven learning.
          </p>
          <div className="w-full border-[2px] border-[#008F4C] aspect-square overflow-hidden mt-auto">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80" alt="Students engaging" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
        
        {/* Right Column (Green Box overlapping top image) */}
        <div className="w-[55%] -mt-[80px] sm:-mt-[100px] relative z-10">
          <div className="bg-[#008F4C] p-1.5 shadow-md border-[1.5px] border-white ring-[1.5px] ring-[#008F4C] flex flex-col gap-1.5">
            <div className="border-[0.5px] border-white p-1.5">
              <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.5]">
                Beyond academics, the event stood out for the accessibility it created. Students had the rare opportunity to directly engage with faculty members in an approachable setting. This removed the usual barriers, allowing questions to flow more freely and conversations to feel more personal. As a result, learning became a collaborative process rather than a one-sided exchange
              </p>
            </div>
            <div className="border-[0.5px] border-white p-1.5">
              <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.5]">
                The event also encouraged valuable peer interaction. Its circle-based format naturally brought together students with similar interests, creating space for open discussions and idea sharing. In a typical academic environment where networking often feels forced, ChainLinks enabled connections to form organically, fostering a sense of community and collaboration.
              </p>
            </div>
            <div className="border-[0.5px] border-white p-1.5">
              <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.5]">
                Ultimately, ChaiLinks Episode 0 showcased the impact of reimagining traditional engagement formats. By prioritizing conversation over formality and interaction over rigid structure, the event delivered an experience that was both enriching and accessible. Its success set a strong foundation for future editions, aligning with the club's vision of promoting dialogue, curiosity, and meaningful academic connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 9 — right page ─── */
  pg(false, 9, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-1">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EVENT 2.
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-0.5">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          CHAILINKS
        </h2>
        <div className="absolute right-0 top-1 text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EPISODE:01
        </div>
      </div>
      
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-1.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-2 mb-2 mx-4">
        <div className="text-[9px] sm:text-[10px] font-bold text-[#111] leading-none uppercase tracking-widest">
          CUP THAT CONNECTS . CONVERSATION THAT MATTERS
        </div>
        <div className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          3rd December 2025
        </div>
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-3 px-2 mt-1.5">
        {/* Left Column (Green Box) */}
        <div className="w-[45%] bg-[#008F4C] p-1.5 shadow-md h-fit">
          <div className="border-b-[1px] border-white pb-1 mb-1.5">
            <h3 className="text-white text-[12px] sm:text-[14px] font-bold text-center uppercase tracking-wide">Overview</h3>
          </div>
          <div className="flex flex-col gap-1.5 text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.3]">
            <p>
              After the strong foundation laid by Episode 0, ChainLinks Episode 01 didn't just continue the journey — it elevated it. This edition wasn't simply an event; it was a milestone that reflected growth, ambition, and a clear vision for the future With the powerful themes of TinyML and Agentic AI, Episode 01 brought frontier technology into an open, discussion-driven space — making complex ideas accessible, exciting, and actionable.
            </p>
            <div className="border-[0.5px] border-white p-1">
              <p>
                These are not ordinary classroom topics. They represent the next wave of technological transformation — from smart embedded devices to self-operating AI systems. By centering the session around these domains, the GFG Club positioned ChainLinks Episode 01 at the forefront of innovation.
              </p>
            </div>
            <p>
              ChainLinks Episode 01 was not just a continuation of a successful initiative — it was its evolution. After introducing the idea of open, conversation-driven learning in Episode 0, the GeeksforGeeks Club returned with a sharper vision, greater ambition, and a theme that reflected the future of technology itself: TinyML and Agentic AI.
            </p>
            <p>
              From the very beginning, the atmosphere carried a sense of purpose. This was no ordinary academic interaction. It was a space where emerging technologies were not simplified into surface-level discussions, but explored with depth, curiosity, and confidence. TinyML brought attention to the power of running machine learning models on compact, low-energy devices, pushing intelligence to the edge. Agentic AI expanded the horizon further, opening dialogue around autonomous systems capable of reasoning, adapting, and acting independently.
            </p>
            <p>
              As faculty members shared their expertise and research insights, the room quickly transformed into a living exchange of ideas.
            </p>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-[55%] flex flex-col pt-0">
          <div className="w-full border-[3px] border-[#008F4C] aspect-[16/9] overflow-hidden mb-1.5">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="ChaiLinks Episode 1" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="text-[#222] font-medium text-justify leading-[1.4] flex flex-col gap-1.5">
            <p className="font-bold text-[8px] sm:text-[8.5px] text-[#111] leading-[1.3]">
              Choosing TinyML and Agentic AI was a State- statement in itself.
            </p>
            <ul className="list-disc pl-3 text-[7.5px] sm:text-[8px] space-y-0">
              <li>TinyML explored how machine learning models can run efficiently on microcontrollers and low-power devices — bringing intelligence directly to the edge.</li>
              <li>Agentic AI opened conversations around autonomous AI systems capable of reasoning, decision-making, and executing tasks independently.</li>
            </ul>
            <p className="text-[7.5px] sm:text-[8px]">
              The format retained its signature informal spirit, inspired by the comfort of a Chai Pe Charcha, but the conversations reflected a noticeable leap in intellectual intensity. Students were not merely listening — they were engaging, questioning architectures, discussing deployment challenges, debating real-world implications, and imagining applications beyond the classroom.
            </p>
            <p className="text-[7.5px] sm:text-[8px]">
              What made Episode 01 truly remarkable was the shift in mindset it inspired. Discussions moved beyond definitions and theory into implementation and innovation. Students explored how TinyML models could be optimized for embedded devices, and how these technologies could shape industries in the coming years.
            </p>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 10 — left page ─── */
  pg(true, 10, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="text-right text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333] mb-1">
        ITER
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C] mb-2"></div>
      </div>
      
      {/* Top Image */}
      <div className="w-full h-[130px] sm:h-[150px] shrink-0 border-[3px] border-[#008F4C] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523580494112-071dcb92a71d?auto=format&fit=crop&w=800&q=80" alt="ChainLinks Group" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-3 px-2 mt-1.5">
        {/* Left Column */}
        <div className="w-[45%] flex flex-col pt-0">
          <div className="text-[#222] text-[7.5px] sm:text-[8px] font-medium text-justify leading-[1.4] mb-1.5 flex flex-col gap-1">
            <p>
              ChainLinks Episode 01 was not just a milestone — it was a moment that redefined possibility. What started in Episode 0 as a bold experiment in open dialogue evolved into something far greater: a living, breathing ecosystem of ideas, ambition, and fearless curiosity. The conversations were deeper. The vision was clearer. The energy was unstoppable. This was no longer just a gathering — it was a spark.
            </p>
            <p>
              It wasn't only about TinyML pushing intelligence to the edge. It wasn't only about Agentic AI shaping autonomous futures. It was about daring to explore what others hesitate to touch. It was about students realizing their potential is bigger than any syllabus. It was about transforming doubt into direction and curiosity into creation.
            </p>
            <p>
              In that room, innovation didn't feel distant — it felt personal. The future didn't seem abstract — it felt buildable.
            </p>
            <p>
              And with Episode 01, ChainLinks didn't just raise the bar — it ignited a culture of excellence, a wave of bold thinkers, and a legacy that will continue shaping innovators long after the chai cups are empty.
            </p>
          </div>
          <div className="w-full border-[2px] border-[#008F4C] aspect-[4/3] overflow-hidden mt-auto">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" alt="Students engaging" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
        
        {/* Right Column (Green Box overlapping top image) */}
        <div className="w-[55%] -mt-[60px] sm:-mt-[70px] relative z-10 shrink-0">
          <div className="bg-[#008F4C] p-1 shadow-md border-[1.5px] border-white ring-[1.5px] ring-[#008F4C] flex flex-col gap-1">
            <div className="border-[0.5px] border-white p-1">
              <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.3]">
                The informal setting played a powerful role once again. With tea and refreshments creating a relaxed environment, barriers dissolved. Faculty members became mentors in dialogue rather than distant authorities. Students spoke freely, shared project ideas, sought guidance on research paths, and discovered clarity in domains that once felt overwhelming. The openness of the environment encouraged authenticity — and with it, confidence. Beyond the technical insights, ChainLinks Episode 01 strengthened something even more valuable: connection.
              </p>
            </div>
            <div className="border-[0.5px] border-white p-1">
              <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.3]">
                Students from different academic years found common ground through shared interests. Peer discussions sparked collaborations. Curiosity evolved into ambition. The circle-based interaction model fostered organic networking, turning conversations into opportunities. This edition marked a defining achievement for the GFG Club. It demonstrated that when given the right platform, students are capable of engaging with advanced and future-oriented technologies in meaningful ways. ChainLinks Episode 01 proved that when minds connect without barriers.
              </p>
            </div>
            <div className="border-[0.5px] border-white p-1">
              <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.3]">
                By choosing bold themes and trusting the power of dialogue, the club elevated the ChainLinks initiative to a new standard. ChainLinks Episode 01 was not simply about TinyML or Agentic AI. It was about empowering students to think independently, question deeply, and innovate confidently. It proved that learning thrives where hierarchy fades and curiosity leads. More than an event, it became a moment of transformation — a statement that the future of technology belongs to those willing to explore it together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 11 — right page ─── */
  pg(false, 11, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EVENT 3.
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          FOUNDER'S UNPLUGGED
        </h2>
      </div>
      
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-3 mb-3 mx-4">
        <div className="text-[10px] sm:text-[12px] font-bold text-[#111] leading-none uppercase tracking-widest">
          THE GFG PODCAST.
        </div>
        <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          23rd December 2025
        </div>
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-4 px-2 mt-2 h-[65%]">
        {/* Left Column (Gray background + Green Box) */}
        <div className="w-[60%] relative">
          <div className="absolute inset-0 bg-[#D9D9D9] -left-2 top-0 bottom-0 right-4"></div>
          <div className="relative bg-[#008F4C] p-2 sm:p-2.5 shadow-md h-full -top-1 ml-2">
            <h3 className="text-white text-[12px] sm:text-[14px] font-bold tracking-wide mb-1">Overview</h3>
            <p className="text-white text-[6.5px] sm:text-[7px] font-medium leading-[1.4] mb-2">
              An insightful session was conducted on Personality Development of which key takeaway are-
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.4]">
                  The Founder's Unplugged, organized by the GeeksforGeeks , turned out to be more than just a podcast session — it felt like an honest conversation about what building a startup truly looks like.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.4]">
                  From the very beginning, the atmosphere was engaging and comfortable. It wasn't a one-sided lecture; it was a dialogue. The speakers shared their perspectives with clarity and authenticity, making complex startup concepts feel relatable for students who are still exploring their paths.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.4]">
                  The Rapid Fire round added an exciting spark to the session. Questions like "Gut Feeling or Market Research?", "Perfect Plan or Fast Execution?", and "Passion or Logic?" led to sharp yet thoughtful responses.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.4]">
                  What stood out was the balance in their answers — the importance of optimism and belief to begin a journey, and the need for strategy, validation, and evidence to sustain it.
                </p>
              </div>
            </div>
            <p className="text-white text-[6.5px] sm:text-[7px] font-medium text-justify leading-[1.4] mt-2">
              This approach helps students balance academics, coding practice, and personal commitments efficiently.
            </p>
          </div>
        </div>
        
        {/* Right Column (Stacked Images) */}
        <div className="w-[40%] flex flex-col justify-between">
          <div className="w-full aspect-[4/3] border-[2px] border-[#008F4C] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80" alt="Podcast 1" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full aspect-[4/3] border-[2px] border-[#008F4C] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80" alt="Podcast 2" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full aspect-[4/3] border-[2px] border-[#008F4C] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=500&q=80" alt="Podcast 3" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 12 — left page ─── */
  pg(true, 12, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-1">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          4th February 2026
        </div>
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2"></div>
      </div>
      
      {/* Top Image */}
      <div className="w-full h-[150px] sm:h-[180px] border-[3px] border-[#008F4C] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Event Highlights" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-3 px-2 mt-2">
        {/* Left Column (Green Box overlapping top image) */}
        <div className="w-[50%] -mt-[60px] sm:-mt-[80px] relative z-10 pb-2">
          <div className="bg-[#008F4C] p-1.5 shadow-md h-fit">
            <div className="border-b-[1px] border-white pb-1 mb-2">
              <h3 className="text-white text-[12px] sm:text-[14px] font-bold text-left tracking-wide">Event Highlights</h3>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6.5px] sm:text-[7px] font-medium text-justify leading-[1.4]">
                  We were honored to host Zahid Akhtar, Founder of OneLife and a Life & Career Coach, Behavioral Trainer, and Public Speaker. With a strong focus on clarity, confidence, and purposeful growth, he works closely with students and professionals to help them navigate career decisions, build effective communication skills, and develop emotional resilience.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6.5px] sm:text-[7px] font-medium text-justify leading-[1.4]">
                  His session was not just inspiring but deeply practical, offering actionable insights that encouraged our audience to reflect, reset, and move forward with greater direction and confidence.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6.5px] sm:text-[7px] font-medium text-justify leading-[1.4]">
                  Zahid Sir's perspective on intuition, connection, and navigating uncertainty felt relatable, especially for students who are still figuring things out.
                </p>
              </div>
            </div>
            {/* Image inside green box */}
            <div className="w-full border-[1.5px] border-white mt-2 p-0.5 bg-white">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80" alt="Zahid Akhtar" className="w-full h-[70px] sm:h-[80px] object-cover grayscale-[20%] contrast-125" />
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-[50%] flex flex-col pt-1 pl-1 items-end">
          {/* Top Right Image on Gray Box */}
          <div className="w-[90%] relative mb-4 mt-2">
            <div className="absolute inset-0 bg-[#D9D9D9] -left-1.5 -bottom-1.5 top-1.5 right-1.5"></div>
            <div className="relative border-[1px] border-[#008F4C] overflow-hidden bg-white p-0.5">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80" alt="Audience" className="w-full aspect-[4/3] object-cover grayscale-[20%] contrast-125" />
            </div>
          </div>
          
          {/* Bottom Right Green Box on Gray Box */}
          <div className="w-[95%] relative mt-auto mb-2">
            <div className="absolute inset-0 bg-[#D9D9D9] -left-2 -bottom-2 top-2 right-2"></div>
            <div className="relative bg-[#008F4C] p-2 shadow-sm">
              <p className="text-white text-[6.5px] sm:text-[7px] font-medium text-justify leading-[1.4]">
                The Founder's Unplugged session concluded on a highly impactful note, leaving participants with valuable lessons on personality development, career growth, and entrepreneurship. Through engaging discussions and practical insights, students gained the confidence to embrace challenges, think strategically, and pursue their goals with clarity, resilience, and a balanced mindset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 13 — right page ─── */
  pg(false, 13, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EVENT 4.
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          RAW & READY
        </h2>
      </div>
      
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-3 mb-3 mx-4">
        <div className="text-[10px] sm:text-[12px] font-bold text-[#111] leading-none uppercase tracking-widest">
          PERSONALITY DEVELOPMENT SESSION
        </div>
        <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          4th February 2026
        </div>
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-4 px-2 mt-2 h-[65%]">
        {/* Left Column (Gray background + Green Box) */}
        <div className="w-[60%] relative">
          <div className="absolute inset-0 bg-[#D9D9D9] -left-2 top-0 bottom-0 right-4"></div>
          <div className="relative bg-[#008F4C] p-2 sm:p-2.5 shadow-md h-full -top-1 ml-2 flex flex-col">
            <h3 className="text-white text-[12px] sm:text-[14px] font-bold tracking-wide mb-1">Overview</h3>
            <p className="text-white text-[6.5px] sm:text-[7px] font-medium leading-[1.4] mb-2">
              An insightful session was conducted on Personality Development of which key takeaway are-
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium leading-[1.4]">
                  <span className="font-bold">1. Introduction to Personal Growth</span><br/>
                  Focusing on how self-awareness and behaviour shape our professional journey. The session emphasized that personal growth is as essential as technical skills in today's competitive environment.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium leading-[1.4]">
                  <span className="font-bold">2. Building Self-Esteem</span><br/>
                  We learned that self-esteem is the belief in one's own worth and capabilities. Confidence doesn't come from knowing everything, but from staying steady even when we don't have all the answers.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium leading-[1.4]">
                  <span className="font-bold">3. Understanding Facts vs Opinions</span><br/>
                  Distinguished between facts (objective truths) and opinions (personal viewpoints). This clarity helps improve communication, teamwork, and logical thinking—crucial skills for developers.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1.5">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium leading-[1.4]">
                  <span className="font-bold">4. Time Management Techniques</span><br/>
                  The session shared a practical 4-box method for managing time effectively:<br/>
                  Do: Tasks that are important & urgent<br/>
                  Schedule: Important but not urgent<br/>
                  Delegate: Urgent but less important<br/>
                  Eliminate: Not important & not urgent
                </p>
              </div>
            </div>
            <p className="text-white text-[6.5px] sm:text-[7px] font-medium leading-[1.4] mt-2">
              This approach helps students balance academics, coding practice, and personal commitments efficiently.
            </p>
          </div>
        </div>
        
        {/* Right Column (Stacked Images) */}
        <div className="w-[40%] flex flex-col justify-between">
          <div className="w-full aspect-[4/3] border-[2px] border-[#008F4C] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80" alt="Session 1" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full aspect-[4/3] border-[2px] border-[#008F4C] overflow-hidden mt-2">
            <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80" alt="Session 2" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full aspect-[4/3] border-[2px] border-[#008F4C] overflow-hidden mt-2">
            <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=500&q=80" alt="Session 3" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 14 — left page ─── */
  pg(true, 14, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-1">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          4th February 2026
        </div>
      </div>
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2"></div>
      </div>
      
      {/* Top Image */}
      <div className="w-full h-[120px] sm:h-[140px] shrink-0 border-[3px] border-[#008F4C] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Activity" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-3 px-2 mt-1.5 flex-1 min-h-0 pb-1">
        {/* Left Column (Green Box) */}
        <div className="w-[55%] -mt-[30px] sm:-mt-[40px] relative z-10">
          <div className="bg-[#008F4C] p-1 shadow-md h-fit flex flex-col">
            <div className="border-b-[1px] border-white pb-1 mb-1.5">
              <h3 className="text-white text-[12px] sm:text-[14px] font-bold text-left tracking-wide">Event Highlights</h3>
            </div>
            <p className="text-white text-[6.5px] sm:text-[7px] font-medium text-justify leading-[1.3] mb-1.5">
              The personality development session was interactive, reflective, and thought-provoking. Participants were led through a series of carefully curated activities which encouraged them to think critically and work effectively as a team.
            </p>
            <div className="flex flex-col gap-1 justify-between">
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.3]">
                  <span className="font-bold">• Activity-1</span><br/>
                  The series of activities commenced with a scenario-based activity, "Lost in the Jungle". It challenged the participants with a survival scenario with a given list of limited resources. First they were asked to rank these resources individually and then as a group in terms of what they believed would be most essential for survival. The activity focused on making decisions under pressure, analytical thinking, teamwork and taking other people's opinion into consideration. This enabled participants to realize that people working together normally provide solutions that are superior to one person thinking. This would be achieved by comparing individual priorities with group and expert priorities.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.3]">
                  <span className="font-bold">• Activity-2</span><br/>
                  The second activity was a simple instruction following task. The participants were provided with a sheet containing a set of instructions to be followed. As the participants worked on the task, they realized that to complete the task correctly, one had to read the instructions carefully and not rush through them. The task taught the participants the importance of fully understanding a task before completing it on time. The activity highlights the significance of mindfulness, clarity and discipline, which are essential qualities for successful communication and professional development.
                </p>
              </div>
              <div className="border-[0.5px] border-white p-1">
                <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.3]">
                  <span className="font-bold">• Activity-3</span><br/>
                  The third activity was a mini ideathon, which was a creative activity. The participants were divided into groups of four to five people. The task was to brainstorm and present out-of-the-box ideas. The ideas included everything from creative tools that were inspired by fiction to solutions that were improved with creative thinking. The activity promoted innovation, communication skills, teamwork and ability to present ideas without any hesitation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-[45%] flex flex-col justify-between pt-1 pb-1">
          {/* Top Right Image */}
          <div className="w-[90%] border-[2px] border-[#008F4C] overflow-hidden ml-auto">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80" alt="Students engaging" className="w-full aspect-[4/3] object-cover grayscale-[20%] contrast-125" />
          </div>
          
          {/* Bottom Right Green Box on Gray Box */}
          <div className="w-full relative mt-auto">
            <div className="absolute inset-0 bg-[#D9D9D9] -left-2 -bottom-1.5 top-1.5 right-2"></div>
            <div className="relative bg-[#008F4C] p-1.5 shadow-sm border-[0.5px] border-white">
              <p className="text-white text-[6px] sm:text-[6.5px] font-medium text-justify leading-[1.3]">
                <span className="font-bold">• Activity-4</span><br/>
                The final activity focused on basic financial literacy and investment awareness. The participants were made aware of various savings and investment alternatives, which were compared on the basis of risk, returns, and liquidity. The participants were able to understand better the impact of financial choices on long-term results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 15 — right page ─── */
  pg(false, 15, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EVENT 5.
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          ZERONE
        </h2>
      </div>
      
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-3 mb-3 mx-4">
        <div className="text-[10px] sm:text-[12px] font-bold text-[#111] leading-none uppercase tracking-widest">
          CAPTURE THE FLAG EVENT
        </div>
        <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          3rd April 2026
        </div>
      </div>
      
      {/* Top Image */}
      <div className="w-full h-[130px] border-[2px] border-white overflow-hidden mb-2 relative">
        <div className="absolute inset-0 bg-[#D9D9D9] -left-1 -bottom-1 top-1 right-1 -z-10"></div>
        <img src="https://images.unsplash.com/photo-1523580494112-071dcb92a71d?auto=format&fit=crop&w=800&q=80" alt="Zerone Event" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-4 px-2 h-full">
        {/* Left Column (3 images) */}
        <div className="w-[45%] flex flex-col gap-2">
          <div className="w-full border-[1.5px] border-white overflow-hidden bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80" alt="Zerone 1" className="w-full aspect-[16/9] object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full border-[1.5px] border-white overflow-hidden bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=500&q=80" alt="Zerone 2" className="w-full aspect-[16/9] object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full border-[1.5px] border-white overflow-hidden bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80" alt="Zerone 3" className="w-full aspect-[16/9] object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
        
        {/* Right Column (Green Box) */}
        <div className="w-[55%] relative h-[210px]">
          <div className="absolute inset-0 bg-[#D9D9D9] -left-2 top-2 -bottom-2 right-2"></div>
          <div className="relative bg-[#008F4C] p-2.5 shadow-md h-full text-white">
            <h3 className="text-[12px] sm:text-[14px] font-bold tracking-wide mb-1 uppercase">Overview:</h3>
            <p className="text-[6.5px] sm:text-[7px] font-medium leading-[1.4] mb-2 text-justify">
              ZerOne successfully blended technology, strategy, and innovation through an engaging multidisciplinary challenge. Teams showcased technical expertise and collaborative problem-solving while adapting to a dynamic virtual economy.
            </p>
            <ul className="list-disc pl-3 text-[6.5px] sm:text-[7px] font-medium leading-[1.4] mb-2 space-y-1">
              <li>Encouraged innovation through hackathon-style development.</li>
              <li>Strengthened teamwork, resource management, and real-time decision-making.</li>
              <li>Concluded with impactful solution presentations and evaluations.</li>
            </ul>
            <p className="text-[6.5px] sm:text-[7px] font-medium leading-[1.4] text-justify mt-2">
              ZerOne emerged as a true celebration of innovation, collaboration, and technological excellence, inspiring participants to think beyond conventional boundaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 16 — left page ─── */
  pg(true, 16, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          EVENT 6.
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          RACHITVA
        </h2>
      </div>
      
      <div className="w-full">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px] mb-2.5"></div>
      </div>
      
      {/* Sub Banner */}
      <div className="relative border-[1.5px] border-[#008F4C] text-center pt-1.5 pb-3 mb-3 mx-4">
        <div className="text-[10px] sm:text-[12px] font-bold text-[#111] leading-none uppercase tracking-widest">
          DESIGN-PITCH EVENT
        </div>
        <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 bg-[#F5F3EA] px-2 text-[10px] font-bold text-[#111] whitespace-nowrap">
          5th April 2026
        </div>
      </div>
      
      {/* Two Columns */}
      <div className="flex gap-4 px-2 h-full">
        {/* Left Column */}
        <div className="w-[50%] flex flex-col justify-between pb-2">
          {/* Green Box */}
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-[#D9D9D9] -left-2 top-2 -bottom-2 right-2"></div>
            <div className="relative bg-[#008F4C] p-2.5 shadow-md text-white">
              <h3 className="text-[12px] sm:text-[14px] font-bold tracking-wide mb-1 uppercase">Overview:</h3>
              <p className="text-[7px] sm:text-[7.5px] font-medium leading-[1.4] text-justify">
                Rachitva inspired participants to transform abstract ideas into compelling product concepts through creativity and innovation. Teams demonstrated exceptional design thinking, branding, and persuasive pitching under time constraints. The event fostered quick thinking, effective communication, and entrepreneurial spirit, leaving participants with valuable experience in product development and strategic marketing.
              </p>
            </div>
          </div>
          {/* Bottom Left Image */}
          <div className="w-full mt-auto mb-1 border-[1.5px] border-white shadow-sm overflow-hidden bg-white">
            <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=500&q=80" alt="Pitch" className="w-full aspect-[4/3] object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
        
        {/* Right Column (3 Images) */}
        <div className="w-[50%] flex flex-col justify-between pb-2">
          <div className="w-full border-[1.5px] border-white shadow-sm overflow-hidden bg-white">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80" alt="Rachitva 1" className="w-full aspect-[16/9] object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full border-[1.5px] border-white shadow-sm overflow-hidden bg-white my-2">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Rachitva 2" className="w-full aspect-[16/9] object-cover grayscale-[20%] contrast-125" />
          </div>
          <div className="w-full border-[1.5px] border-white shadow-sm overflow-hidden bg-white mt-auto mb-1">
            <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=500&q=80" alt="Rachitva Audience" className="w-full aspect-[4/3] object-cover grayscale-[20%] contrast-125" />
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 17 — right page ─── */
  pg(false, 17, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-end items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          MEMBERS ACHIEVEMENTS
        </h2>
      </div>
      
      <div className="w-full mb-4">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px]"></div>
      </div>
      
      {/* List of achievements */}
      <div className="flex flex-col gap-5 px-3">
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <div className="w-[55%] flex flex-col">
            <h3 className="text-[#008F4C] font-bold text-[11px] sm:text-[13px] leading-[1.2] mb-1">24-Hour Hackathon,<br/>XIM University</h3>
            <p className="font-bold text-[#111] text-[8px] sm:text-[9px] mb-1">1st Prize Secured</p>
            <p className="text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.4] text-[#222]">
              Team Hex Syndicate — Sanyukt Kumar Rai, Aman Murari Singh, Pratham Gupta, Abhishek Raj, and Sujal Kumar — secured 1st Prize at the 24-hour hackathon hosted by XIM University, with their innovation, technical expertise, and dedication driving this outstanding achievement.
            </p>
          </div>
          <div className="w-[45%]">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80" alt="Achievement 1" className="w-full aspect-[4/3] object-cover rounded-xl border-[2px] border-[#222] shadow-sm grayscale-[10%] contrast-125" />
          </div>
        </div>
        
        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <div className="w-[55%] flex flex-col">
            <h3 className="text-[#008F4C] font-bold text-[11px] sm:text-[13px] leading-[1.2] mb-1">HackFest, Advaita,<br/>IIIT Bhubaneswar</h3>
            <p className="font-bold text-[#111] text-[8px] sm:text-[9px] mb-1">Champions Title Secured</p>
            <p className="text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.4] text-[#222]">
              Team MindMesh — Shubham Parida, Ankita Mohapatra, Shlok Katiyar, and Shreya Patel secured the Champions title at HackFest, Advaita, IIIT Bhubaneswar, with their innovation, teamwork, and dedication setting them apart and driving this outstanding achievement.
            </p>
          </div>
          <div className="w-[45%]">
            <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=500&q=80" alt="Achievement 2" className="w-full aspect-[4/3] object-cover rounded-xl border-[2px] border-[#222] shadow-sm grayscale-[10%] contrast-125" />
          </div>
        </div>
        
        {/* Item 3 */}
        <div className="flex items-center gap-3">
          <div className="w-[55%] flex flex-col">
            <h3 className="text-[#008F4C] font-bold text-[11px] sm:text-[13px] leading-[1.2] mb-1">Smart India Hackathon<br/>Internals, 2025</h3>
            <p className="font-bold text-[#111] text-[8px] sm:text-[9px] mb-1">1st in Hardware</p>
            <p className="text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.4] text-[#222]">
              Team Bhumicare, Vivek Ranjan Sahoo, Ayush Ranjan Pradhan, Subasis Mishra, Depesh Singh, Anjali Rout, Subhashree Sahoo secured the 1st in Hardware and 4th overall at SIH Internal 2025.
            </p>
          </div>
          <div className="w-[45%]">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80" alt="Achievement 3" className="w-full aspect-[4/3] object-cover rounded-xl border-[2px] border-[#222] shadow-sm grayscale-[10%] contrast-125" />
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 18 — left page ─── */
  pg(true, 18, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      <div className="w-full mb-3">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px]"></div>
      </div>
      
      {/* Section 1: LOOKING AHEAD */}
      <div className="text-center mb-1">
        <h3 className="inline-block text-[10px] sm:text-[12px] font-bold text-[#111] uppercase tracking-wide border-b-[1.5px] border-[#111] pb-0.5">
          LOOKING AHEAD:
        </h3>
      </div>
      <div className="bg-[#008F4C] p-2 sm:p-2.5 mb-5">
        <p className="text-white text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.5]">
          Following the success of our recent technical sessions and coding initiatives, the chapter is planning more hands-on and skill-focused events for students. Upcoming activities will include mock interview sessions, coding challenges, and focused problem-solving workshops to strengthen programming fundamentals and interview preparation.<br/><br/>
          The chapter also aims to conduct deep-dive learning sessions on data structures, algorithms, system design, and real-world case studies, helping students gain practical knowledge aligned with industry expectations. Networking sessions with alumni and professionals will further provide insights into career paths, challenges, and opportunities in the tech industry.
        </p>
      </div>
      
      {/* Section 2: APPRECIATION */}
      <div className="text-center mb-1">
        <h3 className="inline-block text-[10px] sm:text-[12px] font-bold text-[#111] uppercase tracking-wide border-b-[1.5px] border-[#111] pb-0.5">
          A NOTE OF <span className="text-[#008F4C]">APPRECIATION</span>
        </h3>
      </div>
      <div className="px-2 mb-5">
        <p className="text-[#222] text-[7px] sm:text-[7.5px] font-medium text-justify leading-[1.5]">
          We extend our heartfelt gratitude to all the students, faculty members, mentors, and volunteers who contributed to making our initiatives meaningful and impactful.<br/>
          Students brought curiosity, enthusiasm, and dedication, turning every workshop and coding session into a vibrant learning environment. Mentors and alumni generously shared their experiences and technical insights, helping bridge the gap between academic learning and real-world industry practices.<br/>
          Faculty members provided continuous guidance and encouragement, ensuring that every initiative remained well-structured, inclusive, and student-driven. Meanwhile, the volunteers worked tirelessly behind the scenes to coordinate events, manage logistics, and ensure smooth execution.<br/>
          Together, this community has created more than just technical events—it has fostered a culture of collaboration, continuous learning, and innovation that will inspire many future batches.
        </p>
      </div>
      
      {/* Section 3: UPCOMING INITIATIVES */}
      <div className="text-center mb-1">
        <h3 className="inline-block text-[10px] sm:text-[12px] font-bold text-[#111] uppercase tracking-wide border-b-[1.5px] border-[#111] pb-0.5">
          <span className="text-[#008F4C]">UPCOMING</span> INITIATIVES
        </h3>
      </div>
      <div className="bg-[#008F4C] p-2 sm:p-2.5 mb-2">
        <ul className="text-white text-[7px] sm:text-[7.5px] font-medium leading-[1.5] space-y-1">
          <li>• Hackathon-style coding events centered around real-world problem statements</li>
          <li>• Resume and portfolio review clinics with alumni and industry mentors</li>
          <li>• Regular workshops on AI tools, development frameworks, and emerging technologies</li>
          <li>• Competitive programming practice sessions and coding contests</li>
          <li>• Career guidance sessions for internships and placements</li>
        </ul>
      </div>
    </div>
  )),

  /* ─── PAGE 19 — right page ─── */
  pg(false, 19, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col pt-1">
      {/* Header */}
      <div className="flex justify-end items-end mb-2">
        <div className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#333]">
          ITER
        </div>
      </div>
      
      <div className="relative text-center mb-1">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#333]" style={{ transform: "scaleY(1.2)", display: "inline-block", letterSpacing: "-0.02em" }}>
          CORE TEAM 2025-26
        </h2>
      </div>
      
      <div className="w-full mb-3">
        <div className="border-t-[2px] border-[#008F4C]"></div>
        <div className="border-t-[1px] border-[#008F4C] mt-[2px]"></div>
      </div>
      
      {/* Images Section */}
      <div className="flex-1 relative flex flex-col pb-2 px-2">
        {/* Top Image */}
        <div className="flex-1 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523580494112-071dcb92a71d?auto=format&fit=crop&w=800&q=80" alt="Core Team Top" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
        </div>
        
        {/* Bottom Image */}
        <div className="flex-1 overflow-hidden mt-1">
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80" alt="Core Team Bottom" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
        </div>
        
        {/* Overlapping Banner */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-fit">
          <div className="absolute inset-0 bg-[#D9D9D9] -left-1 top-1 -bottom-1 right-1"></div>
          <div className="relative bg-[#008F4C] border-[1px] border-white py-1.5 px-4 shadow-md">
            <h3 className="text-white text-[12px] sm:text-[14px] font-black uppercase tracking-wide">
              GFG ITER CORE TEAM
            </h3>
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 20 — left page (Poster) ─── */
  pg(true, 20, (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-between pt-8 pb-10 px-6">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        {/* Left Text */}
        <div className="flex flex-col text-[#E69A6E] font-black uppercase text-3xl sm:text-4xl leading-[0.85] tracking-tight" style={{ transform: "scaleY(1.2)", transformOrigin: "top left" }}>
          <span>THE</span>
          <span>MOST</span>
          <span>CREATIVE</span>
          <span>ACT</span>
          <span>IS</span>
        </div>
        
        {/* Right Image */}
        <div className="w-[45%] ml-4 relative mt-1">
          <div className="w-full aspect-[4/5] overflow-hidden rounded-[2px] shadow-sm border border-black/5">
            <img src="https://images.unsplash.com/photo-1560972550-aba3456b5564?auto=format&fit=crop&w=500&q=80" alt="Creative" className="w-full h-full object-cover contrast-110 grayscale-[20%]" />
          </div>
        </div>
      </div>
      
      {/* Middle Text */}
      <div className="flex justify-end mt-8 pr-2">
        <div className="flex flex-col text-right text-[#92C04D] font-black uppercase text-xl sm:text-2xl leading-[0.9] tracking-tight" style={{ transform: "scaleY(1.1)", transformOrigin: "top right" }}>
          <span>THE ACT OF CREATING</span>
          <span>YOURSELF</span>
        </div>
      </div>
      
      {/* Bottom Connect Section */}
      <div className="flex items-end justify-center gap-1.5 mt-auto">
        <span className="text-[#111] font-bold text-[10px] sm:text-[12px] mb-1.5">Let's</span>
        <div className="flex items-center text-[#457B9D] font-black uppercase text-[40px] sm:text-[50px] tracking-tight leading-none" style={{ transform: "scaleY(1.1)", transformOrigin: "bottom" }}>
          <span>C</span>
          <div className="mx-1 w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border-[2.5px] border-[#457B9D] bg-white p-[2px] flex-shrink-0 relative -top-[2px]">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://geeksforgeeks.org" alt="QR Code" className="w-full h-full object-contain" />
          </div>
          <span>NNECT.</span>
        </div>
      </div>
    </div>
  )),

];

const TOTAL_PAGES = PAGES.length;
const TOTAL_SPREADS = Math.ceil(TOTAL_PAGES / 2);

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT — Realistic 3D Interactive Book
   ═══════════════════════════════════════════════════════════════════ */

export function NativeFlipBook({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  /* ──────── State ──────── */
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<
    "forward" | "backward" | null
  >(null);

  /* ──────── Refs ──────── */
  const bookRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const prefersReducedMotion = useRef(false);

  /* Flip data captured at animation start so render can read it stably */
  const flipDataRef = useRef<{
    targetPageIndex: number;
    staticLeft: ReactNode;
    staticRight: ReactNode;
    staticMobile: ReactNode;
    frontFace: ReactNode;
    backFace: ReactNode;
  } | null>(null);

  /* ──────── Motion values ──────── */
  const flipAngle = useMotionValue(0);

  /* Dynamic shadow on the revealed page — peaks at 90° */
  const revealedShadow = useTransform(flipAngle, (a: number) => {
    const abs = Math.abs(a);
    return Math.sin((abs * Math.PI) / 180) * 0.15; // Softer shadow for light pages
  });

  /* Light overlay on turning sheet front face — subtle */
  const frontLightOpacity = useTransform(flipAngle, (a: number) => {
    const abs = Math.abs(a);
    return Math.sin((abs * Math.PI) / 180) * 0.08; // Softer shadow on moving page
  });

  /* ──────── Derived ──────── */
  const currentSpread = Math.floor(pageIndex / 2);

  const canGoNext = isMobile
    ? pageIndex < TOTAL_PAGES - 1
    : currentSpread < TOTAL_SPREADS - 1;

  const canGoPrev = isMobile ? pageIndex > 0 : currentSpread > 0;

  /* ──────── Effects ──────── */

  // Responsive detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Sync page index on mode change (ensure even on desktop)
  useEffect(() => {
    if (!isMobile) {
      setPageIndex((p) => Math.floor(p / 2) * 2);
    }
  }, [isMobile]);

  // Reduced motion preference
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  /* ──────── Navigation handlers ──────── */

  const handleNext = useCallback(() => {
    if (isFlipping || !canGoNext) return;

    if (prefersReducedMotion.current) {
      setPageIndex((p) =>
        isMobile
          ? Math.min(p + 1, TOTAL_PAGES - 1)
          : Math.min(p + 2, (TOTAL_SPREADS - 1) * 2)
      );
      return;
    }

    // Capture flip data
    if (isMobile) {
      flipDataRef.current = {
        targetPageIndex: pageIndex + 1,
        staticLeft: null,
        staticRight: null,
        staticMobile: PAGES[pageIndex + 1],
        frontFace: PAGES[pageIndex],
        backFace: PAGES[pageIndex + 1],
      };
    } else {
      const s = currentSpread;
      flipDataRef.current = {
        targetPageIndex: (s + 1) * 2,
        staticLeft: PAGES[s * 2],
        staticRight: PAGES[(s + 1) * 2 + 1] ?? null,
        staticMobile: null,
        frontFace: PAGES[s * 2 + 1],
        backFace: PAGES[(s + 1) * 2],
      };
    }

    setIsFlipping(true);
    setFlipDirection("forward");
    flipAngle.set(0);

    motionAnimate(flipAngle, -180, {
      duration: 0.85,
      ease: [0.645, 0.045, 0.355, 1.0],
      onComplete: () => {
        setPageIndex(flipDataRef.current!.targetPageIndex);
        setIsFlipping(false);
        setFlipDirection(null);
        flipDataRef.current = null;
        flipAngle.set(0);
      },
    });
  }, [isFlipping, canGoNext, isMobile, pageIndex, currentSpread, flipAngle]);

  const handlePrev = useCallback(() => {
    if (isFlipping || !canGoPrev) return;

    if (prefersReducedMotion.current) {
      setPageIndex((p) =>
        isMobile ? Math.max(p - 1, 0) : Math.max(p - 2, 0)
      );
      return;
    }

    if (isMobile) {
      flipDataRef.current = {
        targetPageIndex: pageIndex - 1,
        staticLeft: null,
        staticRight: null,
        staticMobile: PAGES[pageIndex],
        frontFace: PAGES[pageIndex - 1],
        backFace: PAGES[pageIndex - 1],
      };

      setIsFlipping(true);
      setFlipDirection("backward");
      flipAngle.set(-180);

      motionAnimate(flipAngle, 0, {
        duration: 0.85,
        ease: [0.645, 0.045, 0.355, 1.0],
        onComplete: () => {
          setPageIndex(flipDataRef.current!.targetPageIndex);
          setIsFlipping(false);
          setFlipDirection(null);
          flipDataRef.current = null;
          flipAngle.set(0);
        },
      });
    } else {
      const s = currentSpread;
      flipDataRef.current = {
        targetPageIndex: (s - 1) * 2,
        staticLeft: PAGES[(s - 1) * 2],
        staticRight: PAGES[s * 2 + 1],
        staticMobile: null,
        frontFace: PAGES[s * 2],
        backFace: PAGES[(s - 1) * 2 + 1],
      };

      setIsFlipping(true);
      setFlipDirection("backward");
      flipAngle.set(0);

      motionAnimate(flipAngle, 180, {
        duration: 0.85,
        ease: [0.645, 0.045, 0.355, 1.0],
        onComplete: () => {
          setPageIndex(flipDataRef.current!.targetPageIndex);
          setIsFlipping(false);
          setFlipDirection(null);
          flipDataRef.current = null;
          flipAngle.set(0);
        },
      });
    }
  }, [isFlipping, canGoPrev, isMobile, pageIndex, currentSpread, flipAngle]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  // Wheel navigation
  useEffect(() => {
    const el = bookRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 900) return;
      lastWheelTime.current = now;
      if (e.deltaY > 0) handleNext();
      else if (e.deltaY < 0) handlePrev();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [handleNext, handlePrev]);

  // Touch swipe
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      
      // Swipe detection
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) handleNext();
        else handlePrev();
        return;
      }
      
      // Tap detection (on mobile)
      if (isMobile && Math.abs(dx) < 10 && Math.abs(dy) < 10) {
        const tapX = e.changedTouches[0].clientX;
        const screenW = window.innerWidth;
        if (tapX > screenW / 2) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    },
    [handleNext, handlePrev, isMobile]
  );

  /* ──────── Compute visible pages ──────── */

  let leftContent: ReactNode = null;
  let rightContent: ReactNode = null;
  let mobileContent: ReactNode = null;

  if (isFlipping && flipDataRef.current) {
    const fd = flipDataRef.current;
    leftContent = fd.staticLeft;
    rightContent = fd.staticRight;
    mobileContent = fd.staticMobile;
  } else {
    leftContent = PAGES[pageIndex];
    rightContent = PAGES[pageIndex + 1] ?? null;
    mobileContent = PAGES[pageIndex];
  }

  /* ──────── Page height ──────── */
  const pageH = 660;

  /* ──────── Render ──────── */
  return (
    <section className={`relative z-10 ${hideHeader ? 'py-4' : 'py-20 sm:py-24'} overflow-hidden bg-transparent`}>
      {/* Ambient background glow (keep dark mode style outside the book) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-[#00ff7f]/[0.04] blur-[120px] rounded-full" />

      <div className={hideHeader ? "w-full max-w-7xl mx-auto px-4" : "container-page"}>
        {/* ═══ Section Header ═══ */}
        {!hideHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-[#00ff7f] backdrop-blur-md mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              ANNUAL REPORT 2025–26 · LIFE AT GFG ITER
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              GFG ITER{" "}
              <span className="text-gradient-brand">Annual Report</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/60 max-w-2xl font-medium leading-relaxed">
              Explore our complete chapter chronicle — interactive 3D edition.
              Turn the pages to discover hackathons, workshops, team milestones,
              and student achievements.
            </p>
          </div>
          <a
            href="https://heyzine.com/flip-book/9752568637.html#page/1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-5 py-2.5 text-sm font-bold text-[#00ff7f] backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-[#020b06] hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] active:scale-95 shrink-0"
          >
            View External PDF
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        )}

        {/* ═══ Book Container ═══ */}
        <div
          ref={bookRef}
          className="relative mx-auto select-none"
          style={{ maxWidth: isMobile ? 420 : 1060 }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* ── Navigation arrows ── */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev || isFlipping}
            className={`absolute top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 ${
              isMobile ? "-left-1" : "-left-14"
            } ${
              !canGoPrev || isFlipping
                ? "border-white/10 bg-black/30 text-white/20 cursor-not-allowed"
                : "border-[#00ff7f]/30 bg-[#020b06]/80 text-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 hover:shadow-[0_0_18px_rgba(0,255,127,0.3)] active:scale-95"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext || isFlipping}
            className={`absolute top-1/2 -translate-y-1/2 z-40 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 ${
              isMobile ? "-right-1" : "-right-14"
            } ${
              !canGoNext || isFlipping
                ? "border-white/10 bg-black/30 text-white/20 cursor-not-allowed"
                : "border-[#00ff7f]/30 bg-[#020b06]/80 text-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 hover:shadow-[0_0_18px_rgba(0,255,127,0.3)] active:scale-95"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* ── Global Tap Zones ── */}
          <>
            <div
              className="absolute inset-y-0 left-0 w-1/4 z-30 cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous page (tap zone)"
            />
            <div
              className="absolute inset-y-0 right-0 w-1/4 z-30 cursor-pointer"
              onClick={handleNext}
              aria-label="Next page (tap zone)"
            />
          </>

          {/* ── Hardcover shell ── */}
          <div
            className="absolute rounded-sm pointer-events-none"
            style={{
              inset: 0,
              boxShadow:
                "0 25px 70px -15px rgba(0,0,0,0.85), 0 8px 20px -8px rgba(0,0,0,0.6)",
            }}
          />

          {/* ── Page edges (stacked paper effect - updated to white/cream for paper) ── */}
          {!isMobile && (
            <>
              <div
                className="absolute pointer-events-none rounded-[1px]"
                style={{
                  bottom: -2,
                  left: 5,
                  right: 5,
                  height: 1,
                  background: "rgba(245,243,234,0.7)",
                }}
              />
              <div
                className="absolute pointer-events-none rounded-[1px]"
                style={{
                  bottom: -3,
                  left: 8,
                  right: 8,
                  height: 1,
                  background: "rgba(245,243,234,0.5)",
                }}
              />
              <div
                className="absolute pointer-events-none rounded-[1px]"
                style={{
                  bottom: -4,
                  left: 11,
                  right: 11,
                  height: 1,
                  background: "rgba(245,243,234,0.3)",
                }}
              />
              {/* Right outer edge */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: 4,
                  bottom: 4,
                  right: -2,
                  width: 1,
                  background: "rgba(245,243,234,0.6)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: 7,
                  bottom: 7,
                  right: -3,
                  width: 1,
                  background: "rgba(245,243,234,0.4)",
                }}
              />
              {/* Left outer edge */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: 4,
                  bottom: 4,
                  left: -2,
                  width: 1,
                  background: "rgba(245,243,234,0.6)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: 7,
                  bottom: 7,
                  left: -3,
                  width: 1,
                  background: "rgba(245,243,234,0.4)",
                }}
              />
            </>
          )}

          {/* ═══ Pages area with 3D perspective ═══ */}
          <div style={{ perspective: 2500 }} className="relative">
            <div
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                height: pageH,
              }}
            >
              {/* ── DESKTOP LAYOUT ── */}
              {!isMobile && (
                <>
                  {/* Left page */}
                  <div className="absolute inset-y-0 left-0 w-1/2">
                    <div className="w-full h-full overflow-hidden">
                      {leftContent}
                    </div>
                  </div>

                  {/* Right page */}
                  <div className="absolute inset-y-0 right-0 w-1/2">
                    <div className="w-full h-full overflow-hidden">
                      {rightContent}
                    </div>
                  </div>

                  {/* Center spine - updated for lighter pages to create realistic fold */}
                  <div
                    className="absolute inset-y-0 left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                      width: 12,
                      zIndex: 15,
                      background:
                        "linear-gradient(to right, rgba(160,155,140,0.5), rgba(120,115,100,0.8) 40%, rgba(120,115,100,0.8) 60%, rgba(160,155,140,0.5))",
                      boxShadow:
                        "inset 0 0 5px rgba(0,0,0,0.4), 0 0 2px rgba(0,0,0,0.1)",
                      mixBlendMode: "multiply"
                    }}
                  />

                  {/* ── Shadow on revealed page during flip ── */}
                  {isFlipping && flipDirection === "forward" && (
                    <motion.div
                      className="absolute inset-y-0 right-0 w-1/2 pointer-events-none mix-blend-multiply"
                      style={{
                        zIndex: 12,
                        opacity: revealedShadow,
                        background:
                          "linear-gradient(to right, rgba(100,95,80,0.6) 0%, rgba(150,145,130,0.1) 50%, transparent 100%)",
                      }}
                    />
                  )}
                  {isFlipping && flipDirection === "backward" && (
                    <motion.div
                      className="absolute inset-y-0 left-0 w-1/2 pointer-events-none mix-blend-multiply"
                      style={{
                        zIndex: 12,
                        opacity: revealedShadow,
                        background:
                          "linear-gradient(to left, rgba(100,95,80,0.6) 0%, rgba(150,145,130,0.1) 50%, transparent 100%)",
                      }}
                    />
                  )}

                  {/* ═══ TURNING SHEET — The physical page flip ═══ */}
                  {isFlipping && flipDataRef.current && (
                    <motion.div
                      className="absolute inset-y-0"
                      style={{
                        width: "50%",
                        left:
                          flipDirection === "forward" ? "50%" : 0,
                        transformOrigin:
                          flipDirection === "forward"
                            ? "left center"
                            : "right center",
                        rotateY: flipAngle,
                        translateZ: 2,
                        transformStyle: "preserve-3d",
                        zIndex: 20,
                        willChange: "transform",
                      }}
                    >
                      {/* Front face */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {flipDataRef.current.frontFace}
                        {/* Light/shadow overlay on front */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none mix-blend-multiply"
                          style={{
                            opacity: frontLightOpacity,
                            background:
                              flipDirection === "forward"
                                ? "linear-gradient(to left, rgba(100,95,80,0.4), transparent 60%)"
                                : "linear-gradient(to right, rgba(100,95,80,0.4), transparent 60%)",
                            backfaceVisibility: "hidden",
                          }}
                        />
                      </div>

                      {/* Back face */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        {flipDataRef.current.backFace}
                      </div>

                      {/* Page edge thickness on turning page - matched to ivory paper */}
                      <div
                        className="absolute pointer-events-none"
                        style={{
                          top: 2,
                          bottom: 2,
                          width: 2,
                          ...(flipDirection === "forward"
                            ? { right: -1 }
                            : { left: -1 }),
                          background:
                            "linear-gradient(to bottom, #F5F3EA, #E3DFCD, #F5F3EA)",
                          borderLeft: flipDirection === "forward" ? "1px solid rgba(0,0,0,0.05)" : "none",
                          borderRight: flipDirection === "backward" ? "1px solid rgba(0,0,0,0.05)" : "none",
                          backfaceVisibility: "hidden",
                        }}
                      />
                    </motion.div>
                  )}
                </>
              )}

              {/* ── MOBILE LAYOUT ── */}
              {isMobile && (
                <>
                  {/* Static page (the revealed / underlying page) */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full overflow-hidden">
                      {isFlipping ? mobileContent : mobileContent}
                    </div>
                  </div>

                  {/* Shadow on revealed page during flip */}
                  {isFlipping && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none mix-blend-multiply"
                      style={{
                        zIndex: 12,
                        opacity: revealedShadow,
                        background:
                          "linear-gradient(to right, rgba(100,95,80,0.5) 0%, rgba(150,145,130,0.1) 50%, transparent 100%)",
                      }}
                    />
                  )}

                  {/* Turning sheet */}
                  {isFlipping && flipDataRef.current && (
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        transformOrigin: "left center",
                        rotateY: flipAngle,
                        translateZ: 2,
                        transformStyle: "preserve-3d",
                        zIndex: 20,
                        willChange: "transform",
                      }}
                    >
                      {/* Front face */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {flipDataRef.current.frontFace}
                        <motion.div
                          className="absolute inset-0 pointer-events-none mix-blend-multiply"
                          style={{
                            opacity: frontLightOpacity,
                            background:
                              "linear-gradient(to left, rgba(100,95,80,0.3), transparent 50%)",
                            backfaceVisibility: "hidden",
                          }}
                        />
                      </div>
                      {/* Back face */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        {flipDataRef.current.backFace}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* ═══ Page indicator ═══ */}
        <div className="mt-5 text-center">
          <span className="text-xs font-mono text-white/30">
            {isMobile
              ? `Page ${pageIndex + 1} of ${TOTAL_PAGES}`
              : `Pages ${currentSpread * 2 + 1}–${Math.min(currentSpread * 2 + 2, TOTAL_PAGES)} of ${TOTAL_PAGES}`}
          </span>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {Array.from({ length: isMobile ? TOTAL_PAGES : TOTAL_SPREADS }).map(
              (_, i) => {
                const isActive = isMobile
                  ? i === pageIndex
                  : i === currentSpread;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (isFlipping) return;
                      setPageIndex(isMobile ? i : i * 2);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-6 bg-[#00ff7f]"
                        : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                    aria-label={`Go to ${isMobile ? `page ${i + 1}` : `spread ${i + 1}`}`}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* ═══ Footer tip ═══ */}
        <div className="mt-3 text-center text-[10px] font-mono text-white/20">
          <span className="text-[#00ff7f]/40">⚡</span> Use arrow keys, scroll
          wheel, or swipe to turn pages
        </div>
      </div>
    </section>
  );
}
