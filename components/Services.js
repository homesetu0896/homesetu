import Link from "next/link";

const services = [
  {
    icon: "🪚",
    name: "Carpentry",
    slug: "carpenter",
    desc: "Furniture repair, custom woodwork, door & window fitting, and more.",
    price: "Starting ₹299",
  },
  {
    icon: "🔧",
    name: "Plumbing",
    slug: "plumbing",
    desc: "Pipe leaks, tap repair, drain cleaning, bathroom fitting — fast response.",
    price: "Starting ₹199",
  },
  {
    icon: "⚡",
    name: "Electrical",
    slug: "electrician",
    desc: "Wiring, switchboard repair, fan & light installation, short circuit fixes.",
    price: "Starting ₹249",
  },
  {
    icon: "❄️",
    name: "AC Repair",
    slug: "ac-repair",
    desc: "AC servicing, gas refill, installation, and cooling issue diagnosis.",
    price: "Starting ₹399",
  },
  {
    icon: "🏠",
    name: "Waterproofing",
    slug: "waterproofing",
    desc: "Terrace, bathroom & wall waterproofing to prevent leakage and seepage.",
    price: "Starting ₹999",
  },
  {
    icon: "🎨",
    name: "Painting",
    slug: "painting",
    desc: "Interior & exterior painting, texture work, and wall putty finishing.",
    price: "Starting ₹799",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#172e29]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#4ecca3] text-sm font-medium uppercase tracking-widest mb-2">
            What we offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            Skilled professionals for every home need — available same day in Vadodara.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4ecca3]/40 rounded-2xl p-6 transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#4ecca3] transition-colors">
                {s.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#4ecca3] text-sm font-medium">
                  {s.price}
                </span>
                <span className="text-white/30 text-sm group-hover:text-[#4ecca3] transition-colors">
                  Book →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}