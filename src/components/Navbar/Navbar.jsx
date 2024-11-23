import {
  NavbarContainerStyled,
  NavbarStyled,
  NavbarLinksContainer,
  NavbarOptionsContainer,
  NavbarMenuButton,
  NumberSpan,
} from "./NavbarStyles";
import { useState } from "react";
import { useSelector } from "react-redux";
import BurguerMenu from "../Menu/BurguerMenu";
import { PrimaryButton, SquareButton, SecondaryButton } from "../UI/Boton";
import { IoBagOutline, IoHeartOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Separador from "../UI/Separador";

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  const itemQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((prev) => !prev);
  };

  return (
    <NavbarContainerStyled>
      <NavbarStyled>
        <a href="#">
          <img src="./src/assets/images/navbar-logo.png" alt="" />
        </a>

        <NavbarLinksContainer>
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
          <Link to="about">About us</Link>
          <Link to="contact">Contact us</Link>
        </NavbarLinksContainer>

        <NavbarOptionsContainer>
          <Link to="cart">
            <SquareButton>
              <NumberSpan>{itemQuantity}</NumberSpan>
              <IoBagOutline />
            </SquareButton>
          </Link>

          <SquareButton>
            <IoHeartOutline />
          </SquareButton>

          <NavbarMenuButton onClick={clickHandler}>
            <IoMenuOutline />
          </NavbarMenuButton>

          <PrimaryButton>Log in</PrimaryButton>
        </NavbarOptionsContainer>

        <BurguerMenu isVisible={click}>
          <Link to="/">Home</Link>
          <Separador />
          <Link to="products">Products</Link>
          <Separador />
          <Link to="about">About us</Link>
          <Separador />
          <PrimaryButton>Log In</PrimaryButton>
          <SecondaryButton>Register</SecondaryButton>
        </BurguerMenu>
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
