import React from "react";
import {
  CategoriesContainerWrapper,
  CategoriesTextButtonContainer,
  CategoriesContainer,
} from "./CategoriasStyles";
import { categorias } from "../../../../data/categorias";
import Categoria from "./Categoria";
import { SecondaryButton } from "../../../../components/UI/Boton";

function Categorias() {
  return (
    <CategoriesContainerWrapper>
      <CategoriesTextButtonContainer>
        <h3>Shop by LoremIpsum</h3>

        <h2>
          Main <b>Categories</b>
        </h2>

        <p>
          Get ready to transform your wardrobe with our style hero leading the
          way.
        </p>

        <SecondaryButton>See all categories</SecondaryButton>
      </CategoriesTextButtonContainer>

      <CategoriesContainer>
        {categorias.map((cat) => (
          <Categoria key={cat.id} {...cat} />
        ))}
      </CategoriesContainer>
    </CategoriesContainerWrapper>
  );
}

export default Categorias;
