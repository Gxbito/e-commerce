import styled from "styled-components";

export const ProductCardStyled = styled.div`
  height: auto;
  width: 100%;
  box-shadow: var(--shadow);
  background: var(--white);
  padding: 0.8em;
  border-radius: 4px;
  gap: 1em;
  display: ${({ activeStyle }) => (activeStyle === "list" ? "grid" : "flex")};
  flex-direction: ${({ activeStyle }) =>
    activeStyle === "list" ? "" : "column"};
  grid-template-columns: ${({ activeStyle }) =>
    activeStyle === "list" ? "30% 65%" : ""};
  justify-content: ${({ activeStyle }) =>
    activeStyle === "list" ? "flex-start" : "center"};
  align-items: flex-start;
  max-width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.5s ease;

  @media (max-width: 968px) {
    gap: 0.8em;
    padding: 0.6em;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: ${({ activeStyle }) =>
      activeStyle === "list" ? "160px" : "380px"};
    border-radius: ${({ activeStyle }) =>
      activeStyle === "list" ? "4px" : "4px 4px 0px 0px"};
    object-fit: cover;

    @media (max-width: 968px) {
      height: 200px;
    }
  }

  button:nth-child(1) {
    position: absolute;
    right: ${({ activeStyle }) =>
      activeStyle === "list" ? "0.4em" : "0.8em"};
    top: ${({ activeStyle }) =>
      activeStyle === "list" ? "0.4em" : "0.8em"};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border: none;
    border-radius: 100%;
    font-size: ${({ activeStyle }) =>
      activeStyle === "list" ? "1.4em" : "1.8em"};
    padding: 0.2em;
    cursor: pointer;
    color: var(--primary-500);
    box-shadow: var(--shadow);
    transition: scale 0.2s ease;

    &:hover {
      background-color: var(--neutral-50);
      color: var(--primary-600);
    }

    &:active {
      background-color: var(--neutral-200);
      color: var(--primary-700);
      scale: 0.95;
    }
  }
`;

export const ProductDataContainer = styled.div`
  width: 100%;
  height: ${({ activeStyle }) => (activeStyle === "list" ? "100%" : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2em;
  text-overflow: ellipsis;

  & > button {
    width: 60%;
    margin-top: ${({ activeStyle }) =>
      activeStyle === "list" ? "auto" : "0.8em"};
  }

  h4 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.2em;
    color: var(--black);

    @media (max-width: 968px) {
      font-size: 1em;
    }
  }

  h5 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 0.8em;
    color: var(--neutral-700);

    @media (max-width: 968px) {
      display: none;
    }
  }

  h3 {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1.6em;
    color: var(--primary-700);
    margin-top: 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4em;

    b {
      font-family: var(--font-primary);
      font-weight: 500;
      font-size: 0.7em;
      color: var(--neutral-600);
      text-decoration: line-through;
    }
  }
`;
