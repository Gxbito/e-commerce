// Bibliotecas externas
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

// Archivos internos - Estilos
import {
  ProductSectionWrapper,
  ProductsContainer,
  TitleLinkContainer,
} from "./ProductsSectionStyles";

// Archivos internos - Componentes y Datos
import ProductCard from "../UI/ProductCard/ProductCard";
import { productos } from "../../data/productos";

function ProductsSection({category}) {
  return (
    <ProductSectionWrapper>
      <TitleLinkContainer>
        <h2>
          Popular in <b>{category}</b>
        </h2>
        <Link to="products">See all products <IoIosArrowRoundForward /></Link>
      </TitleLinkContainer>

      <ProductsContainer>
        {productos
          .filter((prod) => prod.category === category)
          .slice(-5)
          .map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
      </ProductsContainer>
    </ProductSectionWrapper>
  );
}

export default ProductsSection;
