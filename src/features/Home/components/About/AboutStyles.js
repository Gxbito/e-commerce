import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: auto;
  display: grid;
  grid-template-columns: 50% 45%;
  justify-content: space-between;
  padding: 4em;

  @media (max-width: 968px) {
    grid-template-columns: 1fr; 
    padding: 2em 1em;
    gap: 2em;
  }
`;

export const AboutImageContainer = styled.div`
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media (max-width: 968px) {
      width: 100%;
      max-width: 100%;
      height: 400px;
    }
  }
`;

export const AboutTextButtonContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 968px) {
    width: 100%;
  }

  h2 {
    font-weight: 900;
    font-size: 2.5em;
    color: var(--neutral-900);
    font-family: var(--font-primary);
    margin-bottom: 1em;
    line-height: 100%;

    @media (max-width: 1368px) {
      margin-bottom: 0.8em;
      font-size: 2em;
    }

    b {
      font-weight: 900;
      line-height: 100%;
      color: var(--primary-500);
      font-family: var(--font-primary);
    }
  }

  p {
    font-weight: 300;
    font-size: 1.2em;
    color: var(--neutral-900);
    font-family: var(--font-primary);
    margin-bottom: 2em;
    line-height: 160%;

    @media (max-width: 1368px) {
      margin-bottom: 1.4em;
    }

    b {
      font-weight: 300;
      color: var(--primary-500);
      font-family: var(--font-primary);
    }

    &:nth-of-type(2) {
      margin-bottom: 4em;

      @media (max-width: 1368px) {
        margin-bottom: 2em;
      }

      @media (max-width: 968px) {
        margin-bottom: 2em;
      }
    }
  }
`;
