import styled from "styled-components";

export const SpanContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${({ send }) => (send ? "40px" : "-400px")};
  left: 0;
  z-index: 20;
  transition: all .2s ease;
`;

export const SpanStyled = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background-color: #49B443;
  box-shadow: var(--shadow);
  border-radius: 4px;
  color: #ffffff;
  font-size: 1.1em;
  font-weight: 500;
  font-family: var(--font-primary);
`;
