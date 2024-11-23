import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const SummaryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: var(--shadow);
  gap: 1.4em;
  padding: 1.2em;
  border-radius: 4px;

  h3 {
    width: 100%;
    font-weight: 600;
    font-size: 1.2em;
    color: var(--black);
    font-family: var(--font-primary);
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--black);
  }

  & > button {
    width: 100%;
  }
`;

export const SummaryData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2em;

  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1em;
    color: var(--neutral-600);

    b {
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 1em;
      color: var(--black);
    }

    strong {
      font-family: var(--font-primary);
      font-weight: 500;
      font-size: 1em;
      color: var(--primary-500);
    }
  }

  & > div {
    padding: 0em;
  }
`;

export const CouponContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: var(--shadow);
  gap: 1.4em;
  padding: 1.2em;
  border-radius: 4px;

  h3 {
    width: 100%;
    font-weight: 600;
    font-size: 1.2em;
    color: var(--black);
    font-family: var(--font-primary);
  }

  & > button,
  & > input {
    width: 100%;
  }
`;
