"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  // Distribute products into 3 rich rows, ensuring at least 6 items per row so no empty side spaces appear
  const total = products.length;
  const perRow = Math.max(5, Math.ceil(total / 3));
  const row1Items = [...products.slice(0, perRow)];
  const row2Items = [...products.slice(perRow, perRow * 2)];
  const row3Items = [...products.slice(perRow * 2)];

  const firstRow = row1Items.length < 6 ? [...row1Items, ...products.slice(0, 6 - row1Items.length)] : row1Items;
  const secondRow = row2Items.length < 6 ? [...row2Items, ...products.slice(2, 2 + (6 - row2Items.length))] : row2Items;
  const thirdRow = row3Items.length < 6 ? [...row3Items, ...products.slice(4, 4 + (6 - row3Items.length))] : row3Items;

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, (v) => v * (isMobile ? 350 : 800)),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, (v) => v * (isMobile ? -350 : -800)),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, (v) => {
      const progress = Math.min(v / 0.25, 1);
      const maxAngle = isMobile ? 4 : 14;
      return maxAngle * (1 - progress);
    }),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, (v) => {
      const progress = Math.min(v / 0.2, 1);
      return 0.35 + 0.65 * progress;
    }),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, (v) => {
      const progress = Math.min(v / 0.25, 1);
      const maxAngle = isMobile ? 3 : 16;
      return maxAngle * (1 - progress);
    }),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, (v) => {
      const progress = Math.min(v / 0.2, 1);
      const startY = isMobile ? -120 : -420;
      const endY = isMobile ? 0 : -20;
      return startY + (endY - startY) * progress;
    }),
    springConfig
  );
  
  return (
    <div
      ref={ref}
      className="pb-12 sm:pb-16 md:pb-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:600px] md:[perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-3 sm:space-x-5 md:space-x-8 lg:space-x-10 mb-3 sm:mb-6 md:mb-10 lg:mb-14">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row1-${product.title}-${idx}`}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-3 sm:space-x-5 md:space-x-8 lg:space-x-10 mb-3 sm:mb-6 md:mb-10 lg:mb-14">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`row2-${product.title}-${idx}`}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-3 sm:space-x-5 md:space-x-8 lg:space-x-10">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row3-${product.title}-${idx}`}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 sm:py-16 md:py-24 lg:py-32 px-4 w-full left-0 top-0">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff7f]/20 bg-[#00ff7f]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#00ff7f] mb-4">
        Our Showcase
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight">
        A glimpse into <br /> our <span className="text-[#00ff7f]">legacy</span>
      </h1>
      <p className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-5 md:mt-6 text-white/70 leading-relaxed">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers, designers, and students who love to build
        amazing experiences together at ITER.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  isMobile,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  isMobile?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={isMobile ? undefined : {
        y: -10,
      }}
      className="group/product h-28 w-44 sm:h-36 sm:w-56 md:h-44 md:w-72 lg:h-52 lg:w-80 xl:h-56 xl:w-[22rem] relative flex-shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-[#00ff7f]/20 bg-white/5 backdrop-blur-sm transition-shadow duration-300 hover:border-[#00ff7f]/50 hover:shadow-[0_0_25px_rgba(0,255,127,0.2)]"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={product.title}
        className="block h-full w-full"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          loading="lazy"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-60 sm:opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-[#020b06]/95 via-[#020b06]/40 to-transparent pointer-events-none transition-opacity duration-300" />
      <h2 className="absolute bottom-2 left-2.5 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 opacity-90 sm:opacity-0 group-hover/product:opacity-100 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg sm:translate-y-2 group-hover/product:translate-y-0 transition-all duration-300 truncate max-w-[85%] pointer-events-none drop-shadow">
        {product.title}
      </h2>
    </motion.div>
  );
};

