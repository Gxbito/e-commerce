// Bibliotecas externas
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IoBagOutline,
  IoHeartOutline,
  IoMenuOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import {
  NavbarContainerStyled,
  NavbarStyled,
  NavbarLinksContainer,
  NavbarOptionsContainer,
  NavbarMenuButton,
  NumberSpan,
  UserContainer,
} from "./NavbarStyles";

// Archivos internos - Componentes
import BurguerMenu from "../Menu/BurguerMenu";
import SecondaryButton from "../UI/Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton";
import SquareButton from "../UI/Buttons/SquareButton/SquareButton";
import Divider from "../UI/Divider/Divider";

// Archivos internos - Funcionalidad
import { setCurrentUser } from "../../features/UserSlice/userSlice";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const itemQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const currentUser = useSelector((state) => state.user.currentUser);

  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((prev) => !prev);
  };

  const dispatch = useDispatch();

  const logoutUser = () => {
    console.log("lol");
    localStorage.removeItem("currentUser");
    dispatch(setCurrentUser(null));
  };

  return (
    <NavbarContainerStyled>
      <NavbarStyled>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/deq7rk87d/image/upload/v1733089858/navbar-logo_af16zf.svg"
            alt="E-commerce"
          />
        </Link>

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
          {currentUser ? (
            <>
              <UserContainer>
                <IoPersonCircleOutline />

                <span>
                  Hi, <b>{currentUser.nombre}!</b>
                </span>
              </UserContainer>
              <SquareButton onClick={logoutUser}>
                <IoIosLogOut />
              </SquareButton>
            </>
          ) : (
            <Link to="login">
              <PrimaryButton>Log In</PrimaryButton>
            </Link>
          )}
        </NavbarOptionsContainer>

        <BurguerMenu isVisible={click}>
          {currentUser ? (
            <>
              <UserContainer>
                <img src="./src/assets/images/avatar.jpg" alt="avatar" />
                <span>
                  Hi, <b>{currentUser.nombre}!</b>
                </span>
              </UserContainer>
              <Link to="/">Home</Link>
              <Divider />
              <Link to="products">Products</Link>
              <Divider />
              <Link to="about">About us</Link>
              <SecondaryButton onClick={logoutUser}>Log Out</SecondaryButton>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Divider />
              <Link to="products">Products</Link>
              <Divider />
              <Link to="about">About us</Link>
              <Divider />
              <PrimaryButton>Log In</PrimaryButton>
              <SecondaryButton>Register</SecondaryButton>
            </>
          )}
        </BurguerMenu>
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
