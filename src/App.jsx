import React, { useState, useContext, useEffect } from "react";
import NavbarSearch from "./components/NavbarSearch";
import ProductCard from "./components/ProductCard";
import { ProductsContext } from "./context/ProductContext";
import { AuthContext } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner";
import "./App.css";
import AddProductModal from "./components/AddProductModal";

const App = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const { userRole } = useContext(AuthContext);
  const isAdmin = userRole === "admin";

  const [modalOpen, setModalOpen] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filterProducts = (newSearchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <NavbarSearch onSearchSubmit={filterProducts} />
      <Banner />
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {isAdmin && (
        <button className="add-product-button" onClick={handleOpenModal}>
          Add product
        </button>
      )}
      <AddProductModal isOpen={modalOpen} onClose={handleCloseModal} />
      <Footer />
    </>
  );
};

export default App;
