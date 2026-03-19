import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Carpenter in Vadodara — Furniture Repair & Custom Woodwork",
  description:
    "Book a verified carpenter in Vadodara for furniture repair, custom woodwork, door & window fitting and more. Same-day service. Starting ₹299. Call back in 30 mins.",
  keywords: ["carpenter Vadodara", "furniture repair Vadodara", "carpenter near me Vadodara", "woodwork Vadodara"],
  alternates: { canonical: "https://homesetu.in/services/carpenter" },
  openGraph: {
    title: "Carpenter in Vadodara — HomeSetu",
    description: "Book a verified carpenter in Vadodara. Same-day service. Starting ₹299.",
    url: "https://homesetu.in/services/carpenter",
  },
};

const service = {
  name: "Carpentry",
  icon: "🪚",
  description:
    "Expert carpentry services for your home — from quick furniture repairs to custom woodwork. All our carpenters are verified, experienced, and deliver quality work at fair prices.",
  responseTime: "Same day",
  startingPrice: "₹299",
  rating: "4.9 ⭐",
  includes: [
    "Free inspection and quote before starting work",
    "All tools and equipment brought by the worker",
    "Clean-up after work is completed",
    "30-day warranty on labour",
    "Background-verified, experienced carpenter",
  ],
  tasks: [
    { name: "Furniture repair", desc: "Fix broken chairs, tables, beds, wardrobes.", price: "₹299+" },
    { name: "Door fitting & repair", desc: "Fix misaligned, squeaky, or broken doors.", price: "₹399+" },
    { name: "Window repair", desc: "Repair or replace wooden window frames.", price: "₹349+" },
    { name: "Custom furniture", desc: "Build wardrobes, shelves, TV units to your design.", price: "₹999+" },
    { name: "Modular kitchen work", desc: "Cabinet fitting, hinges, drawers, handles.", price: "₹599+" },
    { name: "False ceiling work", desc: "POP/gypsum false ceiling installation and repair.", price: "₹1499+" },
  ],
  faqs: [
    { q: "How quickly can a carpenter come?", a: "For most requests in Vadodara, we can arrange same-day service. We'll confirm the time when we call back within 30 minutes of your booking." },
    { q: "Do I need to arrange materials?", a: "The carpenter brings all tools. For custom work involving wood or hardware, they'll advise you on materials needed." },
    { q: "Is there a minimum charge?", a: "The minimum visit charge is ₹299, which covers the first 30 minutes of work." },
    { q: "What areas do you serve?", a: "We serve Vadodara and nearby areas including Alkapuri, Gotri, Manjalpur, Fatehgunj, Vasna, Sama, and more." },
  ],
};

export default function CarpenterPage() {
  return <ServicePage service={service} />;
}