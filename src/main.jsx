import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarritoPage from "./pages/CarritoPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import { ProductsProvider } from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/carrito" element={<CarritoPage />} />
                <Route path="/product/:id" element={<DetailsPage />} />
              </Route>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
