import React, { useState, useContext } from "react";
import NavbarSearch from "./components/NavbarSearch";
import ProductCard from "./components/ProductCard";
import { ProductsContext } from "./context/ProductContext";
import { AuthContext } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner";

const App = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const { userRole } = useContext(AuthContext);
  const isAdmin = userRole === "admin";

  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (newSearchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  console.log(products);

  return (
    <>
      <NavbarSearch onSearchSubmit={filterProducts} />
      <Banner />
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {isAdmin && <button>Add product</button>}
      <Footer />
    </>
  );
};

export default App;
