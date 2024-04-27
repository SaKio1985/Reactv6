import React, { useState } from "react";
import NavbarSearch from "./components/NavbarSearch";
import ProductCard from "./components/ProductCard";
import data from "./data.json";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterProducts(newSearchTerm);
  };

  const filterProducts = (newSearchTerm) => {
    const filtered = data.products.filter((product) =>
      product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <NavbarSearch onSearchSubmit={filterProducts} />
      <Banner />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
