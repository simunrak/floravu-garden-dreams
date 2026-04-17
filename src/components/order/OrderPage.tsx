import { OrderNavBar } from "./OrderNavBar";
import { OrderCountdown } from "./OrderCountdown";
import { OrderForm } from "./OrderForm";

export function OrderPage() {
  return (
    <div style={{ background: "#faf7f4", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif" }}>
      <OrderNavBar />
      <OrderCountdown />

      {/* Hero */}
      <section
        className="pb-12 px-6 text-center relative overflow-hidden"
        style={{ paddingTop: "calc(4rem + 3rem + 2.5rem)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, #c9a89a 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div className="relative max-w-2xl mx-auto">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border"
            style={{ color: "#8b9e7c", borderColor: "#8b9e7c40", background: "#8b9e7c12" }}
          >
            Fresh from the garden
          </span>
          <h1
            className="font-serif text-5xl md:text-7xl mb-6 leading-tight"
            style={{ color: "#3d5a3e" }}
          >
            Send Someone
            <br />
            <span style={{ color: "#c9a89a", fontStyle: "italic" }}>Flowers Today</span>
          </h1>
          <p className="text-lg font-light leading-relaxed max-w-lg mx-auto" style={{ color: "#6b6b5a" }}>
            Hand-crafted bouquets with same-day delivery. Fill out the form below and leave the rest to us.
          </p>
        </div>
      </section>

      <OrderForm />

      <footer
        className="py-10 px-6 text-center text-sm border-t"
        style={{ color: "#9a8a80", borderColor: "#e8ddd6", background: "#faf7f4" }}
      >
        <p>
          <span className="font-serif text-base" style={{ color: "#3d5a3e" }}>Floravu</span>
          {" "}&mdash; Gradska Tržnica Vukovar &mdash; All rights reserved © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
