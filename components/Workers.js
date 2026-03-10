export default function Workers() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Meet Our Professionals
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold text-xl">Rajesh</h3>
          <p>Carpenter</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold text-xl">Imran</h3>
          <p>Electrician</p>
        </div>

        <div className="border p-6 rounded-lg">
          <h3 className="font-semibold text-xl">Mahesh</h3>
          <p>Plumber</p>
        </div>

      </div>

    </section>
  );
}