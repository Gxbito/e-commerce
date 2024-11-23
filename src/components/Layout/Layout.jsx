import { LayoutWrapper } from "./LayoutStyles";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ChangeColorButton } from "../UI/Boton";
import { VscColorMode } from "react-icons/vsc";

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <LayoutWrapper data-theme={theme}>
      <Navbar />
      {children}
      <Outlet />
      <Footer/>
      <ChangeColorButton onClick={toggleTheme}>
        <VscColorMode />
      </ChangeColorButton>
    </LayoutWrapper>
  );
}

export default Layout;
