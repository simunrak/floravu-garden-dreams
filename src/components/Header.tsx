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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-flora-cream/60 backdrop-blur-2xl border-b border-flora-gold/10 shadow-lg shadow-flora-forest/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <img
              src={logo}
              alt="FloraVu logo"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 mix-blend-multiply drop-shadow-sm"
            />
          </div>
          <span className="font-serif text-2xl text-flora-forest tracking-tight hidden sm:inline group-hover:text-flora-gold transition-colors duration-300">
            FloraVu
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-sm text-flora-forest/60 hover:text-flora-forest px-4 py-2 rounded-full transition-all duration-300 hover:bg-flora-green-light/60"
              activeProps={{
                className:
                  "relative text-sm text-flora-cream font-medium px-4 py-2 rounded-full bg-flora-forest tracking-wide",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          aria-label="Otvori izbornik"
        >
          <span
            className={`block w-6 h-0.5 bg-flora-forest transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-flora-forest transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-flora-forest transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="bg-flora-cream/80 backdrop-blur-2xl border-b border-flora-gold/10 px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-flora-forest/60 hover:text-flora-forest hover:bg-flora-green-light/60 transition-all text-lg font-serif px-4 py-3 rounded-2xl"
              activeProps={{
                className: "text-flora-cream bg-flora-forest text-lg font-serif px-4 py-3 rounded-2xl",
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
