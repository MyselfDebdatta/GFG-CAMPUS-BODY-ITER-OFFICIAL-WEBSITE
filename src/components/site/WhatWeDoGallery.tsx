import { useState } from "react";
import { BookOpen, ExternalLink, Sparkles, Share2, Check, Download, Layers, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatWeDoGallery() {
  const [copied, setCopied] = useState(false);
  const flipbookUrl = "https://heyzine.com/flip-book/9752568637.html#page/1";

  const handleShare = () => {
    navigator.clipboard.writeText(flipbookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative z-10 py-24 overflow-hidden bg-transparent">
      {/* Background radial ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] bg-[#00ff7f]/5 blur-[140px] rounded-full" />

      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-[#00ff7f] backdrop-blur-md mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              ANNUAL REPORT 2025–26 · LIFE AT GFG ITER
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              GFG ITER <span className="text-gradient-brand">Annual Report</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-medium leading-relaxed">
              Explore our complete chapter chronicle — showcasing our hackathons, technical workshops, community milestones, and student achievements in our official interactive flipbook edition.
            </p>
          </div>

          {/* Quick Action Controls */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all hover:border-[#00ff7f]/50 hover:bg-[#00ff7f]/10 hover:text-[#00ff7f] active:scale-95 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#00ff7f]" />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  <span>Share Report</span>
                </>
              )}
            </button>

            <a
              href={flipbookUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-5 py-2.5 text-sm font-bold text-[#00ff7f] backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-[#020b06] hover:shadow-[0_0_20px_rgba(0,255,127,0.35)] active:scale-95 shadow-md"
            >
              <span>Full Screen Edition</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Embedded Interactive Flipbook Card Container */}
        <div className="relative rounded-3xl border border-[#00ff7f]/30 bg-black/60 backdrop-blur-xl p-3 sm:p-5 md:p-6 shadow-[inset_0_0_30px_rgba(0,255,127,0.05),0_20px_50px_-10px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Glowing Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff7f]/50 rounded-tl-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff7f]/50 rounded-tr-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ff7f]/50 rounded-bl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff7f]/50 rounded-br-3xl pointer-events-none" />

          {/* Flipbook Header Bar inside Card */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 px-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00ff7f]/80">
              <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse" />
              Interactive Edition · Turn Pages to Read
            </div>
            <div className="text-xs text-white/50 hidden sm:block">
              GeeksforGeeks Campus Body ITER
            </div>
          </div>

          {/* Heyzine Flipbook iFrame */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] md:h-[620px] lg:h-[680px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
            <iframe
              allowFullScreen={true}
              allow="autoplay; fullscreen; clipboard-write"
              scrolling="no"
              className="w-full h-full border-0 rounded-2xl"
              src="https://heyzine.com/flip-book/9752568637.html"
              title="GFG ITER Annual Report 2025-26"
            />
          </div>

          {/* Feature Highlights Grid Below Reader */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-3 border-t border-white/10">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-3.5 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ff7f]/10 text-[#00ff7f] border border-[#00ff7f]/20">
                <Award className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate">Flagship Summits</div>
                <div className="text-[11px] text-white/60 truncate">HackITER & Launch</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-3.5 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ff7f]/10 text-[#00ff7f] border border-[#00ff7f]/20">
                <Layers className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate">24+ Workshops</div>
                <div className="text-[11px] text-white/60 truncate">DSA, Systems & Cloud</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-3.5 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ff7f]/10 text-[#00ff7f] border border-[#00ff7f]/20">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate">1000+ Builders</div>
                <div className="text-[11px] text-white/60 truncate">Mentored & Trained</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-3.5 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ff7f]/10 text-[#00ff7f] border border-[#00ff7f]/20">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate">National Wins</div>
                <div className="text-[11px] text-white/60 truncate">Hackathons & SIH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
