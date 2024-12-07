import styled from "styled-components";

export const SquareButtonStyled = styled.button`
  /* Estilos */
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--primary-500)" : "var(--neutral-50)"};
  border: ${({ warning }) => (warning ? "1px solid red" : "none")};

  /* Fuente */
  font-family: var(--font-primary);
  font-size: 1.4em;
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "var(--black)")};

  /* Dimensiones */
  min-height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "var(--primary-600)" : "var(--neutral-100)"};
  }

  &:active {
    background-color: ${({ isSelected }) =>
      isSelected ? "var(--primary-600)" : "var(--neutral-200)"};
  }
`;
