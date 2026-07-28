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
  Box
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
    { Icon: CircuitBoard, color: "#00ffff", top: "15%", left: "10%", size: 48, delay: 0, duration: 12, rot: 5 }, // Cyan
    { Icon: Code2, color: "#ffff00", top: "65%", left: "12%", size: 42, delay: 2, duration: 15, rot: -8 }, // Yellow
    { Icon: Hexagon, color: "#7df9ff", top: "25%", right: "8%", size: 54, delay: 1, duration: 18, rot: 8 }, // Electric Blue
    { Icon: Braces, color: "#a020f0", top: "70%", right: "12%", size: 46, delay: 3, duration: 14, rot: -5 }, // Purple
    { Icon: Cpu, color: "#ffa500", top: "45%", left: "6%", size: 40, delay: 4, duration: 16, rot: 4 }, // Orange
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {elementsData.map((item, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center backdrop-blur-md rounded-2xl border border-white/10 bg-white/5"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.color,
            width: item.size * 1.8,
            height: item.size * 1.8,
            opacity: 0.35,
            filter: `drop-shadow(0 0 10px ${item.color})`,
            boxShadow: `inset 0 0 15px rgba(255,255,255,0.05)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [item.rot, item.rot + (i % 2 === 0 ? 360 : -360)],
            scale: [0.95, 1.05, 0.95],
            x: mousePos.x * (i % 2 === 0 ? 1 : -1),
            marginTop: mousePos.y * (i % 2 === 0 ? 1 : -1),
          }}
          transition={{
            y: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotate: { duration: item.duration * 2, repeat: Infinity, ease: "linear" },
            scale: { duration: item.duration * 0.8, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            x: { type: "spring", stiffness: 40, damping: 20 },
            marginTop: { type: "spring", stiffness: 40, damping: 20 }
          }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
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
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#020b06] -mt-24 pt-24">
        <CanvasBackground />
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
          <Reveal delay={0.15} className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-hairline bg-surface-elevated p-6 md:grid-cols-4 md:gap-8 md:p-10 shadow-[0_10px_60px_-30px_rgba(15,23,42,0.2)]">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold tracking-tight md:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-hairline bg-surface py-6 overflow-hidden">
        <div
          className="flex w-max animate-marquee gap-10 whitespace-nowrap"
          style={{ animationDuration: "40s" }}
        >
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-page py-24">
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
                <div key={f.title} className="rounded-xl border border-hairline bg-surface-elevated p-4">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-brand/15 via-transparent to-transparent">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=70"
                alt="GFG ITER community at a workshop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl glass-panel p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-brand-foreground font-bold">
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

      {/* EVENTS PREVIEW */}
      <section className="border-y border-hairline bg-surface py-24">
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
                  <div className="flex flex-col h-full rounded-3xl border border-hairline bg-surface-elevated overflow-hidden shadow-lg relative">
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-brand/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-foreground backdrop-blur-md shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-brand-foreground animate-pulse" /> UPCOMING
                    </div>
                    <EventCardContent event={e} />
                  </div>
                </Reveal>
              ))}
              {EVENTS.filter((e) => e.status === "ongoing").slice(0, 1).map((e, i) => (
                <Reveal key={e.id} delay={0.2}>
                  <div className="flex flex-col h-full rounded-3xl border border-brand/30 bg-surface-elevated overflow-hidden shadow-[0_0_30px_rgba(47,141,70,0.15)] relative">
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-blue-500/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                      <CirclePlay className="h-3.5 w-3.5 animate-pulse" /> ONGOING
                    </div>
                    <EventCardContent event={e} />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Timeline: Past Events */}
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-2.5 w-2.5 rounded-full bg-brand" />
                <h3 className="text-xl font-bold tracking-tight">Past Events</h3>
              </div>
              <div className="relative border-l-2 border-hairline ml-1.5 space-y-8 pb-4">
                {EVENTS.filter((e) => e.status === "past").map((e, i) => (
                  <Reveal key={e.id} delay={i * 0.1}>
                    <div className="relative pl-8 sm:pl-12 group">
                      <div className="absolute left-[-5px] top-4 h-2 w-2 rounded-full bg-muted-foreground ring-4 ring-background group-hover:bg-brand transition-colors" />
                      <Link to="/events" className="block overflow-hidden rounded-2xl border border-hairline bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-lg sm:flex">
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
                            <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-brand">{e.category}</span>
                            <span className="text-muted-foreground">{e.date}</span>
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

      {/* TEAM PREVIEW */}
      <section className="container-page py-24">
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.slice(0, 4).map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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

      {/* ALUMNI / RECRUITERS */}
      <section className="border-y border-hairline bg-surface py-20">
        <div className="container-page">
          <SectionHeader
            align="center"
            eyebrow="Alumni network"
            title="Where our alumni build"
            description="Members of GFG ITER go on to top tech companies, research labs, and grad schools."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {RECRUITERS.map((r) => (
              <div
                key={r}
                className="group flex items-center justify-center rounded-xl border border-hairline bg-surface-elevated px-4 py-6 text-sm font-semibold text-muted-foreground grayscale hover:grayscale-0 hover:text-foreground hover:border-brand/30 transition-all"
              >
                {r}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="ghost" className="text-brand hover:text-brand hover:bg-brand/5">
              <Link to="/alumni">
                Meet our alumni <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <SectionHeader
          eyebrow="Community"
          title="What members say"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="h-full rounded-2xl border border-hairline bg-surface-elevated p-6">
                <blockquote className="text-base leading-relaxed">
                  "<span>{t.quote}</span>"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-brand/10 text-brand font-semibold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-brand/10 via-transparent to-brand/5 p-8 md:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Stay in the loop"
                title="Event drops, project updates, opportunities."
                description="One email a month. No spam. Ever."
              />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <Input type="email" required placeholder="you@iter.ac.in" className="h-12 bg-background" />
              <Button type="submit" className="h-12 px-6 bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
                Subscribe <Calendar className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
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
        <div className="text-sm font-semibold text-brand tracking-wide">{event.date}</div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{event.title}</h3>
        <p className="mt-3 text-base text-muted-foreground line-clamp-2 flex-1">{event.description}</p>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-foreground/80 group-hover:text-brand transition-colors">
          Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
