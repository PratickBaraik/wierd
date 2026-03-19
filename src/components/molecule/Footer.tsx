import { Link } from "react-router-dom";

import logo from "./logo.png";
import fb from "./social/facebook.png";
import ig from "./social/social.png";
import yt from "./social/youtube.png";
import li from "./social/linkedin.png";

const Footer = () => {
  /* ================================
     Reusable Styles
  ================================= */

  const navLinkClass =
    "text-text-secondary text-sm md:text-base px-2 py-1 transition-all duration-300 hover:text-text-primary hover:-translate-y-[1px]";

  // ✅ Cleaner wrapper (no heavy padding / border / glass)
  const socialWrapper =
    "p-1.5 rounded-full transition-all duration-300 ease-out";

  // ✅ Refined icon behavior
  const socialIcon =
    "w-5 md:w-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110";

  return (
    <footer className="w-full bg-bg-secondary border-t border-border">
      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* BRAND + NAV */}
        <div className="flex flex-col gap-8">
          {/* BRAND */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Prakashit Kujur logo"
              className="
                w-11 md:w-12
                aspect-square
                rounded-full
                bg-white
                p-1
                shadow-md
                transition-transform duration-300
                hover:scale-[1.03]
              "
            />

            <h1 className="text-text-primary font-semibold text-2xl md:text-3xl tracking-tight">
              Prakashit Kujur
            </h1>
          </div>

          {/* NAV */}
          <nav>
            <ul className="flex flex-wrap gap-4 md:gap-6">
              <li>
                <Link to="/" className={navLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/works" className={navLinkClass}>
                  Works
                </Link>
              </li>
              <li>
                <Link to="/gearlist" className={navLinkClass}>
                  Gearlist
                </Link>
              </li>
              <li>
                <Link to="/about" className={navLinkClass}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className={navLinkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* SOCIAL */}
        <div className="flex items-center md:justify-end gap-4">
          {/* FACEBOOK */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className={`${socialWrapper} hover:bg-accent/10 group-hover:-translate-y-1`}
            >
              <img src={fb} alt="Facebook" className={socialIcon} />
            </div>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className={`${socialWrapper} hover:bg-accent/10 group-hover:-translate-y-1`}
            >
              <img src={ig} alt="Instagram" className={socialIcon} />
            </div>
          </a>

          {/* YOUTUBE */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className={`${socialWrapper} hover:bg-accent/10 group-hover:-translate-y-1`}
            >
              <img src={yt} alt="YouTube" className={socialIcon} />
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className={`${socialWrapper} hover:bg-accent/10 group-hover:-translate-y-1`}
            >
              <img src={li} alt="LinkedIn" className={socialIcon} />
            </div>
          </a>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center">
          <p className="text-text-muted text-sm text-center">
            © {new Date().getFullYear()} Prakashit Kujur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
