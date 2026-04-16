import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { DeliveryCountdown } from "./DeliveryCountdown";

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
    const t = setTimeout(() => setVisible(true), 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Delivery countdown banner */}
      <DeliveryCountdown />

      {/* Main navigation bar */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-flora-cream/75 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-flora-gold/10"
            : "bg-flora-cream/50 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="h-9 w-9 rounded-full overflow-hidden flex items-center justify-center bg-flora-cream ring-1 ring-flora-gold/20 shadow-sm group-hover:ring-flora-gold/40 group-hover:shadow-md transition-all duration-300">
              <img
                src={logo}
                alt="FloraVu logo"
                className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-serif text-lg font-semibold text-flora-forest tracking-tight hidden sm:inline group-hover:text-flora-green transition-colors duration-300">
              FloraVu
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[0.82rem] font-medium text-flora-forest/50 px-3.5 py-1.5 rounded-full transition-all duration-300 hover:text-flora-forest hover:bg-flora-forest/[0.04]"
                activeProps={{
                  className:
                    "text-[0.82rem] font-semibold text-flora-cream px-3.5 py-1.5 rounded-full bg-flora-forest shadow-sm",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-lg hover:bg-flora-forest/5 transition-colors relative z-50"
            aria-label="Otvori izbornik"
          >
            <span className={`block w-[18px] h-[1.5px] bg-flora-forest rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[18px] h-[1.5px] bg-flora-forest rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[18px] h-[1.5px] bg-flora-forest rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-flora-cream/90 backdrop-blur-2xl border-t border-flora-gold/10 px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-flora-forest/60 hover:text-flora-forest hover:bg-flora-forest/5 transition-all duration-200 text-[0.95rem] font-medium px-4 py-2.5 rounded-xl"
                activeProps={{
                  className:
                    "text-flora-cream bg-flora-forest font-semibold text-[0.95rem] px-4 py-2.5 rounded-xl",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
