import AudioPlayer from "./AudioPlayer";
import bgImage from "./assets/main_canvas.jpg";

const Main_Canvas = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="
      relative
      min-h-screen
      w-full

      bg-cover bg-center bg-no-repeat

      flex items-center justify-center

      px-6 sm:px-10 md:px-14 lg:px-20
      overflow-hidden
      "
    >
      {/* ================================
         OVERLAY (TOKEN CONTROLLED)
      ================================ */}
      <div className="absolute inset-0 bg-overlay-strong backdrop-blur-xs" />

      {/* ================================
         LIGHT FOCUS (SUBTLE DEPTH)
      ================================ */}
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

      {/* ================================
         CONTENT
      ================================ */}
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
        {/* ================================
           TITLE (PRIMARY FOCUS)
        ================================ */}
        <h1
          className="
          text-text-primary
          font-semibold
          text-center

          leading-[1.05]

          text-[clamp(2.5rem,2vw+3rem,6rem)]
          tracking-tight
          "
        >
          Prakashit Kujur
        </h1>

        {/* ================================
           MID SPACE (CINEMATIC BREATHING)
        ================================ */}
        <div className="h-[clamp(2rem,6vw,5rem)]" />

        {/* ================================
           BOTTOM CONTENT
        ================================ */}
        <div
          className="
          w-full

          flex
          flex-col md:flex-row

          items-center md:items-end
          justify-between

          gap-6 md:gap-10

          px-[clamp(1rem,4vw,3rem)]
          "
        >
          {/* DESCRIPTION */}
          <p
            className="
            text-text-secondary
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

            bg-glass
            text-text-primary

            backdrop-blur-md
            border border-border

            transition-all duration-300

            hover:scale-[1.05]
            hover:shadow-medium

            active:scale-[0.95]
            "
          >
            Know More
          </button>
        </div>

        {/* ================================
           AUDIO PLAYER
        ================================ */}
        <div className="w-full flex justify-center md:justify-end">
          <AudioPlayer />
        </div>
      </div>
    </section>
  );
};

export default Main_Canvas;
