import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import "./AddToCartButton.css";

function AddToCartButton({ product }) {
  const { addProduct } = useContext(CartContext);
  console.log(product);
  return (
    <button className="addProduct-button" onClick={() => addProduct(product)}>
      Agregar al carro
    </button>
  );
}

export default AddToCartButton;
