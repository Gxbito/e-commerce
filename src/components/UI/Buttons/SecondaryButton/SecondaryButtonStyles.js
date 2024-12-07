import styled from "styled-components";

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