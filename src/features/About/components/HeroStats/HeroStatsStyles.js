import styled from "styled-components";

export const HeroStatsWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: 4em;
  gap: 2em;

  @media (max-width: 968px) {
    padding: 2em 1em;
  }
`;

export const HeroIntroductionContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: space-between;
  gap: 1em;

  p {
    font-weight: 400;
    font-size: 1.1em;
    line-height: 140%;
    color: var(--neutral-900);
    font-family: var(--font-primary);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0em;
  }
`;

export const HeroTitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;

  h3 {
    font-weight: 400;
    font-size: 1.2em;
    color: var(--neutral-900);
    font-family: var(--font-primary);
  }

  h2 {
    font-family: var(--font-secondary);
    font-weight: 400;
    font-size: 3.5em;
    color: var(--black);
    text-align: start;
    line-height: 120%;

    @media (max-width: 968px) {
      font-size: 2.8em;
    }
  }
`;

export const HeroStatsBanner = styled.div`
  width: 100%;
  height: 540px;
  background-image: var(--about-background);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;

  @media (max-width: 968px) {
    height: auto;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
    transition: background 0.4s ease;

    @media (max-width: 968px) {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, .8) 100%,
        rgba(0, 0, 0, .8) 100%
      );
    }
  }
`;

export const BannerDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const BannerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  z-index: 2;

  h2 {
    font-weight: 900;
    font-size: 3em;
    color: #ffffff;
    font-family: var(--font-primary);
  }

  h3 {
    font-weight: 400;
    font-size: 1.2em;
    color: #ffffff;
    font-family: var(--font-primary);
  }
`;
