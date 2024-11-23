import styled from "styled-components";

export const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  gap: 2em;

  @media (max-width: 968px) {
    padding: 2em 1em;
  }

  h2 {
    max-width: 600px;
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 3em;
    color: var(--black);
    text-align: center;

    @media (max-width: 968px) {
      text-align: start;
    }

    b {
      font-weight: 500;
      color: var(--primary-500);
      font-family: var(--font-primary);
    }
  }
`;

export const TimelineImagesContainer = styled.div`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: 35% 60%;
  justify-content: space-between;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2em;
    height: 500px;

    :nth-child(2) {
      display: none;
    }
  }
`;

export const TimelineImage = styled.div`
  height: 100%;
  width: auto;

  img {
    height: 600px;
    width: 100%;
    object-fit: cover;

    @media (max-width: 968px) {
    height: 500px;
  }
  }
`;

export const TimelineData = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 35% 60%;
  justify-content: space-between;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1em;
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1.4em;
    color: var(--black);
  }

  p {
    font-family: var(--font-primary);
    font-weight: 300;
    font-size: 1.2em;
    color: var(--neutral-900);
  }
`;
