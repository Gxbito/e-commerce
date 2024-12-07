import styled from "styled-components";

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
  z-index: 5;

  &:hover {
    box-shadow: var(--shadow-button);
  }

  &:active {
    box-shadow: var(--shadow-button-active);
    scale: 0.99;
  }
`;
