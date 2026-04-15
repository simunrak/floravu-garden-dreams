import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-flora-forest text-flora-cream py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-flora-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-flora-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="FloraVu logo" className="h-10 w-10 mix-blend-screen brightness-150" />
            <h3 className="font-serif text-2xl">FloraVu</h3>
          </div>
          <p className="text-flora-cream/50 text-sm leading-relaxed">
            Udahnite život svom vrtu uz pažljivo odabrane sadnice i vrtno cvijeće.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-flora-gold">Navigacija</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm">Početna</Link>
            <Link to="/o-nama" className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm">O nama</Link>
            <Link to="/radno-vrijeme" className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm">Radno vrijeme</Link>
            <Link to="/narudzbe" className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm">Narudžbe</Link>
            <Link to="/galerija" className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm">Galerija</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-flora-gold">Lokacija</h4>
          <p className="text-flora-cream/50 text-sm leading-relaxed mb-4">
            📍 Gradska Tržnica Vukovar
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/flora.vukovar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61575743498498"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flora-cream/50 hover:text-flora-gold transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto mt-12 pt-8 border-t border-flora-cream/10 text-center">
        <p className="text-flora-cream/25 text-xs">
          © {new Date().getFullYear()} FloraVu. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
