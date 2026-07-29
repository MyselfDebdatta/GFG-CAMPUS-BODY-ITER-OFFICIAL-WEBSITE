import { createFileRoute } from "@tanstack/react-router";
import { Award, Building2, GraduationCap, Quote } from "lucide-react";
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

function Alumni() {
  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-0 h-[800px] bg-radial-brand opacity-70" />
        <div className="container-page relative py-16 md:py-20">
          <SectionHeader
            eyebrow="Wall of fame"
            title={<>Alumni who <span className="text-gradient-brand">shipped</span> — and kept shipping.</>}
            description="From first-year builders to engineers at some of the best tech companies in the world."
          />
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
