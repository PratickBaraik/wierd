import { useEffect, useState } from "react";
// import { Links } from "react-router-dom";
import contactBg from "./assets/contactBackground.jpeg";

const ContactSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = contactBg;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section
      className="
      relative
      min-h-screen
      w-full

      flex
      items-center
      justify-center

      px-6 md:px-12 lg:px-20
      overflow-hidden
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        style={{ backgroundImage: `url(${contactBg})` }}
        className={`
          absolute inset-0

          bg-cover
          bg-center
          bg-no-repeat

          transition-all duration-1200 ease-out

          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
      />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-overlay-strong" />

      {/* ================= LIGHT FOCUS ================= */}
      <div
        className="
        absolute
        w-105 h-105

        bg-accent/20
        blur-[120px]

        top-[20%]
        left-[50%]
        -translate-x-1/2
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
        relative z-10

        w-full
        max-w-2xl

        flex flex-col
        items-center
        justify-center

        text-center

        gap-6
        "
      >
        {/* TITLE */}
        <h1
          className="
          text-text-primary
          font-semibold
          text-[clamp(2.5rem,4vw+1rem,4.2rem)]
          leading-[1.1]
          tracking-tight
          "
        >
          Let’s Create Something <span className="text-accent">Cinematic</span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
          text-text-secondary
          text-[clamp(1rem,1vw+0.8rem,1.25rem)]
          leading-relaxed
          max-w-162.5
          "
        >
          Whether it's a wedding, documentary, travel story, or brand visual,
          every frame tells a story. Let’s collaborate and craft visuals that
          feel authentic, emotional, and timeless.
        </p>

        {/* CTA */}
        <button
          className="
          mt-4

          px-8 py-3
          rounded-xl

          font-medium
          tracking-wide

          text-accent-foreground
          bg-accent

          shadow-medium

          transition-all duration-300

          hover:scale-[1.05]
          hover:shadow-strong

          active:scale-[0.96]
          "
        >
          Start Project
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
