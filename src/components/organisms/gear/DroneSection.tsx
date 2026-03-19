import React, { useEffect, useState } from "react";
import DroneImg from "./assets/drone.jpg";

/* ================================
   Types
================================ */
type Drone = {
  name: string;
  description: string;
  image: string;
};

/* ================================
   Data
================================ */
const drone: Drone = {
  name: "DJI Air 3",
  description:
    "The DJI Air 3 is an integral part of my visual storytelling toolkit, enabling the capture of cinematic aerial perspectives and expansive landscapes with precision. Its advanced dual-camera system supports both wide-angle environmental compositions and compressed telephoto imagery, facilitating the creation of dynamic establishing shots, fluid aerial motion, and immersive spatial context across film and photography projects.",
  image: DroneImg,
};

/* ================================
   Component
================================ */
const DroneSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = drone.image;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="w-full bg-bg-primary py-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ================= IMAGE WRAPPER ================= */}
        <div className="relative w-full">
          {/* ===== IMAGE ===== */}
          <div
            style={{ backgroundImage: `url(${drone.image})` }}
            className={`
              w-full
              h-80 sm:h-105 md:h-130

              bg-cover
              bg-center
              bg-no-repeat

              transition-all duration-1000 ease-out

              ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
          />

          {/* ===== FLOATING PANEL ===== */}
          <div
            className="
              absolute
              left-1/2
              bottom-0
              -translate-x-1/2
              translate-y-1/2

              w-full sm:w-[85%] md:w-[70%] lg:w-[60%]

              px-4 sm:px-6 md:px-8
              z-10
            "
          >
            <div
              className="
                w-full

                bg-bg-surface   /* better than bg-primary */
                text-text-primary

                px-6 md:px-10
                py-6 md:py-7

                border border-border   /* key for light mode */
                shadow-medium          /* from your system */
              "
            >
              {/* TITLE */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                {drone.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-text-secondary max-w-2xl">
                {drone.description}
              </p>
            </div>
          </div>
        </div>

        {/* ===== SPACING ===== */}
        <div className="h-32 md:h-36" />
      </div>
    </section>
  );
};

export default DroneSection;
