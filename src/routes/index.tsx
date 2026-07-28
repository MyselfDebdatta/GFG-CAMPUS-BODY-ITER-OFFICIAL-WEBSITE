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
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal, SectionHeader, Counter } from "@/components/site/Primitives";
import { CanvasBackground } from "@/components/site/CanvasBackground";
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
        <div className="container-page relative pt-2 pb-20 md:pt-4 md:pb-32">
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
              <img src="/gfg-logo.png" alt="GFG Logo" className="h-20 md:h-28 w-auto object-contain -ml-2 md:-ml-4" />
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
              <Link to="/about" className="relative group block transition-transform duration-300 hover:scale-105">
                {/* Main Button */}
                <div className="relative border-2 border-[#00ff7f] rounded-xl bg-transparent px-10 py-4 text-[#00ff7f] font-bold text-lg sm:text-xl transition-all duration-300 group-hover:bg-[#00ff7f]/5 group-hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
                  Join the Community
                </div>
                {/* Overlapping Pill */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-10 rounded-full border-2 border-[#00ff7f] bg-[#010a05] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,255,127,0.2)]">
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
                  <div key={s.label} className="relative text-center group">
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white transition-all duration-300 group-hover:scale-110 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#32CD32] group-hover:via-[#e2da24] group-hover:to-[#32CD32]">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#00ff7f]/70 group-hover:text-[#32CD32] transition-colors">
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
                <div key={f.title} className="group rounded-xl border border-[#00ff7f]/20 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#00ff7f]/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,127,0.15)]">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#00ff7f]/10 text-[#00ff7f] transition-transform duration-300 group-hover:bg-[#00ff7f]/20 group-hover:scale-110">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 font-semibold text-white group-hover:text-[#00ff7f] transition-colors">{f.title}</div>
                  <p className="mt-1 text-sm text-white/60">{f.body}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-8 -ml-3 text-brand hover:text-brand hover:bg-brand/5">
              <Link to="/about">
                Read our story <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#00ff7f]/30 bg-gradient-to-br from-[#00ff7f]/10 via-transparent to-transparent shadow-[0_0_40px_rgba(0,255,127,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70"
                alt="GFG ITER community at a workshop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-[#00ff7f]/20 bg-black/40 backdrop-blur-xl p-4 shadow-[0_0_20px_rgba(0,255,127,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#00ff7f] text-[#020b06] font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Est. 2022 · ITER, SOA</div>
                    <div className="text-xs text-muted-foreground">A university-recognized student chapter</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Separator */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#00ff7f]/20 to-transparent" />

      {/* EVENTS PREVIEW */}
      <section className="relative z-10 py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Upcoming"
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
                  <div className="flex flex-col h-full rounded-3xl border border-[#00ff7f]/30 bg-white/5 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-[#00ff7f]/60 hover:shadow-[0_0_40px_rgba(0,255,127,0.2)] relative group">
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-[#00ff7f]/50 bg-[#020b06]/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00ff7f] backdrop-blur-md shadow-[0_0_15px_rgba(0,255,127,0.3)]">
                      <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse" /> UPCOMING
                    </div>
                    <EventCardContent event={e} />
                  </div>
                </Reveal>
              ))}
              {EVENTS.filter((e) => e.status === "ongoing").slice(0, 1).map((e, i) => (
                <Reveal key={e.id} delay={0.2}>
                  <div className="flex flex-col h-full rounded-3xl border border-[#3b82f6]/40 bg-white/5 overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 hover:border-[#3b82f6]/70 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] relative group">
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-[#3b82f6]/50 bg-[#020b06]/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3b82f6] backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <CirclePlay className="h-3.5 w-3.5 animate-pulse text-[#3b82f6]" /> ONGOING
                    </div>
                    <EventCardContent event={e} />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Timeline: Past Events */}
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-2.5 w-2.5 rounded-full bg-[#00ff7f] shadow-[0_0_10px_rgba(0,255,127,0.8)]" />
                <h3 className="text-xl font-bold tracking-tight text-white">Past Events</h3>
              </div>
              <div className="relative border-l-2 border-[#00ff7f]/20 ml-1.5 space-y-8 pb-4">
                {EVENTS.filter((e) => e.status === "past").map((e, i) => (
                  <Reveal key={e.id} delay={i * 0.1}>
                    <div className="relative pl-8 sm:pl-12 group">
                      <div className="absolute left-[-5px] top-4 h-2 w-2 rounded-full bg-[#00ff7f]/50 ring-4 ring-[#020b06] transition-all group-hover:bg-[#00ff7f] group-hover:shadow-[0_0_15px_rgba(0,255,127,1)]" />
                      <Link to="/events" className="block overflow-hidden rounded-2xl border border-[#00ff7f]/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff7f]/50 hover:shadow-[0_0_30px_rgba(0,255,127,0.15)] sm:flex">
                        <div className="sm:w-1/3 relative overflow-hidden aspect-video sm:aspect-auto">
                          <img
                            src={e.image}
                            alt={e.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2 py-1 text-[10px] font-semibold text-muted-foreground backdrop-blur">
                            Offline
                          </span>
                        </div>
                        <div className="p-5 sm:w-2/3 flex flex-col justify-center">
                          <div className="flex items-center gap-3 text-xs font-medium">
                            <span className="rounded-full bg-[#00ff7f]/10 border border-[#00ff7f]/20 px-2.5 py-0.5 text-[#00ff7f]">{e.category}</span>
                            <span className="text-white/60">{e.date}</span>
                          </div>
                          <h4 className="mt-3 text-lg font-bold">{e.title}</h4>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{e.description}</p>
                        </div>
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#00ff7f]/20 to-transparent" />

      {/* TEAM PREVIEW */}
      <section className="relative z-10 container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Leadership"
            title="The people behind GFG ITER"
            description="A small, focused team of student engineers and designers."
          />
          <Button asChild variant="outline" className="border-foreground/15">
            <Link to="/team">
              Full team <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {TEAM.slice(0, 9).map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#00ff7f]/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[#00ff7f]/50 hover:shadow-[0_0_30px_rgba(0,255,127,0.15)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#0A66C2] shadow-lg transition-transform duration-300 hover:scale-110 z-10"
                      aria-label={`${m.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium uppercase tracking-wider text-brand">{m.role}</div>
                  <div className="mt-1 font-semibold">{m.name}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#00ff7f]/20 to-transparent" />

      {/* ALUMNI / RECRUITERS */}
      <section className="relative z-10 overflow-hidden py-24">
        
        <div className="container-page flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-5 py-2 text-xs font-bold tracking-[0.15em] text-[#00ff7f] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff7f] animate-pulse" />
            ALUMNI NETWORK
          </span>
          
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,255,127,0.2)] text-center">
            Where our alumni build
          </h2>
          
          <p className="mt-4 max-w-2xl text-center text-lg text-[#00ff7f]/60 font-medium">
            Members of GFG ITER go on to top tech companies, research labs, and grad schools.
          </p>

          <div className="mt-20 w-full relative">
            <div 
              className="flex flex-col gap-16"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
              }}
            >
              {/* Row 1: Left to Right */}
              <div
                className="flex w-max animate-marquee gap-24 whitespace-nowrap items-center"
                style={{ animationDuration: "50s" }}
              >
                {[...RECRUITERS.slice(0, 14), ...RECRUITERS.slice(0, 14)].map((r, i) => (
                  <div key={i} className="flex items-center justify-center min-w-[200px] group relative">
                    <img 
                      src={`https://logo.clearbit.com/${r.domain}`} 
                      alt={r.name} 
                      className="h-16 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.src.includes('logo.clearbit.com')) {
                          img.src = `https://www.google.com/s2/favicons?domain=${r.domain}&sz=128`;
                        } else if (img.src.includes('google.com/s2/favicons')) {
                          img.style.display = 'none';
                          img.nextElementSibling?.classList.remove('hidden');
                        }
                      }} 
                    />
                    <span className="hidden text-3xl font-black uppercase tracking-widest text-[#00ff7f]" style={{ WebkitTextStroke: "1px rgba(0, 255, 127, 0.5)" }}>{r.name}</span>
                  </div>
                ))}
              </div>

              {/* Row 2: Right to Left */}
              <div
                className="flex w-max animate-marquee-reverse gap-24 whitespace-nowrap items-center"
                style={{ animationDuration: "55s" }}
              >
                {[...RECRUITERS.slice(14), ...RECRUITERS.slice(14)].map((r, i) => (
                  <div key={i} className="flex items-center justify-center min-w-[200px] group relative">
                    <img 
                      src={`https://logo.clearbit.com/${r.domain}`} 
                      alt={r.name} 
                      className="h-16 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.src.includes('logo.clearbit.com')) {
                          img.src = `https://www.google.com/s2/favicons?domain=${r.domain}&sz=128`;
                        } else if (img.src.includes('google.com/s2/favicons')) {
                          img.style.display = 'none';
                          img.nextElementSibling?.classList.remove('hidden');
                        }
                      }} 
                    />
                    <span className="hidden text-3xl font-black uppercase tracking-widest text-[#00ff7f]" style={{ WebkitTextStroke: "1px rgba(0, 255, 127, 0.5)" }}>{r.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button asChild className="group relative rounded-full border border-[#00ff7f]/50 bg-[#00ff7f]/5 px-8 py-6 text-[#00ff7f] font-bold text-lg backdrop-blur-md transition-all hover:bg-[#00ff7f]/10 hover:shadow-[0_0_25px_rgba(0,255,127,0.25)]">
              <Link to="/alumni" className="flex items-center gap-2">
                Meet our alumni 
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
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
        
        <div className="relative mt-10 w-full overflow-hidden pt-6 pb-10">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#020b06] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#020b06] to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max animate-marquee gap-6 sm:gap-8 whitespace-nowrap"
            style={{ animationDuration: "50s" }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure key={i} className="relative w-[300px] sm:w-[380px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#00ff7f]/50 hover:shadow-[0_0_30px_rgba(0,255,127,0.2)] group cursor-default whitespace-normal flex flex-col justify-between">
                <div className="absolute -right-4 -top-8 text-[140px] font-serif leading-none text-[#00ff7f]/5 group-hover:text-[#00ff7f]/10 transition-colors pointer-events-none select-none">"</div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff7f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <blockquote className="relative z-10 text-sm sm:text-base leading-relaxed text-white/90 font-medium">
                  "{t.quote}"
                </blockquote>
                
                <figcaption className="relative z-10 mt-8 flex items-center gap-4 border-t border-white/10 pt-5 group-hover:border-[#00ff7f]/30 transition-colors">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#00ff7f]/20 to-[#00ff7f]/5 border border-[#00ff7f]/30 text-[#00ff7f] font-bold text-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-[#00ff7f] opacity-0 group-hover:opacity-20 animate-pulse" />
                    {t.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm sm:text-base font-bold text-white tracking-wide truncate group-hover:text-[#00ff7f] transition-colors">{t.name}</div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#00ff7f]/70 font-semibold truncate">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="relative z-10 container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-[#00ff7f]/30 bg-black/40 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(0,255,127,0.1),0_0_40px_rgba(0,255,127,0.1)] p-8 md:p-14 transition-all duration-500 hover:border-[#00ff7f]/60 hover:shadow-[inset_0_0_30px_rgba(0,255,127,0.2),0_0_50px_rgba(0,255,127,0.2)] group">
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Stay in the loop"
                title="Event drops, project updates, opportunities."
                description="One email a month. No spam. Ever."
              />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <Input type="email" required placeholder="you@iter.ac.in" className="h-12 bg-white/5 border-[#00ff7f]/20 text-white placeholder:text-white/40 focus:border-[#00ff7f]/50 transition-colors" />
              <Button type="submit" className="h-12 px-6 bg-[#00ff7f] text-[#020b06] hover:bg-[#00ff7f]/90 hover:shadow-[0_0_15px_rgba(0,255,127,0.4)] font-bold transition-all">
                Subscribe <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventCardContent({ event }: { event: (typeof EVENTS)[number] }) {
  return (
    <Link
      to="/events/$eventId"
      params={{ eventId: event.id }}
      className="group flex flex-col h-full"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="text-sm font-semibold tracking-wide" style={{ color: event.status === 'ongoing' ? '#3b82f6' : '#00ff7f' }}>{event.date}</div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">{event.title}</h3>
        <p className="mt-3 text-base text-white/60 line-clamp-2 flex-1">{event.description}</p>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors" style={{ color: event.status === 'ongoing' ? 'rgba(59,130,246,0.8)' : 'rgba(0,255,127,0.8)' }}>
          Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
