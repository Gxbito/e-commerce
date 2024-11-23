import {
  FooterContainer,
  FooterStyled,
  FooterDataContainer,
  FooterTextContainer,
  FooterListContainer,
  FooterIconContainer,
} from "./FooterStyles";

import Separador from "../UI/Separador";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterStyled>
        <FooterDataContainer>
          <FooterTextContainer>
            <a href="#">
              <img src="./src/assets/images/navbar-logo.png" alt="" />
            </a>
            <h3>Trendsetter Threads</h3>
            <p>Elevating your wardrobe, one piece at a time.</p>
          </FooterTextContainer>

          <FooterListContainer>
            <ul>
              <li>COMPANY</li>
              <li>
                <Link to="about">About Us</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
            <ul>
              <li>RESOURCES</li>
              <li>
                <a href="#">Shop/Products</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
            </ul>
            <ul>
              <li>LEGAL</li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Shipping and Returns</a>
              </li>
            </ul>
          </FooterListContainer>
        </FooterDataContainer>
        <Separador />
        <FooterDataContainer>
          <p>2023 Marca inventada Inc. All rights reserved</p>
          <FooterIconContainer>
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <IoLogoFacebook />
            </a>
            <a href="#">
              <IoLogoYoutube />
            </a>
          </FooterIconContainer>
        </FooterDataContainer>
      </FooterStyled>
    </FooterContainer>
  );
}

export default Footer;
