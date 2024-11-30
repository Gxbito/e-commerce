import {
  ProductModalContainer,
  ProductModalStyled,
  ProductData,
  DataSelectorContainer,
  SizeContainer,
  QuantityContainer,
  QuantitySelector,
  DataContainer,
} from "./ProductModalStyles";
import { SquareButton, PrimaryButton } from "./Boton";
import { addToCart } from "../../features/CartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  IoIosAdd,
  IoMdRemove,
  IoMdClose,
  IoMdHeartEmpty,
  IoMdHeart
} from "react-icons/io";

function ProductModal({
  id,
  img,
  title,
  brand,
  category,
  price,
  sizes,
  onAddToCart,
  showModal,
  hideModal,
}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const [warning, setWarning] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveQuantity = () => {
    if (quantity === 1) {
      setQuantity((prev) => prev);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize === null) {
      setWarning((prev) => !prev);

      setTimeout(() => {
        setWarning((prev) => !prev);
      }, 2000);
    } else {
      dispatch(
        addToCart({
          id,
          img,
          title,
          brand,
          category,
          price,
          quantity,
          selectedSize,
        })
      );
      onAddToCart({
        id,
        img,
        title,
        brand,
        category,
        price,
        quantity,
        selectedSize,
      });
      setQuantity(1);
    }
  };

  const handleHideModal = () => {
    hideModal(false);
  };

  return (
    <ProductModalContainer showModal={showModal}>
      <ProductModalStyled showModal={showModal}>
        <img src={img} alt={category} />
        <ProductData>
          <DataContainer>
            <h3>{title}</h3>
            <h5>{brand}</h5>
          </DataContainer>
          <h4>
            ${price} <b>${price * 0.8}</b>
          </h4>
          <h5>
            Genre: <b>{category}</b>
          </h5>
          <DataSelectorContainer>
            <h5>
              Size: <b>{selectedSize ? selectedSize : "..."}</b>
            </h5>
            <SizeContainer>
              {Array.isArray(sizes) && sizes.length > 0 ? (
                sizes.map((size) => (
                  <SquareButton
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    isSelected={selectedSize === size}
                    warning={warning}
                  >
                    {size}
                  </SquareButton>
                ))
              ) : (
                <p>No sizes available</p>
              )}
            </SizeContainer>
          </DataSelectorContainer>
          <DataSelectorContainer>
            <h5>Quantity:</h5>
            <QuantityContainer>
              <QuantitySelector>
                <SquareButton onClick={handleRemoveQuantity}>
                  <IoMdRemove />
                </SquareButton>
                {quantity}
                <SquareButton onClick={handleAddQuantity}>
                  <IoIosAdd />
                </SquareButton>
              </QuantitySelector>
              <PrimaryButton onClick={handleAddToCart}>
                Add to cart
              </PrimaryButton>
            </QuantityContainer>
          </DataSelectorContainer>
          <button onClick={handleFavourite}>
            {isFavourite ? (
              <>
                Added to Favourite! <IoMdHeart />
              </>
            ) : (
              <>
                Add to Favourite! <IoMdHeartEmpty />
              </>
            )}
          </button>

          <ul>
            <li>Return Policy:</li>
            <li>
              The product must be unused, with tags, and in its original
              packaging
            </li>
            <li>Free returns within the first 30 days.</li>
            <li>Full refund or exchange available.</li>
          </ul>
        </ProductData>
        <IoMdClose onClick={handleHideModal} />
      </ProductModalStyled>
    </ProductModalContainer>
  );
}

export default ProductModal;
