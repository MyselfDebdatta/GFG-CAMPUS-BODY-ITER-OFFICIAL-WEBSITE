import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, X, Maximize2, MapPin, Calendar, Camera } from "lucide-react";
import { SectionHeader } from "@/components/site/Primitives";

export const GALLERY_PHOTOS = [
  {
    id: "g1",
    title: "HackITER 2025 Flagship Hackathon",
    category: "Hackathons & Summits",
    location: "ITER Main Auditorium",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    description: "Over 300+ hackers assembled for 24 hours of non-stop building, mentoring, and pizza."
  },
  {
    id: "g2",
    title: "System Design & Cloud Bootcamp",
    category: "Workshops & Pods",
    location: "Lab 3, CSE Dept",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description: "Hands-on deep dive into distributed systems, load balancing, and microservices architecture."
  },
  {
    id: "g3",
    title: "GFG ITER Executive & Core Team",
    category: "Group & Community",
    location: "Campus Central Lawn",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description: "The core leads, organizers, and mentors celebrating after wrapping up a successful campus summit."
  },
  {
    id: "g4",
    title: "Open Source Contribution Sprint",
    category: "Workshops & Pods",
    location: "Seminar Hall A",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    description: "Guiding first-year students to submit their very first Pull Requests to global open-source projects."
  },
  {
    id: "g5",
    title: "National Level Hackathon Victory",
    category: "Moments & Wins",
    location: "New Delhi Summit",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    description: "Celebrating ITER's 1st rank triumph at the National Level Hardware & Software Hackathon."
  },
  {
    id: "g6",
    title: "DSA Sprint & Algorithmic Battle",
    category: "Workshops & Pods",
    location: "Tech Lab 1",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    description: "Weekly competitive programming sprint solving graph algorithms and dynamic programming puzzles."
  },
  {
    id: "g7",
    title: "Annual Tech Orientation",
    category: "Group & Community",
    location: "ITER Grand Auditorium",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    description: "Welcoming 500+ freshers to the GeeksforGeeks student chapter family."
  },
  {
    id: "g8",
    title: "AI & Neural Nets Project Expo",
    category: "Hackathons & Summits",
    location: "R&D Complex",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "Student researchers presenting computer vision models and LLM fine-tuning applications."
  },
  {
    id: "g9",
    title: "Midnight Hack & Debug Marathon",
    category: "Moments & Wins",
    location: "Incubation Hub",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description: "Seniors helping juniors debug React components and database connections into early morning hours."
  },
  {
    id: "g10",
    title: "UI/UX & Design Systems Workshop",
    category: "Workshops & Pods",
    location: "Design Studio",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    description: "Figma prototyping, Tailwind CSS animations, and building pixel-perfect user interfaces."
  }
];

const CATEGORIES = ["All", "Hackathons & Summits", "Workshops & Pods", "Group & Community", "Moments & Wins"];

export function WhatWeDoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState<(typeof GALLERY_PHOTOS)[number] | null>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const filteredPhotos = selectedCategory === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  // Duplicate for smooth continuous marquee loop
  const row1 = [...filteredPhotos, ...filteredPhotos];
  const row2 = [...filteredPhotos].reverse();
  const row2Loop = [...row2, ...row2];

  const scrollLeft = () => {
    if (row1Ref.current) row1Ref.current.scrollBy({ left: -360, behavior: "smooth" });
    if (row2Ref.current) row2Ref.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (row1Ref.current) row1Ref.current.scrollBy({ left: 360, behavior: "smooth" });
    if (row2Ref.current) row2Ref.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 py-24 overflow-hidden bg-transparent">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-[#00ff7f]/5 blur-[120px] rounded-full" />

      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/30 bg-[#00ff7f]/10 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-[#00ff7f] backdrop-blur-md mb-4">
              <Camera className="h-3.5 w-3.5" />
              WHAT WE DO · LIFE AT GFG ITER
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Where passion meets <span className="text-gradient-brand">execution.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl font-medium">
              A visual glimpse inside our workshops, hackathons, group milestones, and late-night building sessions.
            </p>
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:border-[#00ff7f]/50 hover:bg-[#00ff7f]/10 hover:text-[#00ff7f] transition-all active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              aria-label="Scroll gallery left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:border-[#00ff7f]/50 hover:bg-[#00ff7f]/10 hover:text-[#00ff7f] transition-all active:scale-95 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              aria-label="Scroll gallery right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#00ff7f] text-[#020b06] shadow-[0_0_20px_rgba(0,255,127,0.4)] scale-105"
                  : "border border-white/10 bg-white/5 text-white/70 hover:border-[#00ff7f]/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Infinite Gallery Marquee Rows */}
      <div className="relative flex flex-col gap-6 py-4">
        {/* Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#020b06]/90 via-[#020b06]/40 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#020b06]/90 via-[#020b06]/40 to-transparent z-20" />

        {/* ROW 1: Auto-scrolling Left */}
        <div
          ref={row1Ref}
          className="flex gap-5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth py-2 px-6"
        >
          <div className="flex gap-5 shrink-0 animate-marquee hover:[animation-play-state:paused]" style={{ animationDuration: "55s" }}>
            {row1.map((photo, i) => (
              <GalleryCard key={`r1-${photo.id}-${i}`} photo={photo} onOpen={() => setActivePhoto(photo)} />
            ))}
          </div>
        </div>

        {/* ROW 2: Auto-scrolling Right */}
        <div
          ref={row2Ref}
          className="flex gap-5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth py-2 px-6"
        >
          <div className="flex gap-5 shrink-0 animate-marquee-reverse hover:[animation-play-state:paused]" style={{ animationDuration: "60s" }}>
            {row2Loop.map((photo, i) => (
              <GalleryCard key={`r2-${photo.id}-${i}`} photo={photo} onOpen={() => setActivePhoto(photo)} />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl border border-[#00ff7f]/30 bg-[#060D09] overflow-hidden shadow-[0_0_60px_rgba(0,255,127,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-30 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-[#00ff7f] hover:text-[#020b06] transition-all"
                aria-label="Close photo preview"
              >
                <X className="h-5 w-5" />
              </button>

              {/* High-res Image Preview */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D09] via-transparent to-transparent opacity-90" />
              </div>

              {/* Photo Details */}
              <div className="p-6 sm:p-8 -mt-16 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="rounded-full border border-[#00ff7f]/40 bg-[#00ff7f]/10 px-3 py-1 text-xs font-bold text-[#00ff7f] uppercase tracking-wider">
                    {activePhoto.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/70 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-[#00ff7f]" /> {activePhoto.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/70 font-medium">
                    <Calendar className="h-3.5 w-3.5 text-[#00ff7f]" /> {activePhoto.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {activePhoto.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-medium">
                  {activePhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({ photo, onOpen }: { photo: (typeof GALLERY_PHOTOS)[number]; onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="group relative w-[300px] sm:w-[360px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#060D09] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-[#00ff7f]/60 hover:shadow-[0_15px_35px_rgba(0,255,127,0.2)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
        <img
          src={photo.image}
          alt={photo.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          loading="lazy"
        />
        {/* Hover Expand Icon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <span className="flex items-center gap-2 rounded-full border border-[#00ff7f]/40 bg-[#020b06]/80 px-4 py-2 text-xs font-bold text-[#00ff7f] backdrop-blur-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Maximize2 className="h-3.5 w-3.5" /> View Photo
          </span>
        </div>

        {/* Category Pill Tag */}
        <span className="absolute top-2.5 left-2.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#00ff7f] backdrop-blur-md">
          {photo.category}
        </span>
      </div>

      <div className="p-3">
        <h4 className="text-base font-bold text-white line-clamp-1 group-hover:text-[#00ff7f] transition-colors">
          {photo.title}
        </h4>
        <div className="mt-1 flex items-center justify-between text-xs text-white/50">
          <span className="flex items-center gap-1 line-clamp-1">
            <MapPin className="h-3 w-3 text-[#00ff7f]" /> {photo.location}
          </span>
          <span className="shrink-0">{photo.date}</span>
        </div>
      </div>
    </div>
  );
}
