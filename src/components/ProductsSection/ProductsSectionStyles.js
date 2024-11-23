import styled from "styled-components";

export const ProductSectionWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4em;
  gap: 2em;

  @media (max-width: 968px) {
    padding: 2em 1em;
    gap: 1em;
  }
`;

export const TitleLinkContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 900;
    font-size: 2.5em;
    color: var(--neutral-900);
    font-family: var(--font-primary);

    @media (max-width: 1368px) {
      font-size: 2em;
    }

    b {
      font-weight: 900;
      line-height: 100%;
      color: var(--primary-500);
      font-family: var(--font-primary);
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4em;
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1.1em;
    color: var(--primary-500);
    text-decoration: none;
    position: relative;
    padding-right: 1.8em;

    & > svg {
      font-size: 1.4em;
      position: absolute;
      right: 0;
      transition: all 0.1s ease;
    }
    
    &:hover > svg {
      right: -.4em;
    }

    &:active > svg {
      right: 0;
    }

    &:hover {
      color: var(--primary-600);
      text-decoration: underline;
    }

    &:active {
      color: var(--primary-700);
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 1em;

  @media (max-width: 968px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.8em;
  }
`;
