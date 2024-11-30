import styled from "styled-components";
import { SummaryContainer } from "../../../Cart/Components/CartDetails/CartDetailsStyles";
import { SummaryData } from "../../../Cart/Components/CartDetails/CartDetailsStyles";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    width: 100%;
    display: grid;
    grid-template-columns: 40% 30%;
    justify-content: center;
    gap: 4em;
    padding: 6em 4em;
  }
`;

export const CheckoutForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 2em;

  & > div:nth-child(n + 1) {
    grid-column: span 3;
  }

  & > div:nth-child(n + 7) {
    grid-column: span 1;
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.2em;
    color: var(--black);
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 0.8em;

  h4 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1em;
    color: var(--black);
    width: 100%;
    grid-column: span 2;
  }

  button {
    gap: 0.8em;
    justify-content: flex-start;
    padding: 0px 1em;
    font-size: 1.2em;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;

  h4 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1em;
    color: var(--black);
  }
`;

export const ItemsContainer = styled(ResumeContainer)`
  width: 100%;
  max-height: 240px;
  justify-content: flex-start;
  overflow-y: scroll;
  padding-right: 1em;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & > div > div > img {
    height: 90px;
    max-width: 90px;
  }

  & > div > :not(:first-child) {
    display: none;
  }
`;

export const ResumeCard = styled(SummaryContainer)``;
export const ResumeData = styled(SummaryData)``;
