import styled from "styled-components";

export const ProductShopWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 20% 77%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4em;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 2em 1em;
    gap: 1em;
  }
`;

export const DataFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;

  h2 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 2em;
    color: var(--primary-500);
  }
`;

export const PriceFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  h3 {
    font-size: 1.2em;
    font-family: var(--font-primary);
    font-weight: 400;
    color: var(--neutral-900);
    width: 100%;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
`;

export const CategoryTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--neutral-900);
  padding-bottom: 1em;
  border-bottom: 1px solid var(--neutral-100);
  cursor: pointer;

  h3 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1.2em;
    color: var(--primary-500);
  }
`;

export const CategoryOptionsContainer = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "120px" : "0px")};
  overflow: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
  transition: all 0.1s ease;
`;

export const ItemsOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 968px) {
    width: 100%;
    flex-direction: column;
    gap: 1em;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  @media (max-width: 968px) {
    margin-right: auto;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1em;

  @media (max-width: 668px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;
