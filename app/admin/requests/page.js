import Navbar from "../../../components/Navbar";

export default function Requests() {

  const requests = [
    {
      name: "Amit",
      phone: "9876543210",
      service: "Plumber",
      location: "Alkapuri"
    }
  ];

  return (
    <main>

      <Navbar />

      <section className="p-10">

        <h1 className="text-2xl font-bold mb-6">
          Service Requests
        </h1>

        {requests.map((req, index) => (

          <div key={index} className="border p-4 mb-4 rounded">

            <p><b>Name:</b> {req.name}</p>
            <p><b>Phone:</b> {req.phone}</p>
            <p><b>Service:</b> {req.service}</p>
            <p><b>Location:</b> {req.location}</p>

          </div>

        ))}

      </section>

    </main>
  );

}