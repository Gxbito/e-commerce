import {
  ProductSectionWrapper,
  ProductsContainer,
  TitleLinkContainer,
} from "./ProductsSectionStyles";
import { productos } from "../../data/productos";
import ProductCard from "../UI/Card";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

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
