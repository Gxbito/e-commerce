import ContactForm from "./components/ContactForm/ContactForm";
import FormLayout from "../../components/FormLayout/FormLayout";
import Banner from "../../components/UI/Banner";

function ContactPage() {
  return (
    <FormLayout>
      <ContactForm />
      <Banner bgImage="/src/assets/images/banner-image-1.jpg" />
    </FormLayout>
  );
}

export default ContactPage;
