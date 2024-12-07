import styled from "styled-components";

export const SubmitButtonStyled = styled.button`
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