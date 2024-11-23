import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  padding: 1em;
  border-radius: 4px;
  background: var(--neutral-50);
  outline: none;
  border: ${({ error }) => (error ? "1px solid red" : "none")};
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1em;
  color: var(--neutral-900);

  ::placeholder {
    color: var(--neutral-600);
  }

  &:hover {
    background: var(--neutral-100);
  }
  
`;
