
import AdviceSection from "../components/sections/resources/AdviceSection";
import CTASection from "../components/sections/resources/CTASection";
import FeaturedSection from "../components/sections/resources/FeaturedSection";
import InformationSection from "../components/sections/resources/InformationSection";
import ResourcesHero from "../components/sections/resources/ResourcesHero";
import ResourcesSection from "../components/sections/resources/ResourcesSection";

const ResourcesPage = () => {
  return (
    <>
      <ResourcesHero />
      <FeaturedSection/>
      <InformationSection/>
      <ResourcesSection/>
      <AdviceSection/>
      <CTASection/>
    </>
  );
};

export default ResourcesPage;
