import { createFileRoute } from "@tanstack/react-router";
import { OrderPage } from "@/components/order/OrderPage";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Now – FloraVu" },
      { name: "description", content: "Order fresh flowers from FloraVu. Same-day delivery available in Vukovar." },
      { property: "og:title", content: "Order Now – FloraVu" },
      { property: "og:description", content: "Order fresh flowers with same-day delivery from FloraVu." },
    ],
  }),
  component: OrderPage,
});
