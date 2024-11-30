import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const FormStyled = styled(FormikForm)`
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
  gap: 1em;

  & > input {
    width: 100%;
  }

  h3 {
    width: 100%;
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--neutral-700);
    text-align: start;

    a {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1em;
      color: var(--primary-500);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        color: var(--primary-600);
      }

      &:active {
        color: var(--primary-900);
      }
    }
  }
`;

export const SeparatorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  span {
    width: 100%;
    height: 1px;
    background-color: var(--neutral-600);
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1em;
    color: var(--neutral-600);
  }
`;

export const ButtonsContainer = styled(FormInputContainer)`
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8em;
    border: 1px solid var(--neutral-200);
    background-color: var(--neutral-50);
    color: var(--neutral-700);
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1em;

    &:hover {
      background-color: var(--neutral-100);
      color: var(--black);
      box-shadow: none;
    }

    &:active {
      background-color: var(--neutral-200);
      box-shadow: none;
      scale: 1;
    }

    svg {
      font-size: 1.4em;
      color: var(--neutral-900);
    }
  }
`;
