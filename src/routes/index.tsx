import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FloraVu – Udahnite život svom vrtu" },
      { name: "description", content: "FloraVu rasadnik na Gradskoj Tržnici Vukovar. Sadnice, vrtno cvijeće, dostava istog dana." },
      { property: "og:title", content: "FloraVu – Udahnite život svom vrtu" },
      { property: "og:description", content: "FloraVu rasadnik na Gradskoj Tržnici Vukovar. Sadnice, vrtno cvijeće, dostava istog dana." },
    ],
  }),
  component: Index,
});

function useParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setOffset(rect.top * speed);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return { ref, offset };
}

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    setIsOpen(h < 12 || (h === 12 && m <= 30));
  }, []);
  return isOpen;
}

const floatingImages = [
  { src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80", alt: "Šareno cvijeće" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80", alt: "Sadnice u loncima" },
  { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80", alt: "Svježe sadnice" },
  { src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&q=80", alt: "Vrtlarstvo" },
];

function Index() {
  const heroParallax = useParallax(0.4);
  const isOpen = useIsOpen();

  return (
    <div className="flora-cursor">
      {/* Blob decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-flora-green/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-flora-gold/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-flora-green/3 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Hero — split-screen */}
      <section ref={heroParallax.ref} className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: `translateY(${heroParallax.offset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flora-forest/90 via-flora-forest/70 to-flora-forest/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left — text */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-flora-gold/20 backdrop-blur-sm text-flora-cream text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-flora-gold/30">
              🌿 Gradska Tržnica Vukovar
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-flora-cream leading-[0.95] mb-8">
              Vukovar<br />
              <span className="text-flora-gold">u cvatu</span>
            </h1>
            <p className="text-flora-cream/70 text-lg md:text-xl mb-10 font-light max-w-lg leading-relaxed">
              Pažljivo odabrane sadnice i vrtno cvijeće — udahnite život svom vrtu uz FloraVu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/narudzbe"
                className="group inline-flex items-center justify-center bg-flora-gold text-flora-forest px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-flora-cream hover:scale-105 transition-all duration-300 shadow-lg shadow-flora-gold/30"
              >
                Naručite danas
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                to="/galerija"
                className="inline-flex items-center justify-center border-2 border-flora-cream/30 text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-cream/10 hover:border-flora-cream/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Pogledajte galeriju
              </Link>
            </div>
          </div>

          {/* Right — floating gallery */}
          <div className="hidden lg:block relative h-[500px]">
            {floatingImages.map((img, i) => {
              const positions = [
                "top-0 left-8 w-48 h-60",
                "top-16 right-4 w-44 h-56",
                "bottom-8 left-0 w-52 h-48",
                "bottom-0 right-12 w-40 h-52",
              ];
              const delays = ["0s", "1s", "2s", "3s"];
              return (
                <div
                  key={i}
                  className={`absolute ${positions[i]} animate-float`}
                  style={{ animationDelay: delays[i] }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-flora-forest/40 border-2 border-flora-cream/10 hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-flora-cream/40 text-xs tracking-widest uppercase">Istražite</span>
          <svg className="w-5 h-5 text-flora-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </section>

      {/* Fast Facts — infographic grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-flora-forest text-center mb-4">
            Brze činjenice
          </h2>
          <p className="text-muted-foreground text-center mb-16 text-lg font-light">Sve što trebate znati o FloraVu</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location */}
            <div className="group glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-flora-green/10">
              <div className="w-16 h-16 rounded-2xl bg-flora-green/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8 text-flora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-flora-forest">Lokacija</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gradska Tržnica Vukovar
              </p>
            </div>

            {/* Payment */}
            <div className="group glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-flora-gold/10">
              <div className="w-16 h-16 rounded-2xl bg-flora-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <svg className="w-8 h-8 text-flora-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-flora-forest">Plaćanje</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kartice i Gotovina
              </p>
            </div>

            {/* Open status */}
            <div className="group glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-flora-green/10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${isOpen ? "bg-emerald-500/10" : "bg-red-500/10"}`}>
                <svg className={`w-8 h-8 ${isOpen ? "text-emerald-500" : "text-red-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-2 text-flora-forest">Radno vrijeme</h3>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
                <span className={`text-sm font-semibold ${isOpen ? "text-emerald-600" : "text-red-500"}`}>
                  {isOpen ? "Otvoreno" : "Zatvoreno"}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">Uživo do 12:30 · Dostava do 15:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-flora-green-light/50" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-flora-gold/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-flora-green/10 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-flora-forest mb-6 leading-tight">
            Posjetite nas na<br />Gradskoj Tržnici
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light max-w-xl mx-auto">
            Pogledajte našu ponudu sadnica i cvijeća, ili naručite online za brzu dostavu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/o-nama"
              className="group inline-flex items-center justify-center bg-flora-forest text-flora-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-flora-green hover:scale-105 transition-all duration-300 shadow-lg shadow-flora-forest/20"
            >
              Saznajte više o nama
            </Link>
            <Link
              to="/radno-vrijeme"
              className="inline-flex items-center justify-center border-2 border-flora-forest/20 text-flora-forest px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-forest/5 hover:scale-105 transition-all duration-300"
            >
              Radno vrijeme →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
