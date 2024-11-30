import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  gap: 3em;

  & > button {
    width: 100%;
  }

  @media (max-width: 968px) {
    padding: 1em;
  }
`;

export const FormTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8em;

  h3 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--neutral-500);
  }

  h2 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 2em;
    color: var(--black);
  }
`;

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8em;

  & > input {
    width: 100%;
  }

  & > :nth-child(3) {
    min-height: 300px;
  }
`;