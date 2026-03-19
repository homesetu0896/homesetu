import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "AC Repair & Service in Vadodara — Same Day Service",
  description:
    "Book AC repair, servicing, and gas refill in Vadodara. Same-day service by certified AC technicians. All brands. Starting ₹399. Call back in 30 minutes.",
  keywords: ["AC repair Vadodara", "AC service Vadodara", "AC not cooling Vadodara", "AC gas refill Vadodara"],
  alternates: { canonical: "https://homesetu.in/services/ac-repair" },
  openGraph: {
    title: "AC Repair in Vadodara — HomeSetu",
    description: "Same-day AC repair and servicing in Vadodara. Starting ₹399.",
    url: "https://homesetu.in/services/ac-repair",
  },
};

const service = {
  name: "AC Repair & Service",
  icon: "❄️",
  description:
    "Fast, affordable AC repair and servicing by certified technicians in Vadodara. From routine servicing to complex repairs and gas refills — we've got your cooling covered.",
  responseTime: "Same day",
  startingPrice: "₹399",
  rating: "4.8 ⭐",
  includes: [
    "Free diagnosis before quoting repair cost",
    "Genuine spare parts and refrigerant gas used",
    "All tools and equipment brought by technician",
    "90-day warranty on parts replaced",
    "Background-verified, certified AC technician",
  ],
  tasks: [
    { name: "AC servicing / cleaning", desc: "Filter, coil and drain cleaning for better cooling.", price: "₹399+" },
    { name: "Gas refill (refrigerant)", desc: "Recharge refrigerant when AC is not cooling.", price: "₹799+" },
    { name: "AC not cooling repair", desc: "Diagnose and fix cooling issues.", price: "₹499+" },
    { name: "AC installation", desc: "New split or window AC installation with pipe fitting.", price: "₹999+" },
    { name: "AC uninstallation", desc: "Safe removal and packing of split AC unit.", price: "₹599+" },
    { name: "PCB / compressor repair", desc: "Advanced electrical and mechanical AC repairs.", price: "₹1499+" },
  ],
  faqs: [
    { q: "My AC is on but not cooling. What could be wrong?", a: "The most common reasons are low refrigerant gas, dirty filters, or a faulty compressor. Our technician will diagnose for free and give you a quote before any repair." },
    { q: "How often should I service my AC?", a: "At least once a year, ideally before summer. Regular servicing improves cooling efficiency and extends the life of your unit." },
    { q: "Do you carry spare parts?", a: "Our technicians carry common parts. For less common parts, we'll source them and schedule a follow-up visit, usually within 1–2 days." },
    { q: "What brands do you service?", a: "We service all major brands including Daikin, Voltas, Blue Star, LG, Samsung, Hitachi, Lloyd, Carrier, and more." },
  ],
};

export default function ACRepairPage() {
  return <ServicePage service={service} />;
}