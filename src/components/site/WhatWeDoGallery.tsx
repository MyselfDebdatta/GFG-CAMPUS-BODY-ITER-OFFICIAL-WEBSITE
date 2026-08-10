import { useState, useRef, useEffect } from "react";
import { BookOpen, ExternalLink, Sparkles, Share2, Check, ChevronLeft, ChevronRight, Layers, ShieldCheck, Award } from "lucide-react";

export function WhatWeDoGallery() {
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const flipbookUrl = "https://heyzine.com/flip-book/9752568637.html#page/1";

  const handleShare = () => {
    navigator.clipboard.writeText(flipbookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const flipNext = () => {
    if (!iframeRef.current) return;
    try {
      iframeRef.current.focus();
      const win = iframeRef.current.contentWindow;
      if (win) {
        win.postMessage({ action: "next" }, "*");
        win.postMessage("next", "*");
        win.postMessage("nextPage", "*");
        win.postMessage({ type: "heyzine", action: "next" }, "*");
      }
    } catch (err) {}
  };

  const flipPrev = () => {
    if (!iframeRef.current) return;
    try {
      iframeRef.current.focus();
      const win = iframeRef.current.contentWindow;
      if (win) {
        win.postMessage({ action: "previous" }, "*");
        win.postMessage("prev", "*");
        win.postMessage("prevPage", "*");
        win.postMessage({ type: "heyzine", action: "prev" }, "*");
      }
    } catch (err) {}
  };

  // Intercept wheel scroll over flipbook to flip pages instead of scrolling main page
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastScroll = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      if (now - lastScroll < 350) return; // 350ms throttle
      lastScroll = now;

      if (e.deltaY > 0) {
        flipNext();
      } else if (e.deltaY < 0) {
        flipPrev();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

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
        <div 
          ref={containerRef}
          className="relative rounded-3xl border border-[#00ff7f]/30 bg-black/60 backdrop-blur-xl p-3 sm:p-5 md:p-6 shadow-[inset_0_0_30px_rgba(0,255,127,0.05),0_20px_50px_-10px_rgba(0,0,0,0.9)] overflow-hidden group"
        >
          {/* Glowing Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00ff7f]/50 rounded-tl-3xl pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff7f]/50 rounded-tr-3xl pointer-events-none z-20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00ff7f]/50 rounded-bl-3xl pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00ff7f]/50 rounded-br-3xl pointer-events-none z-20" />

          {/* Flipbook Header Bar inside Card */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 px-2 relative z-20">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00ff7f]/90 font-bold">
              <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse" />
              Scroll / Use Arrows to Flip Pages
            </div>
            <div className="text-xs text-white/50 hidden sm:block">
              GeeksforGeeks Campus Body ITER
            </div>
          </div>

          {/* Floating Next / Prev Arrow Navigation Overlays */}
          <button
            onClick={flipPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00ff7f]/30 bg-[#020b06]/80 text-[#00ff7f] backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,255,127,0.3)] hidden sm:flex"
            aria-label="Previous Page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={flipNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00ff7f]/30 bg-[#020b06]/80 text-[#00ff7f] backdrop-blur-md transition-all hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(0,255,127,0.3)] hidden sm:flex"
            aria-label="Next Page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Clean Cropped Flipbook Viewport Container */}
          <div className="relative h-[480px] sm:h-[580px] md:h-[650px] lg:h-[700px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
            <iframe
              ref={iframeRef}
              allowFullScreen={true}
              allow="autoplay; fullscreen; clipboard-write"
              scrolling="no"
              className="absolute w-[114%] h-[116%] -top-[8%] -left-[7%] border-0 rounded-2xl"
              src="https://heyzine.com/flip-book/9752568637.html?sh=0&fs=0&d=0#page/1"
              title="GFG ITER Annual Report 2025-26"
            />
          </div>

          {/* Feature Highlights Grid Below Reader */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-3 border-t border-white/10 relative z-20">
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
