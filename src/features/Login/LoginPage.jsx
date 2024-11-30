import LoginForm from "./components/LoginForm/LoginForm";
import FormLayout from "../../components/FormLayout/FormLayout";
import Banner from "../../components/UI/Banner";

function LoginPage() {
  return (
    <FormLayout>
      <Banner bgImage="/src/assets/images/banner-image-2.jpg" />
      <LoginForm />
    </FormLayout>
  );
}

export default LoginPage;
