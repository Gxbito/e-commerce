// Archivos internos - Componentes
import LoginForm from "./components/LoginForm/LoginForm";
import FormLayout from "../../components/FormLayout/FormLayout";
import Banner from "../../components/UI/Banner/Banner";

function LoginPage() {
  return (
    <FormLayout>
      <Banner bgImage="https://res.cloudinary.com/deq7rk87d/image/upload/v1733086153/banner-image-1_vpopca.jpg" />
      <LoginForm />
    </FormLayout>
  );
}

export default LoginPage;
