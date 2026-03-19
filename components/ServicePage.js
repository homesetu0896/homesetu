import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ServicePage({ service }) {
  const whatsappMsg = encodeURIComponent(
    `Hi HomeSetu! I need help with ${service.name}. Please assist.`
  );

  return (
    <main className="bg-[#1f3a34] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-4 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/40 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#4ecca3]">{service.name}</span>
            </div>

            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{service.name}</h1>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Quick stats */}
            <div className="flex gap-6 mb-8">
              <div>
                <div className="text-xl font-bold text-[#4ecca3]">{service.responseTime}</div>
                <div className="text-white/40 text-xs mt-0.5">Response time</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#4ecca3]">{service.startingPrice}</div>
                <div className="text-white/40 text-xs mt-0.5">Starting price</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#4ecca3]">{service.rating}</div>
                <div className="text-white/40 text-xs mt-0.5">Customer rating</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/#contact"
                className="bg-[#4ecca3] text-[#1a3330] font-semibold px-6 py-3 rounded-xl hover:bg-[#3ab890] transition-colors"
              >
                Book Now
              </Link>
              <a
                href={`https://wa.me/919999999999?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600/80 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — what's included */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-base mb-4">What's included</h3>
            <ul className="flex flex-col gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="w-5 h-5 rounded-full bg-[#4ecca3]/15 text-[#4ecca3] text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sub-services / tasks */}
      <section className="px-4 py-16 bg-[#172e29]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Common tasks we handle</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.tasks.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{t.name}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                  <span className="text-[#4ecca3] text-xs font-medium whitespace-nowrap bg-[#4ecca3]/10 px-2 py-1 rounded-lg flex-shrink-0">
                    {t.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-16 bg-[#1f3a34]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">How it works</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Book online", desc: "Fill the form or WhatsApp us with your requirement." },
              { step: "2", title: "We call back", desc: "Our team calls within 30 min to confirm details & time." },
              { step: "3", title: "Worker arrives", desc: "Verified professional arrives at your doorstep on time." },
              { step: "4", title: "Job done", desc: "Work is completed. Pay only after you're satisfied." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#4ecca3]/15 border border-[#4ecca3]/30 text-[#4ecca3] font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-[#172e29]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently asked questions</h2>
          <div className="flex flex-col gap-4">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-white font-medium text-sm mb-2">{faq.q}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16 bg-[#1f3a34] border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to book {service.name.toLowerCase()}?
          </h2>
          <p className="text-white/50 mb-8">
            Serving Vadodara and nearby areas. Same-day service available.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/#contact"
              className="bg-[#4ecca3] text-[#1a3330] font-semibold px-8 py-3 rounded-xl hover:bg-[#3ab890] transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/#services"
              className="border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}