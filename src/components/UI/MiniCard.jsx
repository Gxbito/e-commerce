import { MinicardContainer, MiniCardDataContainer } from "./MiniCardStyles";

function MiniCard({img, category, title, price, visibleMiniCard}) {
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

export default MiniCard;
