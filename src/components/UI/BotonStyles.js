import styled from "styled-components";

export const PrimaryButtonStyled = styled.button`
  /* Boton */
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--primary-500);

  /* Fuente */
  color: #ffffff;
  font-size: 1em;
  font-family: var(--font-primary);
  font-weight: 500;

  /* Dimensiones */
  padding: 1em;
  min-width: 180px;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--primary-600);
    box-shadow: var(--shadow-button);
  }

  &:active {
    background-color: var(--primary-700);
    box-shadow: var(--shadow-button-active);
    scale: 0.99;
  }

  @media (max-width: 768px) {
    padding: 0.8em;
  }
`;

export const SecondaryButtonStyled = styled.button`
  /* Boton */
  cursor: pointer;
  border: 1px solid var(--primary-500);
  outline: none;
  border-radius: 4px;
  background: none;

  /* Fuente */
  color: var(--primary-500);
  font-size: 1em;
  font-family: var(--font-primary);
  font-weight: 500;

  /* Dimensiones */
  padding: 1em;
  min-width: 180px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--primary-500);
    box-shadow: var(--shadow-button);
    color: #ffffff;
  }

  &:active {
    background-color: var(--primary-600);
    border: 1px solid var(--primary-50);
    box-shadow: var(--shadow-button-active);
    scale: 0.99;
  }

  @media (max-width: 768px) {
    padding: 0.8em;
    min-width: 200px;
  }
`;

export const SquareButtonStyled = styled.button`
  /* Boton */
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${({ isActive }) =>
    isActive ? "var(--primary-500)" : "var(--neutral-50)"};

  /* Fuente */
  font-size: 1.4em;
  color: ${({ isActive }) =>
    isActive ? "var(--neutral-50)" : "var(--neutral-900)"};

  /* Dimensiones */
  min-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? "var(--primary-600)" : "var(--neutral-100)"};
    color: ${(props) =>
      props.isActive ? "var(--neutral-100)" : "var(--neutral-800)"};
  }

  &:active {
    background-color: ${(props) =>
      props.isActive ? "var(--primary-700)" : "var(--neutral-200)"};
    color: ${(props) =>
      props.isActive ? "var(--neutral-200)" : "var(--neutral-900)"};
  }
`;

export const PrimaryCardButtonStyled = styled.button`
  /* Boton */
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--primary-100);

  /* Fuente */
  color: var(--primary-700);
  font-size: 1em;
  font-family: var(--font-primary);
  font-weight: 500;

  /* Dimensiones */
  padding: 0.8em;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--primary-500);
    box-shadow: var(--shadow-button);
    color: #ffffff;
  }

  &:active {
    background-color: var(--primary-600);
    box-shadow: var(--shadow-button-active);
    scale: 0.99;
  }

  @media (max-width: 768px) {
    padding: 0.6em;
  }
`;

export const SecondaryCardButtonStyled = styled.button`
  /* Boton */
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: var(--neutral-50);

  /* Fuente */
  color: var(--neutral-700);
  font-size: 1em;
  font-family: var(--font-primary);
  font-weight: 500;

  /* Dimensiones */
  padding: 0.8em;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--neutral-100);
    color: var(--neutral-800);
  }

  &:active {
    background-color: var(--neutral-200);
    color: var(--neutral-900);
  }

  @media (max-width: 768px) {
    padding: 0.6em;
  }
`;

export const ChangeColorButtonStyled = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  left: 30px;
  width: 70px;
  height: 70px;
  background-color: var(--neutral-50);
  border-radius: 100%;
  border: 1px solid var(--neutral-200);
  box-shadow: var(--shadow);
  color: var(--neutral-900);
  font-size: 2em;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-button);
  }

  &:active {
    box-shadow: var(--shadow-button-active);
    scale: 0.99;
  }
`;

export const SubmitButtonStyled = styled(PrimaryButtonStyled)`
`;
