const workers = [
  {
    name: "Rajesh Kumar",
    role: "Carpenter",
    exp: "8 years experience",
    rating: "4.9",
    jobs: "120+ jobs done",
    initials: "RK",
    color: "bg-amber-900/40",
  },
  {
    name: "Imran Sheikh",
    role: "Electrician",
    exp: "6 years experience",
    rating: "4.8",
    jobs: "95+ jobs done",
    initials: "IS",
    color: "bg-yellow-900/40",
  },
  {
    name: "Mahesh Patel",
    role: "Plumber",
    exp: "10 years experience",
    rating: "4.9",
    jobs: "200+ jobs done",
    initials: "MP",
    color: "bg-blue-900/40",
  },
  {
    name: "Suresh Yadav",
    role: "AC Technician",
    exp: "5 years experience",
    rating: "4.7",
    jobs: "80+ jobs done",
    initials: "SY",
    color: "bg-cyan-900/40",
  },
];

export default function Workers() {
  return (
    <section id="workers" className="py-20 px-4 bg-[#1f3a34]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#4ecca3] text-sm font-medium uppercase tracking-widest mb-2">
            The team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meet our professionals
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            Every worker is background-verified, trained, and rated by real customers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {workers.map((w) => (
            <div
              key={w.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all"
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-full ${w.color} border border-white/20 flex items-center justify-center text-white font-bold text-lg mb-4`}
              >
                {w.initials}
              </div>

              <h3 className="text-white font-semibold text-base">{w.name}</h3>
              <p className="text-[#4ecca3] text-sm mt-0.5">{w.role}</p>
              <p className="text-white/40 text-xs mt-1">{w.exp}</p>

              {/* Stats */}
              <div className="flex gap-3 mt-4 mb-5">
                <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center">
                  <div className="text-white font-semibold text-sm">⭐ {w.rating}</div>
                  <div className="text-white/40 text-xs">Rating</div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-1.5 text-center">
                  <div className="text-white font-semibold text-sm">{w.jobs.split(" ")[0]}</div>
                  <div className="text-white/40 text-xs">Jobs</div>
                </div>
              </div>

              <a
                href="/#contact"
                className="w-full bg-[#4ecca3] text-[#1a3330] font-semibold text-sm py-2 rounded-xl hover:bg-[#3ab890] transition-colors"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}