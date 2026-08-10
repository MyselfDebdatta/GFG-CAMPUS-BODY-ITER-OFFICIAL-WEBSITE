import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  Code2,
  Rocket,
  Trophy,
  ArrowUpRight,
  Cpu,
  Braces,
  Binary,
  Terminal,
  CirclePlay,
  Hexagon,
  CircuitBoard,
  Box,
  Linkedin,
  Coffee,
  Award,
  Mic,
  Lightbulb,
  Github,
  Quote,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal, SectionHeader, Counter } from "@/components/site/Primitives";
import { FAQSection } from "@/components/site/FAQ";
import { CanvasBackground } from "@/components/site/CanvasBackground";
import { WhatWeDoGallery } from "@/components/site/WhatWeDoGallery";
import { ContributorsCarousel } from "@/components/site/ContributorsCarousel";
import {
  STATS,
  MARQUEE,
  EVENTS,
  TEAM,
  RECRUITERS,
  TESTIMONIALS,
  CLUB,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GFG ITER · Home" },
      {
        name: "description",
        content:
          "Empowering the next generation of tech leaders at ITER, SOA. Learn, build, and ship with the official Geeks for Geeks student chapter.",
      },
      { property: "og:title", content: "GFG ITER · Home" },
      { property: "og:description", content: CLUB.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});



function EventIcon({ category }: { category: string }) {
  const cat = category.toLowerCase();
  if (cat.includes("community")) return <Coffee className="h-4 w-4 text-white/70 group-raw-hover:text-[#00ff7f]" />;
  if (cat.includes("competition") || cat.includes("contest")) return <Award className="h-4 w-4 text-white/70 group-raw-hover:text-[#00ff7f]" />;
  if (cat.includes("seminar")) return <Mic className="h-4 w-4 text-white/70 group-raw-hover:text-[#00ff7f]" />;
  if (cat.includes("flagship")) return <Sparkles className="h-4 w-4 text-white/70 group-raw-hover:text-[#00ff7f]" />;
  return <Users className="h-4 w-4 text-white/70 group-raw-hover:text-[#00ff7f]" />;
}

function FloatingTechElements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30, // subtle horizontal parallax
        y: (e.clientY / window.innerHeight - 0.5) * 30, // subtle vertical parallax
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const elementsData = [
    { Icon: CircuitBoard, color: "#00ffff", top: "15%", left: "10%", size: 64, delay: 0, duration: 12, rot: 5 }, // Cyan
    { Icon: Code2, color: "#ffff00", top: "65%", left: "12%", size: 56, delay: 2, duration: 15, rot: -8 }, // Yellow
    { Icon: Hexagon, color: "#7df9ff", top: "25%", right: "8%", size: 72, delay: 1, duration: 18, rot: 8 }, // Electric Blue
    { Icon: Braces, color: "#a020f0", top: "70%", right: "12%", size: 60, delay: 3, duration: 14, rot: -5 }, // Purple
    { Icon: Cpu, color: "#ffa500", top: "45%", left: "6%", size: 52, delay: 4, duration: 16, rot: 4 }, // Orange
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {elementsData.map((item, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.color,
            opacity: 0.35,
          }}
          animate={{
            y: [0, -20, 0],
            rotateY: [item.rot, item.rot + (i % 2 === 0 ? 360 : -360)],
            scale: [0.95, 1.05, 0.95],
            x: mousePos.x * (i % 2 === 0 ? 1 : -1),
            marginTop: mousePos.y * (i % 2 === 0 ? 1 : -1),
          }}
          transition={{
            y: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotateY: { duration: item.duration * 1.5, repeat: Infinity, ease: "linear" },
            scale: { duration: item.duration * 0.8, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            x: { type: "spring", stiffness: 40, damping: 20 },
            marginTop: { type: "spring", stiffness: 40, damping: 20 }
          }}
        >
          <item.Icon size={item.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

const TYPES = ["Geeks", "Programmers", "Developers", "Coders", "Creators", "Designers", "Enthusiasts"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const word = TYPES[i];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 65);
      } else {
        t = setTimeout(() => setPhase("deleting"), 1400);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), 35);
      } else {
        setPhase("typing");
        setI((n) => (n + 1) % TYPES.length);
      }
    }
    return () => clearTimeout(t!);
  }, [text, phase, i]);

  return (
    <span className="bg-gradient-to-r from-[#32CD32] via-[#e2da24] to-[#32CD32] bg-clip-text text-transparent font-bold">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[2px] bg-[#32CD32] animate-pulse" />
    </span>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen bg-[#020b06] selection:bg-[#00ff7f]/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasBackground />
      </div>
      
      {/* HERO */}
      <section className="relative z-10 overflow-hidden -mt-24 pt-24">
        <FloatingTechElements />
        <div className="container-page relative pt-10 pb-20 md:pt-16 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-5xl text-center flex flex-col items-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-8 md:gap-12 mb-8"
            >
              <img src="/SOA-PNG.webp" alt="SOA University" className="h-16 md:h-20 w-auto object-contain" />
              <div className="h-12 md:h-16 w-px bg-white/20" />
              <img src="/Concised_Light.svg" alt="GFG Logo" className="h-14 md:h-16 w-auto object-contain" />
            </motion.div>

            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-5 py-2 text-sm font-semibold tracking-[0.1em] text-[#00ff7f] backdrop-blur-md">
              <Sparkles className="h-4 w-4" /> Official SOA University Student Chapter
            </span>

            <div className="mt-6 mb-0">
              <h2 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-none tracking-normal text-[#00ff7f]"
                style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 800 }}
              >
                GeeksForGeeks
              </h2>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground mt-0">
              Campus Body ITER
            </h1>
            <div className="mt-6 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white/90">
              for <Typewriter />
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-base text-muted-foreground sm:text-xl leading-relaxed">
              Fostering technical excellence, research curiosity, interdisciplinary innovation, and career development through strong academic-industry collaboration.
            </p>
            <div className="mt-14 flex justify-center">
              <Link to="/community" className="relative group block transition-transform duration-300 raw-hover:scale-105">
                {/* Main Button */}
                <div className="relative border-2 border-[#00ff7f] rounded-xl bg-transparent px-10 py-4 text-[#00ff7f] font-bold text-lg sm:text-xl transition-all duration-300 group-raw-hover:bg-[#00ff7f]/5 group-raw-hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
                  Join the Community
                </div>
                {/* Overlapping Pill */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-10 rounded-full border-2 border-[#00ff7f] bg-[#010a05] flex items-center justify-center transition-all duration-300 group-raw-hover:shadow-[0_0_10px_rgba(0,255,127,0.2)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff7f] mt-2 animate-dot-bounce" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <Reveal delay={0.15} className="mx-auto mt-20 max-w-5xl relative z-20">
            <div className="relative rounded-3xl border border-[#00ff7f]/20 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[inset_0_0_20px_rgba(0,255,127,0.05),0_15px_40px_-10px_rgba(0,0,0,0.8)]">
              
              {/* ESTD 2025 Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-[#00ff7f]/50 bg-[#020b06] px-5 py-1.5 text-xs font-bold tracking-[0.2em] text-[#00ff7f] shadow-[0_0_15px_rgba(0,255,127,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff7f] animate-pulse" />
                ESTD 2025
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff7f] animate-pulse" />
              </div>

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff7f]/40 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff7f]/40 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ff7f]/40 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff7f]/40 rounded-br-3xl" />

              <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0 relative">
                {STATS.map((s, i) => (
                  <div key={s.label} className="relative text-center group cursor-pointer">
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight transition-all duration-300 group-raw-hover:scale-110 text-white hover-gradient-text">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#00ff7f]/70 group-raw-hover:text-[#32CD32] transition-colors">
                      {s.label}
                    </div>

                    {/* Faint Divider lines for Desktop */}
                    {i !== STATS.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#00ff7f]/30 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative border-y border-[#00ff7f]/20 bg-[#020b06] py-12 overflow-hidden">
        {/* Gradient edge masks for smooth fade out */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020b06] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020b06] to-transparent z-10 pointer-events-none" />
        
        {/* Slanted Container */}
        <div className="flex flex-col gap-6 transform -rotate-2 scale-105">
          {/* Row 1: Left to Right (Outline Text) */}
          <div
            className="flex w-max animate-marquee gap-8 whitespace-nowrap"
            style={{ animationDuration: "50s" }}
          >
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i} className="flex items-center gap-8 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-widest text-transparent" style={{ WebkitTextStroke: "1.5px rgba(0, 255, 127, 0.6)" }}>
                {m}
                <Sparkles className="w-10 h-10 text-[#00ff7f]/60" />
              </span>
            ))}
          </div>

          {/* Row 2: Right to Left (Solid Neon Text) */}
          <div
            className="flex w-max animate-marquee-reverse gap-8 whitespace-nowrap"
            style={{ animationDuration: "45s" }}
          >
            {[...MARQUEE, ...MARQUEE].reverse().map((m, i) => (
              <span key={i} className="flex items-center gap-8 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-widest text-[#00ff7f]" style={{ textShadow: "0 0 25px rgba(0,255,127,0.4)" }}>
                {m}
                <Sparkles className="w-10 h-10 text-[#00ff7f]/60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative z-10 container-page py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="About the chapter"
              title={<>A student engineering org, run like a product team.</>}
              description="GFG ITER is more than a club. We're a community of student engineers, designers, and problem-solvers building real things — together."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, title: "Build the craft", body: "Weekly workshops on DSA, systems, and modern web." },
                { icon: Users, title: "Find your people", body: "Project pods, study groups, and lifelong friendships." },
                { icon: Rocket, title: "Ship real projects", body: "From weekend hacks to campus-wide platforms." },
                { icon: Trophy, title: "Compete & win", body: "Represent ITER at hackathons across India." },
              ].map((f) => (
                <div key={f.title} className="group cursor-pointer rounded-xl border border-[#00ff7f]/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 raw-hover:border-[#00ff7f] raw-hover:bg-white/10 raw-hover:shadow-[0_0_12px_rgba(0,255,127,0.4)]">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#00ff7f]/10 text-[#00ff7f] transition-transform duration-300 group-raw-hover:bg-[#00ff7f]/20 group-raw-hover:scale-110">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 font-semibold text-white transition-all duration-300 hover-gradient-text">{f.title}</div>
                  <p className="mt-1 text-sm text-white/60">{f.body}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-8 -ml-3 text-brand raw-hover:text-brand raw-hover:bg-brand/5">
              <Link to="/about">
                Read our story <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#00ff7f]/30 bg-gradient-to-br from-[#00ff7f]/10 via-transparent to-transparent group transition-all duration-300 raw-hover:border-[#00ff7f] raw-hover:shadow-[0_0_12px_rgba(0,255,127,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70"
                alt="GFG ITER community at a workshop"
                className="h-full w-full object-cover transition-transform duration-500 group-raw-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-[#00ff7f]/20 bg-black/40 backdrop-blur-xl p-4 shadow-[0_0_20px_rgba(0,255,127,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#00ff7f] text-[#020b06] font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Est. 2025 · ITER, SOA</div>
                    <div className="text-xs text-muted-foreground">A university-recognized student chapter</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO / PHOTO GALLERY */}
      <WhatWeDoGallery />

      {/* Separator */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#00ff7f]/20 to-transparent" />

      {/* EVENTS PREVIEW */}
      <section className="relative z-10 py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="What's Next"
              title="Events & workshops"
              description="Hackathons, bootcamps, and speaker sessions — happening this semester."
            />
            <Button asChild variant="outline" className="border-foreground/15">
              <Link to="/events">
                All events <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 space-y-16">
            {/* Spotlight: Upcoming & Ongoing */}
            <div className="grid gap-6 md:grid-cols-2">
              {EVENTS.filter((e) => e.status === "upcoming").slice(0, 1).map((e, i) => (
                <Reveal key={e.id} delay={0.1}>
                  <div className="flex flex-col h-full rounded-3xl border border-[#00ff7f]/30 bg-white/5 overflow-hidden backdrop-blur-md transition-all duration-300 raw-hover:border-[#00ff7f] raw-hover:shadow-[0_0_12px_rgba(0,255,127,0.4)] relative group cursor-pointer">
                    <Link to="/events/$eventId" params={{ eventId: e.id }} className="absolute inset-0 z-20">
                      <span className="sr-only">View {e.title}</span>
                    </Link>
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-[#00ff7f]/50 bg-[#020b06]/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00ff7f] backdrop-blur-md shadow-[0_0_15px_rgba(0,255,127,0.3)]">
                      <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse" /> UP NEXT
                    </div>
                    <EventCardContent event={e} />
                  </div>
                </Reveal>
              ))}
              {EVENTS.filter((e) => e.status === "ongoing").slice(0, 1).map((e, i) => (
                <Reveal key={e.id} delay={0.2}>
                  <div className="flex flex-col h-full rounded-3xl border border-[#3b82f6]/40 bg-white/5 overflow-hidden backdrop-blur-md transition-all duration-300 raw-hover:border-[#3b82f6] raw-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] relative group cursor-pointer">
                    <Link to="/events/$eventId" params={{ eventId: e.id }} className="absolute inset-0 z-20">
                      <span className="sr-only">View {e.title}</span>
                    </Link>
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-[#3b82f6]/50 bg-[#020b06]/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3b82f6] backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <CirclePlay className="h-3.5 w-3.5 animate-pulse text-[#3b82f6]" /> ONGOING
                    </div>
                    <EventCardContent event={e} />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* View All Past Events Action Button */}
            <div className="mt-12 flex justify-center">
              <Reveal delay={0.1}>
                <Link
                  to="/events"
                  search={{ tab: "past", category: "All" }}
                  className="group relative inline-flex items-center gap-4 rounded-full border border-[#00ff7f]/40 bg-white/5 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all duration-300 hover:border-[#00ff7f] hover:bg-[#00ff7f]/10 hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] active:scale-95"
                >
                  <span className="relative z-10 text-white group-hover:text-[#00ff7f] transition-colors">
                    View All Past Events
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00ff7f]/10 text-[#00ff7f] border border-[#00ff7f]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#00ff7f] group-hover:text-[#020b06]">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#00ff7f]/20 to-transparent" />



      {/* AMAZING CONTRIBUTORS */}
      <section className="relative z-10 overflow-hidden py-24">
        <div className="container-page flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-5 py-2 text-xs font-bold tracking-[0.15em] text-[#00ff7f] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff7f] animate-pulse" />
            HALL OF FAME
          </span>
          
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,255,127,0.2)] text-center">
            Our Amazing Contributors
          </h2>
          
          <p className="mt-4 max-w-2xl text-center text-lg text-[#00ff7f]/60 font-medium">
            The talented members who drive innovation, win hackathons, and secure top internships.
          </p>

          <div className="mt-16 w-full">
            <ContributorsCarousel />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#00ff7f]/20 to-transparent" />

      {/* TESTIMONIALS */}
      <section className="relative z-10 container-page py-24">
        <SectionHeader
          eyebrow="Community"
          title="Voices of the builders"
          align="center"
        />
        
        <div 
          className="relative mt-10 w-full overflow-hidden pt-6 pb-10"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <div
            className="flex w-max animate-marquee gap-6 sm:gap-8 whitespace-nowrap"
            style={{ animationDuration: "50s" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure key={i} className="relative w-[300px] sm:w-[380px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#060D09] p-6 sm:p-8 transition-all duration-500 raw-hover:-translate-y-2 raw-hover:border-[#00ff7f] raw-hover:shadow-[0_0_12px_rgba(0,255,127,0.4)] group cursor-default whitespace-normal flex flex-col justify-between">
                <div className="absolute -right-4 -top-8 text-[140px] font-serif leading-none text-[#00ff7f]/5 group-raw-hover:text-[#00ff7f]/10 transition-colors pointer-events-none select-none">"</div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff7f]/50 to-transparent opacity-0 group-raw-hover:opacity-100 transition-opacity duration-500" />
                
                <blockquote className="relative z-10 text-sm sm:text-base leading-relaxed text-white/90 font-medium">
                  "{t.quote}"
                </blockquote>
                
                <figcaption className="relative z-10 mt-8 flex items-center gap-4 border-t border-white/10 pt-5 group-raw-hover:border-[#00ff7f]/30 transition-colors">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#00ff7f]/20 to-[#00ff7f]/5 border border-[#00ff7f]/30 text-[#00ff7f] font-bold text-xl overflow-hidden group-raw-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-[#00ff7f] opacity-0 group-raw-hover:opacity-20 animate-pulse" />
                    {t.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm sm:text-base font-bold text-white tracking-wide truncate group-raw-hover:text-[#00ff7f] transition-colors">{t.name}</div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#00ff7f]/70 font-semibold truncate">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* NEWSLETTER CTA */}
      <section className="relative z-10 container-page pb-24">
        <div className="group cursor-pointer relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#060D09] p-8 md:p-10 transition-all duration-300 raw-hover:border-[#00ff7f] raw-hover:shadow-[0_0_12px_rgba(0,255,127,0.4)]">
          {/* Uniform Grid Background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/20 bg-[#00ff7f]/10 px-4 py-1.5 text-xs font-bold tracking-[0.1em] text-[#00ff7f] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff7f]" />
                STAY IN THE LOOP
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 transition-all duration-300 text-white hover-gradient-text">
                Event drops, project updates, opportunities.
              </h2>
              <p className="text-lg text-white/60 font-medium">
                One email a month. No spam. Ever.
              </p>
            </div>
            <div className="flex lg:justify-end w-full">
              <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-lg flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  required 
                  placeholder="you@iter.ac.in" 
                  className="h-14 bg-transparent border-white/10 text-white placeholder:text-white/40 focus:border-[#00ff7f]/50 transition-colors rounded-xl text-base px-5 flex-1" 
                />
                <Button 
                  type="submit" 
                  className="h-14 px-8 rounded-xl bg-[#00ff7f] text-[#020b06] raw-hover:bg-[#00ff7f]/90 font-bold text-base transition-all shrink-0"
                >
                  Subscribe <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventCardContent({ event }: { event: (typeof EVENTS)[number] }) {
  return (
    <div
      onClick={undefined}
      className="group flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-700 group-raw-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-raw-hover:opacity-100" />
        <span className="absolute right-4 top-4 rounded-full bg-[#020b06]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 z-10">
          {event.venue.toLowerCase().includes('online') ? 'Online' : 'Offline'}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="text-sm font-semibold tracking-wide" style={{ color: event.status === 'ongoing' ? '#3b82f6' : '#00ff7f' }}>{event.date}</div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white transition-all duration-300 hover-gradient-text">{event.title}</h3>
        <p className="mt-3 text-base text-white/60 flex-1">{event.description}</p>
        <Link 
          to="/events/$eventId"
          params={{ eventId: event.id }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors raw-hover:text-white" 
          style={{ color: event.status === 'ongoing' ? 'rgba(59,130,246,0.8)' : 'rgba(0,255,127,0.8)' }}
        >
          Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-raw-hover:translate-x-1 group-raw-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
