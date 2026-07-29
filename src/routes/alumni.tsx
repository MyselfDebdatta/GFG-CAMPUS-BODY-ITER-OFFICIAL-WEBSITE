import { createFileRoute } from "@tanstack/react-router";
import { Award, Building2, GraduationCap, Quote, Github, Linkedin } from "lucide-react";
import { ALUMNI, RECRUITERS } from "@/lib/site-data";
import { Reveal, SectionHeader, Counter } from "@/components/site/Primitives";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni · GFG ITER" },
      { name: "description", content: "The GFG ITER wall of fame — alumni at top companies, grad schools, and startups." },
      { property: "og:title", content: "Alumni · GFG ITER" },
      { property: "og:description", content: "Wall of fame — alumni at top tech companies and grad schools." },
      { property: "og:url", content: "/alumni" },
    ],
    links: [{ rel: "canonical", href: "/alumni" }],
  }),
  component: Alumni,
});

const HIGHLIGHTS = [
  { icon: Building2, label: "Placed at top MNCs", value: 10, suffix: "+" },
  { icon: GraduationCap, label: "Higher studies abroad", value: 6, suffix: "+" },
  { icon: Award, label: "Hackathon podiums", value: 12, suffix: "+" },
];

const NOTABLE_ALUMNI = [
  { name: "Ankit Rajan", role: "Alumni", github: "#", linkedin: "#" },
  { name: "Mukesh Kumar Padhi", role: "Alumni", github: "#", linkedin: "#" },
  { name: "Rathikant Behera", role: "Alumni", github: "#", linkedin: "#" },
];

function Alumni() {
  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-brand opacity-70" style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }} />
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Alumni who <span className="text-gradient-brand">shipped</span> — and kept shipping.
              </h1>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl leading-tight">
                From first-year builders to engineers at some of the best tech companies in the world.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-page">
        <div className="grid gap-4 md:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-hairline bg-surface-elevated p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-3xl font-bold tracking-tight">
                  <Counter to={h.value} suffix={h.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{h.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notable Profiles */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Our Pride" title="Notable Alumni" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NOTABLE_ALUMNI.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=00ff7f&color=020b06&size=512`}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">{m.role}</div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">{m.name}</div>
                  <div className="mt-4 flex items-center gap-1 border-t border-hairline pt-4">
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

      {/* Recruiters */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="Top recruiters" title="Where our alumni build" align="center" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {RECRUITERS.map((r) => (
            <div
              key={r.name}
              className="group flex items-center justify-center rounded-xl border border-hairline bg-surface-elevated px-4 py-6 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-brand/30 transition-all"
            >
              <img 
                src={`https://www.google.com/s2/favicons?domain=${r.domain}&sz=128`} 
                alt={r.name} 
                className="h-5 w-5 rounded-sm object-contain mr-2" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} 
              />
              {r.name}
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight */}
      <section className="border-t border-hairline bg-surface py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Spotlight" title="Alumni stories" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ALUMNI.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.05}>
                <article className="flex h-full gap-5 rounded-2xl border border-hairline bg-surface-elevated p-6">
                  <img
                    src={a.photo}
                    alt={a.name}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <div className="text-lg font-semibold">{a.name}</div>
                      <div className="text-xs text-muted-foreground">Class of {a.year}</div>
                    </div>
                    <div className="text-sm font-medium text-brand">{a.role}</div>
                    <blockquote className="mt-3 flex gap-2 text-sm text-muted-foreground">
                      <Quote className="h-4 w-4 shrink-0 text-brand/60" />
                      <p>{a.quote}</p>
                    </blockquote>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
