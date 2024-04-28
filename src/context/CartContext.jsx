import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (productCart) => productCart.id === product.id
      );
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart[index].quantity += 1;
        return newCart;
      } else {
        // Si el producto no está en el carrito, lo añadimos con una cantidad inicial de 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function resetCart() {
    setCart([]); // Establece el carrito a un arreglo vacío
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}
