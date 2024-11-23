import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-500);
  padding: 4em;
`;

export const FooterStyled = styled.div`
  width: 100%;
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;

export const FooterDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1em;
    color: #ffffff;
  }

  & + div {
    padding: 0em;
    max-width: 1700px;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 4em;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;

  img {
    height: auto;
    width: 5em;

    @media (max-width: 968px) {
      width: 4em;
    }
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 2em;
    color: #ffffff;
  }

  p {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: #ffffff;
  }

  @media (max-width: 968px) {
    align-items: center;
  }
`;

export const FooterListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4em;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2em;
    list-style: none;

    & > li:nth-child(1) {
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 1.1em;
      color: #ffffff;
    }

    & > li > a {
      font-family: var(--font-primary);
      font-weight: 500;
      font-size: 1em;
      color: #ffffff;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }

    @media (max-width: 968px) {
      align-items: center;
    }
  }

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 3em;
  }
`;

export const FooterIconContainer = styled(FooterListContainer)`
  gap: 1em;
  font-size: 2em;
  color: #ffffff;

  & > a {
    color: #ffffff;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  @media (max-width: 968px) {
    flex-direction: row;
    justify-content: center;
  }
`;
