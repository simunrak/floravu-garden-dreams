import { createFileRoute, Link } from "@tanstack/react-router";

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

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-flora-forest/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl text-flora-cream leading-tight mb-6">
            Udahnite život<br />svom vrtu
          </h1>
          <p className="text-flora-cream/80 text-lg md:text-xl mb-10 font-light">
            Pažljivo odabrane sadnice i vrtno cvijeće na Gradskoj Tržnici Vukovar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/narudzbe"
              className="inline-flex items-center justify-center bg-flora-gold text-flora-forest px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-gold/85 transition-colors"
            >
              Naručite danas
            </Link>
            <Link
              to="/galerija"
              className="inline-flex items-center justify-center border border-flora-cream/40 text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-cream/10 transition-colors"
            >
              Pogledajte galeriju
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-flora-green-light flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-flora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-flora-forest">Radno vrijeme</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Uživo do 12:30, dostava do 15:00 istog ili sljedećeg dana
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-flora-gold-light flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-flora-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-flora-forest">Plaćanje</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Primamo gotovinu i kartice
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-flora-green-light flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-flora-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3 text-flora-forest">Narudžbe</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Naručite putem Instagrama ili Facebooka
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-flora-green-light py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-flora-forest mb-6">
            Posjetite nas na Gradskoj Tržnici
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light">
            Pogledajte našu ponudu sadnica i cvijeća, ili naručite online za brzu dostavu.
          </p>
          <Link
            to="/o-nama"
            className="inline-flex items-center justify-center bg-flora-forest text-flora-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-flora-forest/90 transition-colors"
          >
            Saznajte više o nama
          </Link>
        </div>
      </section>
    </div>
  );
}
