import styled from "styled-components";

export const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4em;

  label {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--black);
  }
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 100%;
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
