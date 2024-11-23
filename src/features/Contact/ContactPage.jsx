import ContactForm from "./components/ContactForm/ContactForm";
import Layout from "./components/Layout/Layout";
import Banner from "../../components/UI/Banner";

function ContactPage() {
  return (
    <Layout>
      <ContactForm />
      <Banner bgImage="/src/assets/images/banner-image-1.jpg" />
    </Layout>
  );
}

export default ContactPage;
