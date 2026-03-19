import React, { useState } from "react";
import AboutPoster from "./asset/aboutPoster.jpg";

/* ================================
   About Section Component
================================ */

const AboutMain: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-bg-primary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* ================= HEADER ================= */}
        <div className="order-1 md:order-2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary">
            Hey, I am Prakashit Kujur
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-md leading-relaxed">
            Visual storyteller specializing in videography and photography
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
            src={AboutPoster}
            alt="About"
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
        <div className="order-3 md:order-2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md">
            {/* Accent Line */}
            <div className="absolute left-0 top-2 bottom-2 w-0.75 bg-accent/80 rounded-full" />

            {/* Card */}
            <div
              className="
                bg-surface border border-border
                rounded-2xl
                p-6 md:p-8 pl-7 md:pl-9
                shadow-sm md:shadow-md
                hover:shadow-lg
                transition-all duration-300 ease-out
              "
            >
              <p
                className="
                  text-text-muted
                  leading-relaxed md:leading-loose
                  text-sm md:text-base
                  text-center md:text-left
                  tracking-[0.01em]
                "
              >
                A videographer and photographer focused on storytelling across{" "}
                <strong className="text-text-primary font-semibold">
                  documentaries, travel, and wedding projects
                </strong>
                .
                <br />
                <br />
                My work captures the{" "}
                <strong className="text-text-primary font-semibold">
                  essence of people, places, and moments
                </strong>
                , blending{" "}
                <strong className="text-text-primary font-semibold">
                  creative vision
                </strong>{" "}
                with{" "}
                <strong className="text-text-primary font-semibold">
                  technical precision
                </strong>
                .
                <br />
                <br />I aim to create{" "}
                <strong className="text-text-primary font-semibold">
                  authentic and timeless visuals
                </strong>{" "}
                that bring ideas and stories to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
