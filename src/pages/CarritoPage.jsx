import { CartContext } from "../context/CartContext.jsx";
import { useContext } from "react";
import CartProductCard from "../components/CartProductCard";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner";
import "./CarritoPage.css";
import { AuthContext } from "../context/AuthContext.jsx";

const CarritoPage = () => {
  const { cart, resetCart } = useContext(CartContext);

  const { userRole } = useContext(AuthContext);
  console.log(userRole);

  console.log(cart);
  const total = cart.reduce((suma, producto) => {
    return suma + producto.quantity * producto.price;
  }, 0);

  const handleBuy = () => {
    cart.length
      ? alert("Seras redirigido a la pasarela de pago")
      : alert("Añada productos al carro");
    resetCart();
  };

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
        <button className="buy-button" onClick={handleBuy}>
          Comprar
        </button>
        <button className="reset-button" onClick={() => resetCart()}>
          Resetear Carro
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CarritoPage;
