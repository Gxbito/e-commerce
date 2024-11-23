import styled from "styled-components";

export const ProductCardStyled = styled.div`
  height: auto;
  width: 100%;
  box-shadow: var(--shadow);
  background: var(--white);
  padding: 0.8em;
  border-radius: 4px;
  gap: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.5s ease;

  @media (max-width: 968px) {
    gap: 0.8em;
    padding: 0.6em;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 340px;
    border-radius: 4px 4px 0px 0px;
    object-fit: cover;

    @media (max-width: 968px) {
      height: 200px;
    }
  }
`;

export const ProductDataContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2em;
  text-overflow: ellipsis;

  h4 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.2em;
    color: var(--black);

    @media (max-width: 968px) {
      font-size: 1em;
    }
  }

  h5 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 0.8em;
    color: var(--neutral-700);

    @media (max-width: 968px) {
      display: none;
    }
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.6em;
    color: var(--primary-700);
    margin-top: 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4em;

    b {
      font-family: var(--font-primary);
      font-weight: 500;
      font-size: 0.7em;
      color: var(--neutral-600);
      text-decoration: line-through;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 0.4em;
  }
`;


