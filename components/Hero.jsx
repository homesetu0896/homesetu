import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div>
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-[#4ecca3] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4ecca3] animate-pulse" />
            Serving Vadodara &amp; nearby areas
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Trusted home services,{" "}
            <span className="text-[#4ecca3]">booked in minutes</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8">
            HomeSetu connects you with verified local workers for AC repair,
            plumbing, carpentry, electrical work, waterproofing and more.
            No middlemen. Transparent pricing. Quality guaranteed.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-[#4ecca3]">500+</div>
              <div className="text-white/50 text-sm">Happy customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4ecca3]">50+</div>
              <div className="text-white/50 text-sm">Verified workers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4ecca3]">6</div>
              <div className="text-white/50 text-sm">Service types</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/#contact"
              className="bg-[#4ecca3] text-[#1a3330] font-semibold px-6 py-3 rounded-xl hover:bg-[#3ab890] transition-colors"
            >
              Book a Service
            </Link>
            <Link
              href="/#services"
              className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Right — service cards preview */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            { icon: "❄️", name: "AC Repair", time: "Same day" },
            { icon: "🔧", name: "Plumbing", time: "2–4 hrs" },
            { icon: "⚡", name: "Electrical", time: "Same day" },
            { icon: "🪚", name: "Carpentry", time: "Flexible" },
          ].map((s) => (
            <div
              key={s.name}
              className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-semibold text-white">{s.name}</div>
              <div className="text-white/50 text-sm mt-1">
                Response: {s.time}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}