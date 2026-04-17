import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/narudzbe")({
  head: () => ({
    meta: [
      { title: "Narudžbe – FloraVu" },
      { name: "description", content: "Naručite sadnice i cvijeće putem Instagrama ili Facebooka. FloraVu – brza dostava u Vukovaru." },
      { property: "og:title", content: "Narudžbe – FloraVu" },
      { property: "og:description", content: "Naručite sadnice i cvijeće putem Instagrama ili Facebooka. FloraVu – brza dostava u Vukovaru." },
    ],
  }),
  component: Narudzbe,
});

function Narudzbe() {
  return (
    <div>
      <section className="py-16 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-48 h-48 bg-flora-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-block bg-flora-gold/10 text-flora-gold text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-flora-gold/20">
            🛒 Jednostavno i brzo
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-flora-forest mb-6">Narudžbe</h1>
          <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Sve narudžbe zaprimamo putem naših društvenih mreža. Javite nam se na Instagram ili Facebook i dogovorit ćemo sve detalje!
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <a
            href="https://www.instagram.com/flora.vukovar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-3xl p-8 sm:p-10 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl min-h-[48px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-flora-forest mb-3">Instagram</h2>
            <p className="text-muted-foreground text-sm mb-4">Pratite nas i naručite putem poruke</p>
            <span className="inline-block text-flora-gold text-sm font-semibold group-hover:underline">
              @flora.vukovar →
            </span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61575743498498"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card rounded-3xl p-8 sm:p-10 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl min-h-[48px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#1877F2] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-flora-forest mb-3">Facebook</h2>
            <p className="text-muted-foreground text-sm mb-4">Pošaljite nam poruku na Facebooku</p>
            <span className="inline-block text-flora-gold text-sm font-semibold group-hover:underline">
              FloraVu →
            </span>
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl text-flora-forest text-center mb-10 md:mb-16">Kako naručiti?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "01", title: "Kontaktirajte nas", desc: "Pošaljite poruku na Instagram ili Facebook s listom željenih biljaka.", emoji: "💬" },
              { step: "02", title: "Potvrda", desc: "Potvrdit ćemo dostupnost i dogovoriti detalje narudžbe.", emoji: "✅" },
              { step: "03", title: "Preuzimanje", desc: "Preuzmite osobno ili odaberite dostavu istog/sljedećeg dana do 15:00.", emoji: "🌿" },
            ].map((item) => (
              <div key={item.step} className="group text-center glass-card rounded-3xl p-6 sm:p-8 hover:scale-105 transition-all duration-500">
                <span className="text-4xl block mb-4 group-hover:scale-125 transition-transform duration-300">{item.emoji}</span>
                <span className="text-flora-gold/50 font-serif text-sm tracking-widest">{item.step}</span>
                <h3 className="font-serif text-lg text-flora-forest mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}
