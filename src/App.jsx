// Bibliotecas externas
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Archivos internos - Estado y contexto
import store from "../src/store/store";
import ThemeProvider from "./context/ThemeContext";

// Archivos internos - Componentes principales
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// Archivos internos - Páginas
import HomePage from "./features/Home/HomePage";
import AboutPage from "./features/About/AboutPage";
import ProductsPage from "./features/Products/ProductsPage";
import CartPage from "./features/Cart/CartPage";
import ContactPage from "./features/Contact/ContactPage";
import LoginPage from "./features/Login/LoginPage";
import RegisterPage from "./features/Register/RegisterPage";
import CheckoutPage from "./features/Checkout/CheckoutPage";
import ErrorPage from "./features/Error/ErrorPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="checkout"
                element={
                  <ProtectedRoute redirectTo="/register">
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
