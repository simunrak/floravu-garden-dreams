import { useState } from "react";

export interface FlowerItem {
  id: string;
  name: string;
  description: string;
  price: string;
  emoji: string;
  image: string;
  tag?: string;
}

export const FLOWERS: FlowerItem[] = [
  {
    id: "midnight-rose",
    name: "Midnight Rose",
    description: "Deep crimson roses with velvety petals, perfect for romantic occasions.",
    price: "24.99",
    emoji: "🌹",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&q=80",
    tag: "Bestseller",
  },
  {
    id: "spring-whisper",
    name: "Spring Whisper",
    description: "Soft pastel tulips in blush and ivory, a breath of fresh spring air.",
    price: "19.99",
    emoji: "🌷",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=400&q=80",
    tag: "Seasonal",
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    description: "Warm sunflowers with lush greenery, radiating joy and warmth.",
    price: "17.99",
    emoji: "🌻",
    image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
  },
  {
    id: "ivory-dream",
    name: "Ivory Dream",
    description: "Elegant white peonies and gypsophila — timeless and pure.",
    price: "29.99",
    emoji: "🤍",
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=400&q=80",
    tag: "Premium",
  },
  {
    id: "lavender-mist",
    name: "Lavender Mist",
    description: "Fragrant lavender stems mixed with soft purple wildflowers.",
    price: "22.99",
    emoji: "💜",
    image: "https://images.unsplash.com/photo-1487530811015-780e99e00bbe?w=400&q=80",
  },
  {
    id: "garden-symphony",
    name: "Garden Symphony",
    description: "A vibrant mixed bouquet featuring seasonal blooms in every hue.",
    price: "32.99",
    emoji: "🌺",
    image: "https://images.unsplash.com/photo-1508502726440-477c94bcce5e?w=400&q=80",
    tag: "New",
  },
];

interface Props {
  onAdd: (flower: FlowerItem) => void;
  addedIds: Set<string>;
}

export function FlowerCatalog({ onAdd, addedIds }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 px-6" id="collections">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border"
            style={{ color: "#8b9e7c", borderColor: "#8b9e7c40", background: "#8b9e7c12" }}
          >
            Our Collection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: "#3d5a3e" }}>
            Fresh Blooms
          </h2>
          <p className="text-base font-light max-w-md mx-auto" style={{ color: "#6b6b5a" }}>
            Each arrangement is hand-crafted with same-day freshness and delivered with care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {FLOWERS.map((flower) => {
            const isAdded = addedIds.has(flower.id);
            const isHovered = hoveredId === flower.id;

            return (
              <div
                key={flower.id}
                onMouseEnter={() => setHoveredId(flower.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group rounded-3xl overflow-hidden transition-all duration-500"
                style={{
                  background: "#fff",
                  border: "1px solid #e8ddd6",
                  boxShadow: isHovered
                    ? "0 20px 60px rgba(139,158,124,0.18)"
                    : "0 4px 20px rgba(0,0,0,0.05)",
                  transform: isHovered ? "translateY(-6px)" : "none",
                }}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, rgba(61,90,62,0.35) 0%, transparent 50%)",
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                  {flower.tag && (
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "#c9a89a", color: "#fff" }}
                    >
                      {flower.tag}
                    </span>
                  )}
                  {isAdded && (
                    <div
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{ background: "#8b9e7c", color: "#fff" }}
                    >
                      ✓
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl" style={{ color: "#3d5a3e" }}>
                      {flower.name}
                    </h3>
                    <span className="font-semibold text-lg shrink-0" style={{ color: "#c9a89a" }}>
                      €{flower.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#7a7a68" }}>
                    {flower.description}
                  </p>
                  <button
                    onClick={() => onAdd(flower)}
                    className="w-full py-2.5 px-5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                    style={
                      isAdded
                        ? { background: "#8b9e7c20", color: "#3d5a3e", border: "1.5px solid #8b9e7c60" }
                        : {
                            background: isHovered
                              ? "linear-gradient(135deg, #3d5a3e 0%, #5a7a5b 100%)"
                              : "#faf7f4",
                            color: isHovered ? "#faf7f4" : "#3d5a3e",
                            border: "1.5px solid #8b9e7c40",
                          }
                    }
                  >
                    {isAdded ? "Added to Order ✓" : "Add to Order"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
