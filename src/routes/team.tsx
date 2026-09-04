import { useRef } from "react";
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
  const avatarUrl = m.photo && !m.photo.includes("pravatar.cc")
    ? m.photo
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=00ff7f&color=020b06&size=512`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface-elevated transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_10px_30px_rgba(0,255,127,0.25)]">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-t-2xl bg-[#020b06]">
        <img
          src={avatarUrl}
          alt={m.name}
          className="h-full w-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-5 flex flex-1 flex-col justify-between rounded-b-2xl">
        <div>
          <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-brand truncate">{m.role}</div>
          <div className="mt-0.5 sm:mt-1 text-sm sm:text-base md:text-lg font-semibold tracking-tight truncate">{m.name}</div>
        </div>
        <div className="mt-3 sm:mt-4 flex items-center gap-1.5 border-t border-hairline pt-3 sm:pt-4">
          {m.linkedin ? (
            <a
              href={m.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${m.name} LinkedIn`}
              className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          ) : null}
          {m.github ? (
            <a
              href={m.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${m.name} GitHub`}
              className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          ) : null}
          {m.email ? (
            <a
              href={`mailto:${m.email}`}
              aria-label={`Email ${m.name}`}
              className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          ) : (
            <span
              className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg text-muted-foreground/30"
              title="No direct email listed"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function LeadershipSection() {
  const coordinators = TEAM.filter((m) => m.group === "Coordinator");
  const mentors = TEAM.filter((m) => m.group === "Mentors");
  const execBoard = TEAM.filter((m) => m.group === "Executive Board");

  return (
    <section className="container-page py-10">
      {/* Student Leadership & Mentorship */}
      <div>
        <div className="mb-6 border-b border-hairline pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Student Leadership & Mentorship</h2>
          <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            5 core leaders
          </span>
        </div>

        {/* Group Titles Header Row for 5 Columns */}
        <div className="hidden lg:grid grid-cols-5 gap-5 mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand">
          <div className="col-span-2 flex items-center gap-2 border-r border-hairline/60 pr-4">
            <span>Club Coordinators</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-muted-foreground text-[10px]">2</span>
          </div>
          <div className="col-span-1 flex items-center gap-2 border-r border-hairline/60 pr-4">
            <span>Mentors</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-muted-foreground text-[10px]">1</span>
          </div>
          <div className="col-span-2 flex items-center gap-2 pl-1">
            <span>Executive Board</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-muted-foreground text-[10px]">2</span>
          </div>
        </div>

        {/* Desktop Equal 5-Column Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-5 items-stretch">
          <div className="h-full">
            <MemberCard m={coordinators[0]} />
          </div>
          <div className="h-full relative">
            <MemberCard m={coordinators[1]} />
            <div aria-hidden className="absolute -right-2.5 top-6 bottom-6 w-px bg-hairline/60 pointer-events-none" />
          </div>
          <div className="h-full relative">
            <MemberCard m={mentors[0]} />
            <div aria-hidden className="absolute -right-2.5 top-6 bottom-6 w-px bg-hairline/60 pointer-events-none" />
          </div>
          <div className="h-full">
            <MemberCard m={execBoard[0]} />
          </div>
          <div className="h-full">
            <MemberCard m={execBoard[1]} />
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="lg:hidden flex flex-col gap-6">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand border-b border-hairline pb-2">
              Club Coordinators (2)
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {coordinators.map((m) => (
                <MemberCard key={m.name} m={m} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand border-b border-hairline pb-2">
              Community Mentor (1)
            </div>
            <div className="w-1/2 pr-1.5 sm:w-1/3 sm:pr-0">
              <MemberCard m={mentors[0]} />
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand border-b border-hairline pb-2">
              Executive Board (2)
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {execBoard.map((m) => (
                <MemberCard key={m.name} m={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamGroupSection({ group, members }: { group: string; members: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lead = members.find((m) => m.role.toLowerCase().includes("lead")) || members[0];
  const regularMembers = members.filter((m) => m !== lead);

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

  return (
    <section className="container-page py-10">
      <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{group}</h2>
          <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {members.length} members
          </span>
        </div>

        {/* Manual Arrow Buttons for Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-hairline bg-surface-elevated text-foreground hover:border-brand/40 hover:bg-brand/10 hover:text-brand transition-all active:scale-95"
            aria-label={`Scroll ${group} left`}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-hairline bg-surface-elevated text-foreground hover:border-brand/40 hover:bg-brand/10 hover:text-brand transition-all active:scale-95"
            aria-label={`Scroll ${group} right`}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Static Sticky Lead on Left + Scrollable Member Cards Track on Right (Mobile & Desktop) */}
      <div className="flex relative items-stretch gap-3 sm:gap-4 md:gap-5 py-6 px-1">
        {/* Static Sticky Lead Card */}
        <div className="sticky left-0 z-20 shrink-0 w-[150px] sm:w-[200px] md:w-[240px] lg:w-[260px] bg-[#020b06]/95 backdrop-blur-md rounded-2xl pr-2 sm:pr-3 shadow-[15px_0_30px_-5px_rgba(2,11,6,0.95)]">
          <MemberCard m={lead} />
        </div>

        {/* Scrollable Member Cards Track */}
        <div
          ref={scrollRef}
          className="flex-1 flex gap-3 sm:gap-4 overflow-x-auto py-2 pr-4 md:pr-6 z-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {regularMembers.map((m) => (
            <div key={m.name} className="w-[140px] sm:w-[180px] md:w-[210px] lg:w-[230px] shrink-0 py-1">
              <MemberCard m={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const leadershipGroups = ["Coordinator", "Mentors", "Executive Board"];
  const scrollableGroups = TEAM_GROUPS.filter((g) => !leadershipGroups.includes(g));

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

      {/* Unified Leadership Section (2 Coordinators + 1 Mentor + 2 Executive Board in single 5-col row) */}
      <LeadershipSection />

      {/* Core Teams Sections with Static Lead + 25 Scrolling Members */}
      {scrollableGroups.map((group) => {
        const members = TEAM.filter((m) => m.group === group);
        if (!members.length) return null;
        return <TeamGroupSection key={group} group={group} members={members} />;
      })}
    </>
  );
}
