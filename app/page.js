import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Workers from "../components/Workers";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Services />

      <WhyChoose />

      <Workers />

      <Reviews />

      <ContactForm />

    </main>
  );
}