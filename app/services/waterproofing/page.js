import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Waterproofing Services in Vadodara — Terrace, Bathroom & Wall",
  description:
    "Professional waterproofing in Vadodara for terrace, bathroom, and walls. Stop leakage and seepage permanently. 5-year warranty. Starting ₹999.",
  keywords: ["waterproofing Vadodara", "terrace waterproofing Vadodara", "bathroom waterproofing Vadodara", "leakage repair Vadodara"],
  alternates: { canonical: "https://homesetu.in/services/waterproofing" },
  openGraph: {
    title: "Waterproofing in Vadodara — HomeSetu",
    description: "Stop leaks permanently. 5-year warranty. Starting ₹999.",
    url: "https://homesetu.in/services/waterproofing",
  },
};

const service = {
  name: "Waterproofing",
  icon: "🏠",
  description:
    "Stop leaks and seepage permanently with professional waterproofing treatment. Terrace, bathroom, walls, and basement — we use proven techniques and quality materials.",
  responseTime: "Next day",
  startingPrice: "₹999",
  rating: "4.7 ⭐",
  includes: [
    "Free site inspection and assessment",
    "Quality waterproofing chemicals and membranes used",
    "Surface preparation included",
    "5-year warranty on waterproofing treatment",
    "Background-verified, trained waterproofing specialist",
  ],
  tasks: [
    { name: "Terrace waterproofing", desc: "Prevent rainwater seepage through the roof slab.", price: "₹1999+" },
    { name: "Bathroom waterproofing", desc: "Stop seepage in bathroom walls and floor.", price: "₹999+" },
    { name: "Wall dampness treatment", desc: "Fix rising dampness and peeling paint on walls.", price: "₹1499+" },
    { name: "Basement waterproofing", desc: "Prevent groundwater ingress in basements.", price: "₹2499+" },
    { name: "Overhead tank sealing", desc: "Seal cracks in water storage tanks.", price: "₹799+" },
    { name: "Expansion joint sealing", desc: "Fill and waterproof structural expansion joints.", price: "₹599+" },
  ],
  faqs: [
    { q: "How long does waterproofing treatment take?", a: "Most jobs take 1–3 days depending on the area size. Curing takes 24–48 hours after application." },
    { q: "Does the waterproofing come with a warranty?", a: "Yes — 5-year warranty. If leakage recurs within the warranty period, we'll fix it at no extra cost." },
    { q: "Will you have to break tiles to waterproof the bathroom?", a: "Not always. We assess the severity first. In many cases, a topical treatment works without tile removal." },
    { q: "My neighbour's water is seeping into my wall. Can you fix it?", a: "Yes, we handle external wall waterproofing too." },
  ],
};

export default function WaterproofingPage() {
  return <ServicePage service={service} />;
}