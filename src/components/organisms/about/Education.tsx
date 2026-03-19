import React, { useState } from "react";
import BlackPortrait from "./asset/blackPortrait.jpg";

/* ================================
   Education Section Component
================================ */

const Education: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-bg-primary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* ================= HEADER ================= */}
        <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary">
            Education Qualification
          </h2>

          <p className="text-text-secondary text-base md:text-lg max-w-md leading-relaxed">
            Academic journey across school and university
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="order-2 md:order-1 md:row-span-2 w-full min-h-70 md:min-h-full relative overflow-hidden rounded-2xl">
          {/* Skeleton */}
          <div
            className={`
              absolute inset-0
              bg-surface animate-pulse
              transition-opacity duration-800 ease-out
              ${imgLoaded ? "opacity-0" : "opacity-100"}
            `}
          />

          <img
            src={BlackPortrait}
            alt="Education"
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            className={`
              w-full h-full object-cover
              rounded-2xl
              shadow-lg md:shadow-xl

              transition-all duration-800 ease-in-out

              ${
                imgLoaded
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-[1.03] blur-[2px]"
              }

              md:scale-[1.02]
            `}
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="order-3 md:order-2 flex flex-col space-y-6 md:space-y-8">
          {/* CARD 1 */}
          <div className="relative group">
            <div className="absolute left-0 top-3 bottom-3 w-0.75 bg-accent/80 rounded-full transition-all duration-300 group-hover:bg-accent" />

            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 pl-7 md:pl-9 shadow-sm md:shadow-md hover:shadow-lg transition-all duration-300 ease-out space-y-4">
              <p className="font-semibold text-lg md:text-xl text-text-primary tracking-tight leading-snug">
                Secondary Education | Science (PCBM)
              </p>

              <p className="text-sm md:text-base text-text-secondary">
                <span className="font-medium text-text-primary">
                  St. Anthony’s Convent School
                </span>{" "}
                <span className="italic opacity-80">(Class of 2020)</span>
              </p>

              <p className="text-text-muted leading-relaxed md:leading-loose text-sm md:text-base tracking-[0.01em]">
                Completed a{" "}
                <strong className="text-text-primary font-semibold">
                  rigorous pre-university curriculum
                </strong>{" "}
                focused on Physics, Chemistry, Biology, and Mathematics.
                <br />
                <br />
                Developed strong{" "}
                <strong className="text-text-primary font-semibold">
                  analytical reasoning
                </strong>{" "}
                and a{" "}
                <strong className="text-text-primary font-semibold">
                  structured problem-solving approach
                </strong>{" "}
                through theory and laboratory work.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative group">
            <div className="absolute left-0 top-3 bottom-3 w-0.75 bg-accent/80 rounded-full transition-all duration-300 group-hover:bg-accent" />

            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 pl-7 md:pl-9 shadow-sm md:shadow-md hover:shadow-lg transition-all duration-300 ease-out space-y-4">
              <p className="font-semibold text-lg md:text-xl text-text-primary tracking-tight leading-snug">
                Bachelor of Science | Zoology
              </p>

              <p className="text-sm md:text-base text-text-secondary">
                <span className="font-medium text-text-primary">
                  Scottish Church College, University of Calcutta
                </span>{" "}
                <span className="italic opacity-80">(Class of 2023)</span>
              </p>

              <p className="text-text-muted leading-relaxed md:leading-loose text-sm md:text-base tracking-[0.01em]">
                Completed a{" "}
                <strong className="text-text-primary font-semibold">
                  comprehensive undergraduate program
                </strong>{" "}
                in biological sciences.
                <br />
                <br />
                Strengthened expertise in{" "}
                <strong className="text-text-primary font-semibold">
                  research
                </strong>
                ,{" "}
                <strong className="text-text-primary font-semibold">
                  data interpretation
                </strong>
                , and{" "}
                <strong className="text-text-primary font-semibold">
                  analytical observation
                </strong>{" "}
                through lab work and field studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
