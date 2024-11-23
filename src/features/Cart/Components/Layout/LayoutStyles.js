import styled from "styled-components";

export const LayoutSyled = styled.div`
  width: 100%;
  max-width: 1700px;
  height: auto;
  display: grid;
  grid-template-columns: 65% 30%;
  justify-content: space-between;
  padding: 6em 4em;

  @media (max-width: 968px) {
    grid-template-columns: 1fr; 
    padding: 2em 1em;
    gap: 2em;
  }
`;
