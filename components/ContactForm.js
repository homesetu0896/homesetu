"use client";

import { useState } from "react";

const services = [
  "AC Repair",
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Waterproofing",
  "Painting",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/book-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", location: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const whatsappMsg = encodeURIComponent(
    "Hi HomeSetu! I need help with a home service. Please assist."
  );

  return (
    <section id="contact" className="py-20 px-4 bg-[#1f3a34]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left — info */}
        <div>
          <p className="text-[#4ecca3] text-sm font-medium uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book a service today
          </h2>
          <p className="text-white/50 leading-relaxed mb-8">
            Fill the form and we'll call you back within 30 minutes to confirm
            your booking. Or reach us instantly on WhatsApp.
          </p>

          {/* Trust points */}
          <div className="flex flex-col gap-4 mb-8">
            {[
              { icon: "✓", text: "Free callback within 30 minutes" },
              { icon: "✓", text: "Transparent pricing — no hidden charges" },
              { icon: "✓", text: "Verified & background-checked workers" },
              { icon: "✓", text: "Same-day service available" },
            ].map((p) => (
              <div key={p.text} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#4ecca3]/20 text-[#4ecca3] text-xs flex items-center justify-center font-bold flex-shrink-0">
                  {p.icon}
                </span>
                <span className="text-white/70 text-sm">{p.text}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/919265469799?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book on WhatsApp
          </a>
        </div>

        {/* Right — form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#4ecca3]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#4ecca3] text-3xl">✓</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Booking received!</h3>
              <p className="text-white/50 text-sm">
                We'll call you back within 30 minutes to confirm.
              </p>
              <button
                onClick={() => setStatus(null)}
                className="mt-6 text-[#4ecca3] text-sm underline"
              >
                Book another service
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">Your name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Amit Sharma"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4ecca3]/60"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">Phone number *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98765 43210"
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4ecca3]/60"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Your area / location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Alkapuri, Vadodara"
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4ecca3]/60"
                />
              </div>

              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Service needed *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#1a3330] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#4ecca3]/60"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white/60 text-xs mb-1.5 block">Tell us more (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe the problem briefly..."
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#4ecca3]/60 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs">
                  Please fill in your name, phone, and service type.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#4ecca3] text-[#1a3330] font-semibold py-3 rounded-xl hover:bg-[#3ab890] transition-colors disabled:opacity-60 mt-1"
              >
                {status === "loading" ? "Sending..." : "Request a Callback"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}