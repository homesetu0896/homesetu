import Navbar from "../../../components/Navbar";

export default function AdminServices() {

  const services = [
    "Carpenter",
    "Plumber",
    "Electrician",
    "AC Repair",
    "Painting",
    "Waterproofing"
  ];

  return (

    <main>

      <Navbar />

      <section className="p-10">

        <h1 className="text-2xl font-bold mb-6">
          Services
        </h1>

        {services.map((service, index) => (

          <div key={index} className="border p-4 mb-4 rounded">

            {service}

          </div>

        ))}

      </section>

    </main>

  );

}