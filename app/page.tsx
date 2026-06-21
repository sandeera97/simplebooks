import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Platform from "@/components/sections/Platform";
import BankingPartners from "@/components/sections/BankingPartners";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Platform />
        <BankingPartners />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
