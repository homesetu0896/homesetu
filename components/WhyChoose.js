const reasons = [
  {
    icon: "🛡️",
    title: "Verified professionals",
    desc: "Every worker is background-checked, ID-verified, and rated by real customers before joining HomeSetu.",
  },
  {
    icon: "⚡",
    title: "Fast response",
    desc: "We call you back within 30 minutes and offer same-day service for most requests in Vadodara.",
  },
  {
    icon: "💰",
    title: "Transparent pricing",
    desc: "You get a clear quote before work begins. No surprise charges, no hidden fees — ever.",
  },
  {
    icon: "🔁",
    title: "Satisfaction guarantee",
    desc: "Not happy with the work? We'll send another professional or give you a full refund.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 px-4 bg-[#1f3a34]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#4ecca3] text-sm font-medium uppercase tracking-widest mb-2">
            Our promise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why choose HomeSetu?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}