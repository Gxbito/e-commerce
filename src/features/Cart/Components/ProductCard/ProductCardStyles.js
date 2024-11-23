import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 30% 12% 12% 12%;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-radius: 4px;
  background-color: var(--neutral-50);
  text-align: center;

  h4 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1em;
    color: var(--black);
  }

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    gap: 1em;

    h4:nth-child(3),
    h4:nth-child(4),
    h4:nth-child(5) svg:nth-child(6) {
      display: none;
    }
  }
`;

export const MainDataContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;

  img {
    width: 100px;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
    background-color: aqua;

    @media (max-width: 968px) {
      width: 100%;
      max-width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 968px) {
    width: 100%;
    gap: 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const DataTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4em;
  text-align: left;

  h4 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--neutral-700);
  }

  h3 {
    font-weight: 600;
    font-size: 1em;
    color: var(--black);
    font-family: var(--font-primary);
    display: flex;
    width: 100%;
    justify-content: space-between;

    b {
      display: none;
      font-weight: 600;
      color: var(--black);
      font-family: var(--font-primary);

      @media (max-width: 968px) {
        display: block;
      }

      @media (max-width: 468px) {
        display: none;
      }
    }
  }

  h3:nth-child(1) {
    display: none;
  }

  h4:nth-child(3),
  h4:nth-child(4) {
    display: block;
  }

  @media (max-width: 968px) {
    width: 100%;
  }

  @media (max-width: 468px) {
    h3:nth-child(1) {
      display: flex;
      font-size: 1.4em;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  button {
    outline: none;
    border: none;
    background: none;
    position: initial;
  }

  svg {
    background-color: var(--primary-100);
    color: var(--primary-800);
    border-radius: 100%;
    padding: 4px;
    font-size: 1.8em;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: var(--primary-200);
      color: var(--primary-900);
    }

    &:active {
      background-color: var(--primary-300);
      color: var(--primary-900);
      scale: 0.9;
    }
  }

  h4 {
    font-weight: 500;
    font-size: 1em;
    color: var(--black);
    font-family: var(--font-primary);
  }

  @media (max-width: 968px) {
    margin-right: auto;
    width: 100%;
    max-width: 120px;
    justify-content: space-between;
  }
`;
