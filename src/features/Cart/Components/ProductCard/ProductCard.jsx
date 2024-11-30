import {
  CardContainer,
  MainDataContainer,
  DataTextContainer,
  QuantityContainer,
} from "./ProductCardStyles";
import { IoMdRemove, IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../../CartSlice/cartSlice";

function ProductCard({ id, img, title, brand, category, price, quantity, selectedSize }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };

  console.log(selectedSize)

  return (
    <CardContainer>
      <MainDataContainer>
        <img src={img} alt={category} />
        <DataTextContainer>
          <h3>${price.toFixed(2)}</h3>
          <h4>{brand}</h4>
          <h3>
            {title} <b>${price.toFixed(2)}</b>
          </h3>
          <h4>
            Size: <b>{selectedSize}</b>
          </h4>
        </DataTextContainer>
      </MainDataContainer>
      <QuantityContainer>
        <button>
          <IoMdRemove onClick={handleDecrement} />
        </button>
        <h4>{quantity}</h4>
        <button>
          <IoIosAdd onClick={handleIncrement} />
        </button>
      </QuantityContainer>
      <h4>${price.toFixed(2)}</h4>
      <h4>${(price * quantity).toFixed(2)}</h4>
    </CardContainer>
  );
}

export default ProductCard;
