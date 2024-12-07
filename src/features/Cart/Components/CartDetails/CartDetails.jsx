// Bibliotecas externas
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import {
  SummaryContainer,
  SummaryData,
  CouponContainer,
  CheckoutContainer,
} from "./CartDetailsStyles";

// Archivos internos - Componentes
import PrimaryButton from "../../../../components/UI/Buttons/PrimaryButton/PrimaryButton"
import Divider from "../../../../components/UI/Divider/Divider";
import Input from "../../../../components/UI/Input/Input";

// Archivos internos - Funcionalidad
import { updateCheckout } from "../../../../features/CheckoutSlice/checkoutSlice";

function CartDetails() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountRate = 0.12;
  const taxRate = 0.21;
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const tax = subtotal * taxRate;
  const total = subtotal - discount + tax;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const deliveryDate = currentDate.toLocaleDateString("en-US", options);

  const handleCoupon = (e) => {
    e.preventDefault();
    const normalizedCoupon = coupon.trim().toLowerCase();

    if (normalizedCoupon === "nucba") {
      setDiscount(subtotal * discountRate);
    } else {
      setDiscount(0);
    }
  };

  useEffect(() => {
    dispatch(
      updateCheckout({
        subtotal,
        discount,
        tax,
        total,
        estimatedDelivery: deliveryDate,
      })
    );
  }, [subtotal, discount, tax, total, deliveryDate, dispatch]);

  return (
    <CheckoutContainer>
      <SummaryContainer>
        <h3>Order summary</h3>
        <SummaryData>
          <h4>
            Subtotal <b>${subtotal.toFixed(2)}</b>
          </h4>
          <h4>
            Discount <b>${discount.toFixed(2)}</b>
          </h4>
          <h4>
            Tax <b>${tax.toFixed(2)}</b>
          </h4>
          <h4>
            Shipping <strong>FREE</strong>
          </h4>
          <Divider />
          <h4>
            Total <b>${total.toFixed(2)}</b>
          </h4>
        </SummaryData>
        <Link to="/checkout">
          <PrimaryButton>Proceed to checkout</PrimaryButton>
        </Link>
        <h4>Estimated Delivery by {deliveryDate}</h4>
      </SummaryContainer>
      <CouponContainer onSubmit={handleCoupon}>
        <h3>Have a coupon?</h3>
        <Input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
        />
        <PrimaryButton onClick={handleCoupon} type="submit">
          Use code
        </PrimaryButton>
      </CouponContainer>
    </CheckoutContainer>
  );
}

export default CartDetails;
