import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { OurProcess } from "@/components/OurProcess";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Gallery } from "@/components/Gallery";
import { EnergySavings } from "@/components/EnergySavings";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <div className="bg-[#fcfcf8] text-[#111111]">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <HowItWorks />
        <OurProcess />
        <ServiceAreas />
        <Gallery />
        <EnergySavings />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
