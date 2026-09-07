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

  // Keyboard navigation & scroll lock
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
        <div className="fixed inset-0 z-[99999] flex flex-col justify-between bg-black/95 backdrop-blur-2xl select-none">
          {/* Backdrop click area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 z-0 cursor-zoom-out"
          />

          {/* Top Bar Header */}
          <div className="relative z-30 flex h-14 sm:h-16 w-full shrink-0 items-center justify-between border-b border-white/10 bg-[#020b06]/90 px-4 sm:px-8 backdrop-blur-md">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <div className="flex items-center gap-2 min-w-0">
                <span className="h-2 w-2 rounded-full bg-[#00ff7f] animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate max-w-[200px] sm:max-w-md">
                  {title || "Event Image"}
                </span>
              </div>
              {total > 1 && (
                <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-bold text-[#00ff7f] backdrop-blur-md">
                  {currentIndex + 1} / {total}
                </span>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close enlarged view"
              className="group flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] active:scale-95 cursor-pointer shadow-lg"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:rotate-90 duration-200" />
            </button>
          </div>

          {/* Center Image Viewport (flex-1 min-h-0 guarantees NO overflow onto header or footer) */}
          <div className="relative z-20 flex flex-1 min-h-0 w-full items-center justify-center px-4 sm:px-16 py-2 sm:py-4">
            {/* Prev Button */}
            {total > 1 && (
              <button
                onClick={handlePrev}
                type="button"
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 z-40 flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-[#020b06]/80 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] active:scale-95 cursor-pointer shadow-2xl"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}

            {/* Enlarged Image with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg.src + currentIndex}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex h-full w-full items-center justify-center pointer-events-auto"
              >
                <img
                  src={currentImg.src}
                  alt={currentImg.alt || title || "Enlarged event image"}
                  className="max-h-full max-w-full h-auto w-auto object-contain rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {total > 1 && (
              <button
                onClick={handleNext}
                type="button"
                aria-label="Next image"
                className="absolute right-2 sm:right-6 z-40 flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-[#020b06]/80 text-white backdrop-blur-md transition-all duration-200 hover:border-[#00ff7f] hover:bg-[#00ff7f] hover:text-[#020b06] active:scale-95 cursor-pointer shadow-2xl"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}
          </div>

          {/* Bottom Footer: Thumbnails / Caption */}
          <div className="relative z-30 flex w-full shrink-0 flex-col items-center justify-center border-t border-white/10 bg-[#020b06]/90 px-4 py-2.5 sm:py-3 backdrop-blur-md">
            {currentImg.caption && (
              <p className="mb-2 text-xs sm:text-sm font-medium text-white/80 text-center max-w-xl truncate">
                {currentImg.caption}
              </p>
            )}

            {/* Thumbnails list */}
            {total > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto p-1 max-w-full">
                {normalizedImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onIndexChange?.(idx)}
                    className={`relative h-11 w-15 sm:h-13 sm:w-18 flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer ${
                      idx === currentIndex
                        ? "border-[#00ff7f] ring-2 ring-[#00ff7f]/40 scale-105 shadow-[0_0_12px_rgba(0,255,127,0.4)]"
                        : "border-white/20 opacity-40 hover:opacity-100"
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
      )}
    </AnimatePresence>
  );
}
