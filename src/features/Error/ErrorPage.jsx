// Bibliotecas externas
import { Link } from "react-router-dom";

// Archivos internos - Estilos
import { Layout } from "./ErrorPageStyles";

// Archivos internos - Componentes
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton"

function ErrorPage() {
  return (
    <Layout>
      <h1>
        <b>4</b>0<b>4</b>
      </h1>
      <h2>Page not found!</h2>
      <Link to="/">
        <PrimaryButton>Go to home</PrimaryButton>
      </Link>
    </Layout>
  );
}

export default ErrorPage;
