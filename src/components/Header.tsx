import { Link } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-flora-cream/90 backdrop-blur-md border-b border-flora-gold/15">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="FloraVu logo"
            className="h-12 w-12 transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-2xl text-flora-forest tracking-tight hidden sm:inline">
            FloraVu
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-flora-forest/60 hover:text-flora-gold transition-colors tracking-wide"
              activeProps={{ className: "text-sm text-flora-gold font-medium tracking-wide" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Otvori izbornik"
        >
          <span className={`block w-6 h-0.5 bg-flora-forest transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-flora-forest transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-flora-forest transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-flora-cream/95 backdrop-blur-md border-t border-flora-gold/15 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-flora-forest/60 hover:text-flora-gold transition-colors text-lg font-serif"
              activeProps={{ className: "text-flora-gold text-lg font-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
