import React from "react";

import Lens1 from "./assets/lensOne.jpg";
import Lens2 from "./assets/lensTwo.jpg";
import Lens3 from "./assets/lensThree.jpg";

/* ================================
   Types
================================ */
type Lens = {
  name: string;
  subtitle: string;
  image: string;
};

/* ================================
   Data
================================ */
const lenses: Lens[] = [
  {
    name: "35mm f/1.8",
    subtitle: "Samyang",
    image: Lens1,
  },
  {
    name: "56mm f/1.4",
    subtitle: "Sigma",
    image: Lens2,
  },
  {
    name: "85mm f/1.4",
    subtitle: "Samyang",
    image: Lens3,
  },
];

/* ================================
   Component
================================ */
const LensSection: React.FC = () => {
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
            Lenses
          </h2>
        </div>

        {/* ================= LENS GRID ================= */}
        <div
          className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-10 md:gap-14
          mb-16
          "
        >
          {lenses.map((lens, index) => (
            <div
              key={index}
              className="
              flex flex-col
              items-center
              text-center
              gap-5
              "
            >
              {/* ===== IMAGE (BIGGER) ===== */}
              <div
                className="
                w-full
                min-h-65 sm:min-h-80 md:min-h-95

                flex items-center justify-center
                "
              >
                <img
                  src={lens.image}
                  alt={lens.name}
                  className="
                  block
                  w-full
                  h-auto

                  max-h-80 md:max-h-95

                  object-contain

                  drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)]

                  transition-transform duration-500
                  hover:scale-105
                  "
                />
              </div>

              {/* ===== TEXT BELOW IMAGE ===== */}
              <div className="flex flex-col gap-1">
                <p className="text-text-secondary text-sm">{lens.subtitle}</p>

                <h3 className="text-text-primary text-lg md:text-xl font-semibold">
                  {lens.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            I work with a combination of 35mm, 56mm, and 85mm prime lenses to
            establish a balanced and versatile visual language. This focal range
            enables me to capture immersive environmental compositions, natural
            human perspectives, and finely detailed portraiture. It allows
            seamless transitions between narrative storytelling, documentary
            moments, and expressive close-up imagery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LensSection;
