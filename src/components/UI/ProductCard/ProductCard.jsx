// Bibliotecas externas
import { useState, useEffect } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

// Archivos internos - Estilos
import { ProductCardStyled, ProductDataContainer } from "./ProductCardStyles";

// Archivos internos - Componentes
import ProductCardButton from "../Buttons/ProductCardButton/ProductCardButton";

function ProductCard({
  id,
  img,
  title,
  brand,
  category,
  price,
  size,
  onShow,
  activeStyle,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  const handleShowModal = () => {
    onShow({ id, img, title, brand, category, price, size });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ProductCardStyled isVisible={isVisible} activeStyle={activeStyle}>
      <button onClick={handleFavourite} isFavourite={isFavourite}>
        {isFavourite ? (
          <>
            <IoMdHeart />
          </>
        ) : (
          <>
            <IoMdHeartEmpty />
          </>
        )}
      </button>
      <img src={img} alt={category || "Product"} />
      <ProductDataContainer activeStyle={activeStyle}>
        <h4>{title}</h4>
        <h5>{brand}</h5>
        <h3>
          ${price} <b>${price * 0.8}</b>
        </h3>
        <ProductCardButton onClick={handleShowModal}>Buy Now</ProductCardButton>
      </ProductDataContainer>
    </ProductCardStyled>
  );
}

export default ProductCard;
