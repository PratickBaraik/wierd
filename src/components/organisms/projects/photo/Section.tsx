import React from "react";
import ImageCard from "./ImageCard";

interface SectionProps {
  title: string;
  images: string[];
  sectionIndex: number;
}

const Section: React.FC<SectionProps> = ({ title, images, sectionIndex }) => {
  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
        {title}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <ImageCard
            key={img} // ✅ FIXED: stable key instead of index
            src={img}
            alt={`section-${sectionIndex}-img-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
