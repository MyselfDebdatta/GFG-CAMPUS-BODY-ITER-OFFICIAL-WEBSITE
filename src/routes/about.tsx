import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Compass, HeartHandshake, GraduationCap, Sparkles, Users2, Code2, Rocket, User, Linkedin } from "lucide-react";
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

      {/* FACULTY COORDINATORS */}
      <section className="relative z-10 container-page py-24 border-b border-hairline">
        <SectionHeader
          eyebrow="Leadership"
          title={<>Our Faculty Coordinators</>}
          description="Guiding the next generation of engineers at GFG Campus Body ITER."
        />
        
        <div className="mt-16 flex flex-col gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Reveal delay={0.1}>
            <article className="flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-[2rem] border border-hairline bg-surface-elevated p-6 md:p-8 transition-all duration-500 raw-hover:border-brand/40 raw-hover:shadow-[0_0_40px_rgba(0,255,127,0.1)] group">
              {/* Image side */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[4/5] max-w-[300px] mx-auto md:max-w-none rounded-[1.5rem] overflow-hidden bg-black/40 border border-hairline flex items-center justify-center transition-transform duration-500 group-raw-hover:scale-[1.02]">
                  <User className="w-32 h-32 text-brand/20 transition-transform duration-500 group-raw-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand mb-5 w-fit shadow-[0_0_15px_rgba(0,255,127,0.1)]">
                  Faculty Coordinator | GFG Campus Body ITER
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Random Name 1</h3>
                <p className="text-sm text-brand font-medium mb-8">Associate Professor, Department of CSE</p>
                
                <div className="relative border-l-2 border-brand/40 pl-5 py-2">
                  <p className="text-white/70 text-base leading-relaxed">
                    Empowering students to push the boundaries of technology. At GFG ITER, we believe in building a foundation of strong technical skills, continuous learning, and collaborative innovation that prepares you for the challenges of tomorrow.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-hairline">
                  <a
                    href="#"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white transition-transform raw-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.2}>
            <article className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 rounded-[2rem] border border-hairline bg-surface-elevated p-6 md:p-8 transition-all duration-500 raw-hover:border-brand/40 raw-hover:shadow-[0_0_40px_rgba(0,255,127,0.1)] group">
              {/* Image side */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[4/5] max-w-[300px] mx-auto md:max-w-none rounded-[1.5rem] overflow-hidden bg-black/40 border border-hairline flex items-center justify-center transition-transform duration-500 group-raw-hover:scale-[1.02]">
                  <User className="w-32 h-32 text-brand/20 transition-transform duration-500 group-raw-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand mb-5 w-fit shadow-[0_0_15px_rgba(0,255,127,0.1)]">
                  Faculty Coordinator | GFG Campus Body ITER
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Random Name 2</h3>
                <p className="text-sm text-brand font-medium mb-8">Assistant Professor, Department of CSE</p>
                
                <div className="relative border-l-2 border-brand/40 pl-5 py-2">
                  <p className="text-white/70 text-base leading-relaxed">
                    Innovation starts with a curious mindset and a supportive community. Our goal at GFG ITER is to provide students with the platform and resources they need to experiment, fail, learn, and ultimately build products that matter.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-hairline">
                  <a
                    href="#"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white transition-transform raw-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </article>
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
