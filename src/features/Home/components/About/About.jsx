// Bibliotecas externas
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import {
  AboutWrapper,
  AboutTextButtonContainer,
  AboutImageContainer,
} from "./AboutStyles";

// Archivos internos - Componentes
import SecondaryButton from "../../../../components/UI/Buttons/SecondaryButton/SecondaryButton";

function About() {
  return (
    <AboutWrapper>
      <AboutImageContainer>
        <img
          src="https://res.cloudinary.com/deq7rk87d/image/upload/v1733085936/about-image-1_scptg2.jpg"
          alt="Purple Dress Girl"
        />
      </AboutImageContainer>

      <AboutTextButtonContainer>
        <h2>
          About <b>Us</b>
        </h2>
        <p>
          Step into the spotlight with our newest men's collection, designed for
          the modern gentleman who exudes confidence and style. From sleek
          tailored <b>suits to casual yet sophisticated essentials</b>
        </p>
        <p>
          Step into the spotlight with our <b>newest men's collection</b>,
          designed for the modern gentleman who exudes confidence and style.
          From sleek tailored suits to casual yet sophisticated essentials
        </p>
        <Link to="about">
          <SecondaryButton>See More About Us</SecondaryButton>
        </Link>
      </AboutTextButtonContainer>
    </AboutWrapper>
  );
}

export default About;
