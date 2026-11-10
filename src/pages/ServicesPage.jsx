
import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesFeatures from "../components/sections/services/ServicesFeatures";
import ServicesWorkSection from "../components/sections/services/ServicesWorkSection";
import ServicesProcessSection from "../components/sections/services/ServicesProcessSection";
import ServicesFAQSection from "../components/sections/services/ServicesFAQSection";
import ServicesCTASection from "../components/sections/services/ServicesCTASection";
import About from "../components/sections/services/About";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesFeatures />
      <ServicesWorkSection />
      <ServicesProcessSection />
      <About/>
      <ServicesFAQSection />
      <ServicesCTASection />
    </>
  );
};

export default ServicesPage;
