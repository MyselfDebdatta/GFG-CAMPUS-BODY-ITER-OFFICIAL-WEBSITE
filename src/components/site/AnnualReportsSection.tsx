import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, Download, BookOpen, X } from "lucide-react";
import { NativeFlipBook } from "./NativeFlipBook";

const REPORTS = [
  {
    id: "2025-2026",
    title: "Annual Report 2025-26 - Life at GFG ITER",
    publisher: "GFG ITER",
    coverUrl: "/images/annual-report-cover.png", 
    year: "2025-26",
  },
  // Future reports will be added here
];

export function AnnualReportsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeReport, setActiveReport] = useState<typeof REPORTS[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key and prevent body scroll when open
  useEffect(() => {
    if (!activeReport) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveReport(null);
    };
    
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeReport]);

  const filteredReports = REPORTS.filter((report) =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    report.year.includes(searchQuery)
  );

  return (
    <section className="relative z-10 py-24 overflow-hidden bg-transparent container-page">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8 text-center sm:text-left">
          Explore our Annual Reports
        </h2>
        
        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:border-[#00ff7f]/50 focus:outline-none focus:ring-1 focus:ring-[#00ff7f]/50 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
              Latest <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
            <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
              All Years <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredReports.map((report) => (
          <div 
            key={report.id}
            onClick={() => setActiveReport(report)}
            className="group cursor-pointer rounded-2xl border border-white/10 bg-[#020b06] p-3 transition-all hover:border-[#00ff7f]/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(0,255,127,0.15)] flex flex-col h-full"
          >
            {/* Book Cover */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-[#00ff7f]/10 to-transparent">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <BookOpen className="h-12 w-12 text-[#00ff7f] mb-4 opacity-80" />
                 <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                   GFG ITER<br/>Annual Report
                 </h3>
                 <p className="text-[#00ff7f] font-mono text-sm font-bold">{report.year}</p>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="rounded-full bg-[#00ff7f] text-[#020b06] px-6 py-2.5 font-bold transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(0,255,127,0.4)]">
                  Read Now
                </div>
              </div>
            </div>
            
            {/* Book Info */}
            <div className="mt-4 flex flex-col flex-1 px-1">
              <h3 className="text-sm font-bold text-white line-clamp-2 mb-1 group-hover:text-[#00ff7f] transition-colors">
                {report.title}
              </h3>
              <div className="mt-auto pt-4 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-[#00ff7f]/20 flex items-center justify-center text-[#00ff7f]">
                    <span className="text-[10px] font-bold">G</span>
                  </div>
                  <span className="font-medium">{report.publisher}</span>
                </div>
                <Download className="h-4 w-4 hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
        {filteredReports.length === 0 && (
          <div className="col-span-full py-20 text-center text-white/50">
            No annual reports found matching your search.
          </div>
        )}
      </div>

      {/* Full-Screen Flipbook Modal rendered to document.body (above Navbar) */}
      {activeReport && mounted && createPortal(
        <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md overflow-y-auto flex flex-col items-center animate-in fade-in-0 duration-200">
          {/* Close button */}
          <button
            onClick={() => setActiveReport(null)}
            className="fixed top-6 right-6 z-[100000] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-[#00ff7f] hover:text-[#020b06] hover:scale-110 active:scale-95 cursor-pointer shadow-2xl"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Book Viewer Container with flexbox my-auto to avoid top/bottom clipping */}
          <div className="min-h-screen w-full flex flex-col items-center py-6 sm:py-10 px-2 sm:px-6">
            <div className="my-auto w-full max-w-7xl mx-auto">
              <NativeFlipBook hideHeader={true} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
