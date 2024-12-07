import styled from "styled-components";

export const CardButtonStyled = styled.button`
  /* Estilos */
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