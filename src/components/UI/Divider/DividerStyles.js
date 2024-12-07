import styled from "styled-components";

export const DividerContainerStyled = styled.div`
  width: 100%;
  height: 1px;
  max-width: 1600px;
  padding: 0em 2em;

  @media (max-width: 968px) {
    padding: 0em 1em;
  }
`;

export const DividerStyled = styled.span`
display: block;
  width: 100%;
  height: 1px;
  background-color: var(--neutral-100);
`;
