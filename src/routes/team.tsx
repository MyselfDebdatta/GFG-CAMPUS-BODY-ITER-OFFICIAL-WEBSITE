import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { TEAM, TEAM_GROUPS } from "@/lib/site-data";
import { Reveal, SectionHeader } from "@/components/site/Primitives";

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
        return (
          <section key={group} className="container-page py-10">
            <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4">
              <h2 className="text-2xl font-bold tracking-tight">{group}</h2>
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {members.length} {members.length === 1 ? "member" : "members"}
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.05}>
                  <article className="group relative overflow-hidden rounded-[24px] border border-brand/50 bg-[#111] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,127,0.2)] flex flex-col h-full">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={m.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=00ff7f&color=020b06&size=512`}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {m.github && (
                          <a
                            href={m.github}
                            aria-label={`${m.name} GitHub`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 text-black"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            aria-label={`${m.name} LinkedIn`}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 text-[#0A66C2]"
                          >
                            <Linkedin className="h-5 w-5 fill-current" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="p-5 mt-auto bg-[#111]">
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand">{m.role}</div>
                      <div className="mt-1 text-xl font-bold tracking-tight text-white/90">{m.name}</div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
