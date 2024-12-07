// Archivos internos - Estilos
import { MinicardContainer, MiniCardDataContainer } from "./ProductMiniCardStyles";

function ProductMiniCard({img, category, title, price, visibleMiniCard}) {
  return (
    <MinicardContainer visibleMiniCard={visibleMiniCard}>
      <img src={img} alt={category} />

      <MiniCardDataContainer>
        <h5>{category}</h5>
        <h4>{title}</h4>
        <h3>${price}</h3>
        <h5>¡Agregado al carrito!</h5>
      </MiniCardDataContainer>
    </MinicardContainer>
  );
}

export default ProductMiniCard;
