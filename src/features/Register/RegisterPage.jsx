import RegisterForm from "./components/RegisterForm/RegisterForm";
import FormLayout from "../../components/FormLayout/FormLayout";
import Banner from "../../components/UI/Banner";

function RegisterPage() {
  return (
    <FormLayout>
      <Banner bgImage="https://res.cloudinary.com/deq7rk87d/image/upload/v1733086155/banner-image-2_gatw4j.jpg" />
      <RegisterForm />
    </FormLayout>
  );
}

export default RegisterPage;
