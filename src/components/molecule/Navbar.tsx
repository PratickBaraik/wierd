import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";

type NavItem = {
  label: string;
  href: string;
};

interface NavbarProps {
  links: NavItem[];
  brand?: string;
}

const Navbar: React.FC<NavbarProps> = ({ links, brand = "Brand" }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-colors dark:border-neutral-800 dark:bg-neutral-900/80">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6">
          {/* BRAND SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="prakashit kujur brand logo"
              className="
                w-[clamp(42px,3vw,52px)]
                aspect-square
                rounded-full
                bg-white
                p-[3px]
                shadow-[0_0_0_2px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.15)]
                transition-transform duration-300
                group-hover:scale-105
              "
            />

            <span className="text-lg font-semibold tracking-tight text-gray-900 transition-colors dark:text-white">
              {brand}
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = location.pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors
                    ${
                      active
                        ? "text-black dark:text-white"
                        : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                    }
                    after:absolute after:-bottom-1 after:left-0
                    after:h-[2px] after:w-0
                    after:bg-black dark:after:bg-white
                    after:transition-all hover:after:w-full`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-neutral-800 md:hidden"
            aria-label="Open Menu"
          >
            <Menu className="text-gray-800 dark:text-gray-200" size={26} />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* MOBILE DRAWER */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[80%] max-w-sm
        bg-white shadow-xl transition-transform duration-300
        dark:bg-neutral-900 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-neutral-800">
          {/* Mobile Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="prakashit kujur brand logo"
              className="w-10 rounded-full bg-white p-[2px]"
            />

            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {brand}
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
            aria-label="Close Menu"
          >
            <X className="text-gray-800 dark:text-gray-200" size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-8">
          {links.map((link) => {
            const active = location.pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors
                  ${
                    active
                      ? "text-black dark:text-white"
                      : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
