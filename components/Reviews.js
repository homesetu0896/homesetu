export default function Reviews() {
  return (
    <section className="py-20 bg-gray-100 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="p-6 border rounded-lg">
          ⭐⭐⭐⭐⭐
          <p className="mt-2">
            Great carpenter service. Very professional.
          </p>
          <p className="mt-2 font-semibold">— Amit</p>
        </div>

        <div className="p-6 border rounded-lg">
          ⭐⭐⭐⭐⭐
          <p className="mt-2">
            Quick AC repair. Highly recommended.
          </p>
          <p className="mt-2 font-semibold">— Priya</p>
        </div>

        <div className="p-6 border rounded-lg">
          ⭐⭐⭐⭐⭐
          <p className="mt-2">
            Affordable plumbing service.
          </p>
          <p className="mt-2 font-semibold">— Rakesh</p>
        </div>

      </div>

    </section>
  );
}