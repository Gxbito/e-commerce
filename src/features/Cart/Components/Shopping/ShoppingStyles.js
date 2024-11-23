import styled from "styled-components";

export const ShoppingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;

  > div:nth-child(3) {
    padding: 0em;
  }
`;

export const ShoppingDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2em;

  @media (max-width: 968px) {
    margin-bottom: 1em;
  }
`;

export const ShoppingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8em;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4em;
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1.1em;
    color: var(--primary-500);
    text-decoration: none;
    position: relative;
    padding-right: 1.8em;

    & > svg {
      font-size: 1.4em;
      position: absolute;
      right: 0;
      transition: all 0.1s ease;
    }

    &:hover > svg {
      right: -0.4em;
    }

    &:active > svg {
      right: 0;
    }

    &:hover {
      color: var(--primary-600);
      text-decoration: underline;
    }

    &:active {
      color: var(--primary-700);
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1.4em;
    color: var(--black);
    font-family: var(--font-primary);
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1em;
    color: var(--neutral-700);

    b {
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 1em;
      color: var(--black);
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .4em;

    svg {
      font-size: 1.4em;
      color: var(--neutral-700);
    }

    span {
      font-family: var(--font-primary);
      font-weight: 400;
      font-size: 1.2em;
      color: var(--neutral-900);
    }

    &:hover {
      span,
      svg {
        color: var(--neutral-900);
      }
      span {
        text-decoration: underline;
      }
    }

    &:active {
      scale: .99;
    }
  }
`;

export const ShoppingHeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 12% 12% 12%;
  justify-content: space-between;
  color: var(--neutral-700);
  text-align: center;
  padding-left: 1em;
  padding-right: 2.4em;

  :nth-child(1) {
    text-align: left;
  }

  h4 {
    font-weight: 500;
    font-size: 1em;
    color: var(--neutral-700);
    font-family: var(--font-primary);
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export const ShoppingItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: visible;
  gap: 1em;
  max-height: 600px;
  padding-right: 1em;

  @media (max-width: 968px) {
    padding-right: 0em;
  }
`;

export const UndoSpan = styled.div`
  position: fixed;
  bottom: ${({ showUndo }) => (showUndo ? "40px" : "-400px")};
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 0.8em;
  background-color: var(--white);
  box-shadow: var(--shadow);
  border-radius: 4px;
  transition: all 0.2s ease;

  color: var(--neutral-700);
  font-size: 1em;
  font-weight: 500;
  font-family: var(--font-primary);

  button {
    background: none;
    border: none;
    outline: none;
    color: var(--neutral-900);
    font-size: 1em;
    font-weight: 500;
    font-family: var(--font-primary);
    cursor: pointer;

    &:hover {
      color: var(--black);
      text-decoration: underline;
    }

    &:active {
      scale: 0.99;
    }
  }

  svg {
    cursor: pointer;
    font-size: 1.2em;
    margin-left: 1em;
    color: var(--neutral-700);
    transition: all 0.2s ease;

    &:hover {
      color: var(--neutral-900);
      scale: 0.9;
    }

    &:active {
      scale: 0.8;
    }
  }
`;
