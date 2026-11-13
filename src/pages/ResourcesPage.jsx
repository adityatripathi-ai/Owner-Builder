import { MotionConfig } from "framer-motion";

import AdviceSection from "../components/sections/resources/AdviceSection";
import CTASection from "../components/sections/resources/CTASection";
import FeaturedSection from "../components/sections/resources/FeaturedSection";
import InformationSection from "../components/sections/resources/InformationSection";
import ResourcesHero from "../components/sections/resources/ResourcesHero";
import ResourcesSection from "../components/sections/resources/ResourcesSection";
import { ScrollProgress } from "../components/common/Animations";

const ResourcesPage = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />

      <ResourcesHero />
      <FeaturedSection />
      <InformationSection />
      <ResourcesSection />
      <AdviceSection />
      <CTASection />
    </MotionConfig>
  );
};

export default ResourcesPage;