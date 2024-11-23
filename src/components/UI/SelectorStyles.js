import styled from "styled-components";

export const SelectorStyled = styled.button`
  width: 190px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 1em;
  background: var(--neutral-50);
  outline: none;
  border: none;
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 1em;
  color: var(--neutral-900);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background: var(--neutral-100);
    color: var(--black);
  }

  &:active {
    background: var(--neutral-200);
  }
`;

export const SelectorOptionContainer = styled.div`
  position: absolute;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 0.4em;
  padding: 0.4em;
  scale: ${({ isOpen }) => (isOpen ? "1" : "0")};
  box-shadow: var(--shadow);
  border-radius: 4px;
  background: var(--white);
  transition: all 0.1s ease;
  z-index: 1;
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4em;
  padding: 0.8em;
  border-radius: 4px;
  background: var(--white);
  outline: none;
  border: none;
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: 1.2em;
  color: var(--neutral-900);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background: var(--neutral-50);
    color: var(--black);
  }

  &:active {
    background: var(--neutral-100);
  }
`;


