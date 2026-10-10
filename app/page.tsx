import Navigation from "@/components/navigation";
import PortfolioLoader from "@/components/portfolio-loader";
import Hero from "@/components/hero";
import NumericLadder from "@/components/numeric-ladder";
import Manifesto from "@/components/manifesto";
import HorizontalStatement from "@/components/horizontal-statement";
import SelectedWork from "@/components/selected-work";
import ExperienceStack from "@/components/experience-stack";
import TechnicalCapabilities from "@/components/technical-capabilities";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <PortfolioLoader />
      <Navigation />
      <main>
        <Hero />
        <NumericLadder />
        <Manifesto />
        <HorizontalStatement />
        <SelectedWork />
        <ExperienceStack />
        <TechnicalCapabilities />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
