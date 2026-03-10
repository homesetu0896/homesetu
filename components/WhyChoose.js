export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-100 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Why Choose HomeSetu
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Trusted Professionals
          </h3>
          <p>Verified and experienced local workers.</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Fast Service
          </h3>
          <p>Quick response and same day service.</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Affordable Pricing
          </h3>
          <p>Transparent and fair pricing.</p>
        </div>

      </div>

    </section>
  );
}