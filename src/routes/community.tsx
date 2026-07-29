import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Bell, Briefcase, Users, ShieldCheck, QrCode } from "lucide-react";
import { CLUB } from "@/lib/site-data";
import { Reveal, SectionHeader } from "@/components/site/Primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "WhatsApp Community · GFG ITER" },
      { name: "description", content: "Join the GFG ITER WhatsApp community for event updates, opportunities, and discussions." },
      { property: "og:title", content: "WhatsApp Community · GFG ITER" },
      { property: "og:description", content: "Join the GFG ITER WhatsApp community." },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Community,
});

const BENEFITS = [
  { icon: Bell, title: "Instant updates", body: "Event drops, deadlines, and announcements the moment they happen." },
  { icon: MessageCircle, title: "Coding discussions", body: "Ask questions, share solutions, debate approaches — with 500+ students." },
  { icon: Briefcase, title: "Internship & placement", body: "Curated openings, referrals, and prep resources from alumni." },
  { icon: Users, title: "Networking", body: "Meet seniors, juniors, and alumni across batches and branches." },
];

const GUIDELINES = [
  "Keep it kind. Assume good intent.",
  "No spam, no self-promo without context.",
  "English or Odia — whichever helps the answer.",
  "Search before you ask. Contribute back after you learn.",
  "Respect privacy. Don't share DMs without consent.",
];

function Community() {
  return (
    <>
      <section className="relative">
        <div className="container-page relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              <MessageCircle className="h-3 w-3" /> Community · Private group
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Join the <span className="text-gradient-brand">GFG ITER</span> WhatsApp community.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              One group. Zero noise. Everything you need to stay plugged into the club — events, opportunities, and honest engineering conversations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
                <a href={CLUB.social.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" /> Join WhatsApp Community
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/15 font-semibold">
                <a href="#guidelines">Read guidelines</a>
              </Button>
            </div>
          </div>

          {/* QR Card */}
          <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 rounded-3xl border border-hairline bg-surface-elevated p-8 md:grid-cols-[auto_1fr] md:items-center md:p-10">
              <div className="mx-auto grid aspect-square w-48 place-items-center rounded-2xl border border-hairline bg-[repeating-linear-gradient(45deg,var(--foreground)_0_2px,transparent_2px_8px)] opacity-90">
                <div className="grid h-24 w-24 place-items-center rounded-xl bg-background text-brand">
                  <QrCode className="h-12 w-12" />
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Scan to join</div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">Point your camera. Tap the link. You're in.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Only current ITER students. We verify new members weekly to keep the group high-signal.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page py-20">
        <SectionHeader eyebrow="What you get" title="Why 500+ students stay in the group" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-hairline bg-surface-elevated p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{b.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="border-t border-hairline bg-surface py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Community guidelines"
            title="Keep it useful. Keep it kind."
            description="A few small rules that keep the group signal-dense and welcoming for everyone."
          />
          <ul className="space-y-3">
            {GUIDELINES.map((g) => (
              <li key={g} className="flex items-start gap-3 rounded-xl border border-hairline bg-surface-elevated p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
