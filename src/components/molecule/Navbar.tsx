import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
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

/* ================================
   BRAND COMPONENT (UPGRADED)
================================ */
const Brand = ({ brand }: { brand: string }) => (
  <div className="flex items-center gap-3 group">
    <div
      className="
      relative
      rounded-full
      p-0.75

      bg-logo
      logo-ring

      transition-all duration-300
      group-hover:scale-105
      group-hover:shadow-medium
      "
    >
      <img
        src={logo}
        alt="prakashit kujur brand logo"
        className="
        w-[clamp(42px,3vw,52px)]
        aspect-square
        rounded-full
        object-cover
        "
      />
    </div>

    <span className="text-lg font-semibold tracking-tight text-text-primary">
      {brand}
    </span>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ links, brand = "Brand" }) => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-primary/80 backdrop-blur-lg">
        <div className="mx-auto flex h-17.5 max-w-7xl items-center justify-between px-6">
          <Link to="/">
            <Brand brand={brand} />
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {links.map((link) => {
                const active = location.pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`relative text-sm font-medium transition-colors
                      ${
                        active
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-accent"
                      }
                      after:absolute after:-bottom-1 after:left-0
                      after:h-0.5 after:w-0
                      after:bg-accent
                      after:transition-all hover:after:w-full`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary text-text-primary transition hover:scale-105"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 transition hover:bg-secondary md:hidden"
          >
            <Menu className="text-text-primary" size={26} />
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
        bg-primary shadow-xl transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-border p-6">
          <Link to="/" onClick={() => setOpen(false)}>
            <Brand brand={brand} />
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-secondary"
          >
            <X className="text-text-primary" size={26} />
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
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <button
            onClick={toggleTheme}
            className="mt-6 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-text-primary"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
