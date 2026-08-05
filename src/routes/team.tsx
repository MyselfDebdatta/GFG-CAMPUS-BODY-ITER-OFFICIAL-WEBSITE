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
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)]">
                    <div className="aspect-[4/5] overflow-hidden bg-muted">
                      <img
                        src={m.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=00ff7f&color=020b06&size=512`}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">{m.role}</div>
                      <div className="mt-1 text-lg font-semibold tracking-tight">{m.name}</div>
                      {m.bio && <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{m.bio}</p>}
                      
                      <div className="mt-auto pt-4 flex items-center gap-1 border-t border-hairline mt-4">
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            aria-label={`${m.name} LinkedIn`}
                            className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {m.github && (
                          <a
                            href={m.github}
                            aria-label={`${m.name} GitHub`}
                            className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-brand/10 hover:text-brand transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
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
