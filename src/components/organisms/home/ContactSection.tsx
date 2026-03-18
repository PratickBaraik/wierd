import contactBg from "./assets/contactBackground.jpeg";

const ContactSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${contactBg})` }}
      className="
      relative
      min-h-screen
      w-full

      bg-cover
      bg-center
      bg-no-repeat

      flex
      items-center
      justify-center

      px-6 md:px-12 lg:px-20
      overflow-hidden
      "
    >
      {/* ================================
         FULL OVERLAY (GLOBAL CONTRAST)
      ================================ */}
      <div className="absolute inset-0 bg-overlay-strong" />

      {/* ================================
         LIGHT FOCUS
      ================================ */}
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

      {/* ================================
         CONTENT (FULL CENTERED)
      ================================ */}
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
