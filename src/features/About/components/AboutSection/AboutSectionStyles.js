import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: 40% 50%;
  justify-content: space-between;
  padding: 4em;
  gap: 2em;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 2em 1em;
    gap: 1em;
  }

  h2 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 3em;
    color: var(--black);
    text-align: start;
    line-height: 120%;

    b {
      font-family: var(--font-primary);
      font-weight: 500;
      color: var(--primary-500);
      text-align: start;
      line-height: 120%;
    }
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  :nth-child(1) {
    font-weight: 400;
    font-size: 1.4em;
    line-height: 140%;
    color: var(--neutral-900);
    font-family: var(--font-primary);
  }

  p {
    font-weight: 400;
    font-size: 1.1em;
    line-height: 140%;
    color: var(--neutral-900);
    font-family: var(--font-primary);

    @media (max-width: 968px) {
      font-size: 1.4em;
    }
  }
`;
