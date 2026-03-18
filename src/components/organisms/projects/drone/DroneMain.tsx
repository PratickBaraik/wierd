import PosterSmall from "../assets/PosterSmall.png";
import PosterLarge from "../assets/PosterLarge.png";

export default function VideoSection() {
  return (
    <section
      className="
        w-full
        pt-0 pb-12
        bg-primary
        transition-colors duration-300
      "
    >
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- Poster Section ---------------- */}
        <div className="mb-12 relative left-1/2 right-1/2 w-screen -translate-x-1/2">
          <picture>
            {/* Large screens */}
            <source media="(min-width: 1300px)" srcSet={PosterLarge} />

            {/* Default */}
            <img
              src={PosterSmall}
              alt="Creator's Poster"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
            />
          </picture>

          {/* 🔥 OVERLAY (Token-based) */}
          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-center
              px-6
              bg-overlay-strong
              backdrop-blur-xs
            "
          >
            <h1
              className="
                text-white
                font-bold
                tracking-tight
                text-[clamp(1.8rem,4vw,3.5rem)]
              "
            >
              Elevate Your Vision
            </h1>

            <p
              className="
                mt-3
                text-white/90
                text-[clamp(0.9rem,1.2vw,1.2rem)]
                max-w-2xl
              "
            >
              Drone Cinematics • Aerial Photography • Precision Shooting
            </p>
          </div>
        </div>

        {/* ---------------- Video Section ---------------- */}
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
          "
        >
          {/* ---------- Video 1 ---------- */}
          <div className="flex flex-col gap-4">
            <div
              className="
                aspect-video
                overflow-hidden
                rounded-2xl
                bg-surface
                border border-border
                shadow-soft
                hover:shadow-medium
                transition-shadow duration-300
              "
            >
              <iframe
                src="https://www.youtube.com/embed/X5NkZtdOwDg"
                title="Loop Bridge, Bagrakot"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <h3
              className="
                text-lg
                font-semibold
                text-primary
                text-center
                tracking-tight
              "
            >
              Loop Bridge, Bagrakot
            </h3>
          </div>

          {/* ---------- Video 2 ---------- */}
          <div className="flex flex-col gap-4">
            <div
              className="
                aspect-video
                overflow-hidden
                rounded-2xl
                bg-surface
                border border-border
                shadow-soft
                hover:shadow-medium
                transition-shadow duration-300
              "
            >
              <iframe
                src="https://www.youtube.com/embed/Eoo4HzILB-M"
                title="Beach Side"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <h3
              className="
                text-lg
                font-semibold
                text-primary
                text-center
                tracking-tight
              "
            >
              Beach Side
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
