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
        <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-0 h-[800px] bg-radial-brand opacity-70" />
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="mb-6 text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                The people building <span className="text-gradient-brand">GFG ITER.</span>
              </h1>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl leading-tight">
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
                  <article className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)]">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">{m.role}</div>
                      <div className="mt-1 text-lg font-semibold tracking-tight">{m.name}</div>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{m.bio}</p>
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
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
