import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import bgImage from "./assets/mainCanvas.jpg";

const MainCanvas = () => {
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
      min-h-screen
      w-full

      flex items-center justify-center

      px-6 sm:px-10 md:px-14 lg:px-20
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

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-overlay-strong backdrop-blur-xs" />

      {/* ================= LIGHT FOCUS ================= */}
      <div
        className="
        absolute
        w-125 h-125
        bg-accent/20
        blur-[140px]
        top-[10%]
        left-[50%]
        -translate-x-1/2
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
        relative z-10
        w-full
        max-w-350
        flex flex-col
        items-center
        gap-[clamp(2.5rem,5vw,6rem)]
        "
      >
        {/* ================= TITLE ================= */}
        <h1
          className="
          text-white
          font-semibold
          text-center
          leading-[1.05]
          text-[clamp(2.5rem,2vw+3rem,6rem)]
          tracking-tight
          "
        >
          Prakashit Kujur
        </h1>

        {/* ================= SPACING ================= */}
        <div className="h-[clamp(2rem,6vw,5rem)]" />

        {/* ================= BOTTOM CONTENT ================= */}
        <div
          className="
          w-full
          flex flex-col md:flex-row
          items-center md:items-end
          justify-between
          gap-6 md:gap-10
          px-[clamp(1rem,4vw,3rem)]
          "
        >
          {/* DESCRIPTION */}
          <p
            className="
            text-white/85
            text-center md:text-left
            leading-[1.3]
            text-[clamp(1.2rem,1.6vw+0.5rem,2.2rem)]
            max-w-full
            md:max-w-[65%]
            "
          >
            Visual storyteller working across cinematography, photography, and
            editing to craft natural, immersive stories.
          </p>

          {/* CTA */}
          <button
            className="
            whitespace-nowrap

            px-8 py-3
            rounded-xl

            bg-white/10
            text-white

            backdrop-blur-md
            border border-white/20

            transition-all duration-300

            hover:scale-[1.05]
            hover:shadow-medium
            hover:bg-white/20

            active:scale-[0.95]
            "
          >
            Know More
          </button>
        </div>

        {/* ================= AUDIO PLAYER ================= */}
        <div className="w-full flex justify-center md:justify-end">
          <AudioPlayer />
        </div>
      </div>
    </section>
  );
};

export default MainCanvas;
