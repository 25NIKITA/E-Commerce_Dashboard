import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Import the CartProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Wrap the App */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
