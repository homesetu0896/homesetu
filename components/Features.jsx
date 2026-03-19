export default function Features() {

  const features = [
    {
      title: "Instant Booking",
      description:
        "Book your home service in minutes through WhatsApp or phone.",
      image: "/booking.jpg",
    },
    {
      title: "Trusted Professionals",
      description:
        "Experienced and verified technicians serving homes across Vadodara.",
      image: "/plumber.jpg",
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear pricing with no hidden charges before the work begins.",
      image: "/pricing.jpg",
    },
  ];

  return (
    <section className="bg-[#1f3a34] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <div key={index}>

              <img
                src={feature.image}
                className="rounded-xl mb-6"
              />

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}