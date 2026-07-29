import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Compass, HeartHandshake, GraduationCap, Sparkles, Users2, Code2, Rocket } from "lucide-react";
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
      <section className="relative -mt-24 pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-brand opacity-70" style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }} />
        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                About <span className="text-gradient-brand">Us.</span>
              </h1>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl leading-tight">
                A student chapter built on craft and community.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                We are the official Geeks for Geeks student chapter at ITER, SOA University — an ambitious community of engineers, designers, and builders pushing the boundaries of what students can achieve.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Approach Bento Grid */}
      <section className="container-page pb-16">
        <div className="grid gap-6 md:grid-cols-12">
          {[
            {
              icon: Compass,
              tag: "Our Vision",
              title: "Make ITER a launchpad for world-class engineers.",
              body: "A campus where every curious student can find mentors, teammates, and a stage to ship real work — from their first line of code to their first paycheck.",
              className: "md:col-span-7",
            },
            {
              icon: Target,
              tag: "Our Mission",
              title: "Learn in public. Build in the open. Ship together.",
              body: "Run high-signal workshops, host thoughtful events, and back student projects that go beyond the classroom. Bridge students to opportunities, alumni, and industry.",
              className: "md:col-span-5",
            },
            {
              icon: Code2,
              tag: "Our Approach",
              title: "Project-driven engineering.",
              body: "We move beyond theoretical concepts by building real-world applications, actively contributing to open source, and competing in high-stakes hackathons.",
              className: "md:col-span-4",
            },
            {
              icon: Sparkles,
              tag: "Our Culture",
              title: "Radical curiosity.",
              body: "We prioritize knowledge sharing and peer mentorship. We foster a supportive environment where asking the naïve question is encouraged and failure is iteration.",
              className: "md:col-span-4",
            },
            {
              icon: Rocket,
              tag: "Our Impact",
              title: "Bridging academia & industry.",
              body: "We accelerate careers. We connect students with top-tier internships, powerful alumni networks, and opportunities that transform potential into proven capability.",
              className: "md:col-span-4",
            }
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.05} className={c.className}>
              <div className="h-full rounded-3xl border border-hairline bg-surface-elevated p-8 transition-colors hover:border-brand/30">
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
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-brand md:text-5xl">
                University Affiliation
              </h2>
              <h3 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Officially recognized at ITER, SOA University.
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We operate under the Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar. All our events and programs are backed by faculty coordination and university support.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <Fact k="Founded" v="2025" />
                <Fact k="Chapter type" v="Official GFG Campus Body" />
                <Fact k="Members" v="100+ students" />
                <Fact k="Faculty coordinator" v="Dept. of CSE, ITER" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm rounded-3xl border border-hairline bg-surface-elevated p-10 lg:mx-0 lg:ml-auto">
              <img src="/SOA-PNG.webp" alt="Siksha 'O' Anusandhan University" className="h-full w-full object-contain" />
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
                "TypeScript",
                "Python & Go",
                "Web3 & Blockchain",
                "Mobile App Dev",
                "Cyber Security",
                "UI/UX Engineering",
                "Database Architecture",
                "AR/VR",
                "and many more to explore..."
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
