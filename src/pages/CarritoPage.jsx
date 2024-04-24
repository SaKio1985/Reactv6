import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";
import CartProductCard from "../components/CartProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner";
import "./CarritoPage.css";

const CarritoPage = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const total = cart.reduce((suma, producto) => {
    return suma + producto.quantity * producto.price;
  }, 0);
  return (
    <div>
      <Navbar />
      <Banner />
      <h1>Carrito de compra</h1>
      <div className="cart-product-list">
        {cart.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
        <div className="cart-product-total">
          <p className="cart-product-sum">
            Sumatorio total: ${total.toFixed(2)}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarritoPage;
