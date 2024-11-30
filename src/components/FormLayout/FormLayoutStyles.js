import styled from "styled-components";

export const FormLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1800px;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 4em;

  @media (max-width: 968px) {
    display: flex;
    padding: 1em;
  }
`;
