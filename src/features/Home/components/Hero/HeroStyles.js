import styled from "styled-components";
import { SecondaryButtonStyled } from "../../../../components/UI/BotonStyles";

export const HeroContainerStyled = styled.div`
  width: 100%;
  position: relative;
  min-height: 85vh;
  background-image: var(--hero-background);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media (max-width: 968px) {
    gap: 36px;
    min-height: 80vh;
  }

  & > div {
    z-index: 2;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h2 {
    font-family: var(--font-primary);
    font-weight: 300;
    font-size: 1.4em;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }

    @media (max-width: 480px) {
      font-size: 1em;
    }
  }

  h1 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 6em;
    color: #ffffff;
    text-align: center;
    line-height: 120%;

    @media (max-width: 768px) {
      font-size: 3.4em;
    }

    @media (max-width: 480px) {
      font-size: 2.6em;
    }
  }
`;

export const HeroButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6em;

  @media (max-width: 968px) {
    flex-direction: column;
  }

`;

export const SecondaryHeroButtonStyled = styled(SecondaryButtonStyled)`
  /* Boton */
  border: 1px solid #ffffff;

  /* Fuente */
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    box-shadow: var(--shadow-button);
  }

  &:active {
    box-shadow: var(--shadow-button-active);
    border: 1px solid #ffffff;
    scale: .99;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    min-width: 200px;
  }
`;