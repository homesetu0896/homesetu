const reviews = [
  {
    name: "Amit Sharma",
    location: "Alkapuri, Vadodara",
    service: "Carpentry",
    text: "Rajesh fixed our broken wardrobe and built a custom shelf within the same day. Very professional, cleaned up after the work too. Highly recommended!",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Priya Mehta",
    location: "Gotri, Vadodara",
    service: "AC Repair",
    text: "My AC stopped cooling at midnight. HomeSetu sent a technician the very next morning. Quick diagnosis, affordable gas refill — AC works perfectly now.",
    rating: 5,
    initials: "PM",
  },
  {
    name: "Rakesh Patel",
    location: "Manjalpur, Vadodara",
    service: "Plumbing",
    text: "Bathroom pipe was leaking badly. Mahesh came within 2 hours, fixed it without breaking the tiles. Transparent pricing — no hidden charges at all.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Sneha Joshi",
    location: "Fatehgunj, Vadodara",
    service: "Electrical",
    text: "Got all the switches and fan installation done for my new flat. Imran was on time, careful with the work, and the pricing was very reasonable.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Vijay Nair",
    location: "Vasna, Vadodara",
    service: "Waterproofing",
    text: "Terrace was leaking for 2 years. HomeSetu's team did the waterproofing treatment and the problem is completely gone. Worth every rupee.",
    rating: 5,
    initials: "VN",
  },
  {
    name: "Deepa Rao",
    location: "Sama, Vadodara",
    service: "Carpentry",
    text: "Needed a custom TV unit built. Rajesh understood exactly what I wanted, finished it in 2 days and the quality is outstanding. Will definitely book again.",
    rating: 5,
    initials: "DR",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 bg-[#172e29]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#4ecca3] text-sm font-medium uppercase tracking-widest mb-2">
            Customer stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What our customers say
          </h2>
          <p className="text-white/50 mt-3">
            500+ happy customers across Vadodara
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/8 transition-all"
            >
              {/* Stars + service tag */}
              <div className="flex items-center justify-between mb-4">
                <Stars count={r.rating} />
                <span className="text-xs text-[#4ecca3] bg-[#4ecca3]/10 px-2.5 py-1 rounded-full">
                  {r.service}
                </span>
              </div>

              {/* Review text */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-5">
                "{r.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{r.name}</div>
                  <div className="text-white/40 text-xs">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}