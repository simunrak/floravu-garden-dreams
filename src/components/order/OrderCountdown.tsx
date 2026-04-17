import { useState, useEffect } from "react";

export function OrderCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(15, 0, 0, 0);

      const diff = cutoff.getTime() - now.getTime();
      if (diff <= 0) {
        setExpired(true);
        return;
      }

      setExpired(false);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (expired) {
    return (
      <div
        className="w-full py-3 px-4 text-center text-sm font-medium"
        style={{ background: "linear-gradient(135deg, #3d5a3e 0%, #5a7a5b 100%)", color: "#faf7f4" }}
      >
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className="text-base">🌙</span>
          Dostava istog dana je zatvorena za danas &mdash; naručite sada za dostavu sutra!
        </span>
      </div>
    );
  }

  return (
    <div
      className="w-full py-3 px-4 text-center"
      style={{ background: "linear-gradient(135deg, #c9a89a 0%, #b8927e 100%)", color: "#2a1f1a" }}
    >
      <div className="inline-flex items-center gap-3 flex-wrap justify-center">
        <span className="text-sm font-medium">
          Order within the next
        </span>
        <div className="inline-flex items-center gap-1 font-mono font-bold text-lg">
          <span
            className="inline-block px-2 py-0.5 rounded-md text-sm tabular-nums leading-none"
            style={{ background: "rgba(255,255,255,0.35)" }}
          >
            {pad(timeLeft.hours)}
          </span>
          <span className="text-base font-bold">:</span>
          <span
            className="inline-block px-2 py-0.5 rounded-md text-sm tabular-nums leading-none"
            style={{ background: "rgba(255,255,255,0.35)" }}
          >
            {pad(timeLeft.minutes)}
          </span>
          <span className="text-base font-bold">:</span>
          <span
            className="inline-block px-2 py-0.5 rounded-md text-sm tabular-nums leading-none"
            style={{ background: "rgba(255,255,255,0.35)" }}
          >
            {pad(timeLeft.seconds)}
          </span>
        </div>
        <span className="text-sm font-medium">
          for <strong>same-day delivery!</strong>
        </span>
        <span className="text-base">🌸</span>
      </div>
    </div>
  );
}
