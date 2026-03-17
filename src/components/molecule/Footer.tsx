import { Link } from "react-router-dom";

import logo from "./logo.png";
import fb from "./social/facebook.png";
import ig from "./social/social.png";
import yt from "./social/youtube.png";
import li from "./social/linkedin.png";

const Footer = () => {
  /**
   * Reusable navigation link style
   */
  const navLinkClass =
    "text-white text-[clamp(0.85rem,0.9vw,1rem)] opacity-90 px-2 py-1 transition-all duration-200 hover:opacity-60 hover:-translate-y-[1px]";

  /**
   * Social icon hover animation
   */
  const socialIconClass =
    "w-[clamp(22px,2.5vw,30px)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:grayscale";

  return (
    <section className="w-full flex flex-col bg-[#181717]">
      {/* TOP SECTION */}
      <div
        className="
        mx-auto
        w-full
        max-w-7xl
        grid
        grid-cols-1
        md:grid-cols-[1fr_auto]
        items-center
        gap-[clamp(1.5rem,3vw,3rem)]
        px-6
        py-[clamp(1.5rem,4vw,3rem)]
        "
      >
        {/* BRAND + NAV */}
        <section
          className="
          flex flex-col
          gap-[clamp(0.9rem,1.6vw,1.4rem)]
          "
        >
          {/* BRAND */}
          <div
            className="
            flex items-center
            gap-[clamp(0.6rem,1.5vw,1rem)]
            "
          >
            <img
              src={logo}
              alt="prakashit kujur brand logo"
              className="
              w-[clamp(48px,4vw,70px)]
              aspect-square
              bg-white
              rounded-full
              py-[4px]
              shadow-[0_0_0_2px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.15)]
              "
            />

            <h1
              className="
              text-white
              font-semibold
              text-[clamp(1.5rem,2.4vw,2.3rem)]
              leading-[1.2]
              "
            >
              Prakashit Kujur
            </h1>
          </div>

          {/* NAVIGATION */}
          <nav>
            <ul
              className="
              flex
              flex-wrap
              gap-[clamp(0.6rem,1.4vw,1.1rem)]
              sm:gap-4
              "
            >
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
        </section>

        {/* SOCIAL LINKS */}
        <section
          className="
          flex
          items-center
          justify-start
          sm:justify-start
          md:justify-end
          gap-[clamp(0.8rem,2vw,1.6rem)]
          "
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fb}
              alt="prakashit facebook handle link-icon"
              className={socialIconClass}
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ig}
              alt="prakashit instagram handle link-icon"
              className={socialIconClass}
            />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={yt}
              alt="prakashit youtube handle link-icon"
              className={socialIconClass}
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={li}
              alt="prakashit linkedin handle link-icon"
              className={socialIconClass}
            />
          </a>
        </section>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-[clamp(1rem,2vw,1.5rem)] flex justify-center items-center">
          <p
            className="
            text-white
            text-center
            text-[clamp(0.8rem,0.9vw,0.95rem)]
            leading-relaxed
            "
          >
            &copy; {new Date().getFullYear()} Prakashit Kujur. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
