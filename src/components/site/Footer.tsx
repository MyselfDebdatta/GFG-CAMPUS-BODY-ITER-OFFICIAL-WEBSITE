import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MessageCircle, Youtube, Github, TerminalSquare } from "lucide-react";
import { CLUB } from "@/lib/site-data";

function TerminalLog() {
  return (
    <div className="flex flex-col mt-2 lg:mt-0">
      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/80 mb-4 uppercase">
        <TerminalSquare className="h-4 w-4 text-[#00ff7f]" /> System.Log
      </div>
      <div className="relative overflow-hidden rounded-xl border border-[#00ff7f]/20 bg-[#020b06]/80 p-5 font-mono text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,127,0.05)] backdrop-blur-md group hover:border-[#00ff7f]/50 hover:shadow-[0_0_30px_rgba(0,255,127,0.15)] transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff7f]/50 to-transparent opacity-50" />
        <div className="space-y-3 text-[#00ff7f]/90">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#3b82f6]">
              <span>root@gfg-sc:~$</span>
              <span className="text-[#00ff7f]">npm install community</span>
            </div>
            <div className="text-slate-400 pl-4">
              [success] Added 500+ members...
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#3b82f6]">
              <span>root@gfg-sc:~$</span>
              <span className="text-[#00ff7f]">./launch-event.sh</span>
            </div>
            <div className="flex items-center text-[#00ff7f] pl-4 mt-1">
              <span className="h-3 w-1.5 bg-[#00ff7f] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ECGFooterWave } from "./ECGFooterWave";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 bg-[#060D09] text-slate-300 border-t border-[#00ff7f]/10">
      <div className="container-page py-16 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1.8fr_0.8fr_1.2fr]">
          {/* Brand/About Column */}
          <div className="max-w-xs">
            <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">GFG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] via-[#e2da24] to-[#32CD32]">ITER</span></h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              The premier student computing organization at SOA University. Building the next generation of technology leaders.
            </p>
            <a href={`mailto:${CLUB.email}`} className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#00ff7f] transition-colors">
              <Mail className="h-4 w-4" /> {CLUB.email}
            </a>
          </div>

          {/* Terminal Log Element */}
          <div className="w-full">
            <TerminalLog />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { to: "/about", label: "About" },
                { to: "/events", label: "Events" },
                { to: "/team", label: "Team" },
                { to: "/alumni", label: "Alumni" },
                { to: "/community", label: "Community" },
                { to: "/contact", label: "Connect" },
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
                { icon: Youtube, href: (CLUB.social as any).youtube || "https://youtube.com", label: "YouTube", hover: "group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/30 group-hover:text-[#FF0000]" },
                { icon: Github, href: CLUB.social.github, label: "GitHub", hover: "group-hover:bg-white/10 group-hover:border-white/30 group-hover:text-white" },
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
      {/* Dynamic ECG Heartbeat Separator */}
      <ECGFooterWave />

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
