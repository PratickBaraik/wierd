import { Link } from "react-router-dom";
import logo from "/new_logo.png";
import fb from "./social/facebook.png";
import ig from "./social/social.png";
import yt from "./social/youtube.png";
import li from "./social/linkedin.png";

const Footer = () => {
  /* ================================
    Reusable Styles
  ================================= */

  const navLinkClass =
    "text-text-secondary text-sm md:text-base px-2 py-1 transition-all duration-300 hover:text-text-primary";

  const socialWrapper = "p-2 rounded-full transition-all duration-300 ease-out";

  const socialIcon =
    "w-5 md:w-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110";

  return (
    <footer className="w-full bg-bg-secondary border-t border-border">
      {/* ================= TOP ================= */}
      <div
        className="
          max-w-7xl mx-auto px-6 py-12
          flex flex-col items-center text-center
          md:grid md:grid-cols-[1fr_auto] md:text-left md:items-center
          gap-10
        "
      >
        {/* ================= LEFT (BRAND + NAV) ================= */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* BRAND */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img
              src={logo}
              alt="Prakashit Kujur logo"
              className="
                w-10 md:w-12
                aspect-square
                rounded-full
                bg-white
                p-1
                shadow-md
              "
            />

            <h1 className="text-text-primary font-semibold text-xl md:text-3xl tracking-tight">
              Prakashit Kujur
            </h1>
          </div>

          {/* NAV */}
          <nav>
            <ul
              className="
                flex flex-col md:flex-row
                items-center md:items-start
                gap-3 md:gap-6
              "
            >
              <li>
                <Link to="/" className={navLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={navLinkClass}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/works" className={navLinkClass}>
                  Body of Work
                </Link>
              </li>
              <li>
                <Link to="/gearlist" className={navLinkClass}>
                  Gearlist
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

        {/* ================= RIGHT (SOCIAL) ================= */}
        <div
          className="
            flex items-center justify-center
            gap-5
          "
        >
          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/share/1CfFB8voPs/?mibextid=wwXIfr"
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
            href="https://www.instagram.com/prakashit_kujur?igsh=MTRmbzFtaTB6MzQ4dQ=="
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
            href="https://youtube.com/@prakashit22?si=nQ2Ebwk5S9r148D1"
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
            href="https://www.linkedin.com/in/prakashit-kujur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
