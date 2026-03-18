import React, { useEffect, useRef, useState } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Intersection Observer:
   * Lazy-load images only near viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        w-full
        aspect-square
        overflow-hidden
        relative
        rounded-2xl

        bg-surface
        border border-border
        shadow-soft
        hover:shadow-medium

        transition-all duration-300
      "
    >
      {/* Skeleton */}
      <div
        className={`
          absolute inset-0
          transition-opacity duration-500
          ${isLoaded ? "opacity-0" : "opacity-100"}
          bg-secondary
          animate-pulse
        `}
      />

      {/* Image */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`
            w-full h-full object-cover
            transition-all duration-500 ease-out
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            hover:scale-105
            will-change-transform
          `}
        />
      )}
    </div>
  );
};

export default ImageCard;
