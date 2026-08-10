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
    <div className="mx-5 sm:mx-6 md:mx-7 pb-3 pt-2 flex items-center justify-between text-[10px] text-[#1A1A1A]/50 font-mono relative z-[1] shrink-0 border-t border-[#008F4C]/20">
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

    {/* Header */}
    <div className="flex items-center justify-between z-10 border-b-2 border-[#008F4C]/80 pb-8 px-5 sm:px-6 md:px-7 pt-5 sm:pt-6 md:pt-7 shrink-0">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded bg-[#008F4C] flex items-center justify-center font-extrabold text-white text-xs">
          G
        </div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-[#008F4C]">
            GeeksforGeeks
          </div>
          <div className="text-[8px] text-[#1A1A1A]/60 tracking-wider font-semibold">
            Campus Body ITER
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-[9px] font-bold text-[#111511]">SOA University</div>
        <div className="text-[8px] text-[#008F4C] font-semibold">
          Academic Year 2025–26
        </div>
      </div>
    </div>

    {/* Center title */}
    <div className="my-auto text-center z-10 py-2 px-5 sm:px-6 md:px-7">
      <div className="inline-flex items-center gap-1.5 border border-[#008F4C]/30 bg-[#008F4C]/5 px-3 py-0.5 text-[9px] font-mono uppercase tracking-[0.12em] text-[#008F4C] mb-3">
        <Sparkles className="h-2.5 w-2.5" /> Official Chapter Publication
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111511] leading-none mb-1">
        Geeks <span className="text-[#008F4C]">For</span> Geeks
      </h1>
      <div className="text-base sm:text-lg font-extrabold tracking-widest text-[#008F4C] mb-4">
        2025 – 2026
      </div>
      <div className="max-w-[180px] mx-auto aspect-[16/9] overflow-hidden border-[3px] border-[#008F4C] relative mb-4 shadow-sm p-0.5 bg-white">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          alt="GFG ITER Builders"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111511]/80 via-transparent to-transparent flex items-end justify-center p-1.5">
          <span className="text-[8px] font-semibold text-white">
            ITER Campus Student Chapter · Siksha 'O' Anusandhan
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 text-[9px] font-mono text-[#008F4C] tracking-widest font-bold">
        <span>.CODE</span>
        <span className="text-[#1A1A1A]/30">·</span>
        <span>.CONNECT</span>
        <span className="text-[#1A1A1A]/30">·</span>
        <span>.CONQUER</span>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between text-[8px] text-[#1A1A1A]/50 font-semibold z-10 border-t border-[#1A1A1A]/10 pt-2 pb-3 px-5 sm:px-6 md:px-7 shrink-0">
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
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-[#008F4C] mb-1 font-bold">
        <BookOpen className="h-3 w-3" /> Chapter Overview
      </div>
      <h2 className="text-lg sm:text-xl font-black tracking-tight text-[#111511] mb-2.5 pb-2 border-b-2 border-[#008F4C]">
        Building Coders & Creating Impact
      </h2>
      <div className="space-y-2.5 text-[10px] text-[#1A1A1A]/90 leading-relaxed font-medium">
        <p>
          The{" "}
          <strong className="text-[#008F4C] font-extrabold">
            GeeksforGeeks ITER Campus Body
          </strong>{" "}
          is a student-driven technical community committed to fostering
          innovation, collaboration, and technical excellence among students
          across SOA University.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 border border-[#008F4C]/30 bg-white/50">
            <div className="font-bold text-[#008F4C] text-[9px] uppercase mb-1 tracking-wider border-b border-[#008F4C]/20 pb-0.5">
              What We Do
            </div>
            <ul className="text-[9px] text-[#1A1A1A]/80 space-y-0.5 font-semibold">
              <li>• Coding Contests & DSA</li>
              <li>• Jatuk Exchange Workshops</li>
              <li>• Founders' Unplugged</li>
              <li>• ChaiLinks Knowledge Sharing</li>
            </ul>
          </div>
          <div className="p-2 border border-[#008F4C]/30 bg-white/50">
            <div className="font-bold text-[#008F4C] text-[9px] uppercase mb-1 tracking-wider border-b border-[#008F4C]/20 pb-0.5">
              Our Impact
            </div>
            <ul className="text-[9px] text-[#1A1A1A]/80 space-y-0.5 font-semibold">
              <li>• Built strong coding culture</li>
              <li>• Mentored 1000+ students</li>
              <li>• SIH & National Ranks</li>
              <li>• Industry Mentorship</li>
            </ul>
          </div>
        </div>
        <div className="border-l-4 border-[#008F4C] pl-3 py-1.5 bg-[#008F4C]/5">
          <p className="text-[9px] text-[#111511] italic leading-relaxed font-bold">
            "Together, we are empowering future developers, encouraging
            innovation, and building a thriving tech community focused on
            growth and collaboration."
          </p>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 3 (Page 4): CORE TEAM — right page ─── */
  pg(false, 4, (
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-[#008F4C] mb-1 font-bold">
        <Users className="h-3 w-3" /> Chapter Leadership
      </div>
      <h2 className="text-lg sm:text-xl font-black tracking-tight text-[#111511] mb-2.5 pb-2 border-b-2 border-[#008F4C]">
        Core Team 2025–26
      </h2>
      <div className="space-y-2.5">
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-[#008F4C] mb-1 border-b border-[#008F4C]/20 inline-block pb-0.5">
            Faculty Mentors
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-1">
            <div className="p-2 border border-[#1A1A1A]/10 bg-white/40">
              <div className="font-bold text-[10px] text-[#111511]">
                Dr. Debahuti Mishra
              </div>
              <div className="text-[8px] text-[#1A1A1A]/70 font-semibold">
                Faculty Coordinator · HOD CSE
              </div>
            </div>
            <div className="p-2 border border-[#1A1A1A]/10 bg-white/40">
              <div className="font-bold text-[10px] text-[#111511]">
                Prof. Abhijit Dash
              </div>
              <div className="text-[8px] text-[#1A1A1A]/70 font-semibold">
                Faculty Mentor · Associate Prof
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-[#008F4C] mb-1 border-b border-[#008F4C]/20 inline-block pb-0.5">
            Student Coordinators
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-1">
            <div className="p-2 bg-[#008F4C] border border-[#008F4C] text-white shadow-sm">
              <div className="font-bold text-[10px]">
                Anubhab Samantary
              </div>
              <div className="text-[8px] font-mono font-semibold text-white/80">
                Coordinator
              </div>
            </div>
            <div className="p-2 bg-[#008F4C] border border-[#008F4C] text-white shadow-sm">
              <div className="font-bold text-[10px]">
                Akansha Ajay
              </div>
              <div className="text-[8px] font-mono font-semibold text-white/80">
                Coordinator
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-[#008F4C] mb-1 border-b border-[#008F4C]/20 inline-block pb-0.5">
            Domain Leads
          </div>
          <div className="grid grid-cols-3 gap-1.5 mt-1">
            {[
              { name: "Kabir Sharma", role: "Tech Lead" },
              { name: "Isha Nanda", role: "Design Lead" },
              { name: "Kabir Sen", role: "Events Lead" },
              { name: "Aastha Singh", role: "PR & Media" },
              { name: "Sanyukt Rai", role: "Design Lead" },
              { name: "Subhakanta Das", role: "Operations" },
            ].map((l) => (
              <div
                key={l.name}
                className="p-1.5 border border-[#1A1A1A]/15 bg-white/50 text-center"
              >
                <div className="font-bold text-[9px] text-[#111511] truncate">
                  {l.name}
                </div>
                <div className="text-[7px] font-bold text-[#008F4C] uppercase tracking-wider truncate mt-0.5">
                  {l.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 4 (Page 5): CODEUNBOUND LAUNCH — left page ─── */
  pg(true, 5, (
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-[#008F4C] mb-1 font-bold">
        <Rocket className="h-3 w-3" /> Flagship Inauguration
      </div>
      <h2 className="text-lg sm:text-xl font-black tracking-tight text-[#111511] mb-1.5 pb-2 border-b-2 border-[#008F4C]">
        CodeUnbound: The Launch
      </h2>
      <div className="flex items-center gap-3 text-[9px] font-mono text-[#1A1A1A]/70 mb-2.5 font-bold">
        <span className="flex items-center gap-1">
          <Calendar className="h-2.5 w-2.5 text-[#008F4C]" /> Nov 07, 2025
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-2.5 w-2.5 text-[#008F4C]" /> Bansuri Guru Aud.
        </span>
      </div>
      <div className="space-y-2 text-[10px] text-[#1A1A1A]/90 font-medium leading-relaxed">
        <p>
          The official grand launch of the GeeksforGeeks ITER Chapter at
          Bansuri Guru Auditorium. Attended by over 300+ enthusiastic
          builders, faculty leads, and industry guests.
        </p>
        <div className="aspect-[16/8] w-full overflow-hidden border-[3px] border-[#008F4C] p-0.5 bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
            alt="CodeUnbound Launch"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[9px]">
          <div className="p-1.5 bg-[#008F4C]/10 border border-[#008F4C]/30 font-bold text-[#111511]">
            <span className="text-[#008F4C]">⚡</span> Interactive Menti Quiz
          </div>
          <div className="p-1.5 bg-[#008F4C]/10 border border-[#008F4C]/30 font-bold text-[#111511]">
            <span className="text-[#008F4C]">🎯</span> Annual Roadmap Unveil
          </div>
        </div>
      </div>
    </div>
  )),

  /* ─── PAGE 5 (Page 6): EVENTS CONDUCTED — right page ─── */
  pg(false, 6, (
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-[#008F4C] mb-1 font-bold">
        <Zap className="h-3 w-3" /> Chapter Milestones
      </div>
      <h2 className="text-lg sm:text-xl font-black tracking-tight text-[#111511] mb-2.5 pb-2 border-b-2 border-[#008F4C]">
        Campus Events Recaps
      </h2>
      <div className="space-y-1.5 text-[10px]">
        {[
          { t: "ChaiLinks Ep 00 & Ep 01", d: "Nov & Dec 2025", desc: "Informal Chai Pe Charcha sessions on IoT, AI/ML, Cloud & TinyML." },
          { t: "Founders' Unplugged", d: "Dec 23, 2025", desc: "Podcast with Zahid Akhtar (Founder, OneLife) on startup strategy." },
          { t: "Raw & Ready Workshop", d: "Feb 04, 2026", desc: "Personality development, Eisenhower matrix & jungle survival challenge." },
          { t: "Zer0ne: Capture the Flag", d: "Apr 03, 2026", desc: "Multidisciplinary CTF competition blending technology & virtual economy." },
          { t: "Rachitva: Design-Pitch", d: "Apr 05, 2026", desc: "Fast-paced product design and pitching competition (Merlin Throne)." },
        ].map((ev) => (
          <div key={ev.t} className="p-2 bg-white/50 border-l-4 border-[#008F4C] border-y border-r border-[#1A1A1A]/10 shadow-sm">
            <div className="flex items-center justify-between font-black text-[#111511] mb-0.5">
              <span className="text-[10px] uppercase tracking-tight">{ev.t}</span>
              <span className="text-[8px] font-mono text-[#008F4C]">
                {ev.d}
              </span>
            </div>
            <p className="text-[9px] text-[#1A1A1A]/80 font-medium leading-snug">{ev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )),

  /* ─── PAGE 6 (Page 7): ACHIEVEMENTS — left page ─── */
  pg(true, 7, (
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-[#008F4C] mb-1 font-bold">
        <Trophy className="h-3 w-3" /> Hall of Fame
      </div>
      <h2 className="text-lg sm:text-xl font-black tracking-tight text-[#111511] mb-2.5 pb-2 border-b-2 border-[#008F4C]">
        Members Achievements
      </h2>
      <div className="space-y-2">
        {[
          {
            title: "24-Hour Hackathon, XIM University",
            award: "🏆 1st Prize",
            team: "Team Hex Syndicate — Sanyukt Kumar Rai, Aman Murari Singh, Pratham Gupta, Abhishek Raj, Sujal Kumar.",
          },
          {
            title: "HackFest, Advaita, IIIT Bhubaneswar",
            award: "🏆 Champions Title",
            team: "Team MindMesh — Shubham Parida, Ankita Mohapatra, Shlok Katiyar, Shreya Patel.",
          },
          {
            title: "Smart India Hackathon Internals 2025",
            award: "🏆 1st Hardware / 4th",
            team: "Team Bhumicare — Vivek Ranjan Sahoo, Ayush Ranjan Pradhan, Subasis Mishra, Depesh Singh, Anjali Rout, Subhashree Sahoo.",
          },
        ].map((a) => (
          <div
            key={a.title}
            className="p-2.5 bg-[#008F4C] text-white shadow-sm relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-16 h-16 bg-white/10 rounded-full blur-xl -mr-8 -mt-8" />
            <div className="flex items-start justify-between text-[10px] font-black mb-1 relative z-10">
              <span className="leading-tight w-2/3 uppercase">{a.title}</span>
              <span className="text-white/90 bg-black/20 px-1.5 py-0.5 rounded text-[8px] shrink-0 ml-2">{a.award}</span>
            </div>
            <p className="text-[8px] text-white/80 font-medium leading-relaxed relative z-10 border-t border-white/20 pt-1 mt-1">
              {a.team}
            </p>
          </div>
        ))}
      </div>
    </div>
  )),

  /* ─── PAGE 7 (Page 8): FUTURE VISION — right page ─── */
  pg(false, 8, (
    <div className="flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-[#008F4C] mb-1 font-bold">
        <Rocket className="h-3 w-3" /> Looking Ahead
      </div>
      <h2 className="text-lg sm:text-xl font-black tracking-tight text-[#111511] mb-2.5 pb-2 border-b-2 border-[#008F4C]">
        Future Vision 2026–27
      </h2>
      <div className="space-y-2.5 text-[10px] text-[#1A1A1A]/90 font-medium leading-relaxed">
        <p>
          Scaling GFG ITER into Odisha's flagship student innovation ecosystem
          — expanding national hackathon partnerships, open-source grants, and
          direct industry mentorship pipelines.
        </p>
        <div className="aspect-[16/8] w-full overflow-hidden border-[3px] border-[#008F4C] p-0.5 bg-white relative group shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
            alt="GFG ITER Core Team Group Photo 2025-26"
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[#008F4C]/90 backdrop-blur-sm p-1.5 text-center text-[8px] font-bold text-white uppercase tracking-wider">
            Executive & Core Team 2025–26
          </div>
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

export function NativeFlipBook() {
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
        staticMobile: PAGES[pageIndex - 1],
        frontFace: PAGES[pageIndex - 1],
        backFace: PAGES[pageIndex],
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
  const pageH = isMobile ? 460 : 560;

  /* ──────── Render ──────── */
  return (
    <section className="relative z-10 py-20 sm:py-24 overflow-hidden bg-transparent">
      {/* Ambient background glow (keep dark mode style outside the book) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-[#00ff7f]/[0.04] blur-[120px] rounded-full" />

      <div className="container-page">
        {/* ═══ Section Header ═══ */}
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
