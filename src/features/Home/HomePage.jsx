// Archivos internos - Componentes
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Categorias from "./components/Categorias/Categorias";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

function HomePage() {
  return (
    <>
      <Hero />
      <Categorias />
      <ProductsSection category={"Women"}/>
      <About />
      <ProductsSection category={"Men"}/>
    </>
  );
}

export default HomePage;
