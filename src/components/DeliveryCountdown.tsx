import { useState, useEffect } from "react";

export function DeliveryCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number } | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    function calculate() {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(15, 0, 0, 0);

      const diff = cutoff.getTime() - now.getTime();
      if (diff <= 0) {
        setIsExpired(true);
        setTimeLeft(null);
        return;
      }

      setIsExpired(false);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft({ hours, minutes });
    }

    calculate();
    const interval = setInterval(calculate, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isExpired) {
    return (
      <div className="bg-flora-forest text-flora-cream text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        <span className="inline-flex items-center gap-2">
          🌙 Danas je dostava završena — naručite za sutra!
        </span>
      </div>
    );
  }

  if (!timeLeft) return null;

  return (
    <div className="bg-gradient-to-r from-flora-green via-flora-forest to-flora-green text-flora-cream text-center py-2.5 px-4 text-sm font-medium tracking-wide animate-pulse-subtle">
      <span className="inline-flex items-center gap-2">
        🌿 Naručite u idućih{" "}
        <span className="bg-flora-cream/20 backdrop-blur-sm rounded-full px-2.5 py-0.5 font-bold tabular-nums">
          {timeLeft.hours}h {String(timeLeft.minutes).padStart(2, "0")}min
        </span>{" "}
        za dostavu danas!
      </span>
    </div>
  );
}
