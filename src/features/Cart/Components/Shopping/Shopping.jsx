// Bibliotecas externas
import { useState, useEffect } from "react";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import {
  ShoppingContainer,
  ShoppingDataContainer,
  ShoppingTextContainer,
  ShoppingHeaderContainer,
  ItemsContainer,
  UndoSpan,
} from "./ShoppingStyles";

// Archivos internos - Componentes
import Divider from "../../../../components/UI/Divider/Divider";
import ProductCard from "../ProductCard/ProductCard";

// Archivos internos - Funcionalidad
import { undoRemove, clearCart } from "../../../CartSlice/cartSlice";

function Shopping() {
  const items = useSelector((state) => state.cart.items);
  const recentlyRemoved = useSelector((state) => state.cart.recentlyRemoved);
  const dispatch = useDispatch();
  const [showUndo, setShowUndo] = useState(false);

  console.log(items);

  const quantity = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (recentlyRemoved) {
      setShowUndo(true);
      const timer = setTimeout(() => {
        setShowUndo(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [recentlyRemoved]);

  const handleUndo = () => {
    dispatch(undoRemove());
    setShowUndo(false);
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const hideUndo = () => {
    setShowUndo(false);
  };

  return (
    <ShoppingContainer>
      <ShoppingDataContainer>
        <ShoppingTextContainer>
          <h3>Shopping Cart</h3>
          <h4>
            <b>
              {quantity} item{quantity !== 1 ? "s " : " "}
            </b>
            in your bag
          </h4>
          <button onClick={handleClear}>
            <span>Clear cart</span> <TbTrash />
          </button>
        </ShoppingTextContainer>
        <ShoppingTextContainer>
          <Link to="/products">
            Continue Shopping <IoIosArrowRoundForward />
          </Link>
        </ShoppingTextContainer>
      </ShoppingDataContainer>
      <ShoppingHeaderContainer>
        <h4>Product details</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </ShoppingHeaderContainer>
      <Divider />
      <ItemsContainer>
        {items.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ItemsContainer>
      <UndoSpan showUndo={showUndo}>
        Eliminaste un objeto. <button onClick={handleUndo}>Deshacer</button>
        <IoMdClose onClick={hideUndo} />
      </UndoSpan>
    </ShoppingContainer>
  );
}

export default Shopping;
