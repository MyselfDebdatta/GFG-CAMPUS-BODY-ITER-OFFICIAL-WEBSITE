import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Users, ZoomIn } from "lucide-react";
import { EVENTS, EVENT_CATEGORIES } from "@/lib/site-data";
import { Reveal, SectionHeader } from "@/components/site/Primitives";
import { ImageLightbox } from "@/components/site/ImageLightbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events · GFG ITER" },
      { name: "description", content: "Hackathons, bootcamps, workshops, and coding contests hosted by GFG ITER." },
      { property: "og:title", content: "Events · GFG ITER" },
      { property: "og:description", content: "Hackathons, bootcamps, workshops, and coding contests." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab === "past" ? "past" : search.tab === "ongoing" ? "ongoing" : "upcoming") as "upcoming" | "ongoing" | "past",
      category: (search.category as string) || "All",
    };
  },
  component: Events,
});

function Events() {
  const { tab, category } = Route.useSearch();
  const navigate = useNavigate({ from: Route.id });
  const [selectedImage, setSelectedImage] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const setTab = (newTab: "upcoming" | "ongoing" | "past") => {
    navigate({ search: (prev) => ({ ...prev, tab: newTab }), resetScroll: false });
  };

  const setCategory = (newCat: string) => {
    navigate({ search: (prev) => ({ ...prev, category: newCat }), resetScroll: false });
  };

  const filtered = EVENTS.filter(
    (e) => e.status === tab && (category === "All" || e.category === category),
  );

  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-brand opacity-70" style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)' }} />
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Where learning gets <span className="text-gradient-brand">loud.</span>
              </h1>
              <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl leading-tight">
                Hackathons, bootcamps, workshops, and speaker sessions — hosted year-round on campus and online.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
          <div className="inline-flex rounded-full border border-hairline bg-surface p-1">
            {(["upcoming", "ongoing", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium capitalize rounded-full transition-colors",
                  tab === t ? "text-brand-foreground font-bold" : "text-muted-foreground hover:text-foreground",
                )}
                style={tab === t ? { backgroundColor: '#00ff7f' } : undefined}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {EVENT_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  category === c
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-hairline bg-surface-elevated text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-page py-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={tab + category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-3"
          >
            {filtered.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-hairline p-12 text-center text-sm text-muted-foreground">
                No events in this category yet. Check back soon.
              </div>
            )}
            {filtered.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.04}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-hairline bg-surface-elevated transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] cursor-pointer">
                  <Link to="/events/$eventId" params={{ eventId: e.id }} search={{ tab: e.status }} className="absolute inset-0 z-20">
                    <span className="sr-only">View {e.title}</span>
                  </Link>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-2 top-2 sm:left-3 sm:top-3 rounded-full bg-background/90 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                      {e.category}
                    </span>
                    <button
                      type="button"
                      onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        setSelectedImage({
                          images: (e as any).gallery && (e as any).gallery.length > 0 ? (e as any).gallery : [e.image],
                          index: 0,
                          title: e.title,
                        });
                      }}
                      aria-label="Enlarge image"
                      className="absolute right-2 top-2 sm:right-3 sm:top-3 z-30 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f]/20 hover:text-[#00ff7f] active:scale-95 shadow-md cursor-pointer"
                    >
                      <ZoomIn className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </button>
                  </div>
                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] sm:text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" /> {e.date}</span>
                      <span className="inline-flex items-center gap-1 truncate max-w-full"><MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" /> {e.venue}</span>
                    </div>
                    <h3 className="mt-1.5 sm:mt-3 text-xs sm:text-base md:text-lg font-semibold tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#32CD32] group-hover:via-[#e2da24] group-hover:to-[#32CD32] line-clamp-2">{e.title}</h3>
                    <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-muted-foreground flex-1 line-clamp-2 sm:line-clamp-3">{e.description}</p>

                    <div className="mt-auto pt-2.5 sm:pt-4 border-t border-hairline flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2">
                      {e.status === "upcoming" ? (
                        <Button size="sm" className="h-7 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
                          Register
                        </Button>
                      ) : e.status === "ongoing" ? (
                        <Button size="sm" className="h-7 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm bg-[#00ff7f] text-[#020b06] hover:bg-[#00ff7f]/90 font-bold">
                          Join Live
                        </Button>
                      ) : (
                        <span className="inline-flex h-7 sm:h-9 items-center justify-center rounded-md border border-hairline bg-transparent px-2 sm:px-3 text-xs sm:text-sm font-semibold text-foreground">
                          Recap
                        </span>
                      )}
                      <Button asChild size="sm" variant="ghost" className="h-7 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                        <Link to="/events/$eventId" params={{ eventId: e.id }} search={{ tab: e.status }}>Read more</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          images={selectedImage.images}
          currentIndex={selectedImage.index}
          onIndexChange={(idx) => setSelectedImage((prev) => prev ? { ...prev, index: idx } : null)}
          title={selectedImage.title}
        />
      )}
    </>
  );
}
