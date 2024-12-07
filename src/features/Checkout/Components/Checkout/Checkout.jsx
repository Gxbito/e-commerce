// Bibliotecas Externas
import { useState } from "react";
import { useSelector } from "react-redux";
import { FiTruck, FiBox } from "react-icons/fi";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Archivos internos - Estilos
import {
  CheckoutContainer,
  CheckoutForm,
  InputContainer,
  ResumeContainer,
  ResumeCard,
  ResumeData,
  ItemsContainer,
} from "./CheckoutStyles";

// Archivos internos - Componentes
import PrimaryButton from "../../../../components/UI/Buttons/PrimaryButton/PrimaryButton"
import SquareButton from "../../../../components/UI/Buttons/SquareButton/SquareButton"
import Input from "../../../../components/UI/Input/Input";
import ProductCard from "../../../Cart/Components/ProductCard/ProductCard";
import Divider from "../../../../components/UI/Divider/Divider";

function Checkout() {
  const [activeButton, setActiveButton] = useState("square");

  const items = useSelector((state) => state.cart.items);
  const { subtotal, discount, tax, total, estimatedDelivery } = useSelector(
    (state) => state.checkout
  );

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const initialValues = {
    name: "",
    email: "",
    number: "",
    country: "",
    city: "",
    state: "",
    zip: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string()
      .matches(/^\d+$/, "Must be a valid phone number")
      .required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string()
      .matches(/^\d+$/, "Must be a valid ZIP code")
      .required("ZIP code is required"),
  });

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <CheckoutContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <CheckoutForm>
              <h3>Checkout</h3>
              <InputContainer>
                <h4>Shipping information</h4>
                <SquareButton
                  type="button"
                  isSelected={activeButton === "list"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick("list");
                  }}
                >
                  <FiTruck />
                  Delivery
                </SquareButton>
                <SquareButton
                  type="button"
                  isSelected={activeButton === "square"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick("square");
                  }}
                >
                  <FiBox />
                  Pick up
                </SquareButton>
              </InputContainer>

              <Input
                id="name"
                label="Name"
                name="name"
                type="text"
                placeholder="Enter name"
                isError={touched.name && errors.name}
                onChange={handleChange}
              />
              <Input
                id="email"
                label="Email address"
                name="email"
                type="email"
                placeholder="Enter email address"
                isError={touched.email && errors.email}
                onChange={handleChange}
              />
              <Input
                id="number"
                label="Phone number"
                name="number"
                type="text"
                placeholder="Enter phone Number"
                isError={touched.number && errors.number}
                onChange={handleChange}
              />
              <Input
                id="country"
                label="Country"
                name="country"
                type="text"
                placeholder="Enter Country"
                isError={touched.country && errors.country}
                onChange={handleChange}
              />
              <Input
                id="city"
                label="City"
                name="city"
                type="text"
                placeholder="Enter city"
                isError={touched.city && errors.city}
                onChange={handleChange}
              />
              <Input
                id="state"
                label="State"
                name="state"
                type="text"
                placeholder="Enter state"
                isError={touched.state && errors.state}
                onChange={handleChange}
              />
              <Input
                id="zip"
                label="ZIP code"
                name="zip"
                type="text"
                placeholder="Enter ZIP code"
                isError={touched.zip && errors.zip}
                onChange={handleChange}
              />
            </CheckoutForm>

            <ResumeContainer>
              <h4>Review your cart</h4>
              <ItemsContainer>
                {items.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </ItemsContainer>
              <ResumeCard>
                <h3>Order summary</h3>
                <ResumeData>
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
                </ResumeData>
                <PrimaryButton type="submit">Pay Now</PrimaryButton>
                <h4>{estimatedDelivery}</h4>
              </ResumeCard>
            </ResumeContainer>
          </Form>
        )}
      </Formik>
    </CheckoutContainer>
  );
}

export default Checkout;
