import styled from "styled-components";

export const CheckboxOption = styled.label`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  color: var(--black);
  font-size: 1em;
  font-family: var(--font-primary);

  & > input {
    width: 16px;
    height: 16px;
    border: var(--neutral-700);
    background-color: var(--neutral-100);
  }
`;
