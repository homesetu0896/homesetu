import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Plumber in Vadodara — Pipe Repair, Drain Cleaning & More",
  description:
    "Book a verified plumber in Vadodara for pipe leaks, tap repair, drain cleaning, and bathroom fitting. Starting ₹199. Fast 2–4 hour response.",
  keywords: ["plumber Vadodara", "plumber near me Vadodara", "pipe leak repair Vadodara", "drain cleaning Vadodara"],
  alternates: { canonical: "https://homesetu.in/services/plumbing" },
  openGraph: {
    title: "Plumber in Vadodara — HomeSetu",
    description: "Verified plumber in Vadodara. Starting ₹199. 2–4 hour response.",
    url: "https://homesetu.in/services/plumbing",
  },
};

const service = {
  name: "Plumbing",
  icon: "🔧",
  description:
    "Reliable plumbers for all home plumbing needs in Vadodara. Leak repairs, drain cleaning, tap fitting, bathroom work — handled fast and professionally.",
  responseTime: "2–4 hours",
  startingPrice: "₹199",
  rating: "4.9 ⭐",
  includes: [
    "Free inspection and diagnosis on arrival",
    "Quality pipes and fittings used",
    "No tile breaking unless absolutely necessary",
    "Clean-up after work completed",
    "Background-verified, experienced plumber",
  ],
  tasks: [
    { name: "Pipe leak repair", desc: "Fix leaking pipes without unnecessary wall breaking.", price: "₹199+" },
    { name: "Tap & faucet repair", desc: "Fix dripping taps or replace worn-out faucets.", price: "₹199+" },
    { name: "Drain cleaning", desc: "Unblock clogged kitchen or bathroom drains.", price: "₹299+" },
    { name: "Bathroom fitting", desc: "Install new commode, basin, shower, or flush tank.", price: "₹599+" },
    { name: "Water pump repair", desc: "Fix or replace submersible/centrifugal pumps.", price: "₹799+" },
    { name: "Tank cleaning", desc: "Clean and disinfect overhead or underground tanks.", price: "₹999+" },
  ],
  faqs: [
    { q: "My bathroom drain is blocked. How quickly can you come?", a: "For most Vadodara locations, we can send a plumber within 2–4 hours." },
    { q: "Will fixing the pipe require breaking tiles?", a: "Our plumbers try to avoid tile-breaking wherever possible. If unavoidable, we'll inform you first." },
    { q: "My water pressure is very low. Can you fix it?", a: "Yes — low pressure is usually caused by a partially closed valve, blocked aerator, or pump issue." },
    { q: "Do you do AMC for plumbing?", a: "We're working on AMC plans. For now, you can book individual service calls anytime." },
  ],
};

export default function PlumbingPage() {
  return <ServicePage service={service} />;
}