import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Workers from "@/components/Workers";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "HomeSetu — Trusted Home Services in Vadodara",
  description:
    "Book verified home service professionals in Vadodara. AC repair, plumbing, carpentry, electrical, waterproofing & painting. Same-day service. Call back in 30 minutes.",
  alternates: {
    canonical: "https://homesetu.in",
  },
};

// JSON-LD structured data — helps Google show your business in rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HomeSetu",
  description:
    "Trusted home services in Vadodara — AC repair, plumbing, carpentry, electrical, waterproofing and painting.",
  url: "https://homesetu.in",
  logo: "https://homesetu.in/logo.png",
  image: "https://homesetu.in/og-image.png",
  telephone: "+919265469799",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  areaServed: {
    "@type": "City",
    name: "Vadodara",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
  priceRange: "₹199 - ₹4999",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#1f3a34] text-white">
        <Navbar />
        <Hero />
        <Services />
        <WhyChoose />
        <Workers />
        <Reviews />
        <ContactForm />
      </main>
    </>
  );
}