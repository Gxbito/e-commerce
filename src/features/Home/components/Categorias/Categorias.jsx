// Bibliotecas externas
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import {
  CategoriesContainerWrapper,
  CategoriesTextButtonContainer,
  CategoriesContainer,
} from "./CategoriasStyles";

// Archivos internos - Datos y componentes
import Categoria from "./Categoria";
import { categorias } from "../../../../data/categorias";
import SecondaryButton from "../../../../components/UI/Buttons/SecondaryButton/SecondaryButton";


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

        <Link to="products">
          <SecondaryButton>Shop now</SecondaryButton>
        </Link>
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
