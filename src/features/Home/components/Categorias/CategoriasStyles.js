import styled from "styled-components";

export const CategoriesContainerWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  height: auto;
  display: grid;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
  padding: 4em;
  


  @media (max-width: 968px) {
    grid-template-columns: 1fr; 
    gap: 2em;
    padding: 2em 1em;
  }
`;

export const CategoriesTextButtonContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 968px) {
    width: 100%;
  }

  h2 {
    font-weight: 900;
    font-size: 2.5em;
    color: var(--neutral-900);
    font-family: var(--font-primary);
    margin-top: 0.2em;
    margin-bottom: 0.8em;
    line-height: 100%;
    text-decoration: none;

    b {
      font-weight: 900;
      line-height: 100%;
      color: var(--primary-500);
      font-family: var(--font-primary);
      text-decoration: none;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 1.2em;
    color: var(--neutral-900);
    font-family: var(--font-primary);

    @media (max-width: 968px) {
      font-size: 1em;
    }
  }

  p {
    font-weight: 300;
    font-size: 1.2em;
    color: var(--neutral-900);
    font-family: var(--font-primary);
    margin-bottom: 4em;

    @media (max-width: 968px) {
      margin-bottom: 2em;
    }
  }
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1em;

  @media (max-width: 968px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CategoryCard = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 1.4em;
  height: 440px;
  overflow: hidden;
  transition: all 0.4s ease;
  gap: 0.5em;

  @media (max-width: 968px) {
    height: 250px;
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
    z-index: 2;
    transition: background 0.4s ease;
  }

  h2,
  h3 {
    position: relative;
    z-index: 3;
  }

  h2 {
    font-weight: 900;
    font-size: 1.6em;
    color: #ffffff;
    font-family: var(--font-primary);
  }

  h3 {
    font-weight: 400;
    font-size: 1em;
    color: #ffffff;
    font-family: var(--font-primary);
  }

  img {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    transition: transform 0.4s ease;

    @media (max-width: 968px) {
      height: 350px;
    }
  }

  &:hover img {
    transform: scale(1.1);
  }


  &:hover::before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;
