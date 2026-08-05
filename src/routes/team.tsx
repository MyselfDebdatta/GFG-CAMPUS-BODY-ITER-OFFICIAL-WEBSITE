import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM, TEAM_GROUPS } from "@/lib/site-data";
import { Reveal } from "@/components/site/Primitives";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team · GFG ITER" },
      { name: "description", content: "Meet the executive board, tech, design, events, and marketing teams of GFG ITER." },
      { property: "og:title", content: "Team · GFG ITER" },
      { property: "og:description", content: "Meet the people behind GFG ITER." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

function MemberCard({ m }: { m: any }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_20px_60px_-30px_rgba(0,255,127,0.25)]">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=00ff7f&color=020b06&size=512`}
          alt={m.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-1 flex-col justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">{m.role}</div>
          <div className="mt-1 text-lg font-semibold tracking-tight">{m.name}</div>
        </div>
        <div className="mt-4 flex items-center gap-1 border-t border-hairline pt-4">
          {[Linkedin, Github, Mail].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={`${m.name} social link`}
              className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function TeamGroupSection({ group, members }: { group: string; members: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lead = members.find((m) => m.role.toLowerCase().includes("lead")) || members[0];
  const regularMembers = members.filter((m) => m !== lead);

  const isScrollableGroup = regularMembers.length > 4;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (!isScrollableGroup) {
    return (
      <section className="container-page py-10">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4">
          <h2 className="text-2xl font-bold tracking-tight">{group}</h2>
          <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {members.length} {members.length === 1 ? "member" : "members"}
          </span>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <MemberCard m={m} />
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-10">
      <div className="mb-8 flex items-center justify-between border-b border-hairline pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{group}</h2>
          <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {members.length} members
          </span>
        </div>

        {/* Manual Arrow Buttons for Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-hairline bg-surface-elevated text-foreground hover:border-brand/40 hover:bg-brand/10 hover:text-brand transition-all active:scale-95"
            aria-label={`Scroll ${group} left`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-hairline bg-surface-elevated text-foreground hover:border-brand/40 hover:bg-brand/10 hover:text-brand transition-all active:scale-95"
            aria-label={`Scroll ${group} right`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop View: Static Sticky Lead on Left + Manual Arrow Scrollable Track for Members */}
      <div className="hidden md:flex relative items-stretch gap-5 py-6 px-1">
        {/* Static Sticky Lead Card */}
        <div className="sticky left-0 z-20 shrink-0 w-[240px] lg:w-[260px] bg-[#020b06]/95 backdrop-blur-md rounded-2xl pr-3 shadow-[20px_0_35px_-5px_rgba(2,11,6,0.95)]">
          <MemberCard m={lead} />
        </div>

        {/* Scrollable Member Cards Track (Hidden native scrollbar) */}
        <div
          ref={scrollRef}
          className="flex-1 flex gap-4 overflow-x-auto py-2 pr-6 z-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {regularMembers.map((m) => (
            <div key={m.name} className="w-[210px] lg:w-[230px] shrink-0 py-1">
              <MemberCard m={m} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View: Lead Card + 2-Column Grid for Members */}
      <div className="md:hidden flex flex-col gap-5 py-2">
        {/* Lead Card */}
        <div className="w-full">
          <MemberCard m={lead} />
        </div>

        {/* 2-Column Grid for Members */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {regularMembers.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-brand opacity-70" style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }} />
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                The people building <span className="text-gradient-brand">GFG ITER.</span>
              </h1>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl leading-tight">
                A student-run team of engineers, designers, organizers, and marketers — with faculty support.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {TEAM_GROUPS.map((group) => {
        const members = TEAM.filter((m) => m.group === group);
        if (!members.length) return null;
        return <TeamGroupSection key={group} group={group} members={members} />;
      })}
    </>
  );
}
