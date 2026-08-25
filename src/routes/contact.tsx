import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Youtube, MessageCircle } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { CLUB, FAQS } from "@/lib/site-data";
import { Reveal, SectionHeader } from "@/components/site/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · GFG ITER" },
      { name: "description", content: "Get in touch with the Geeks for Geeks student chapter at ITER, SOA University." },
      { property: "og:title", content: "Contact · GFG ITER" },
      { property: "og:description", content: "Reach out to GFG ITER — collaborations, sponsorships, and student inquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      const flat: Record<string, string> = {};
      for (const issue of parsed.error.issues) flat[issue.path[0] as string] = issue.message;
      setErrors(flat);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent. We'll get back to you within 2 business days.");
    }, 700);
  };

  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-brand opacity-70" style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }} />
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Say hi to <span className="text-gradient-brand">GFG ITER.</span>
              </h1>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl leading-tight">
                Collaborations, sponsorships, speaker invites, or student inquiries — we read every message.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-hairline bg-surface-elevated p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" error={errors.name}>
                  <Input name="name" placeholder="Your name" aria-invalid={!!errors.name} />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <Input name="email" type="email" placeholder="you@iter.ac.in" aria-invalid={!!errors.email} />
                </Field>
              </div>
              <Field label="Subject" name="subject" error={errors.subject} className="mt-5">
                <Input name="subject" placeholder="What's this about?" aria-invalid={!!errors.subject} />
              </Field>
              <Field label="Message" name="message" error={errors.message} className="mt-5">
                <Textarea name="message" rows={6} placeholder="Tell us more…" aria-invalid={!!errors.message} />
              </Field>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  We typically respond within 2 business days.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-brand text-brand-foreground hover:bg-brand/90 font-semibold h-11 px-6"
                >
                  {submitting ? "Sending…" : "Send message"}
                  <Send className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              <InfoRow icon={MapPin} label="Address" value={CLUB.address} />
              <InfoRow icon={Mail} label="Email" value={CLUB.email} href={`mailto:${CLUB.email}`} />
              <InfoRow icon={Phone} label="Phone" value={CLUB.phone} href={`tel:${CLUB.phone.replace(/\s/g, "")}`} />

              <div className="rounded-2xl border border-hairline bg-surface-elevated p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Follow</div>
                <div className="mt-3 flex items-center gap-2">
                  {[
                    { icon: Linkedin, href: CLUB.social.linkedin, label: "LinkedIn", hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]" },
                    { icon: Instagram, href: CLUB.social.instagram, label: "Instagram", hoverClass: "hover:text-[#C13584] hover:border-[#C13584]/50 hover:shadow-[0_0_15px_rgba(193,53,132,0.3)]" },
                    { icon: MessageCircle, href: CLUB.social.whatsapp, label: "WhatsApp", hoverClass: "hover:text-[#25D366] hover:border-[#25D366]/50 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]" },
                    { icon: DiscordIcon, href: CLUB.social.discord, label: "Discord", hoverClass: "hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:shadow-[0_0_15px_rgba(88,101,242,0.3)]" },
                    { icon: Github, href: CLUB.social.github, label: "GitHub", hoverClass: "hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" },
                    { icon: Youtube, href: CLUB.social.youtube, label: "YouTube", hoverClass: "hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]" },
                  ].map(({ icon: Icon, href, label, hoverClass }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`grid h-10 w-10 place-items-center rounded-xl border border-hairline text-muted-foreground transition-all duration-300 ${hoverClass}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-hairline">
                <div className="relative aspect-[4/3] bg-surface">
                  <iframe
                    title="Campus map"
                    src="https://www.google.com/maps?q=ITER%2C+Bhubaneswar&output=embed"
                    className="absolute inset-0 h-full w-full grayscale-[30%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-hairline bg-surface py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader eyebrow="FAQ" title="Answers, quickly." />
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-hairline">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  children,
  className,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface-elevated p-5 transition-colors hover:border-brand/30"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium break-words">{value}</div>
      </div>
    </Comp>
  );
}
