import styled from "styled-components";

export const ProductModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4em;
  transition: all 0.1s ease;
  scale: ${({ showModal }) => (showModal ? "1" : "0")};
  z-index: 2;
`;

export const ProductModalStyled = styled.div`
  width: auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 40% 52% 3%;
  gap: 1em;
  justify-content: space-between;
  padding: 1.4em;
  background-color: var(--white);
  border-radius: 8px;
  transition: all 0.2s ease;

  img {
    width: 100%;
    max-width: 310px;
    height: 500px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;

export const ProductData = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.4em;

  h3 {
    font-size: 1.8em;
    font-weight: 600;
    font-family: var(--font-primary);
    color: var(--black);
  }

  h4 {
    font-size: 1.8em;
    font-weight: 600;
    font-family: var(--font-primary);
    color: var(--primary-500);

    b {
      font-size: 0.6em;
      font-weight: 400;
      font-family: var(--font-primary);
      color: var(--neutral-600);
    }
  }

  h5 {
    font-size: 1em;
    font-weight: 400;
    font-family: var(--font-primary);
    color: var(--neutral-700);

    b {
      font-weight: 600;
      font-family: var(--font-primary);
      color: var(--black);
    }
  }

  ul {
    width: 100%;
    list-style: none;

    :nth-child(1) {
      font-weight: 600;
      color: var(--neutral-800);
      margin-bottom: .4em;
    }

    li {
      font-size: 0.8em;
      font-weight: 400;
      font-family: var(--font-primary);
      color: var(--neutral-600);
      margin-bottom: 0.2em;
    }
  }

  & + svg {
    cursor: pointer;
    font-size: 1.4em;
    color: var(--neutral-600);
  }
`;

export const DataSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4em;

  button {
    min-width: 40px;
    min-height: 40px;
    font-size: 1em;
  }

  & + button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4em;
    background: none;
    border: none;
    outline: none;
    font-size: 1em;
    font-weight: 400;
    font-family: var(--font-primary);
    color: var(--primary-500);
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      color: var(--primary-300);
    }

    &:active {
      scale: 0.95;
    }
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
`;

export const QuantityContainer = styled(SizeContainer)`
  gap: 2.8em;
`;

export const QuantitySelector = styled(SizeContainer)`
  gap: 1em;
  font-size: 1em;
  font-weight: 600;
  font-family: var(--font-primary);
  color: var(--black);
  width: 100px;
  justify-content: space-between;

  button {
    &:active {
      scale: 0.9;
    }
  }

  & + button {
    min-width: 220px;
  }
`;

export const DataContainer = styled(DataSelectorContainer)`
  gap: 0.4em;
`;
