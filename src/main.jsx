import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
