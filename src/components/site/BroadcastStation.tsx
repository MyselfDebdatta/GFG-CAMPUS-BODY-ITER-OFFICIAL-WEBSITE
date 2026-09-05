import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Code2,
  Wrench,
  Palette,
  Megaphone,
  FileText,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  MapPin,
  Flame,
  HelpCircle,
} from "lucide-react";
import {
  BROADCASTS,
  BroadcastItem,
} from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// -------------------------------------------------------------
// Mini Hero Broadcast Pill (For above-the-fold instant notice)
// -------------------------------------------------------------
export function HeroBroadcastPill() {
  const liveRecruitment = BROADCASTS.find((b) => b.id === "recruitment-2026-2027") || BROADCASTS[0];

  const handleScrollToBroadcast = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("broadcast-station");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.a
      href="#broadcast-station"
      onClick={handleScrollToBroadcast}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-[#00ff7f]/40 bg-[#060D09]/90 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-xl transition-all duration-300 hover:border-[#00ff7f] hover:bg-[#00ff7f]/10 hover:shadow-[0_0_25px_rgba(0,255,127,0.3)] active:scale-98 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>
      <span className="font-bold tracking-wider text-[#00ff7f] uppercase text-[10px] sm:text-[11px] font-mono shrink-0">
        Live Broadcast
      </span>
      <span className="text-white/30">•</span>
      <span className="text-white/90 group-hover:text-white font-medium">
        Registration for GFG Members Recruitment (2026–2027 Session) is Live Now!
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-[#00ff7f] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#020b06] transition-all group-hover:bg-white shrink-0 ml-1">
        Apply Now <ChevronRight className="h-3 w-3" />
      </span>
    </motion.a>
  );
}

// -------------------------------------------------------------
// Domain Icon Helper
// -------------------------------------------------------------
function DomainIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n.includes("tech") || n.includes("dev")) return <Code2 className="h-5 w-5 text-[#00ff7f]" />;
  if (n.includes("ops") || n.includes("operation")) return <Wrench className="h-5 w-5 text-[#3b82f6]" />;
  if (n.includes("design") || n.includes("creative")) return <Palette className="h-5 w-5 text-[#ec4899]" />;
  if (n.includes("pr") || n.includes("media")) return <Megaphone className="h-5 w-5 text-[#eab308]" />;
  return <FileText className="h-5 w-5 text-[#a855f7]" />;
}

// -------------------------------------------------------------
// Full Interactive Broadcast Station
// -------------------------------------------------------------
export function BroadcastStation() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"overview" | "domains" | "process" | "faqs">("overview");
  const [copied, setCopied] = useState(false);

  // Focus purely on the 2026–2027 Recruitment Drive
  const activeBroadcast: BroadcastItem =
    BROADCASTS.find((b) => b.id === "recruitment-2026-2027") || BROADCASTS[0];

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#broadcast-station`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="broadcast-station" className="relative z-10 py-20 md:py-28 overflow-hidden bg-transparent">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00ff7f]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container-page relative z-10">
        {/* Transmission Station Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#00ff7f]/20">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {/* Live Signal Beacon */}
              <div className="flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                OFFICIAL TRANSMISSION
              </div>

              {/* Audio Frequency Bars Animation */}
              <div className="hidden sm:flex items-center gap-1 rounded-full border border-[#00ff7f]/30 bg-[#020b06] px-3 py-1 text-xs text-[#00ff7f]/80 font-mono">
                <div className="flex items-end gap-0.5 h-3.5 mr-1">
                  <span className="w-0.5 bg-[#00ff7f] animate-pulse h-2" />
                  <span className="w-0.5 bg-[#00ff7f] animate-pulse h-3.5 delay-100" />
                  <span className="w-0.5 bg-[#00ff7f] animate-pulse h-1.5 delay-75" />
                  <span className="w-0.5 bg-[#00ff7f] animate-pulse h-3 delay-150" />
                </div>
                FREQ 104.8 MHz // ITER SOA
              </div>

              {/* Status Badge */}
              <div className="text-xs text-white/50 font-mono hidden lg:inline-block">
                STATUS: <span className="text-[#00ff7f]">ACTIVE INTAKE</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,255,127,0.25)]">
              Chapter Broadcast Hub
            </h2>
            <p className="mt-2 text-base md:text-lg text-white/60 max-w-2xl">
              Official announcement regarding chapter recruitment and core intake for the upcoming academic session.
            </p>
          </div>

          {/* Clean Session Status Indicator on the right */}
          <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-[#00ff7f]/30 bg-[#060D09] px-4 py-2.5 text-xs font-mono text-[#00ff7f] shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse" />
            <span>SESSION 2026–2027 // RECRUITMENT LIVE</span>
          </div>
        </div>

        {/* Focused Main Broadcast Card (Full Width, Centered, Clean) */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="relative rounded-3xl border-2 border-[#00ff7f]/40 bg-[#060D09]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-12 shadow-[0_0_35px_rgba(0,255,127,0.15)] overflow-hidden">
              {/* Tech Scanlines & Grid Texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"
              />

              {/* Top Corner Cyber Brackets */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#00ff7f]" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#00ff7f]" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#00ff7f]" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#00ff7f]" />

              {/* Transmission Meta Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-3 py-1 text-xs font-mono font-bold tracking-wider text-[#00ff7f]">
                    ID: #{activeBroadcast.id.toUpperCase().slice(0, 16)}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    {activeBroadcast.categoryLabel}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                  <Clock className="h-3.5 w-3.5 text-[#00ff7f]" />
                  <span>{activeBroadcast.timestamp}</span>
                </div>
              </div>

              {/* Headline & Title */}
              <div className="relative z-10 mt-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-3.5 py-1 text-xs font-bold text-[#00ff7f] mb-4">
                  <Flame className="h-3.5 w-3.5" />
                  {activeBroadcast.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {activeBroadcast.headline}
                </h3>

                <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                  {activeBroadcast.summary}
                </p>
              </div>

              {/* Specifics Grid (Eligibility, Timeline, Format, Status) */}
              {activeBroadcast.eligibility && (
                <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-xs">
                  <div>
                    <div className="text-white/40 uppercase font-mono tracking-wider flex items-center gap-1">
                      <GraduationCap className="h-3.5 w-3.5 text-[#00ff7f]" /> Eligibility
                    </div>
                    <div className="mt-1 font-bold text-white text-xs sm:text-sm truncate" title={activeBroadcast.eligibility}>
                      {activeBroadcast.eligibility}
                    </div>
                  </div>

                  <div>
                    <div className="text-white/40 uppercase font-mono tracking-wider flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#00ff7f]" /> Timeline
                    </div>
                    <div className="mt-1 font-bold text-[#00ff7f] text-xs sm:text-sm truncate" title={activeBroadcast.deadline}>
                      {activeBroadcast.deadline || "Rolling"}
                    </div>
                  </div>

                  <div>
                    <div className="text-white/40 uppercase font-mono tracking-wider flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#00ff7f]" /> Format
                    </div>
                    <div className="mt-1 font-bold text-white text-xs sm:text-sm truncate" title={activeBroadcast.mode}>
                      {activeBroadcast.mode || "Campus Offline"}
                    </div>
                  </div>

                  <div>
                    <div className="text-white/40 uppercase font-mono tracking-wider flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#00ff7f]" /> Status
                    </div>
                    <div className="mt-1 font-bold text-red-400 text-xs sm:text-sm flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      Active Now
                    </div>
                  </div>
                </div>
              )}

              {/* Domains Preview Pills (if recruitment) */}
              {activeBroadcast.domains && (
                <div className="relative z-10 mt-7">
                  <div className="text-xs uppercase font-mono font-bold tracking-wider text-[#00ff7f]/90 mb-3.5 flex items-center gap-2">
                    <Users className="h-3.5 w-3.5" />
                    Open Domains for 2026–2027 Cohort:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {activeBroadcast.domains.map((dom) => (
                      <div
                        key={dom.name}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-[#00ff7f]/40 hover:bg-white/10"
                      >
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#00ff7f]/10 mt-0.5">
                          <DomainIcon name={dom.name} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-white">{dom.name}</div>
                          <div className="text-[11px] text-white/50 mt-1 line-clamp-1">
                            {dom.skills.join(" · ")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights Checkmarks */}
              <div className="relative z-10 mt-7 space-y-2.5 border-t border-white/10 pt-6">
                {activeBroadcast.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00ff7f] mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                {activeBroadcast.id === "recruitment-2026-2027" ? (
                  <Button
                    onClick={() => setIsApplyModalOpen(true)}
                    size="lg"
                    className="rounded-xl bg-[#00ff7f] px-8 py-6 text-sm sm:text-base font-bold text-[#020b06] shadow-[0_0_20px_rgba(0,255,127,0.4)] transition-all hover:bg-[#00ff7f]/90 hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    {activeBroadcast.actionLabel || "Apply for Recruitment 2026–2027"}
                  </Button>
                ) : activeBroadcast.registrationUrl?.startsWith("/") ? (
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl bg-[#00ff7f] px-8 py-6 text-sm sm:text-base font-bold text-[#020b06] shadow-[0_0_20px_rgba(0,255,127,0.4)] transition-all hover:bg-[#00ff7f]/90 hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <Link to={activeBroadcast.registrationUrl}>
                      {activeBroadcast.actionLabel || "View Details"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl bg-[#00ff7f] px-8 py-6 text-sm sm:text-base font-bold text-[#020b06] shadow-[0_0_20px_rgba(0,255,127,0.4)] transition-all hover:bg-[#00ff7f]/90 hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <a href={activeBroadcast.registrationUrl} target="_blank" rel="noopener noreferrer">
                      {activeBroadcast.actionLabel || "Open Link"}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}

                {/* Secondary Modal Trigger for Recruitment */}
                {activeBroadcast.id === "recruitment-2026-2027" && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setModalTab("domains");
                      setIsApplyModalOpen(true);
                    }}
                    className="rounded-xl border-white/20 bg-white/5 px-6 py-6 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all hover:border-[#00ff7f]/50 hover:bg-white/10 cursor-pointer"
                  >
                    View Domains & Selection Steps
                  </Button>
                )}

                {/* Copy Broadcast Share Link */}
                <button
                  onClick={handleCopyLink}
                  title="Copy direct link to this broadcast"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-[#00ff7f]/50 hover:text-[#00ff7f] hover:bg-white/10 active:scale-95 cursor-pointer"
                >
                  {copied ? <Check className="h-5 w-5 text-[#00ff7f]" /> : <Copy className="h-5 w-5" />}
                </button>
                {copied && (
                  <span className="text-xs font-mono text-[#00ff7f] animate-fade-in">Link Copied!</span>
                )}
              </div>
            </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Recruitment Application & Information Modal Dialog            */}
      {/* ------------------------------------------------------------- */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-2 border-[#00ff7f]/50 bg-[#060D09] text-white p-6 sm:p-8 rounded-3xl shadow-[0_0_50px_rgba(0,255,127,0.3)]">
          <DialogHeader className="text-left border-b border-white/10 pb-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                Official Chapter Intake · Session 2026–2027
              </span>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white">
              GFG ITER Member Recruitment
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-white/70 mt-1">
              Join the official GeeksforGeeks student collective at SOA University. Step up to engineer solutions, manage mega-hackathons, and grow alongside ITER's top builders.
            </DialogDescription>
          </DialogHeader>

          {/* Modal Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4 border-b border-white/10 pb-3">
            {[
              { id: "overview", label: "Overview & Perks" },
              { id: "domains", label: "5 Open Domains" },
              { id: "process", label: "Selection Process" },
              { id: "faqs", label: "Candidate FAQs" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setModalTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  modalTab === tab.id
                    ? "bg-[#00ff7f] text-[#020b06] shadow-[0_0_10px_rgba(0,255,127,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {modalTab === "overview" && (
            <div className="mt-5 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/50">Eligibility</div>
                  <div className="font-bold text-white mt-1">1st, 2nd & 3rd Yr B.Tech</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/50">Recruitment Window</div>
                  <div className="font-bold text-[#00ff7f] mt-1">Rolling Admissions</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/50">Commitment</div>
                  <div className="font-bold text-white mt-1">3–5 hrs / week</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-white/50">Campus Chapter</div>
                  <div className="font-bold text-white mt-1">ITER SOA University</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#00ff7f] mb-3">
                  Why Join the GFG ITER Core Team?
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff7f] shrink-0 mt-0.5" />
                    <span><strong>Official Credentials:</strong> Receive Chapter Leadership certificates verified by GeeksforGeeks Headquarters and the SOA CSE Department.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff7f] shrink-0 mt-0.5" />
                    <span><strong>Real Production Experience:</strong> Build internal tooling, manage live CTF competitions (Zer0ne), and deploy real apps used by 1800+ students.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff7f] shrink-0 mt-0.5" />
                    <span><strong>Top Referral Network:</strong> Direct mentorship from seniors placed at high-growth tech companies and GSoC contributors.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff7f] shrink-0 mt-0.5" />
                    <span><strong>Exclusive GFG Merchandise:</strong> Chapter branded swag, T-shirts, stickers, and priority sponsorship for national hackathons.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Domains */}
          {modalTab === "domains" && (
            <div className="mt-5 space-y-4">
              <p className="text-xs sm:text-sm text-white/70">
                You may apply for up to two domains in your application form. Select the area that best aligns with your passions:
              </p>
              <div className="space-y-3">
                {BROADCASTS[0].domains?.map((dom) => (
                  <div
                    key={dom.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#00ff7f]/40"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <DomainIcon name={dom.name} />
                        <h5 className="font-bold text-white text-base">{dom.name}</h5>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00ff7f] bg-[#00ff7f]/10 px-2.5 py-0.5 rounded-full border border-[#00ff7f]/20">
                        {dom.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {dom.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {dom.skills.map((s) => (
                        <span key={s} className="text-[10px] font-semibold text-white/60 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Process */}
          {modalTab === "process" && (
            <div className="mt-5 space-y-4">
              <p className="text-xs sm:text-sm text-white/70">
                Our selection process is designed to be fair, constructive, and hands-on:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {BROADCASTS[0].selectionProcess?.map((step) => (
                  <div key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#00ff7f] text-[#020b06] font-bold text-xs font-mono">
                        {step.step}
                      </span>
                      <h5 className="font-bold text-white text-sm">{step.title}</h5>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: FAQs */}
          {modalTab === "faqs" && (
            <div className="mt-5 space-y-3">
              {[
                {
                  q: "Can first-year B.Tech students apply?",
                  a: "Yes! 1st year students are actively encouraged to apply. We look for curiosity, hunger to learn, and commitment rather than extensive prior experience."
                },
                {
                  q: "What if I don't have a GitHub or portfolio yet?",
                  a: "That's completely fine! Show us what you've explored, your passion for coding or organizing, or any school/personal projects. The domain task will give you an opportunity to shine."
                },
                {
                  q: "Can I apply for more than one domain?",
                  a: "Yes, you can indicate a primary domain and a secondary preference on the registration form."
                },
                {
                  q: "Where will the interviews be conducted?",
                  a: "Interviews will be held offline at ITER Campus 1 (AIC SOA / CSE Seminar Halls) with flexible timing so they do not clash with your lecture schedule."
                }
              ].map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <div className="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-[#00ff7f] shrink-0" />
                    {faq.q}
                  </div>
                  <p className="mt-1.5 text-xs text-white/70 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div className="text-xs text-white/50">
              Questions? Reach out to <a href="mailto:gfgiter@soa.ac.in" className="text-[#00ff7f] hover:underline font-mono">gfgiter@soa.ac.in</a>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="ghost"
                onClick={() => setIsApplyModalOpen(false)}
                className="w-full sm:w-auto rounded-xl border border-white/10 text-white/70 hover:text-white cursor-pointer"
              >
                Close
              </Button>
              <Button
                asChild
                className="w-full sm:w-auto rounded-xl bg-[#00ff7f] text-[#020b06] font-bold hover:bg-[#00ff7f]/90 shadow-[0_0_15px_rgba(0,255,127,0.4)] cursor-pointer"
              >
                <a
                  href={BROADCASTS[0].registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Proceed to Application Form
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
