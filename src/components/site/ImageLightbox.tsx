import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: (string | LightboxImage)[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
  title?: string;
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
}: ImageLightboxProps) {
  const normalizedImages: LightboxImage[] = images.map((img) =>
    typeof img === "string" ? { src: img, alt: title || "Event Image" } : img
  );

  const total = normalizedImages.length;
  const currentImg = normalizedImages[currentIndex] || normalizedImages[0];

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (total <= 1) return;
      const nextIdx = (currentIndex - 1 + total) % total;
      onIndexChange?.(nextIdx);
    },
    [currentIndex, total, onIndexChange]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (total <= 1) return;
      const nextIdx = (currentIndex + 1) % total;
      onIndexChange?.(nextIdx);
    },
    [currentIndex, total, onIndexChange]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
          />

          {/* Modal Container */}
          <div
            className="relative z-10 flex flex-col items-center justify-between w-full h-full max-w-7xl p-3 sm:p-6 pointer-events-none"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full py-2 pointer-events-auto">
              <div className="flex items-center gap-3">
                {title && (
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate max-w-[200px] sm:max-w-md">
                      {title}
                    </span>
                  </div>
                )}
                {total > 1 && (
                  <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-bold text-[#00ff7f] backdrop-blur-md">
                    {currentIndex + 1} / {total}
                  </span>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close enlarged view"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f]/20 hover:text-[#00ff7f] active:scale-95 cursor-pointer shadow-lg"
              >
                <X className="h-5 w-5 transition-transform group-hover:rotate-90 duration-300" />
              </button>
            </div>

            {/* Main Image Area with Navigation */}
            <div className="relative flex-1 flex items-center justify-center w-full min-h-0 my-auto py-2 pointer-events-auto">
              {/* Prev Button */}
              {total > 1 && (
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-2 sm:left-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f]/20 hover:text-[#00ff7f] active:scale-95 cursor-pointer shadow-xl"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
                </button>
              )}

              {/* Image with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImg.src + currentIndex}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative flex items-center justify-center max-h-full max-w-full"
                >
                  <img
                    src={currentImg.src}
                    alt={currentImg.alt || title || "Enlarged event image"}
                    className="max-h-[75vh] sm:max-h-[82vh] max-w-[94vw] sm:max-w-[85vw] object-contain rounded-xl sm:rounded-2xl border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] select-none"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              {total > 1 && (
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-2 sm:right-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f]/20 hover:text-[#00ff7f] active:scale-95 cursor-pointer shadow-xl"
                >
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
                </button>
              )}
            </div>

            {/* Bottom Bar: Thumbnails / Caption */}
            <div className="flex flex-col items-center gap-2 py-2 pointer-events-auto max-w-2xl text-center">
              {currentImg.caption && (
                <p className="text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md bg-black/40 px-4 py-1.5 rounded-full border border-white/10">
                  {currentImg.caption}
                </p>
              )}

              {/* Thumbnail strip if multiple images */}
              {total > 1 && (
                <div className="flex items-center justify-center gap-2 overflow-x-auto p-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md max-w-full">
                  {normalizedImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => onIndexChange?.(idx)}
                      className={`relative h-10 w-14 sm:h-12 sm:w-18 flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer ${
                        idx === currentIndex
                          ? "border-[#00ff7f] shadow-[0_0_10px_rgba(0,255,127,0.5)] scale-105"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
