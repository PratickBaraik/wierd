import React from "react";
import LightImg from "./assets/cobeLight.jpg";

/* ================================
   Types
================================ */
type Light = {
  name: string;
  description: string;
  image: string;
};

/* ================================
   Data
================================ */
const light: Light = {
  name: "Digitek cobe light",
  description:
    "I use a Digitek 100W portable LED light to shape natural, controlled illumination across indoor and outdoor shoots. Its lightweight, mobile design allows quick lighting setups on location, enabling me to enhance subject depth, maintain consistent exposure, and create cinematic mood and texture in both film and photography work.",
  image: LightImg,
};

/* ================================
   Component
================================ */
const LightSection: React.FC = () => {
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
            Light Equipment
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ===== IMAGE (FIRST ON MOBILE, RIGHT ON DESKTOP) ===== */}
          <div
            className="
            order-1 md:order-2

            w-full
            min-h-65 sm:min-h-80 md:min-h-95

            flex items-center justify-center
            "
          >
            <img
              src={light.image}
              alt={light.name}
              className="
              block
              w-full
              h-auto

              max-h-105 md:max-h-115

              object-contain

              drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]

              transition-transform duration-500
              hover:scale-105
              "
            />
          </div>

          {/* ===== CONTENT (SECOND ON MOBILE, LEFT ON DESKTOP) ===== */}
          <div
            className="
            order-2 md:order-1
            flex flex-col gap-5
            "
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">
              {light.name}
            </h3>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {light.description}
            </p>

            {/* <div> */}
            {/* <button */}
            {/* className=" */}
            {/* mt-2 */}
            {/* inline-flex items-center justify-center */}

            {/* px-6 py-3 */}
            {/* rounded-xl */}

            {/* /* BASE (light mode) */}
            {/* bg-bg-secondary */}
            {/* text-text-primary */}
            {/* border border-border */}

            {/* /* DEPTH */}
            {/* shadow-soft */}
            {/* hover:shadow-medium */}

            {/* /* INTERACTION */}
            {/* transition-all duration-300 */}
            {/* hover:-translate-y-0.5 */}
            {/* active:scale-95 */}

            {/* /* DARK MODE ENHANCEMENT */}
            {/* dark:bg-white/5 */}
            {/* dark:border-white/10 */}
            {/* dark:hover:bg-white/10 */}
            {/* " */}
            {/* > */}
            {/* Know More */}
            {/* </button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightSection;
