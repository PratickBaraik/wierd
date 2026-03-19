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
    <section className="w-full bg-bg-primary py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ================= IMAGE ================= */}
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

        {/* ================= CARD BELOW IMAGE ================= */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <div
            className="
              w-full sm:w-[90%] md:w-[75%] lg:w-[60%]

              bg-bg-surface
              text-text-primary

              px-6 md:px-10
              py-6 md:py-8

              border border-border
              shadow-medium
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
    </section>
  );
};

export default DroneSection;
