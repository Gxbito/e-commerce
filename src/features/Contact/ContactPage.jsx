// Archivos internos - Componentes
import ContactForm from "./components/ContactForm/ContactForm";
import FormLayout from "../../components/FormLayout/FormLayout";
import Banner from "../../components/UI/Banner/Banner";

function ContactPage() {
  return (
    <FormLayout>
      <ContactForm />
      <Banner bgImage="https://res.cloudinary.com/deq7rk87d/image/upload/v1733086155/banner-image-2_gatw4j.jpg" />
    </FormLayout>
  );
}

export default ContactPage;
