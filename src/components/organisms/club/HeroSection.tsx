import { useRef, type JSX } from "react";
import { motion, type Variants } from "framer-motion";

export default function LandingPage(): JSX.Element {
  const heroRef = useRef<HTMLElement | null>(null);

  // Animation variants (typed)
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Cinematic Overlay Layers */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80" />

        {/* Background Zoom Animation */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.h1
            variants={item}
            className="
              text-4xl md:text-6xl lg:text-7xl
              font-bold leading-tight
              bg-linear-to-r from-white via-gray-300 to-gray-500
              bg-clip-text text-transparent
            "
          >
            Cinematic Motion Experience
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Precision-crafted interfaces where motion guides attention and
            transforms interaction into immersive storytelling.
          </motion.p>

          {/* Scroll Hint */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-col items-center"
          >
            <span className="text-gray-500 text-sm tracking-widest">
              SCROLL
            </span>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-2 w-0.5 h-10 bg-linear-to-b from-white to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent" />
      </section>
    </div>
  );
}
