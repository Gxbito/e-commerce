import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: .4em;

  label {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--black);
  }
`;

export const InputStyled = styled.input`
  border-radius: 4px;
  padding: 1em;
  width: 100%;
  background: var(--neutral-50);
  outline: none;
  border: ${({ isError }) => (isError ? "1px solid red" : "none")};
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1em;
  color: ${({error}) => (error ? "red" : "var(--neutral-900)")};
  transition: all 0.2s ease;

  ::placeholder {
    color: var(--neutral-600);
  }

  &:hover {
    background: var(--neutral-100);
  }

  & + span {
    color: red;
    font-size: 1em;
    font-weight: 500;
    font-family: var(--font-primary);
    padding: 0px 1em;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;