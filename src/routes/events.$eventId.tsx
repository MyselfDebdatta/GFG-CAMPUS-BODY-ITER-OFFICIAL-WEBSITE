import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft, Calendar, MapPin, Users, CheckCircle2,
  Clock, User, ChevronRight, GitBranch, Terminal,
  Zap, Target, Code2, Rocket,
} from "lucide-react";
import { useState } from "react";
import { EVENTS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader,
  DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.id === params.eventId);
    if (!event) throw notFound();
    return event;
  },
  component: EventDetails,
});

/* ── Per-event unique copy (replaces the generic "join us for an immersive experience") ── */
const EVENT_COPY: Record<string, { brief: string; objectives: string[]; timeline: { label: string; desc: string }[] }> = {
  "gfg-carnival": {
    brief: "The GFG Annual Club Carnival is where new builders meet the community that will define their engineering journey. This isn't just an orientation — it's your launchpad. From live coding demos to project showcases, this event gives you a front-row seat to what GFG ITER is building next.",
    objectives: [
      "Discover active projects and open contribution opportunities",
      "Meet the executive board and domain leads face-to-face",
      "Get hands-on with a live mini-hackathon challenge",
      "Network with seniors placed at top-tier tech companies",
    ],
    timeline: [
      { label: "Gates Open", desc: "Check-in, swag collection, and team introductions" },
      { label: "Vision Keynote", desc: "The President presents this year's roadmap and goals" },
      { label: "Live Demo Arena", desc: "Domain leads showcase flagship projects in action" },
      { label: "Builder's Challenge", desc: "A 30-minute sprint to solve a real engineering problem" },
      { label: "Open Networking", desc: "Meet your future teammates over refreshments" },
    ],
  },
  "gfg-skill-exchange": {
    brief: "Skill Exchange is a two-month intensive where senior engineers mentor you through real-world tech stacks — no slides, no theory dumps. You ship code from day one. Every session is a hands-on lab designed to bridge the gap between coursework and production-grade software.",
    objectives: [
      "Build and deploy a full-stack project by program end",
      "Get code-reviewed by experienced developers weekly",
      "Master modern tooling: Git workflows, CI/CD, Docker",
      "Earn a verifiable completion certificate from GFG ITER",
    ],
    timeline: [
      { label: "Orientation", desc: "Stack selection, team formation, and environment setup" },
      { label: "Foundation Sprint", desc: "Core fundamentals — APIs, databases, and architecture" },
      { label: "Build Phase", desc: "Weekly project milestones with live code reviews" },
      { label: "Ship Week", desc: "Final deployment, demo day, and certification" },
    ],
  },
  "rachitva-event": {
    brief: "Rachitva tested what textbooks can't — raw creativity and the ability to communicate an idea under pressure. Participants had no prep time, no prior topics. Just a problem, a blank canvas, and minutes on the clock. The results surprised even the organizers.",
    objectives: [
      "Impromptu ideation and rapid prototyping challenge",
      "Communication and presentation skills under time pressure",
      "Cross-domain collaboration between designers and developers",
      "Recognition and prizes for the most innovative solutions",
    ],
    timeline: [
      { label: "Briefing", desc: "Rules announced and surprise problem statement revealed" },
      { label: "Sprint Round", desc: "45-minute design and prototype sprint" },
      { label: "Pitch Arena", desc: "Each team presents their solution in 3 minutes flat" },
      { label: "Verdict", desc: "Judges deliberate and winners are announced" },
    ],
  },
  "zerone-event": {
    brief: "Zer0ne pushed participants beyond code into the realm of product thinking. This flagship event challenged builders to design solutions that aren't just functional — they had to be desirable, viable, and technically elegant. Think startup hackathon meets design sprint.",
    objectives: [
      "End-to-end product design: ideation → prototype → pitch",
      "Judged on innovation, feasibility, and presentation quality",
      "Cross-functional teamwork between engineers and designers",
      "Top teams earn mentorship from industry professionals",
    ],
    timeline: [
      { label: "Problem Drop", desc: "Real-world challenge revealed — no prior prep allowed" },
      { label: "Ideation Lab", desc: "Brainstorming, wireframing, and architecture planning" },
      { label: "Build Sprint", desc: "Heads-down prototyping with mentor check-ins" },
      { label: "Demo Day", desc: "Final presentations to a panel of industry judges" },
    ],
  },
  "founders-unplugged": {
    brief: "Founders Unplugged brought startup founders and C-suite executives to campus for raw, unscripted conversations about building companies. No polished keynotes — just real stories about failure, pivots, and the unglamorous grind behind every success story.",
    objectives: [
      "Unfiltered insights from founders who've raised funding and scaled",
      "Real talk on technical co-founder dynamics and early-stage decisions",
      "Interactive Q&A — every question from the audience was answered",
      "Actionable advice on transitioning from campus to startup life",
    ],
    timeline: [
      { label: "Opening", desc: "Welcome address and speaker introductions" },
      { label: "Fireside Chat", desc: "Moderated conversation on the startup journey" },
      { label: "Audience Q&A", desc: "Open mic — students ask, founders answer" },
      { label: "Networking", desc: "One-on-one conversations with speakers" },
    ],
  },
  "chai-links-ep00": {
    brief: "ChainLinks Episode 00 introduced a refreshing shift from conventional academic events, creating an open space where conversations, curiosity, and connection took center stage over cups of chai. Students engaged directly with faculty members across IoT, AI/ML, Cloud Computing, and Networking.",
    objectives: [
      "Break academic barriers through circle-based Chai Pe Charcha discussions",
      "Direct guidance from faculty members on research and technical roadmaps",
      "Explore diverse domains: IoT, AI/ML, Cloud Computing, and Networking",
      "Foster authentic peer networking across different academic years",
    ],
    timeline: [
      { label: "Faculty Intros", desc: "Participating faculty members introduce their research domains" },
      { label: "Circle Formation", desc: "Students join domain-specific discussion circles based on interest" },
      { label: "Open Dialogue", desc: "Informal exchanges on technical topics, career queries, and project ideas" },
      { label: "Networking & Chai", desc: "Peer networking over tea and refreshments" },
    ],
  },
  "chai-links-ep01": {
    brief: "ChainLinks Episode 01 elevated the initiative with powerful themes of TinyML and Agentic AI. Students dived into running compact machine learning models on microcontrollers and building autonomous AI systems, bridging complex concepts with real-world implementation.",
    objectives: [
      "Explore low-power edge machine learning models (TinyML) on microcontrollers",
      "Discuss autonomous systems, reasoning frameworks, and Agentic AI",
      "Engage in deep-dive technical debates with faculty mentors and domain leads",
      "Spark cross-year project collaborations in emerging frontier tech",
    ],
    timeline: [
      { label: "Theme Overview", desc: "Introduction to TinyML and Agentic AI paradigms" },
      { label: "Domain Circles", desc: "Breakout sessions exploring edge ML models and AI agent architectures" },
      { label: "Faculty Mentorship", desc: "Direct guidance on research paths and deployment challenges" },
      { label: "Idea Exchange", desc: "Collaborative brainstorming over tea and refreshments" },
    ],
  },
};

const FALLBACK_COPY = {
  brief: "A flagship event by GFG ITER designed to push boundaries, build skills, and connect the brightest engineering minds on campus. Every session is crafted to deliver real, tangible outcomes — not just attendance certificates.",
  objectives: [
    "Hands-on learning with real-world engineering challenges",
    "Direct mentorship from industry professionals and seniors",
    "Networking with like-minded builders across disciplines",
    "Tangible outcomes — projects shipped, skills gained",
  ],
  timeline: [
    { label: "Check-In", desc: "Registration and team formation" },
    { label: "Main Event", desc: "Core sessions, workshops, or competition rounds" },
    { label: "Showcase", desc: "Presentations, demos, or results announcement" },
    { label: "Networking", desc: "Connect with peers, mentors, and speakers" },
  ],
};

function EventDetails() {
  const event = Route.useLoaderData();
  const [registered, setRegistered] = useState(false);
  const [open, setOpen] = useState(false);
  const copy = EVENT_COPY[event.id] || FALLBACK_COPY;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => setOpen(false), 1500);
  };

  const statusColor = event.status === "upcoming"
    ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
    : event.status === "ongoing"
    ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
    : "text-slate-400 border-slate-500/30 bg-slate-500/10";

  const statusLabel = event.status === "upcoming"
    ? "UPCOMING"
    : event.status === "ongoing"
    ? "LIVE"
    : "ARCHIVED";

  return (
    <div className="pb-24 pt-10">
      <div className="container-page">

        {/* ── 1. COMMAND BREADCRUMB ──────────────────────────────────── */}
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
          <Link to="/events" search={{ tab: event.status }} className="hover:text-brand transition-colors flex items-center gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Events</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span className="text-brand/70">{event.category}</span>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span className="text-foreground/80 truncate max-w-[200px]">{event.title}</span>
        </div>

        {/* ── 2. HERO BANNER ─────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-hairline" style={{ height: "clamp(280px, 45vh, 480px)" }}>
          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
          {/* Diagonal gradient overlay */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(4,7,5,0.95) 0%, rgba(4,7,5,0.7) 40%, rgba(4,7,5,0.3) 70%, transparent 100%)",
          }} />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040705] via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            {/* Status badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-[10px] font-bold tracking-[0.2em] font-mono ${statusColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${event.status === "ongoing" ? "bg-emerald-400 animate-pulse" : event.status === "upcoming" ? "bg-amber-400" : "bg-slate-400"}`} />
                {statusLabel}
              </span>
              <span className="rounded-md border border-hairline bg-white/5 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white/70 font-mono">
                {event.category.toUpperCase()}
              </span>
            </div>

            {/* Title with terminal cursor */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              {event.title}
              <span className="inline-block w-[3px] h-[0.85em] bg-brand ml-2 animate-pulse rounded-sm align-baseline" />
            </h1>
          </div>
        </div>

        {/* ── 3. MISSION CONSOLE — Status Bar ────────────────────────── */}
        <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 rounded-xl border border-hairline bg-[#0a0f0c] px-5 py-3.5 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-brand/70" />
            <span>{event.date}</span>
          </div>
          <span className="text-muted-foreground/30 mx-2">│</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-brand/70" />
            <span>4:00 PM – 6:00 PM IST</span>
          </div>
          <span className="text-muted-foreground/30 mx-2 hidden sm:inline">│</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-brand/70" />
            <span>{event.venue}</span>
          </div>
          <span className="text-muted-foreground/30 mx-2 hidden md:inline">│</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="h-3.5 w-3.5 text-brand/70" />
            <span>80+ Builders</span>
          </div>
        </div>

        {/* ── 4. TWO-COLUMN INTEL SECTION ─────────────────────────────── */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

          {/* Left: Mission Brief */}
          <div className="space-y-6">
            {/* Brief */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Terminal className="h-4 w-4 text-brand" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Mission Brief</h2>
              </div>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {copy.brief}
              </p>
            </div>

            {/* Objectives */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Target className="h-4 w-4 text-brand" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Objectives</h2>
              </div>
              <ul className="space-y-3">
                {copy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <Zap className="h-4 w-4 text-brand/60 mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Crew & CTA */}
          <div className="space-y-6">
            {/* Crew Dossier */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated overflow-hidden">
              <div className="border-b border-hairline px-6 py-4 flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-brand/10 flex items-center justify-center">
                  <User className="h-3.5 w-3.5 text-brand" />
                </div>
                <h3 className="font-bold text-sm tracking-tight">Crew Dossier</h3>
              </div>
              <div className="p-6 space-y-4">
                {event.speakers.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-hairline/50 bg-[#0a0f0c] p-4">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center overflow-hidden">
                        <User className="h-5 w-5 text-brand/50" />
                      </div>
                      {/* Online dot */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0a0f0c] bg-brand" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{s.name}</div>
                      <div className="text-[11px] font-mono text-brand/70 tracking-wide uppercase">{s.role}</div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground/60 leading-relaxed pt-1">
                  Additional speakers and mentors will be confirmed closer to the event date. Follow our socials for live updates.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            {event.status === "upcoming" ? (
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-brand" />
                  <h3 className="font-bold text-sm">Secure Your Spot</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-5">Limited seats. Registration closes 24 hours before the event.</p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 font-bold h-12 w-full text-sm shadow-[0_0_20px_rgba(0,230,118,0.15)]">
                      Register Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    {!registered ? (
                      <form onSubmit={handleRegister}>
                        <DialogHeader>
                          <DialogTitle>Register for {event.title}</DialogTitle>
                          <DialogDescription>
                            Complete the form below to lock in your spot.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-6">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required placeholder="Your full name" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" required placeholder="you@iter.ac.in" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="branch">Branch & Year</Label>
                            <Input id="branch" required placeholder="CSE, 3rd Year" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
                            Confirm Registration
                          </Button>
                        </DialogFooter>
                      </form>
                    ) : (
                      <div className="py-12 text-center flex flex-col items-center">
                        <CheckCircle2 className="h-16 w-16 text-brand mb-4" />
                        <DialogTitle className="text-2xl">You're in!</DialogTitle>
                        <DialogDescription className="mt-2 text-base">
                          Registration confirmed. We'll send you a reminder before the event.
                        </DialogDescription>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="rounded-2xl border border-hairline bg-surface-elevated p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{event.status === "ongoing" ? "Event In Progress" : "Mission Complete"}</h3>
                    <p className="text-[11px] text-muted-foreground">
                      {event.status === "ongoing" ? "This event is currently running." : "This event has concluded successfully."}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-hairline">
                  <p className="text-xs text-muted-foreground">
                    Have questions? Reach us at{" "}
                    <a href="mailto:gfg.iter@soa.ac.in" className="text-brand hover:underline">gfg.iter@soa.ac.in</a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── 5. EVENT TIMELINE — Git Commit Style ────────────────────── */}
        <div className="mt-6 rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
              <GitBranch className="h-4 w-4 text-brand" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Event Flow</h2>
          </div>

          <div className="relative ml-4">
            {copy.timeline.map((step, i) => {
              const isLast = i === copy.timeline.length - 1;
              return (
                <div key={i} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Vertical connector */}
                  {!isLast && (
                    <div className="absolute left-[7px] top-[18px] bottom-0 w-[2px] bg-gradient-to-b from-brand/30 to-brand/10" />
                  )}
                  {/* Node */}
                  <div className="relative z-10 mt-1 shrink-0">
                    <div className={`h-4 w-4 rounded-full border-2 ${i === 0 ? "border-brand bg-brand/30" : "border-brand/40 bg-[#0a0f0c]"}`} />
                  </div>
                  {/* Content */}
                  <div className="min-w-0 pt-0">
                    <div className="font-semibold text-sm text-foreground">{step.label}</div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 6. GALLERY — Bento Grid ────────────────────────────────── */}
        <div className="mt-6 rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
              <Code2 className="h-4 w-4 text-brand" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Event Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[350px] md:h-[420px]">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden border border-hairline relative group">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80" alt="Event highlight" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                event_highlight.jpg
              </div>
            </div>
            {[
              "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-hairline relative group">
                <img src={src} alt={`Gallery ${i + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  img_{String(i + 2).padStart(2, "0")}.jpg
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
