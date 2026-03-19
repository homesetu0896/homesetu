import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Painting Services in Vadodara — Interior, Exterior & Texture",
  description:
    "Book professional painters in Vadodara for interior & exterior painting, texture work, and wall putty. Asian/Berger/Nerolac paints. Starting ₹12/sq ft.",
  keywords: ["painting Vadodara", "painter Vadodara", "interior painting Vadodara", "exterior painting Vadodara", "texture painting Vadodara"],
  alternates: { canonical: "https://homesetu.in/services/painting" },
  openGraph: {
    title: "Painting Services in Vadodara — HomeSetu",
    description: "Professional painters in Vadodara. Starting ₹12/sq ft.",
    url: "https://homesetu.in/services/painting",
  },
};

const service = {
  name: "Painting",
  icon: "🎨",
  description:
    "Transform your home with professional painting services in Vadodara. From fresh interior coats to exterior weatherproofing — our skilled painters deliver clean, lasting results.",
  responseTime: "Next day",
  startingPrice: "₹799",
  rating: "4.8 ⭐",
  includes: [
    "Free site visit and quote before starting",
    "Surface preparation and putty work included",
    "Quality branded paints used (Asian/Berger/Nerolac)",
    "Furniture covered and protected during work",
    "Clean-up after painting is complete",
  ],
  tasks: [
    { name: "Interior wall painting", desc: "Fresh coat for living room, bedroom, kitchen walls.", price: "₹12/sq ft+" },
    { name: "Exterior painting", desc: "Weatherproof exterior paint for outer walls.", price: "₹18/sq ft+" },
    { name: "Wall putty & primer", desc: "Smooth putty base before final paint coat.", price: "₹8/sq ft+" },
    { name: "Texture painting", desc: "Designer texture finishes for feature walls.", price: "₹25/sq ft+" },
    { name: "Wood & metal painting", desc: "Paint doors, windows, grills, and railings.", price: "₹799+" },
    { name: "Waterproof painting", desc: "Special waterproof paint for bathrooms and damp walls.", price: "₹15/sq ft+" },
  ],
  faqs: [
    { q: "How do you calculate the painting cost?", a: "Painting is priced per square foot of wall area. Our team visits, measures your space, and gives you a complete quote before any work starts." },
    { q: "Which paint brands do you use?", a: "We use Asian Paints, Berger, and Nerolac. You can also request a specific brand." },
    { q: "How long does it take to paint a 2BHK?", a: "A standard 2BHK takes 3–5 days including putty, primer, and two coats of paint." },
    { q: "Do I need to move all furniture out?", a: "No — our painters cover and protect all furniture with sheets before starting." },
  ],
};

export default function PaintingPage() {
  return <ServicePage service={service} />;
}