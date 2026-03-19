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
   * Intersection Observer
   * - Increased rootMargin for earlier loading (better UX)
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }, // 🔥 earlier load → smoother scroll
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
        shadow-soft hover:shadow-medium

        transition-shadow duration-300
      "
    >
      {/* ================= SKELETON ================= */}
      <div
        className={`
          absolute inset-0
          bg-secondary
          animate-pulse

          transition-opacity duration-700 ease-out
          ${isLoaded ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* ================= IMAGE ================= */}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`
            w-full h-full object-cover

            /* smooth entry */
            transition-all duration-700 ease-in-out

            ${
              isLoaded
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-105 blur-sm"
            }

            hover:scale-105
            will-change-transform
          `}
        />
      )}
    </div>
  );
};

export default ImageCard;
