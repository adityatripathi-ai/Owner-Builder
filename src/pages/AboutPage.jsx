
import AboutHero from "../components/sections/about/AboutHero";
import StorySection from "../components/sections/about/StorySection";
import MissionSection from "../components/sections/about/MissionSection";
import OrganisationSection from "../components/sections/about/OrganisationSection";
import OwnerSection from "../components/sections/about/OwnerSection";
import AboutCTASection from "../components/sections/about/AboutCTASection";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionSection />
      <OrganisationSection />
      <OwnerSection />
      <AboutCTASection />
    </>
  );
};

export default AboutPage;
