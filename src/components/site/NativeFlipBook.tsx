import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  ExternalLink, 
  Share2, 
  Check, 
  Maximize2, 
  Minimize2, 
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
  Terminal,
  Star
} from "lucide-react";

const PAGES = [
  // PAGE 1: COVER
  {
    id: 1,
    type: "cover",
    title: "GFG ITER Annual Report 2025–26",
    subtitle: ".CODE · .CONNECT · .CONQUER",
    content: (
      <div className="h-full w-full flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-[#04140a] via-[#020b06] to-[#082213] text-white relative overflow-hidden border border-[#00ff7f]/30 rounded-2xl shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff7f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00ff7f]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top Header Logos */}
        <div className="flex items-center justify-between z-10 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#00ff7f]/20 border border-[#00ff7f]/40 flex items-center justify-center font-extrabold text-[#00ff7f] text-lg">
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
        <div className="my-auto text-center z-10 py-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#00ff7f] mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Official Chapter Publication
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none mb-3">
            Geeks <span className="text-[#00ff7f]">For</span> Geeks
          </h1>
          
          <div className="text-2xl sm:text-3xl font-extrabold tracking-widest text-[#00ff7f]/90 mb-6">
            2025 – 2026
          </div>

          <div className="max-w-md mx-auto aspect-[16/9] rounded-xl overflow-hidden border border-[#00ff7f]/30 shadow-[0_0_30px_rgba(0,255,127,0.2)] relative group mb-6">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="GFG ITER Builders" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-3">
              <span className="text-xs font-semibold text-white/90">ITER Campus Student Chapter · Siksha 'O' Anusandhan</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 text-xs font-mono text-[#00ff7f] tracking-widest font-bold">
            <span>.CODE</span>
            <span>·</span>
            <span>.CONNECT</span>
            <span>·</span>
            <span>.CONQUER</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-white/60 z-10 border-t border-white/10 pt-4">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <Terminal className="h-4 w-4" /> CHAPTER ARCHIVE INDEX
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6 border-b-2 border-[#00ff7f] pb-3">
            INDEX
          </h2>

          <div className="space-y-4">
            {[
              { num: "01", title: "About the Club", desc: "Vision, mission, and core community values", page: "03" },
              { num: "02", title: "Core Team & Mentors", desc: "Faculty coordinators & domain leads", page: "04" },
              { num: "03", title: "CodeUnbound Flagship Launch", desc: "Kickstarting innovation & coding culture", page: "05" },
              { num: "04", title: "Events Conducted", desc: "ChaiLinks, Founders' Unplugged, Zer0ne, Rachitva", page: "06" },
              { num: "05", title: "Members Achievements", desc: "National Hackathons & SIH 2025 Victories", page: "07" },
              { num: "06", title: "Future Vision & Core Team Photo", desc: "Roadmap for 2026-27 & Chapter Group Photo", page: "08" },
            ].map((item) => (
              <div key={item.num} className="group flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/5 hover:border-[#00ff7f]/40 hover:bg-[#00ff7f]/10 transition-all cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00ff7f]/20 text-[#00ff7f] font-mono font-extrabold text-sm">
                  {item.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-white group-hover:text-[#00ff7f] transition-colors">{item.title}</h3>
                    <span className="font-mono text-xs text-[#00ff7f]/70 font-semibold">PAGE {item.page}</span>
                  </div>
                  <p className="text-xs text-white/60 line-clamp-1 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-3 rounded-xl border border-[#00ff7f]/20 bg-[#00ff7f]/5 text-center text-xs font-mono text-[#00ff7f]">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <BookOpen className="h-4 w-4" /> CHAPTER OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 border-b border-white/10 pb-3">
            Building Coders & Creating Impact
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
            <p className="font-medium text-white/90">
              The <strong className="text-[#00ff7f]">GeeksforGeeks ITER Campus Body</strong> is a student-driven technical community committed to fostering innovation, collaboration, and technical excellence among students across SOA University.
            </p>

            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="p-3 rounded-xl border border-white/10 bg-white/5">
                <div className="font-bold text-[#00ff7f] text-xs uppercase mb-1">What We Do</div>
                <ul className="text-[11px] text-white/70 space-y-1">
                  <li>• Coding Contests & DSA Sessions</li>
                  <li>• Jatuk Exchange Workshops</li>
                  <li>• Founders' Unplugged Podcast</li>
                  <li>• ChaiLinks Knowledge Sharing</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl border border-white/10 bg-white/5">
                <div className="font-bold text-[#00ff7f] text-xs uppercase mb-1">Our Impact</div>
                <ul className="text-[11px] text-white/70 space-y-1">
                  <li>• Built strong coding culture</li>
                  <li>• Mentored 1000+ students</li>
                  <li>• SIH & National Hackathon Ranks</li>
                  <li>• Industry & Peer Mentorship</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-[#00ff7f]/30 bg-[#00ff7f]/10 p-4 text-center">
              <p className="text-xs font-semibold text-[#00ff7f] italic">
                "Together, we are empowering future developers, encouraging innovation, and building a thriving tech community focused on growth and collaboration."
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <Users className="h-4 w-4" /> CHAPTER LEADERSHIP
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 border-b border-white/10 pb-3">
            Core Team 2025–26
          </h2>

          <div className="space-y-4">
            {/* Faculty */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00ff7f] mb-2">Faculty Mentors</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg border border-white/10 bg-white/5">
                  <div className="font-bold text-xs text-white">Dr. Debahuti Mishra</div>
                  <div className="text-[10px] text-white/60">Faculty Coordinator · HOD CSE</div>
                </div>
                <div className="p-2.5 rounded-lg border border-white/10 bg-white/5">
                  <div className="font-bold text-xs text-white">Prof. Abhijit Dash</div>
                  <div className="text-[10px] text-white/60">Faculty Mentor · Associate Prof</div>
                </div>
              </div>
            </div>

            {/* Coordinators */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00ff7f] mb-2">Student Coordinators</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg border border-[#00ff7f]/30 bg-[#00ff7f]/10">
                  <div className="font-bold text-xs text-white">Anubhab Samantary</div>
                  <div className="text-[10px] text-[#00ff7f] font-mono">Coordinator</div>
                </div>
                <div className="p-2.5 rounded-lg border border-[#00ff7f]/30 bg-[#00ff7f]/10">
                  <div className="font-bold text-xs text-white">Akansha Ajay</div>
                  <div className="text-[10px] text-[#00ff7f] font-mono">Coordinator</div>
                </div>
              </div>
            </div>

            {/* Domain Leads */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00ff7f] mb-2">Domain Leads</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Kabir Sharma", role: "Tech Lead" },
                  { name: "Isha Nanda", role: "Design Lead" },
                  { name: "Kabir Sen", role: "Events Lead" },
                  { name: "Aastha Singh", role: "PR & Media" },
                  { name: "Sanyukt Rai", role: "Design Lead" },
                  { name: "Subhakanta Das", role: "Operations" },
                ].map((l) => (
                  <div key={l.name} className="p-2 rounded-lg border border-white/5 bg-white/5 text-center">
                    <div className="font-bold text-[11px] text-white truncate">{l.name}</div>
                    <div className="text-[9px] text-white/60 truncate">{l.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <Rocket className="h-4 w-4" /> FLAGSHIP INAUGURATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 border-b border-white/10 pb-3">
            CodeUnbound: The GFG Launch
          </h2>

          <div className="flex items-center gap-4 text-xs font-mono text-[#00ff7f] mb-4">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Nov 07, 2025</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Bansuri Guru Auditorium</span>
          </div>

          <div className="space-y-3 text-xs text-white/80 leading-relaxed">
            <p>
              The official grand launch of the GeeksforGeeks ITER Chapter at Bansuri Guru Auditorium. Attended by over 300+ enthusiastic builders, faculty leads, and industry guests.
            </p>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 my-3">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" 
                alt="CodeUnbound Launch" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 font-semibold">
                ⚡ Interactive Menti Live Quiz
              </div>
              <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 font-semibold">
                🎯 Annual Roadmap Unveil
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <Zap className="h-4 w-4" /> CHAPTER MILESTONES
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 border-b border-white/10 pb-3">
            Campus Events Recaps
          </h2>

          <div className="space-y-2.5 text-xs">
            {[
              { title: "ChaiLinks Ep 00 & Ep 01", date: "Nov & Dec 2025", desc: "Informal Chai Pe Charcha sessions on IoT, AI/ML, Cloud & TinyML." },
              { title: "Founders' Unplugged", date: "Dec 23, 2025", desc: "Podcast with Zahid Akhtar (Founder, OneLife) on startup strategy." },
              { title: "Raw & Ready Workshop", date: "Feb 04, 2026", desc: "Personality development, Eisenhower matrix & jungle survival challenge." },
              { title: "Zer0ne: Capture the Flag", date: "Apr 03, 2026", desc: "Multidisciplinary CTF competition blending technology & virtual economy." },
              { title: "Rachitva: Design-Pitch", date: "Apr 05, 2026", desc: "Fast-paced product design and pitching competition (Merlin Throne)." },
            ].map((ev) => (
              <div key={ev.title} className="p-2.5 rounded-lg border border-white/5 bg-white/5">
                <div className="flex items-center justify-between font-bold text-white mb-0.5">
                  <span className="text-[#00ff7f]">{ev.title}</span>
                  <span className="text-[10px] font-mono text-white/50">{ev.date}</span>
                </div>
                <p className="text-[11px] text-white/70 leading-normal">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <Trophy className="h-4 w-4" /> HALL OF FAME
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 border-b border-white/10 pb-3">
            Members Achievements
          </h2>

          <div className="space-y-3">
            <div className="p-3 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span>24-Hour Hackathon, XIM University</span>
                <span className="text-[#00ff7f]">🏆 1st Prize</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Team Hex Syndicate — Sanyukt Kumar Rai, Aman Murari Singh, Pratham Gupta, Abhishek Raj, Sujal Kumar.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span>HackFest, Advaita, IIIT Bhubaneswar</span>
                <span className="text-[#00ff7f]">🏆 Champions Title</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Team MindMesh — Shubham Parida, Ankita Mohapatra, Shlok Katiyar, Shreya Patel.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10">
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span>Smart India Hackathon Internals 2025</span>
                <span className="text-[#00ff7f]">🏆 1st Hardware / 4th Overall</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Team Bhumicare — Vivek Ranjan Sahoo, Ayush Ranjan Pradhan, Subasis Mishra, Depesh Singh, Anjali Rout, Subhashree Sahoo.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
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
      <div className="h-full w-full flex flex-col justify-between p-6 sm:p-8 bg-[#06140b] text-white border border-white/10 rounded-2xl relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00ff7f] mb-2">
            <Rocket className="h-4 w-4" /> LOOKING AHEAD
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 border-b border-white/10 pb-3">
            Future Vision 2026–27
          </h2>

          <div className="space-y-3 text-xs text-white/80 leading-relaxed">
            <p>
              Scaling GFG ITER into Odisha's flagship student innovation ecosystem — expanding national hackathon partnerships, open-source grants, and direct industry mentorship pipelines.
            </p>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#00ff7f]/30 my-3 shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" 
                alt="GFG ITER Core Team Group Photo 2025-26" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-md p-2 text-center text-[10px] font-bold text-[#00ff7f]">
                GFG ITER Executive & Core Team Members 2025–26
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 pt-3">
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
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
        // In 2-page spread mode, advance by 2
        return Math.min(prev + 2, totalPages - 1);
      }
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      if (isMobile) {
        return Math.max(prev - 1, 0);
      } else {
        // In 2-page spread mode, regress by 2
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

  const handleShare = () => {
    navigator.clipboard.writeText(flipbookExternalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all hover:border-[#00ff7f]/50 hover:bg-[#00ff7f]/10 hover:text-[#00ff7f] active:scale-95 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#00ff7f]" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>Share Report</span>
                </>
              )}
            </button>

            <a
              href={flipbookExternalUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-bold text-white/80 backdrop-blur-md transition-all hover:border-[#00ff7f] hover:text-[#00ff7f] active:scale-95 shadow-md"
            >
              <span>View External PDF</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* NATIVE INTERACTIVE FLIPBOOK CONTAINER */}
        <div 
          ref={containerRef}
          className={`relative rounded-3xl border border-[#00ff7f]/30 bg-[#020b06]/90 backdrop-blur-2xl p-4 sm:p-6 md:p-8 shadow-[inset_0_0_40px_rgba(0,255,127,0.05),0_25px_60px_-10px_rgba(0,0,0,0.9)] overflow-hidden ${
            isExpanded ? "fixed inset-4 z-[9999] h-[calc(100vh-2rem)] flex flex-col justify-between" : ""
          }`}
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
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs">
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

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:border-[#00ff7f] hover:text-[#00ff7f] transition-all"
                aria-label="Toggle Fullscreen Reader"
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* MAIN BOOK SPREAD VIEWPORT WITH 3D PAGE FLIP TRANSITION */}
          <div className="relative my-auto flex-1 min-h-[460px] sm:min-h-[540px] md:min-h-[600px] flex items-center justify-center py-2 px-2 sm:px-10">
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
            <div className="w-full max-w-5xl aspect-[16/10] max-h-[640px] relative flex items-center justify-center perspective-1000">
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
