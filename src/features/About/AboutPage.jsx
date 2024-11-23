import HeroStats from "./components/HeroStats/HeroStats";
import AboutSection from "./components/AboutSection/AboutSection";
import Timeline from "./components/Timeline/Timeline";
import Separador from "../../components/UI/Separador";

function AboutPage() {

  return (
    <>
      <HeroStats />
      <Separador />
      <AboutSection />
      <Separador />
      <Timeline />
    </>
  );
}

export default AboutPage;
