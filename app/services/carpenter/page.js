import Navbar from "../../../components/Navbar";

export default function CarpenterService() {
  return (
    <main>

      <Navbar />

      <section className="py-20 text-center">

        <h1 className="text-4xl font-bold mb-6">
          Carpenter Service in Vadodara
        </h1>

        <p className="max-w-2xl mx-auto mb-8">
          Professional carpenter services in Vadodara for furniture repair,
          door installation, wardrobe work, and custom woodwork.
        </p>

        <a
          href="https://wa.me/919265469799"
          className="bg-green-500 text-white px-8 py-4 rounded-lg"
        >
          Book Carpenter on WhatsApp
        </a>

      </section>

    </main>
  );
}