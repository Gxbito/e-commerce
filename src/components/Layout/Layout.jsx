// Bibliotecas externas
import { Outlet } from "react-router-dom";
import { VscColorMode } from "react-icons/vsc";

// Archivos internos - Estilos
import { LayoutWrapper } from "./LayoutStyles";

// Archivos internos - Componentes
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FAB from "../../components/UI/Buttons/FAB/FAB";

// Archivos internos - Funcionalidad
import { useTheme } from "../../context/ThemeContext";

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <LayoutWrapper data-theme={theme}>
      <Navbar />
      {children}
      <Outlet />
      <Footer />
      <FAB onClick={toggleTheme}>
        <VscColorMode />
      </FAB>
    </LayoutWrapper>
  );
}

export default Layout;
