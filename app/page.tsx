import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
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
      <main>
        <Hero />
        <Services />
        <Platform />
        <BankingPartners />

        {/* Testimonials + lead form share one lavender section */}
        <section className="sim_bk_testimonials">
          <h2>
            Thousands of repeat customers<br />can&apos;t all be wrong
          </h2>
          <Testimonials />
          <ContactForm />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
