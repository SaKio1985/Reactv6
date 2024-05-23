import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setIsLoading(true);

      const response = await axios.put(`${API_URL}/${id}`, editedProduct);
      setProducts(response.data);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError("No hay ningun producto", e);
      } else {
        setError("Error al recuperar los productos", e);
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const getProductsById = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      const product = response.data;
      return product;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`El producto con el ${id} no existe:`, e);
      } else {
        setError(`Error al obtener el producto con ${id}:`, e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (id, editedProduct) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/${id}`, editedProduct);
      const updatedProduct = {
        ...response.data,
        updatedAt: new Date().toISOString(),
      };
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`El producto con el ${id} ya no existe:`, e);
      } else {
        setError(
          `Error al guardar las modificaciones en el producto ${id}:`,
          e
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setError(`El producto con el ID ${id} ya no existia`, e);
      } else {
        setError(
          `Ha habido un error al eliminar el producto con el ID ${id}:`,
          e
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      if (!("rating" in newProduct)) {
        newProduct.rating = { rate: 0, count: 0 };
      }

      setIsLoading(true);
      const response = await axios.post(API_URL, newProduct);
      const addedProduct = response.data;
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (e) {
      setError("Error al crear el producto", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
        getProducts,
        getProductsById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
