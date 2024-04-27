import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function AddToCartButton({ product }) {
  const { addProduct } = useContext(CartContext);
  console.log(product);
  return <button onClick={() => addProduct(product)}>Agregar al carro</button>;
}

export default AddToCartButton;
