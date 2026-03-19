import { useState } from "react";
import selfPortrait from "./assets/selfPortrait.jpg";

const IntroSection = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="w-full bg-primary">
      <div
        className="
        mx-auto
        max-w-7xl
        px-6

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        text-center
        md:text-left

        gap-[clamp(2rem,6vw,6rem)]
        py-[clamp(2.5rem,6vw,5rem)]
        "
      >
        {/* ================= TEXT SECTION ================= */}
        <div className="flex-1 max-w-2xl self-start">
          <h1
            className="
            font-semibold
            leading-tight
            tracking-tight
            text-[clamp(2rem,2.5vw+1rem,3rem)]
            text-text-primary
            "
          >
            Hey, I’m <span className="font-bold">Prakashit Kujur</span>
          </h1>

          <h2
            className="
            mt-3
            text-[clamp(1.3rem,1.5vw+0.8rem,2rem)]
            font-medium
            text-text-secondary
            "
          >
            Videographer • Photographer • Visual Storyteller
          </h2>

          <p
            className="
            mt-6
            text-[clamp(0.95rem,1vw+0.8rem,1.1rem)]
            leading-relaxed
            text-text-secondary
            "
          >
            I craft visual stories that capture emotion, atmosphere, and
            meaning. From documentaries and travel films to weddings and brand
            visuals, every frame is designed to reflect the unique essence of
            the moment.
          </p>

          <p
            className="
            mt-4
            text-[clamp(0.95rem,1vw+0.8rem,1.1rem)]
            leading-relaxed
            text-text-secondary
            "
          >
            Blending creativity with technical precision, I focus on delivering
            imagery that feels authentic, timeless, and impactful. If you’re
            looking to bring your vision to life through compelling visuals,
            let’s create something unforgettable together.
          </p>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div
          className="
          shrink-0
          w-[clamp(260px,35vw,520px)]
          sm:w-[clamp(220px,70vw,400px)]
          mt-10 md:mt-0
          overflow-hidden
          rounded-2xl
          "
        >
          <img
            src={selfPortrait}
            alt="Self portrait of Prakashit Kujur"
            loading="lazy" /* ✅ browser-level lazy loading */
            onLoad={() => setLoaded(true)}
            className={`
              w-full
              h-auto
              object-cover
              shadow-xl

              transition-all duration-1000 ease-out

              ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
