import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-flora-forest text-flora-cream py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">FloraVu</h3>
          <p className="text-flora-cream/70 text-sm leading-relaxed">
            Udahnite život svom vrtu uz pažljivo odabrane sadnice i vrtno cvijeće.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Navigacija</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm">Početna</Link>
            <Link to="/o-nama" className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm">O nama</Link>
            <Link to="/radno-vrijeme" className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm">Radno vrijeme</Link>
            <Link to="/narudzbe" className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm">Narudžbe</Link>
            <Link to="/galerija" className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm">Galerija</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Lokacija</h4>
          <p className="text-flora-cream/70 text-sm leading-relaxed mb-4">
            Gradska Tržnica Vukovar
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/floravu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/floravu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flora-cream/70 hover:text-flora-cream transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-flora-cream/10 text-center">
        <p className="text-flora-cream/40 text-xs">
          © {new Date().getFullYear()} FloraVu. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
