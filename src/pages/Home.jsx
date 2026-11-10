import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import PlatformBenefits from "../components/sections/PlatformBenefits";
import PlanningSection from "../components/sections/PlanningSection";
import PerspectiveSection from "../components/sections/PerspectiveSection";
import PlatformSection from "../components/sections/PlatformSection";
import PreparationSection from "../components/sections/PreparationSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <PlatformBenefits />
      <PlanningSection />
      <PerspectiveSection />
      <PlatformSection />
      <PreparationSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

export default Home;
