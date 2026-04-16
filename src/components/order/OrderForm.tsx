import { useState, useRef } from "react";
import type { FlowerItem } from "./FlowerCatalog";

interface Props {
  selectedFlowers: FlowerItem[];
  onRemove: (id: string) => void;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export function OrderForm({ selectedFlowers, onRemove }: Props) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const totalPrice = selectedFlowers.reduce(
    (sum, f) => sum + parseFloat(f.price),
    0
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFlowers.length === 0) {
      setErrorMsg("Please add at least one flower to your order.");
      return;
    }
    setErrorMsg("");
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.set(
      "flowers",
      selectedFlowers.map((f) => `${f.name} (€${f.price})`).join(", ")
    );
    formData.set("total", `€${totalPrice.toFixed(2)}`);

    try {
      const res = await fetch("https://formspree.io/f/xvgobkze", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        const data = await res.json();
        const msg =
          data?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Something went wrong. Please try again.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4 border"
            style={{ color: "#c9a89a", borderColor: "#c9a89a40", background: "#c9a89a12" }}
          >
            Complete Your Order
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4" style={{ color: "#3d5a3e" }}>
            Your Floral Arrangement
          </h2>
          <p className="text-base font-light max-w-md mx-auto" style={{ color: "#6b6b5a" }}>
            Fill in your details below and we will have your flowers on their way.
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
              Thank you for your order. We will be in touch shortly to confirm your delivery.
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
            <div className="p-8 md:p-12">
              {/* Order Summary */}
              <div className="mb-10">
                <h3 className="font-serif text-xl mb-4" style={{ color: "#3d5a3e" }}>
                  Order Summary
                </h3>
                {selectedFlowers.length === 0 ? (
                  <div
                    className="rounded-2xl p-6 text-center text-sm border-2 border-dashed"
                    style={{ borderColor: "#e0d4cb", color: "#9a8a80" }}
                  >
                    <div className="text-3xl mb-2">🌿</div>
                    No flowers selected yet — browse the catalog above and add your favourites!
                  </div>
                ) : (
                  <div className="space-y-3">
                    {selectedFlowers.map((f) => (
                      <div
                        key={f.id}
                        className="flex items-center justify-between gap-4 px-5 py-3 rounded-2xl"
                        style={{ background: "#faf7f4", border: "1px solid #ede4dc" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{f.emoji}</span>
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
                            onClick={() => onRemove(f.id)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all hover:scale-110"
                            style={{ background: "#ede4dc", color: "#8a6a5a" }}
                            aria-label={`Remove ${f.name}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                    <div
                      className="flex items-center justify-between px-5 py-3 rounded-2xl font-semibold"
                      style={{ background: "#8b9e7c15", border: "1px solid #8b9e7c30" }}
                    >
                      <span style={{ color: "#3d5a3e" }}>Total</span>
                      <span style={{ color: "#3d5a3e" }}>€{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <input type="hidden" name="_subject" value="New FloraVu Flower Order" />
                <input type="hidden" name="_to" value="r.tanja032@gmail.com" />

                {/* Personal Details */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl mb-5" style={{ color: "#3d5a3e" }}>
                    Your Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} style={labelStyle} htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Jane Doe"
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
                        placeholder="+385 91 234 5678"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Details */}
                <div className="mb-8">
                  <h3 className="font-serif text-xl mb-5" style={{ color: "#3d5a3e" }}>
                    Delivery Details
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass} style={labelStyle} htmlFor="address">
                        Recipient's Full Address *
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        placeholder="Street, House Number, City, Postcode"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={labelStyle} htmlFor="deliveryInstructions">
                        Specific Delivery Instructions
                      </label>
                      <textarea
                        id="deliveryInstructions"
                        name="deliveryInstructions"
                        rows={3}
                        placeholder="e.g. Leave at the door, ring twice, call when arrived..."
                        className={inputClass}
                        style={{ ...inputStyle, resize: "none" }}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={labelStyle} htmlFor="deliveryDate">
                        Delivery Date *
                      </label>
                      <input
                        id="deliveryDate"
                        name="deliveryDate"
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Note */}
                <div className="mb-10">
                  <h3 className="font-serif text-xl mb-5" style={{ color: "#3d5a3e" }}>
                    Personal Note
                  </h3>
                  <div>
                    <label className={labelClass} style={labelStyle} htmlFor="cardMessage">
                      Card Message (optional)
                    </label>
                    <textarea
                      id="cardMessage"
                      name="cardMessage"
                      rows={4}
                      placeholder="Write a heartfelt message for the recipient..."
                      className={inputClass}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>
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
                  {status === "sending" ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Order"
                  )}
                </button>

                <p className="text-xs text-center mt-4" style={{ color: "#9a8a80" }}>
                  Your order details will be sent to our team. We will confirm within 30 minutes.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
