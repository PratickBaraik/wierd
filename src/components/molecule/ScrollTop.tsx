import { useEffect, useState } from "react";
import TopArrow from "./topArrow.png";

const ScrollToTop = ({ showAfter = 800 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > showAfter);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        group                         /* ✅ FIX: enable group-hover */

        fixed z-50
        bottom-6 right-6
        md:bottom-10 md:right-10

        w-11 h-11 md:w-12 md:h-12

        flex items-center justify-center
        rounded-full

        bg-surface border border-border
        shadow-md hover:shadow-lg

        transition-all duration-300 ease-out

        hover:-translate-y-1
        active:scale-95

        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }
      `}
    >
      <img
        src={TopArrow}
        alt="Scroll to top"
        className={`
          w-4 h-4 md:w-5 md:h-5

          transition-all duration-300

          group-hover:-translate-y-0.5

          /* ================= THEME FIX ================= */
          dark:invert                 /* invert in dark mode */
        `}
      />
    </button>
  );
};

export default ScrollToTop;
