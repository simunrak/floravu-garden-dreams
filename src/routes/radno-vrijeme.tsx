import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/radno-vrijeme")({
  head: () => ({
    meta: [
      { title: "Radno vrijeme i dostava – FloraVu" },
      { name: "description", content: "FloraVu radno vrijeme: uživo do 12:30, dostava do 15:00. Gotovina i kartice." },
      { property: "og:title", content: "Radno vrijeme i dostava – FloraVu" },
      { property: "og:description", content: "FloraVu radno vrijeme: uživo do 12:30, dostava do 15:00. Gotovina i kartice." },
    ],
  }),
  component: RadnoVrijeme,
});

function RadnoVrijeme() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    setIsOpen(h < 12 || (h === 12 && m <= 30));
  }, []);

  return (
    <div>
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-flora-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-flora-green/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-flora-gold/10 text-flora-gold text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-flora-gold/20">
            <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
            {isOpen ? "Otvoreno" : "Zatvoreno"}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-flora-forest mb-6">Radno vrijeme</h1>
          <p className="text-muted-foreground text-lg font-light">
            Dođite nam u goste ili naručite s dostavom
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group glass-card rounded-3xl p-10 hover:scale-[1.03] transition-all duration-500 hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-flora-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-7 h-7 text-flora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-flora-forest mb-4">Uživo posjeta</h2>
            <p className="text-flora-gold text-4xl font-serif mb-2">do 12:30</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Posjetite nas na Gradskoj Tržnici Vukovar i osobno odaberite sadnice i cvijeće.
            </p>
          </div>

          <div className="group glass-card rounded-3xl p-10 hover:scale-[1.03] transition-all duration-500 hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-flora-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
              <svg className="w-7 h-7 text-flora-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h17.25" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-flora-forest mb-4">Dostava</h2>
            <p className="text-flora-gold text-4xl font-serif mb-2">do 15:00</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dostava istog ili sljedećeg dana. Naručite putem društvenih mreža.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-flora-forest mb-8">Načini plaćanja</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="group glass-card rounded-3xl px-10 py-8 flex-1 max-w-xs mx-auto hover:scale-105 transition-all duration-500">
              <span className="text-3xl block mb-3 group-hover:scale-125 transition-transform">💵</span>
              <p className="font-serif text-xl text-flora-forest mb-2">Gotovina</p>
              <p className="text-muted-foreground text-sm">Plaćanje na licu mjesta</p>
            </div>
            <div className="group glass-card rounded-3xl px-10 py-8 flex-1 max-w-xs mx-auto hover:scale-105 transition-all duration-500">
              <span className="text-3xl block mb-3 group-hover:scale-125 transition-transform">💳</span>
              <p className="font-serif text-xl text-flora-forest mb-2">Kartice</p>
              <p className="text-muted-foreground text-sm">Visa, Mastercard i ostale</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-flora-forest mb-6">Gdje se nalazimo</h2>
          <p className="text-muted-foreground text-lg mb-2">📍 Gradska Tržnica Vukovar</p>
          <p className="text-muted-foreground text-sm">Dođite i uvjerite se u kvalitetu naših sadnica!</p>
        </div>
      </section>
    </div>
  );
}
