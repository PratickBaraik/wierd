import { useEffect, useState } from "react";
import gearBg from "./assets/gearAll.jpg"; // 🔁 use a different image

const GearOverview: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = gearBg;
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
        style={{ backgroundImage: `url(${gearBg})` }}
        className={`
          absolute inset-0
          bg-cover bg-center bg-no-repeat

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
        left-1/2 -translate-x-1/2
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
        relative z-10

        w-full
        max-w-3xl

        flex flex-col
        items-center
        justify-center

        text-center
        gap-8
        "
      >
        {/* TITLE */}
        <h1
          className="
          text-text-primary
          font-semibold
          text-[clamp(2.2rem,3vw+1rem,3.5rem)]
          leading-[1.1]
          tracking-tight
          "
        >
          My Creative <span className="text-accent">Gear Setup</span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
          text-text-secondary
          text-[clamp(1rem,1vw+0.8rem,1.2rem)]
          leading-relaxed
          max-w-200
          "
        >
          My gear kit is carefully curated to support{" "}
          <span className="text-text-primary font-medium">
            versatile, cinematic visual production
          </span>{" "}
          across diverse environments. I primarily work with the{" "}
          <span className="text-text-primary font-medium">Sony A7 IV</span>,
          complemented by{" "}
          <span className="text-text-primary font-medium">
            35mm, 56mm, and 85mm prime lenses
          </span>
          , enabling a balanced range from wide storytelling compositions to
          natural perspectives and detailed portraiture.
          <br />
          <br />
          Camera movement is stabilized using the{" "}
          <span className="text-text-primary font-medium">
            DJI RS 3 Mini
          </span>{" "}
          gimbal, while aerial visuals are captured with the{" "}
          <span className="text-text-primary font-medium">DJI Air 3</span>{" "}
          drone. For controlled lighting, I rely on a{" "}
          <span className="text-text-primary font-medium">
            portable 100W LED light
          </span>{" "}
          to maintain consistent illumination on location.
          <br />
          <br />
          This streamlined setup ensures{" "}
          <span className="text-accent font-medium">
            efficient, high-quality production
          </span>{" "}
          from capture through post-production.
        </p>
      </div>
    </section>
  );
};

export default GearOverview;
