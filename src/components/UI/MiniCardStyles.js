import styled from "styled-components";

export const MinicardContainer = styled.div`
  position: fixed;
  top: ${({visibleMiniCard}) => (visibleMiniCard ? "90px" : "-400px")};
  z-index: 20;
  right: 50vh;
  width: 300px;
  height: auto;
  display: grid;
  grid-template-columns: 25% 70%;
  justify-content: center;
  align-items: center;
  gap: .8em;
  padding: 0.6em;
  background-color: var(--white);
  box-shadow: var(--shadow);
  transition: all .2s ease;
  border-radius: 8px;

  img {
    height: 100%;
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const MiniCardDataContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4em;

  h4 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.1em;
    color: var(--black);
  }

  h5 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 0.8em;
    color: var(--black);
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1.2em;
    color: var(--primary-500);
    margin-bottom: .4em;
  }
`;
