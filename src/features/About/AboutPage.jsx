import HeroStats from "./components/HeroStats/HeroStats";
import AboutSection from "./components/AboutSection/AboutSection";
import Timeline from "./components/Timeline/Timeline";
import Divider from "../../components/UI/Divider/Divider";

function AboutPage() {

  return (
    <>
      <HeroStats />
      <Divider />
      <AboutSection />
      <Divider />
      <Timeline />
    </>
  );
}

export default AboutPage;
