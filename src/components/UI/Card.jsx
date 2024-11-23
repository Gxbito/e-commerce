import {
  ProductCardStyled,
  ProductDataContainer,
  ButtonsContainer,
} from "./CardStyles";
import { PrimaryCardButton, SecondaryCardButton } from "./Boton";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "../../features/CartSlice/cartSlice";

function ProductCard({ id, img, title, brand, category, price, onAddToCart }) {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, img, title, brand, category, price }));
    onAddToCart({ id, img, title, brand, category, price });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ProductCardStyled isVisible={isVisible}>
      <img src={img} alt={category || "Product"} />
      <ProductDataContainer>
        <h4>{title}</h4>
        <h5>{brand}</h5>
        <h3>
          ${price} <b>${price * 0.8}</b>
        </h3>
      </ProductDataContainer>
      <ButtonsContainer>
        <SecondaryCardButton onClick={handleAddToCart}>
          Add to Cart
        </SecondaryCardButton>
        <PrimaryCardButton>Buy Now</PrimaryCardButton>
      </ButtonsContainer>
    </ProductCardStyled>
  );
}

export default ProductCard;
