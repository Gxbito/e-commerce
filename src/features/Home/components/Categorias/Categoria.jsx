// Bibliotecas externas
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import { CategoryCard } from "./CategoriasStyles";

function Categoria({ img, title, category }) {
  return (
    <Link to="products">
      <CategoryCard>
        <img src={img} alt={category} />
        <h3>GET 30% DISCOUNT</h3>
        <h2>{title}</h2>
      </CategoryCard>
    </Link>
  );
}

export default Categoria;
