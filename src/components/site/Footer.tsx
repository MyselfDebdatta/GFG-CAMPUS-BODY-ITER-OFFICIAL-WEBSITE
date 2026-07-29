import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MessageCircle, Youtube, Github } from "lucide-react";
import { CLUB } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 bg-[#0B0F19] text-slate-300 border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
      <div className="container-page py-16 relative">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand/About Column */}
          <div className="max-w-xs">
            <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">GFG <span className="text-[#00ff7f]">ITER</span></h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              The premier student computing organization at SOA University. Building the next generation of technology leaders.
            </p>
            <a href={`mailto:${CLUB.email}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#00ff7f] transition-colors">
              <Mail className="h-4 w-4" /> {CLUB.email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4">
              {[
                { to: "/about", label: "About" },
                { to: "/events", label: "Events" },
                { to: "/team", label: "Team" },
                { to: "/contact", label: "Connect" },
              ].map(link => (
                <Link key={link.label} to={link.to} className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Follow Us</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: Linkedin, href: CLUB.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: CLUB.social.instagram, label: "Instagram" },
                { icon: MessageCircle, href: CLUB.social.whatsapp, label: "WhatsApp" },
                { icon: Youtube, href: (CLUB.social as any).youtube || "https://youtube.com", label: "YouTube" },
                { icon: Github, href: CLUB.social.github, label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group">
                  <div className="grid h-8 w-8 place-items-center rounded bg-white/5 border border-white/10 group-hover:bg-[#00ff7f]/10 group-hover:border-[#00ff7f]/30 group-hover:text-[#00ff7f] transition-all">
                    <Icon className="h-4 w-4" />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GFG ITER Student Chapter. All rights reserved.</p>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex items-center gap-1">Powered by <span className="text-[#00ff7f] font-semibold">GFG ITER</span></div>
            <div className="flex items-center gap-1">Design & Developed by <span className="text-[#00ff7f] font-semibold">GFG Team</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
