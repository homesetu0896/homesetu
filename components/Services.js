export default function Services() {

  const services = [
    { name: "Carpenter", link: "/services/carpenter" },
    { name: "Plumber", link: "/services/plumbing" },
    { name: "Electrician", link: "/services/electrician" },
    { name: "AC Repair", link: "/services/ac-repair" },
    { name: "Painting", link: "/services/painting" },
    { name: "Waterproofing", link: "/services/waterproofing" }
  ];

  return (
    <section className="py-20 bg-white text-center">

      <h2 className="text-3xl font-bold mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

        {services.map((service, index) => (
          
          <a key={index} href={service.link}>

            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">

              <h3 className="text-xl font-semibold">
                {service.name}
              </h3>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}