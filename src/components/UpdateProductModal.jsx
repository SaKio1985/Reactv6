import { useContext, useNavigate, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import "./AddProductModal.css";

const UpdateProductModal = ({ product, onClose }) => {
  const [editData, setEditData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
  });
  const { updateProduct } = useContext(ProductsContext);

  //const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "price" ? parseFloat(value) : value;
    setEditData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      ...editData,
    };

    await updateProduct(product.id, updateProduct);
    onClose();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Modificar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleInputChange}
              value={editData.title}
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={handleInputChange}
              value={editData.price}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Descripción:</label>
            <textarea
              name="description"
              onChange={handleInputChange}
              value={editData.description}
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
