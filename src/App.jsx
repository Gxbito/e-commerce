import Layout from "./components/Layout/Layout";
import HomePage from "./features/Home/HomePage";
import AboutPage from "./features/About/AboutPage";
import ProductsPage from "./features/Products/ProductsPage";
import CartPage from "./features/Cart/CartPage";
import ContactPage from "./features/Contact/ContactPage";
import LoginPage from "./features/Login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import ThemeProvider from "./context/ThemeContext";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import RegisterPage from "./features/Register/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CheckoutPage from "./features/Checkout/CheckoutPage";

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
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
