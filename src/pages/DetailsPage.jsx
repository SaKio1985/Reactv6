import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import AddToCartButton from "../components/AddToCartButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner";
import data from "../data.json";
import "./DetailsPage.css";

const DetailsPage = () => {
  const { id } = useParams();

  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <Banner />
        <p>Loading product...</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Banner />
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
          <BackButton />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">{`$${product.price}`}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-category">{`Category: ${product.category}`}</p>
          <AddToCartButton item={product} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
