import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/galerija")({
  head: () => ({
    meta: [
      { title: "Galerija – FloraVu" },
      { name: "description", content: "Pogledajte našu ponudu sadnica, cvijeća i vrtnih biljaka. FloraVu – Gradska Tržnica Vukovar." },
      { property: "og:title", content: "Galerija – FloraVu" },
      { property: "og:description", content: "Pogledajte našu ponudu sadnica, cvijeća i vrtnih biljaka." },
    ],
  }),
  component: Galerija,
});

const images = [
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", alt: "Zeleni vrt s raznim biljkama" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80", alt: "Sadnice u loncima" },
  { src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80", alt: "Šareno cvijeće u vrtu" },
  { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80", alt: "Svježe sadnice za sadnju" },
  { src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80", alt: "Zemljište i biljke" },
  { src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80", alt: "Rasadnik s mladim biljkama" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", alt: "Cvijeće različitih boja" },
  { src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80", alt: "Vrtlarstvo i sadnja" },
  { src: "https://images.unsplash.com/photo-1508502726440-477c94bcce5e?w=600&q=80", alt: "Prekrasne ruže" },
];

function Galerija() {
  return (
    <div>
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-flora-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-flora-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-block bg-flora-green/10 text-flora-green text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-flora-green/20">
            📸 Naša ponuda
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-flora-forest mb-6">Galerija</h1>
          <p className="text-muted-foreground text-lg font-light">
            Pogledajte izbor iz naše ponude sadnica i cvijeća
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((image, i) => (
            <div
              key={i}
              className="group break-inside-avoid overflow-hidden rounded-3xl relative"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flora-forest/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-flora-cream text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
