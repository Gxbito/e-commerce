import {
  SummaryContainer,
  SummaryData,
  CouponContainer,
  CheckoutContainer,
} from "./CheckoutSummaryStyles";
import { PrimaryButton } from "../../../../components/UI/Boton";
import Separador from "../../../../components/UI/Separador";
import Input from "../../../../components/UI/Input";
import { useState } from "react";
import { useSelector } from "react-redux";

function CheckoutSummary() {
  const items = useSelector((state) => state.cart.items);

  // Calculos
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountRate = 0.12;
  const taxRate = 0.21;

  // Cupon
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculos
  const tax = subtotal * taxRate;
  const total = subtotal - discount + tax;

  // Fecha
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const deliveryDate = currentDate.toLocaleDateString("en-US", options);

  // Cupon
  const handleCoupon = (e) => {
    e.preventDefault();
    
    const normalizedCoupon = coupon.trim().toLowerCase();

    if (normalizedCoupon === "nucba") {
      setDiscount(subtotal * discountRate);
      // setCouponMessage("Cupón aplicado exitosamente");
    } else {
      setDiscount(0);
      // setCouponMessage("El cupón no es válido");
    }
  };

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
          <Separador />
          <h4>
            Total <b>${total.toFixed(2)}</b>
          </h4>
        </SummaryData>
        <PrimaryButton>Proceed to checkout</PrimaryButton>
        <h4>Estimated Delivery by {deliveryDate}</h4>
      </SummaryContainer>
      <CouponContainer onSubmit={handleCoupon}>
        <h3>Have a coupon?</h3>
        <Input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
        />
        <PrimaryButton onClick={handleCoupon} type="submit">Use code</PrimaryButton>
      </CouponContainer>
    </CheckoutContainer>
  );
}

export default CheckoutSummary;
