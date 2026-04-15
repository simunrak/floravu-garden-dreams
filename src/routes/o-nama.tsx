import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama – FloraVu" },
      { name: "description", content: "FloraVu je rasadnik specijaliziran za sadnice i vrtno cvijeće na Gradskoj Tržnici Vukovar." },
      { property: "og:title", content: "O nama – FloraVu" },
      { property: "og:description", content: "FloraVu je rasadnik specijaliziran za sadnice i vrtno cvijeće na Gradskoj Tržnici Vukovar." },
    ],
  }),
  component: ONama,
});

function ONama() {
  return (
    <div>
      <section className="relative py-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80')",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-flora-forest mb-6">O nama</h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            FloraVu je vaš lokalni rasadnik na Gradskoj Tržnici Vukovar, posvećen uzgoju i prodaji najkvalitetnijih sadnica i vrtnog cvijeća.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80"
              alt="Sadnice u rasadniku"
              className="rounded-2xl w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-flora-forest mb-6">Naša strast</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Specijalizirani smo za sadnice za sadnju – od povrtnih i voćnih sadnica do prekrasnog vrtnog cvijeća koje će urediti vaš vrt, balkon ili terasu.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Svaka biljka koju nudimo pažljivo je odabrana i uzgojena s ljubavlju. Vjerujemo da svaki vrt zaslužuje kvalitetne sadnice koje će rasti i cvjetati godinama.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Posjetite nas na Gradskoj Tržnici Vukovar i uvjerite se sami u kvalitetu naše ponude.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-flora-green-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-flora-forest text-center mb-16">Zašto FloraVu?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Kvaliteta", desc: "Samo provjerene i zdrave sadnice dolaze u našu ponudu." },
              { title: "Lokalno", desc: "Podržavamo lokalnu zajednicu Vukovara i okolice." },
              { title: "Stručnost", desc: "Savjetujemo vas pri odabiru biljaka za vaš vrt." },
              { title: "Dostupnost", desc: "Brza dostava istog ili sljedećeg dana." },
            ].map((item) => (
              <div key={item.title} className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-flora-gold/10">
                <h3 className="font-serif text-xl text-flora-forest mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
