import RegisterForm from "./components/RegisterForm/RegisterForm";
import FormLayout from "../../components/FormLayout/FormLayout";
import Banner from "../../components/UI/Banner";

function RegisterPage() {
  return (
    <FormLayout>
      <Banner bgImage="/src/assets/images/banner-image-3.jpg" />
      <RegisterForm />
    </FormLayout>
  );
}

export default RegisterPage;
