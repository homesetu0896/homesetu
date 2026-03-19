import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Electrician in Vadodara — Wiring, Repair & Installation",
  description:
    "Book a certified electrician in Vadodara for wiring, switchboard repair, fan & light installation, short circuit fixes. Starting ₹249. Same-day service.",
  keywords: ["electrician Vadodara", "electrician near me Vadodara", "wiring repair Vadodara", "short circuit fix Vadodara"],
  alternates: { canonical: "https://homesetu.in/services/electrician" },
  openGraph: {
    title: "Electrician in Vadodara — HomeSetu",
    description: "Certified electrician in Vadodara. Starting ₹249. Same-day service.",
    url: "https://homesetu.in/services/electrician",
  },
};

const service = {
  name: "Electrical Work",
  icon: "⚡",
  description:
    "Certified electricians for all your home electrical needs in Vadodara. Safe, reliable, and affordable — from basic repairs to complete home wiring.",
  responseTime: "Same day",
  startingPrice: "₹249",
  rating: "4.8 ⭐",
  includes: [
    "Free inspection before any work begins",
    "ISI-certified wires and materials used",
    "All tools brought by the electrician",
    "Safety check after work is done",
    "Background-verified, licensed electrician",
  ],
  tasks: [
    { name: "Switchboard repair", desc: "Fix broken switches, sockets, MCBs.", price: "₹249+" },
    { name: "Fan installation", desc: "Ceiling fan fitting and wiring.", price: "₹299+" },
    { name: "Light fitting", desc: "Install LED lights, tube lights, downlights.", price: "₹199+" },
    { name: "Short circuit fix", desc: "Diagnose and repair short circuits safely.", price: "₹399+" },
    { name: "New point wiring", desc: "Add new plug points, switch points.", price: "₹499+" },
    { name: "Full home wiring", desc: "Complete electrical wiring for new homes.", price: "₹4999+" },
  ],
  faqs: [
    { q: "Is it safe to book an electrician online?", a: "Yes. All our electricians are background-verified, carry valid ID, and are trained in safety procedures." },
    { q: "My MCB keeps tripping. What should I do?", a: "Don't reset it repeatedly — that can be dangerous. Book our electrician to diagnose the root cause safely." },
    { q: "Do you handle inverter and UPS wiring?", a: "Yes, our electricians handle inverter installation, battery connections, and UPS wiring." },
    { q: "Will the electrician bring wires and materials?", a: "Electricians bring tools and common small parts. For larger wiring jobs, they'll provide a material list." },
  ],
};

export default function ElectricianPage() {
  return <ServicePage service={service} />;
}