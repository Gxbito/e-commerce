import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  h1 {
    font-size: 4em;
    font-family: var(--font-secondary);
    font-weight: bold;
    color: var(--neutral-900);

    b {
      font-family: var(--font-secondary);
      font-weight: bold;
      color: var(--primary-500);
    }
  }

  h2 {
    font-size: 1.8em;
    font-family: var(--font-secondary);
    font-weight: 600;
    color: var(--neutral-900);
    margin-bottom: 4em;
  }

`;
