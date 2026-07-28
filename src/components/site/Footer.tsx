import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, Send, ArrowUpRight } from "lucide-react";
import { CLUB } from "@/lib/site-data";
import { BrandMark } from "./Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-24 bg-[#0B0F19] text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <BrandMark />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">GeeksforGeeks</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">ITER · SOA</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              The official Geeks for Geeks student chapter at ITER, SOA University. Learn, build,
              and ship alongside a community of student engineers.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Linkedin, href: CLUB.social.linkedin, label: "LinkedIn" },
                { icon: Github, href: CLUB.social.github, label: "GitHub" },
                { icon: Instagram, href: CLUB.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={[
            { to: "/about", label: "About" },
            { to: "/events", label: "Events" },
            { to: "/team", label: "Team" },
            { to: "/alumni", label: "Alumni" },
          ]} />

          <FooterCol title="Community" links={[
            { to: "/community", label: "WhatsApp" },
            { to: "/contact", label: "Contact" },
            { to: "/events", label: "Hackathons" },
            { to: "/about", label: "Get Involved" },
          ]} />

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Newsletter</h4>
            <p className="mt-3 text-sm text-slate-400">
              Get event drops, project updates, and opportunities in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
            >
              <Input
                type="email"
                placeholder="you@iter.ac.in"
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-brand"
              />
              <Button type="submit" size="icon" className="bg-brand text-brand-foreground hover:bg-brand/90 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Official Geeks for Geeks ITER Student Chapter. Designed with ❤ for the student developer community.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>{CLUB.email}</span>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-white">
              Back to top <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-slate-300 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
