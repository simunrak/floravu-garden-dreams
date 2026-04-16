import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/" as const, label: "Početna" },
  { to: "/o-nama" as const, label: "O nama" },
  { to: "/radno-vrijeme" as const, label: "Radno vrijeme" },
  { to: "/narudzbe" as const, label: "Narudžbe" },
  { to: "/galerija" as const, label: "Galerija" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Fade-in entrance
    const t = setTimeout(() => setVisible(true), 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      } ${
        scrolled
          ? "bg-flora-cream/70 backdrop-blur-2xl border-b border-flora-gold/15 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-flora-cream/40 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-11 w-11 rounded-full overflow-hidden flex items-center justify-center bg-flora-cream shadow-sm ring-1 ring-flora-gold/20 group-hover:ring-flora-gold/50 group-hover:shadow-md transition-all duration-300">
            <img
              src={logo}
              alt="FloraVu logo"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="font-serif text-[1.4rem] font-semibold text-flora-forest tracking-tight hidden sm:inline transition-colors duration-300 group-hover:text-flora-green">
            FloraVu
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-[0.85rem] font-medium text-flora-forest/55 px-4 py-2 rounded-full transition-all duration-300 hover:text-flora-forest hover:bg-flora-forest/5 after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-flora-gold after:rounded-full after:transition-all after:duration-300 hover:after:w-5"
              activeProps={{
                className:
                  "relative text-[0.85rem] font-semibold text-flora-cream px-4 py-2 rounded-full bg-flora-forest shadow-md shadow-flora-forest/20",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-xl hover:bg-flora-forest/5 transition-colors relative z-50"
          aria-label="Otvori izbornik"
        >
          <span
            className={`block w-5 h-[1.5px] bg-flora-forest rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-flora-forest rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-flora-forest rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full transition-all duration-400 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="bg-flora-cream/85 backdrop-blur-2xl border-b border-flora-gold/10 px-6 py-6 flex flex-col gap-1 shadow-xl shadow-flora-forest/5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-flora-forest/60 hover:text-flora-forest hover:bg-flora-forest/5 transition-all duration-200 text-base font-medium px-4 py-3 rounded-xl"
              activeProps={{
                className:
                  "text-flora-cream bg-flora-forest font-semibold text-base px-4 py-3 rounded-xl shadow-sm",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
