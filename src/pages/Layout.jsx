import Navbar from "../components/NavbarSearch";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner";
import { useState } from "react";
import data from "../data.json";

const Layout = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  const filterProducts = (newSearchTerm) => {
    const filtered = data.products.filter((product) =>
      product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="layout">
      <Navbar onSearchSubmit={filterProducts} />
      <Banner />
      <Footer />
    </div>
  );
};

export default Layout;
