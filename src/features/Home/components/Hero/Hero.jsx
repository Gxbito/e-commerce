// Archivos internos - Estilos
import {
  HeroButtonContainer,
  SecondaryHeroButtonStyled,
  HeroTextContainer,
  HeroContainerStyled,
} from "./HeroStyles";

// Archivos internos - Componentes
import PrimaryButton from "../../../../components/UI/Buttons/PrimaryButton/PrimaryButton";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextContainer>
        <h2>Transform your wardrobe with</h2>
        <h1>Trendsetter Threads</h1>
      </HeroTextContainer>

      <HeroButtonContainer>
        <SecondaryHeroButtonStyled>Collections</SecondaryHeroButtonStyled>

        <PrimaryButton>Shop Now</PrimaryButton>
      </HeroButtonContainer>
    </HeroContainerStyled>
  );
}

export default Hero;
