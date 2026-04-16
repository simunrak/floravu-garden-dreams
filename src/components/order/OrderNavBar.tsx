import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

export function OrderNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/galerija", label: "Collections" },
    { href: "/order", label: "Order Now", active: true },
    { href: "/radno-vrijeme", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf7f4]/95 backdrop-blur-xl shadow-sm border-b border-[#c9a89a]/20"
          : "bg-[#faf7f4]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="h-9 w-9 rounded-full overflow-hidden flex items-center justify-center bg-white ring-1 ring-[#c9a89a]/30 shadow-sm group-hover:ring-[#c9a89a]/60 transition-all duration-300">
            <img src={logo} alt="FloraVu logo" className="h-7 w-7 object-contain" />
          </div>
          <span
            className="font-serif text-xl font-semibold tracking-tight"
            style={{ color: "#3d5a3e" }}
          >
            Floravu
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                link.active
                  ? "bg-[#8b9e7c]/20 text-[#3d5a3e] border border-[#8b9e7c]/40 font-semibold"
                  : "text-[#5a5a4e]/60 hover:text-[#3d5a3e] hover:bg-[#8b9e7c]/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-lg hover:bg-[#8b9e7c]/10 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-[18px] h-[1.5px] bg-[#3d5a3e] rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-[#3d5a3e] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-[18px] h-[1.5px] bg-[#3d5a3e] rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#faf7f4]/95 backdrop-blur-xl border-t border-[#c9a89a]/20 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
                link.active
                  ? "bg-[#8b9e7c]/20 text-[#3d5a3e] font-semibold"
                  : "text-[#5a5a4e]/70 hover:text-[#3d5a3e] hover:bg-[#8b9e7c]/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
