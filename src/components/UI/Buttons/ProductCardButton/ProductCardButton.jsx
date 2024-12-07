import { CardButtonStyled } from "./ProductCardButtonStyles";

function CardButton({ children, onClick }) {
  return <CardButtonStyled onClick={onClick}>{children}</CardButtonStyled>;
}

export default CardButton;
