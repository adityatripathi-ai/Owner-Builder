import { MotionConfig } from "framer-motion";

import AboutHero from "../components/sections/about/AboutHero";
import StorySection from "../components/sections/about/StorySection";
import MissionSection from "../components/sections/about/MissionSection";
import OrganisationSection from "../components/sections/about/OrganisationSection";
import OwnerSection from "../components/sections/about/OwnerSection";
import AboutCTASection from "../components/sections/about/AboutCTASection";
import { ScrollProgress } from "../components/common/Animations";

const AboutPage = () => {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />

      <AboutHero />
      <StorySection />
      <MissionSection />
      <OrganisationSection />
      <OwnerSection />
      <AboutCTASection />
    </MotionConfig>
  );
};

export default AboutPage;