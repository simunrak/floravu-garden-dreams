import { createFileRoute } from "@tanstack/react-router";
import { OrderPage } from "@/components/order/OrderPage";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Naručite – FloraVu" },
      { name: "description", content: "Naručite svježe cvijeće od FloraVu. Dostava istog dana dostupna u Vukovaru." },
      { property: "og:title", content: "Naručite – FloraVu" },
      { property: "og:description", content: "Naručite svježe cvijeće s dostavom istog dana od FloraVu." },
    ],
  }),
  component: OrderPage,
});
