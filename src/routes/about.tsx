import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Compass, HeartHandshake, GraduationCap, Sparkles, Users2 } from "lucide-react";
import soaLogo from "@/assets/soa-logo.asset.json";
import { Reveal, SectionHeader } from "@/components/site/Primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · GFG ITER" },
      { name: "description", content: "Vision, mission, and culture of the GFG student chapter at ITER, SOA University." },
      { property: "og:title", content: "About · GFG ITER" },
      { property: "og:description", content: "Vision, mission, and culture of the GFG student chapter at ITER, SOA." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Craft", body: "We take engineering seriously. Details matter. Ship things you're proud of." },
  { icon: Users2, title: "Community", body: "The people are the point. We grow together, we win together." },
  { icon: Sparkles, title: "Curiosity", body: "Ask the naïve question. Read the paper. Try the weird stack." },
  { icon: HeartHandshake, title: "Generosity", body: "Teach freely. Review carefully. Give more than you take." },
];

function About() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="About us"
            title={<>A student chapter built on <span className="text-gradient-brand">craft and community</span>.</>}
            description="We are the official Geeks for Geeks student chapter at ITER, SOA University — an ambitious community of engineers, designers, and builders."
          />
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Compass,
              tag: "Our Vision",
              title: "Make ITER a launchpad for world-class engineers.",
              body: "A campus where every curious student can find mentors, teammates, and a stage to ship real work — from their first line of code to their first paycheck.",
            },
            {
              icon: Target,
              tag: "Our Mission",
              title: "Learn in public. Build in the open. Ship together.",
              body: "Run high-signal workshops, host thoughtful events, and back student projects that go beyond the classroom. Bridge students to opportunities, alumni, and industry.",
            },
          ].map((c) => (
            <Reveal key={c.tag}>
              <div className="h-full rounded-3xl border border-hairline bg-surface-elevated p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  <c.icon className="h-3 w-3" /> {c.tag}
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* University affiliation */}
      <section className="border-y border-hairline bg-surface py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-square max-w-sm rounded-3xl border border-hairline bg-surface-elevated p-10">
              <img src={soaLogo.url} alt="Siksha 'O' Anusandhan University" className="h-full w-full object-contain" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="University affiliation"
              title="Officially recognized at ITER, SOA University."
              description="We operate under the Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar. All our events and programs are backed by faculty coordination and university support."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Fact k="Founded" v="2022" />
              <Fact k="Chapter type" v="Official GFG Campus Body" />
              <Fact k="Members" v="500+ students" />
              <Fact k="Faculty coordinator" v="Dept. of CSE, ITER" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="container-page py-24">
        <SectionHeader eyebrow="Core values" title="What we believe" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-surface-elevated p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <v.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why join / What you'll learn */}
      <section className="border-y border-hairline bg-surface py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow="Why join" title="Reasons students stay for years." />
            <ul className="mt-6 space-y-3">
              {[
                "A curated, no-fluff curriculum for DSA, web, and AI.",
                "Access to alumni working at Google, Microsoft, Amazon, and more.",
                "Real projects you can put on a résumé — not just tutorials.",
                "Mentorship from seniors who've been through placements.",
                "A safe space to fail, iterate, and grow in public.",
              ].map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader eyebrow="What you'll learn" title="A stack that opens doors." />
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "System Design",
                "React & Next.js",
                "Node & APIs",
                "AI / ML",
                "Cloud & DevOps",
                "Product Design",
                "Open Source Workflow",
                "Git & Collaboration",
                "Interview Skills",
              ].map((s) => (
                <span key={s} className="rounded-full border border-hairline bg-surface-elevated px-3 py-1.5 text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-brand/10 to-transparent p-10 text-center md:p-16">
          <GraduationCap className="mx-auto h-8 w-8 text-brand" />
          <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build alongside the best on campus?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            The chapter is free to join and open to every student at ITER. Come as you are.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
              <Link to="/community">Join the community</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/15 font-semibold">
              <Link to="/events">See upcoming events</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-hairline bg-surface-elevated p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{k}</div>
      <div className="mt-1 font-semibold">{v}</div>
    </div>
  );
}
