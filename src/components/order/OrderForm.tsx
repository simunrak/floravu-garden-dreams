import { useState, useRef } from "react";
import { FLOWERS } from "./FlowerCatalog";

type FormStatus = "idle" | "sending" | "success" | "error";

export function OrderForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const totalPrice = selected.reduce((sum, id) => {
    const f = FLOWERS.find((x) => x.id === id);
    return sum + (f ? parseFloat(f.price) : 0);
  }, 0);

  const toggleFlower = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected.length === 0) {
      setErrorMsg("Molimo odaberite barem jedan cvijet.");
      return;
    }
    setErrorMsg("");
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const flowerLines = selected
      .map((id) => {
        const f = FLOWERS.find((x) => x.id === id);
        return f ? `${f.name} (€${f.price})` : id;
      })
      .join(", ");
    formData.set("flowers", flowerLines);
    formData.set("total", `€${totalPrice.toFixed(2)}`);
    formData.set("_replyto", String(formData.get("email") || ""));

    try {
      const res = await fetch("https://formspree.io/f/xvgobkze", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setSelected([]);
        formRef.current?.reset();
      } else {
        const data = await res.json();
        const msg =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Nešto je pošlo po zlu. Molimo pokušajte ponovno.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Greška mreže. Provjerite internetsku vezu i pokušajte ponovno.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-1";
  const inputStyle = {
    borderColor: "#e0d4cb",
    background: "#fdfaf7",
    color: "#3d3528",
    "--tw-ring-color": "#c9a89a80",
  } as React.CSSProperties;

  const labelClass = "block text-xs font-semibold tracking-wide mb-1.5";
  const labelStyle = { color: "#6b5a50" };

  return (
    <section className="py-20 px-6" id="order-form" style={{ background: "#f7f2ee" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border"
            style={{ color: "#c9a89a", borderColor: "#c9a89a40", background: "#c9a89a12" }}
          >
            Place Your Order
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: "#3d5a3e" }}>
            Order Your Flowers
          </h2>
          <p className="text-base font-light max-w-md mx-auto" style={{ color: "#6b6b5a" }}>
            Fill in your details, choose your flowers, and we'll be in touch shortly.
          </p>
        </div>

        {status === "success" ? (
          <div
            className="rounded-3xl p-16 text-center"
            style={{ background: "#fff", border: "1px solid #d6e6d0", boxShadow: "0 8px 40px rgba(139,158,124,0.12)" }}
          >
            <div className="text-6xl mb-6">🌸</div>
            <h3 className="font-serif text-3xl mb-4" style={{ color: "#3d5a3e" }}>
              Order Received!
            </h3>
            <p className="text-base mb-6" style={{ color: "#6b6b5a" }}>
              Thank you for your order. We will be in touch shortly to confirm.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: "#3d5a3e", color: "#fff" }}
            >
              Place Another Order
            </button>
          </div>
        ) : (
          <div
            className="rounded-3xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid #e8ddd6", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="p-8 md:p-12">
              <input type="hidden" name="_subject" value="New FloraVu Flower Order" />

              {/* Personal Details */}
              <div className="mb-8">
                <h3 className="font-serif text-xl mb-5" style={{ color: "#3d5a3e" }}>
                  Your Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} style={labelStyle} htmlFor="firstName">
                      Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Jane"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle} htmlFor="lastName">
                      Surname *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Doe"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle} htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      placeholder="jane@example.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle} htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={30}
                      placeholder="+385 91 234 5678"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Flower selection */}
              <div className="mb-8">
                <h3 className="font-serif text-xl mb-5" style={{ color: "#3d5a3e" }}>
                  Choose Your Flowers *
                </h3>

                <div className="relative">
                  <select
                    aria-label="Add a flower"
                    value=""
                    onChange={(e) => {
                      if (e.target.value) toggleFlower(e.target.value);
                    }}
                    className={inputClass}
                    style={{ ...inputStyle, appearance: "none", paddingRight: "2.5rem" }}
                  >
                    <option value="">— Select a flower to add —</option>
                    {FLOWERS.filter((f) => !selected.includes(f.id)).map((f) => (
                      <option key={f.id} value={f.id}>
                        {f.emoji} {f.name} — €{f.price}
                      </option>
                    ))}
                  </select>
                  <span
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm"
                    style={{ color: "#9a8a80" }}
                  >
                    ▾
                  </span>
                </div>

                {selected.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {selected.map((id) => {
                      const f = FLOWERS.find((x) => x.id === id);
                      if (!f) return null;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl"
                          style={{ background: "#faf7f4", border: "1px solid #ede4dc" }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{f.emoji}</span>
                            <span className="text-sm font-medium" style={{ color: "#3d3528" }}>
                              {f.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold" style={{ color: "#c9a89a" }}>
                              €{f.price}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggleFlower(id)}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all hover:scale-110"
                              style={{ background: "#ede4dc", color: "#8a6a5a" }}
                              aria-label={`Remove ${f.name}`}
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold mt-3"
                      style={{ background: "#8b9e7c15", border: "1px solid #8b9e7c30" }}
                    >
                      <span style={{ color: "#3d5a3e" }}>Total</span>
                      <span style={{ color: "#3d5a3e" }}>€{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Optional note */}
              <div className="mb-10">
                <label className={labelClass} style={labelStyle} htmlFor="note">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  maxLength={1000}
                  placeholder="Delivery address, card message, special requests..."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              {errorMsg && (
                <div
                  className="mb-6 px-5 py-4 rounded-2xl text-sm"
                  style={{ background: "#fdeaea", border: "1px solid #f5c6c6", color: "#8a2525" }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background:
                    status === "sending"
                      ? "#8b9e7c80"
                      : "linear-gradient(135deg, #3d5a3e 0%, #5a7a5b 100%)",
                  color: "#faf7f4",
                  boxShadow: "0 6px 30px rgba(61,90,62,0.3)",
                }}
              >
                {status === "sending" ? "Sending..." : "Order Now"}
              </button>

              <p className="text-xs text-center mt-4" style={{ color: "#9a8a80" }}>
                Your order will be sent to our team. We'll confirm within 30 minutes.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
