import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { CLUB } from "@/lib/site-data";

function CampusLocationMap() {
  return (
    <div className="flex flex-col mt-2 lg:mt-0">
      <div className="flex items-center justify-between gap-2 text-xs font-bold tracking-[0.2em] text-white/80 mb-3 uppercase">
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-[#00ff7f]" /> Campus Location
        </span>
        <span className="text-[11px] font-normal tracking-normal text-slate-400 font-sans hidden sm:inline">ITER, SOA University</span>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-[#00ff7f]/20 bg-[#020b06]/80 shadow-[0_0_20px_rgba(0,255,127,0.05)] backdrop-blur-md group hover:border-[#00ff7f]/50 hover:shadow-[0_0_30px_rgba(0,255,127,0.15)] transition-all duration-300">
        <div className="h-[120px] w-full relative">
          <iframe
            title="GFG ITER Campus Location Map"
            src="https://www.google.com/maps?q=ITER%2C+Bhubaneswar&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[25%] contrast-[1.1] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="px-3 py-2 bg-[#020b06]/95 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span className="truncate">Jagamara, Bhubaneswar, Odisha</span>
          <a
            href="https://maps.google.com/?q=ITER,Bhubaneswar"
            target="_blank"
            rel="noreferrer"
            className="text-[#00ff7f] hover:underline shrink-0 ml-2 font-medium"
          >
            View Map
          </a>
        </div>
      </div>
    </div>
  );
}

import { DigitalPipeline } from "./DigitalPipeline";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 bg-[#060D09] text-slate-300 border-t border-[#00ff7f]/10">
      <div className="container-page py-16 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1.8fr_0.8fr_1.2fr]">
          {/* Brand/About Column */}
          <div className="max-w-xs flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">GFG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] via-[#e2da24] to-[#32CD32]">ITER</span></h3>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                The premier student computing organization at SOA University. Building the next generation of technology leaders.
              </p>
            </div>
            <div className="space-y-3 pt-1 border-t border-white/5">
              <a href={`mailto:${CLUB.email}`} className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-[#00ff7f] transition-colors">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10 text-[#00ff7f]">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="truncate">{CLUB.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <a href={`tel:${CLUB.phone.replace(/\s/g, "")}`} className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10 text-[#00ff7f] hover:bg-[#00ff7f]/10 hover:border-[#00ff7f]/30 transition-all mt-0.5" title="Call President">
                  <Phone className="h-3.5 w-3.5" />
                </a>
                <div className="flex flex-col">
                  <a href={`tel:${CLUB.phone.replace(/\s/g, "")}`} className="text-sm font-medium text-slate-300 hover:text-[#00ff7f] transition-colors">
                    {CLUB.phone}
                  </a>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-400 font-medium">Vivek Ranjan Sahoo</span>
                    <span className="inline-block px-1.5 py-0.2 text-[9px] font-bold tracking-wider uppercase rounded bg-[#00ff7f]/10 text-[#00ff7f] border border-[#00ff7f]/20">
                      President
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Location Map */}
          <div className="w-full">
            <CampusLocationMap />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About" },
                { to: "/events", label: "Events" },
                { to: "/team", label: "Team" },
                { to: "/hall-of-fame", label: "Hall of Fame" },
                { to: "/community", label: "Community" },
              ].map(link => (
                <Link key={link.label} to={link.to} className="text-sm text-slate-400 hover:text-[#00ff7f] hover:translate-x-1 transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Follow Us</h4>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: Linkedin, href: CLUB.social.linkedin, label: "LinkedIn", hover: "group-hover:bg-[#0A66C2]/10 group-hover:border-[#0A66C2]/30 group-hover:text-[#0A66C2]" },
                { icon: Instagram, href: CLUB.social.instagram, label: "Instagram", hover: "group-hover:bg-[#E1306C]/10 group-hover:border-[#E1306C]/30 group-hover:text-[#E1306C]" },
                { icon: MessageCircle, href: CLUB.social.whatsapp, label: "WhatsApp", hover: "group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/30 group-hover:text-[#25D366]" },
                { icon: DiscordIcon, href: CLUB.social.discord, label: "Discord", hover: "group-hover:bg-[#5865F2]/10 group-hover:border-[#5865F2]/30 group-hover:text-[#5865F2]" },
              ].map(({ icon: Icon, href, label, hover }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                  <div className={`grid h-8 w-8 shrink-0 place-items-center rounded bg-white/5 border border-white/10 transition-all ${hover}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      {/* Dynamic Digital Pipeline Separator */}
      <DigitalPipeline />

      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 text-xs text-slate-500">
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
