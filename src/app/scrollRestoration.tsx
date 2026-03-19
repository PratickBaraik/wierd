import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Smart Scroll Restoration
 * -------------------------
 * - Smooth scroll on new navigation (PUSH)
 * - Instant scroll on back/forward (POP)
 */
const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const isBackOrForward = navigationType === "POP";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isBackOrForward ? "auto" : "smooth",
    });
  }, [pathname, navigationType]);

  return null;
};

export default ScrollRestoration;
