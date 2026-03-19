import React from "react";
import CameraImg from "./assets/camera.jpg";

/* ================================
   Types
================================ */
type Camera = {
  name: string;
  description: string;
  image: string;
};

/* ================================
   Data
================================ */
const camera: Camera = {
  name: "SONY M4",
  description:
    "The Sony A7 IV (Mark 4) is a versatile full-frame mirrorless camera designed for both professional photography and cinematic video creation. It features a 33-MP full-frame sensor, advanced autofocus with real-time eye tracking, and 4K 60p video, making it ideal for hybrid creators (photography + filmmaking).",
  image: CameraImg,
};

/* ================================
   Component
================================ */
const CameraSection: React.FC = () => {
  return (
    <section
      className="
      w-full
      px-6 sm:px-10 md:px-14 lg:px-20
      py-16 md:py-20
      bg-bg-primary
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
            Camera
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ===== CLEAN IMAGE WRAPPER ===== */}
          <div
            className="
            w-full
            min-h-65 sm:min-h-80 md:min-h-95

            flex items-center justify-center
            "
          >
            <img
              src={camera.image}
              alt={camera.name}
              className="
              block
              w-full
              h-auto

              max-h-105 md:max-h-115

              object-contain

              /* subtle depth without UI clutter */
              drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]

              transition-transform duration-500
              hover:scale-105
              "
            />
          </div>

          {/* ===== CONTENT ===== */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">
              {camera.name}
            </h3>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {camera.description}
            </p>

            <div>
              <button
                className="
                mt-2
                inline-flex items-center justify-center

                px-6 py-3
                rounded-lg

                bg-white/10
                text-text-primary

                backdrop-blur-md
                border border-white/20

                transition-all duration-300
                hover:bg-white/20
                hover:scale-[1.03]
                "
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraSection;
