import { useEffect, useState } from "react";
import bgImage from "./assets/gearCanvas.jpg";

/* ================================
   Gear Main Component
================================ */

const GearMain: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section
      className="
      relative
      w-full
      h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]
      overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      />

      {/* ================= CINEMATIC OVERLAY ================= */}
      <div
        className="
        absolute inset-0

        /* base darkening (strong but not full) */
        bg-black/50
        "
      />

      {/* ================= GRADIENT DEPTH ================= */}
      <div
        className="
        absolute inset-0

        bg-linear-to-t
        from-black/85 via-black/60 to-black/30
        "
      />

      {/* ================= BOTTOM CONTENT ================= */}
      <div
        className="
        absolute
        bottom-6 md:bottom-10
        left-1/2 -translate-x-1/2

        z-20
        w-full
        max-w-5xl

        px-6

        flex flex-col
        items-center
        gap-4
        text-center
        "
      >
        {/* ===== Main Bottom Text ===== */}
        <p
          className="
          text-white
          text-[clamp(1rem,1.2vw+0.6rem,1.4rem)]
          md:text-lg
          tracking-wide
          leading-relaxed
          max-w-2xl
          "
        >
          Crafted with precision.{" "}
          <span className="text-accent">Built for storytelling.</span>
        </p>

        {/* ===== Label (NO GLASS EFFECT) ===== */}
        <div
          className="
          px-6 py-2

          bg-white
          text-black

          text-sm md:text-base
          tracking-wider

          shadow-md
          "
        >
          Gear List
        </div>
      </div>
    </section>
  );
};

export default GearMain;
