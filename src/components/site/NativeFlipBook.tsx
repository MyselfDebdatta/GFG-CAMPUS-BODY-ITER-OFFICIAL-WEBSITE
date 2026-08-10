import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Trophy, 
  Users, 
  Code2, 
  Calendar, 
  MapPin, 
  Rocket, 
  Award, 
  ShieldCheck, 
  Zap, 
  Terminal
} from "lucide-react";

const PAGES = [
  // PAGE 1: COVER
  {
    id: 1,
    type: "cover",
    title: "GFG ITER Annual Report 2025–26",
    subtitle: ".CODE · .CONNECT · .CONQUER",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-gradient-to-br from-[#04140a] via-[#020b06] to-[#082213] text-white relative overflow-hidden border border-[#00ff7f]/30 rounded-2xl shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff7f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff7f]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top Header Logos */}
        <div className="flex items-center justify-between z-10 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-[#00ff7f]/20 border border-[#00ff7f]/40 flex items-center justify-center font-extrabold text-[#00ff7f] text-base">
              G
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#00ff7f]">GeeksforGeeks</div>
              <div className="text-[10px] text-white/60 tracking-wider">Campus Body ITER</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-white/80">SOA University</div>
            <div className="text-[10px] text-[#00ff7f]">Academic Year 2025–26</div>
          </div>
        </div>

        {/* Center Artwork & Main Title */}
        <div className="my-auto text-center z-10 py-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.15em] text-[#00ff7f] mb-3">
            <Sparkles className="h-3 w-3" /> Official Chapter Publication
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none mb-2">
            Geeks <span className="text-[#00ff7f]">For</span> Geeks
          </h1>
          
          <div className="text-xl sm:text-2xl font-extrabold tracking-widest text-[#00ff7f]/90 mb-3">
            2025 – 2026
          </div>

          <div className="max-w-xs mx-auto aspect-[16/9] rounded-xl overflow-hidden border border-[#00ff7f]/30 shadow-[0_0_25px_rgba(0,255,127,0.15)] relative group mb-3">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="GFG ITER Builders" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-2">
              <span className="text-[11px] font-semibold text-white/90">ITER Campus Student Chapter · Siksha 'O' Anusandhan</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 text-[11px] font-mono text-[#00ff7f] tracking-widest font-bold">
            <span>.CODE</span>
            <span>·</span>
            <span>.CONNECT</span>
            <span>·</span>
            <span>.CONQUER</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/60 z-10 border-t border-white/10 pt-2.5 shrink-0">
          <span>Published by GFG ITER Media Board</span>
          <span>Bhubaneswar, Odisha</span>
        </div>
      </div>
    )
  },

  // PAGE 2: TABLE OF CONTENTS
  {
    id: 2,
    type: "index",
    title: "Table of Contents",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <Terminal className="h-3.5 w-3.5" /> CHAPTER ARCHIVE INDEX
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white mb-4 border-b-2 border-[#00ff7f] pb-2">
            INDEX
          </h2>

          <div className="space-y-2.5">
            {[
              { num: "01", title: "About the Club", desc: "Vision, mission, and core community values", page: "03" },
              { num: "02", title: "Core Team & Mentors", desc: "Faculty coordinators & domain leads", page: "04" },
              { num: "03", title: "CodeUnbound Flagship Launch", desc: "Kickstarting innovation & coding culture", page: "05" },
              { num: "04", title: "Events Conducted", desc: "ChaiLinks, Founders' Unplugged, Zer0ne, Rachitva", page: "06" },
              { num: "05", title: "Members Achievements", desc: "National Hackathons & SIH 2025 Victories", page: "07" },
              { num: "06", title: "Future Vision & Core Team Photo", desc: "Roadmap for 2026-27 & Chapter Group Photo", page: "08" },
            ].map((item) => (
              <div key={item.num} className="group flex items-center gap-3 p-2.5 rounded-xl border border-white/5 bg-white/5 hover:border-[#00ff7f]/40 hover:bg-[#00ff7f]/10 transition-all cursor-pointer">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00ff7f]/20 text-[#00ff7f] font-mono font-extrabold text-xs">
                  {item.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xs text-white group-hover:text-[#00ff7f] transition-colors">{item.title}</h3>
                    <span className="font-mono text-[10px] text-[#00ff7f]/80 font-semibold">PAGE {item.page}</span>
                  </div>
                  <p className="text-[10px] text-white/60 line-clamp-1 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 p-2 rounded-xl border border-[#00ff7f]/20 bg-[#00ff7f]/5 text-center text-[10px] font-mono text-[#00ff7f] shrink-0">
          GeeksforGeeks Campus Body ITER · Annual Edition 2025–26
        </div>
      </div>
    )
  },

  // PAGE 3: ABOUT THE CLUB
  {
    id: 3,
    type: "content",
    title: "About the Club",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <BookOpen className="h-3.5 w-3.5" /> CHAPTER OVERVIEW
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3 border-b border-white/10 pb-2">
            Building Coders & Creating Impact
          </h2>

          <div className="space-y-3 text-xs sm:text-xs text-white/80 leading-relaxed">
            <p className="font-medium text-white/90">
              The <strong className="text-[#00ff7f]">GeeksforGeeks ITER Campus Body</strong> is a student-driven technical community committed to fostering innovation, collaboration, and technical excellence among students across SOA University.
            </p>

            <div className="grid grid-cols-2 gap-2.5 my-3">
              <div className="p-2.5 rounded-xl border border-white/10 bg-white/5">
                <div className="font-bold text-[#00ff7f] text-[11px] uppercase mb-1">What We Do</div>
                <ul className="text-[10px] text-white/70 space-y-1">
                  <li>• Coding Contests & DSA Sessions</li>
                  <li>• Jatuk Exchange Workshops</li>
                  <li>• Founders' Unplugged Podcast</li>
                  <li>• ChaiLinks Knowledge Sharing</li>
                </ul>
              </div>
              <div className="p-2.5 rounded-xl border border-white/10 bg-white/5">
                <div className="font-bold text-[#00ff7f] text-[11px] uppercase mb-1">Our Impact</div>
                <ul className="text-[10px] text-white/70 space-y-1">
                  <li>• Built strong coding culture</li>
                  <li>• Mentored 1000+ students</li>
                  <li>• SIH & National Hackathon Ranks</li>
                  <li>• Industry & Peer Mentorship</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-[#00ff7f]/30 bg-[#00ff7f]/10 p-3 text-center">
              <p className="text-[11px] font-semibold text-[#00ff7f] italic">
                "Together, we are empowering future developers, encouraging innovation, and building a thriving tech community focused on growth and collaboration."
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 border-t border-white/10 pt-2.5 shrink-0">
          <span>PAGE 03</span>
          <span>GEEKSFORGEEKS CAMPUS BODY ITER</span>
        </div>
      </div>
    )
  },

  // PAGE 4: CORE TEAM & LEADERSHIP
  {
    id: 4,
    type: "team",
    title: "Core Team & Mentors",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <Users className="h-3.5 w-3.5" /> CHAPTER LEADERSHIP
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3 border-b border-white/10 pb-2">
            Core Team 2025–26
          </h2>

          <div className="space-y-3">
            {/* Faculty */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00ff7f] mb-1.5">Faculty Mentors</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg border border-white/10 bg-white/5">
                  <div className="font-bold text-xs text-white">Dr. Debahuti Mishra</div>
                  <div className="text-[10px] text-white/60">Faculty Coordinator · HOD CSE</div>
                </div>
                <div className="p-2 rounded-lg border border-white/10 bg-white/5">
                  <div className="font-bold text-xs text-white">Prof. Abhijit Dash</div>
                  <div className="text-[10px] text-white/60">Faculty Mentor · Associate Prof</div>
                </div>
              </div>
            </div>

            {/* Coordinators */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00ff7f] mb-1.5">Student Coordinators</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg border border-[#00ff7f]/30 bg-[#00ff7f]/10">
                  <div className="font-bold text-xs text-white">Anubhab Samantary</div>
                  <div className="text-[10px] text-[#00ff7f] font-mono">Coordinator</div>
                </div>
                <div className="p-2 rounded-lg border border-[#00ff7f]/30 bg-[#00ff7f]/10">
                  <div className="font-bold text-xs text-white">Akansha Ajay</div>
                  <div className="text-[10px] text-[#00ff7f] font-mono">Coordinator</div>
                </div>
              </div>
            </div>

            {/* Domain Leads */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00ff7f] mb-1.5">Domain Leads</div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { name: "Kabir Sharma", role: "Tech Lead" },
                  { name: "Isha Nanda", role: "Design Lead" },
                  { name: "Kabir Sen", role: "Events Lead" },
                  { name: "Aastha Singh", role: "PR & Media" },
                  { name: "Sanyukt Rai", role: "Design Lead" },
                  { name: "Subhakanta Das", role: "Operations" },
                ].map((l) => (
                  <div key={l.name} className="p-1.5 rounded-lg border border-white/5 bg-white/5 text-center">
                    <div className="font-bold text-[10px] text-white truncate">{l.name}</div>
                    <div className="text-[9px] text-white/60 truncate">{l.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 border-t border-white/10 pt-2.5 shrink-0">
          <span>PAGE 04</span>
          <span>GEEKSFORGEEKS CAMPUS BODY ITER</span>
        </div>
      </div>
    )
  },

  // PAGE 5: CODE UNBOUND LAUNCH
  {
    id: 5,
    type: "event",
    title: "CodeUnbound Flagship Launch",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <Rocket className="h-3.5 w-3.5" /> FLAGSHIP INAUGURATION
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-2 border-b border-white/10 pb-2">
            CodeUnbound: The GFG Launch
          </h2>

          <div className="flex items-center gap-3 text-[11px] font-mono text-[#00ff7f] mb-3">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Nov 07, 2025</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Bansuri Guru Auditorium</span>
          </div>

          <div className="space-y-2.5 text-xs text-white/80 leading-relaxed">
            <p>
              The official grand launch of the GeeksforGeeks ITER Chapter at Bansuri Guru Auditorium. Attended by over 300+ enthusiastic builders, faculty leads, and industry guests.
            </p>

            <div className="aspect-[16/8] w-full overflow-hidden rounded-xl border border-white/10 my-2">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" 
                alt="CodeUnbound Launch" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded-lg border border-white/10 bg-white/5 font-semibold">
                ⚡ Interactive Menti Live Quiz
              </div>
              <div className="p-2 rounded-lg border border-white/10 bg-white/5 font-semibold">
                🎯 Annual Roadmap Unveil
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 border-t border-white/10 pt-2.5 shrink-0">
          <span>PAGE 05</span>
          <span>GEEKSFORGEEKS CAMPUS BODY ITER</span>
        </div>
      </div>
    )
  },

  // PAGE 6: EVENTS CONDUCTED
  {
    id: 6,
    type: "events",
    title: "Events Conducted",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <Zap className="h-3.5 w-3.5" /> CHAPTER MILESTONES
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3 border-b border-white/10 pb-2">
            Campus Events Recaps
          </h2>

          <div className="space-y-2 text-xs">
            {[
              { title: "ChaiLinks Ep 00 & Ep 01", date: "Nov & Dec 2025", desc: "Informal Chai Pe Charcha sessions on IoT, AI/ML, Cloud & TinyML." },
              { title: "Founders' Unplugged", date: "Dec 23, 2025", desc: "Podcast with Zahid Akhtar (Founder, OneLife) on startup strategy." },
              { title: "Raw & Ready Workshop", date: "Feb 04, 2026", desc: "Personality development, Eisenhower matrix & jungle survival challenge." },
              { title: "Zer0ne: Capture the Flag", date: "Apr 03, 2026", desc: "Multidisciplinary CTF competition blending technology & virtual economy." },
              { title: "Rachitva: Design-Pitch", date: "Apr 05, 2026", desc: "Fast-paced product design and pitching competition (Merlin Throne)." },
            ].map((ev) => (
              <div key={ev.title} className="p-2 rounded-lg border border-white/5 bg-white/5">
                <div className="flex items-center justify-between font-bold text-white mb-0.5">
                  <span className="text-[#00ff7f] text-[11px]">{ev.title}</span>
                  <span className="text-[9px] font-mono text-white/50">{ev.date}</span>
                </div>
                <p className="text-[10px] text-white/70 leading-tight">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 border-t border-white/10 pt-2.5 shrink-0">
          <span>PAGE 06</span>
          <span>GEEKSFORGEEKS CAMPUS BODY ITER</span>
        </div>
      </div>
    )
  },

  // PAGE 7: MEMBERS ACHIEVEMENTS
  {
    id: 7,
    type: "achievements",
    title: "Members Achievements",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <Trophy className="h-3.5 w-3.5" /> HALL OF FAME
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3 border-b border-white/10 pb-2">
            Members Achievements
          </h2>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10">
              <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                <span>24-Hour Hackathon, XIM University</span>
                <span className="text-[#00ff7f]">🏆 1st Prize</span>
              </div>
              <p className="text-[10px] text-white/80 leading-relaxed">
                Team Hex Syndicate — Sanyukt Kumar Rai, Aman Murari Singh, Pratham Gupta, Abhishek Raj, Sujal Kumar.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10">
              <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                <span>HackFest, Advaita, IIIT Bhubaneswar</span>
                <span className="text-[#00ff7f]">🏆 Champions Title</span>
              </div>
              <p className="text-[10px] text-white/80 leading-relaxed">
                Team MindMesh — Shubham Parida, Ankita Mohapatra, Shlok Katiyar, Shreya Patel.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10">
              <div className="flex items-center justify-between text-[11px] font-bold text-white mb-0.5">
                <span>Smart India Hackathon Internals 2025</span>
                <span className="text-[#00ff7f]">🏆 1st Hardware / 4th Overall</span>
              </div>
              <p className="text-[10px] text-white/80 leading-relaxed">
                Team Bhumicare — Vivek Ranjan Sahoo, Ayush Ranjan Pradhan, Subasis Mishra, Depesh Singh, Anjali Rout, Subhashree Sahoo.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 border-t border-white/10 pt-2.5 shrink-0">
          <span>PAGE 07</span>
          <span>GEEKSFORGEEKS CAMPUS BODY ITER</span>
        </div>
      </div>
    )
  },

  // PAGE 8: FUTURE VISION & GROUP PHOTO
  {
    id: 8,
    type: "closing",
    title: "Future Vision & Group Photo",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-5 sm:p-6 md:p-7 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-1.5">
            <Rocket className="h-3.5 w-3.5" /> LOOKING AHEAD
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-3 border-b border-white/10 pb-2">
            Future Vision 2026–27
          </h2>

          <div className="space-y-2.5 text-xs text-white/80 leading-relaxed">
            <p>
              Scaling GFG ITER into Odisha's flagship student innovation ecosystem — expanding national hackathon partnerships, open-source grants, and direct industry mentorship pipelines.
            </p>

            <div className="aspect-[16/8] w-full overflow-hidden rounded-xl border border-[#00ff7f]/30 my-2 shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" 
                alt="GFG ITER Core Team Group Photo 2025-26" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-md p-1.5 text-center text-[9px] font-bold text-[#00ff7f]">
                GFG ITER Executive & Core Team Members 2025–26
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 border-t border-white/10 pt-2.5 shrink-0">
          <span>PAGE 08</span>
          <span>GEEKSFORGEEKS CAMPUS BODY ITER</span>
        </div>
      </div>
    )
  }
];

export function NativeFlipBook() {
  const [currentPage, setCurrentPage] = useState(0); // 0-indexed (0 to PAGES.length - 1)
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef<number>(0);

  const flipbookExternalUrl = "https://heyzine.com/flip-book/9752568637.html#page/1";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = PAGES.length;

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (isMobile) {
        return Math.min(prev + 1, totalPages - 1);
      } else {
        return Math.min(prev + 2, totalPages - 1);
      }
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      if (isMobile) {
        return Math.max(prev - 1, 0);
      } else {
        return Math.max(prev - 2, 0);
      }
    });
  };

  // Handle Wheel Scroll Over Flipbook to Flip Pages Smoothly
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastWheelTime.current < 400) return; // 400ms throttle
      lastWheelTime.current = now;

      if (e.deltaY > 0) {
        nextPage();
      } else if (e.deltaY < 0) {
        prevPage();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, [isMobile, totalPages]);

  return (
    <section className="relative z-10 py-24 overflow-hidden bg-transparent">
      {/* Background radial ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] bg-[#00ff7f]/5 blur-[140px] rounded-full" />

      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-[#00ff7f] backdrop-blur-md mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              ANNUAL REPORT 2025–26 · LIFE AT GFG ITER
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              GFG ITER <span className="text-gradient-brand">Annual Report</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-medium leading-relaxed">
              Explore our complete chapter chronicle — interactive 3D edition showcasing our hackathons, technical workshops, team milestones, and student achievements.
            </p>
          </div>

          {/* Controls Bar - External PDF Link only */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={flipbookExternalUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-5 py-2.5 text-sm font-bold text-[#00ff7f] backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-[#020b06] hover:shadow-[0_0_20px_rgba(0,255,127,0.35)] active:scale-95 shadow-md"
            >
              <span>View External PDF</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* NATIVE INTERACTIVE FLIPBOOK CONTAINER */}
        <div 
          ref={containerRef}
          className="relative rounded-3xl border border-[#00ff7f]/30 bg-[#020b06]/90 backdrop-blur-2xl p-4 sm:p-6 md:p-8 shadow-[inset_0_0_40px_rgba(0,255,127,0.05),0_25px_60px_-10px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Top Bar inside Card */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 z-20">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00ff7f] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#00ff7f] font-bold">
                Native Interactive Reader · {isMobile ? `Page ${currentPage + 1} of ${totalPages}` : `Pages ${currentPage + 1}–${Math.min(currentPage + 2, totalPages)} of ${totalPages}`}
              </span>
            </div>

            {/* Jump to Page Pill Controls */}
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs">
              {PAGES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-6 w-6 rounded-full font-mono text-[11px] font-bold transition-all ${
                    currentPage === idx || (!isMobile && currentPage + 1 === idx)
                      ? "bg-[#00ff7f] text-[#020b06] scale-110 shadow-[0_0_10px_rgba(0,255,127,0.4)]"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {p.id}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN BOOK SPREAD VIEWPORT WITH 3D PAGE FLIP TRANSITION */}
          <div className="relative my-auto flex-1 min-h-[500px] sm:min-h-[580px] md:min-h-[640px] flex items-center justify-center py-2 px-2 sm:px-10">
            {/* Previous Page Arrow Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#00ff7f]/40 bg-[#020b06]/90 text-[#00ff7f] backdrop-blur-md transition-all ${
                currentPage === 0
                  ? "opacity-30 cursor-not-allowed border-white/10 text-white/30"
                  : "hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,255,127,0.3)]"
              }`}
              aria-label="Previous Page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Page Arrow Button */}
            <button
              onClick={nextPage}
              disabled={currentPage >= totalPages - 1}
              className={`absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#00ff7f]/40 bg-[#020b06]/90 text-[#00ff7f] backdrop-blur-md transition-all ${
                currentPage >= totalPages - 1
                  ? "opacity-30 cursor-not-allowed border-white/10 text-white/30"
                  : "hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,255,127,0.3)]"
              }`}
              aria-label="Next Page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* FLIPBOOK STAGE: 2-PAGE SPREAD ON DESKTOP / 1-PAGE ON MOBILE */}
            <div className="w-full max-w-5xl h-full min-h-[480px] sm:min-h-[560px] md:min-h-[620px] relative flex items-center justify-center perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, rotateY: -15, scale: 0.96 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: 15, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative"
                >
                  {/* Left Page (or single page on mobile) */}
                  <div className="w-full h-full shadow-[0_15px_35px_rgba(0,0,0,0.8)] rounded-2xl">
                    {PAGES[currentPage].content}
                  </div>

                  {/* Right Page (on desktop spread) */}
                  {!isMobile && (
                    <div className="w-full h-full shadow-[0_15px_35px_rgba(0,0,0,0.8)] rounded-2xl hidden md:block">
                      {PAGES[currentPage + 1] ? (
                        PAGES[currentPage + 1].content
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-[#040e08] border border-white/10 rounded-2xl p-8 text-center text-white/40">
                          <div>
                            <Sparkles className="h-10 w-10 mx-auto text-[#00ff7f]/40 mb-3" />
                            <div className="font-mono text-xs uppercase tracking-widest">End of Report</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Footer Information */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-[#00ff7f]">⚡ Tip:</span> Scroll wheel up/down over reader to turn pages seamlessly
            </div>
            <div className="flex items-center gap-4">
              <span>GeeksforGeeks Campus Body ITER</span>
              <span>·</span>
              <span className="text-[#00ff7f]">ESTD 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
