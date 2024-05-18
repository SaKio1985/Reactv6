import { useContext, useNavigate, useState } from "react";
import { ProductsContext } from "../context/ProductContext";
import "./AddProductModal.css";

const AddProductModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const { addProduct } = useContext(ProductsContext);

  //const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(formData);
    //navigate("/");
  };
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-container" style={{ width: "600px" }}>
        <div className="modal-content">
          <h2>Nuevo Producto</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="title">Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleInputChange}
                value={formData.title}
              />
            </div>
            <div className="input-group">
              <label htmlFor="price">Precio:</label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleInputChange}
                value={formData.price}
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                onChange={handleInputChange}
                value={formData.description}
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Categoría:</label>
              <input
                type="text"
                id="category"
                name="category"
                onChange={handleInputChange}
                value={formData.category}
              />
            </div>
            <div className="input-group">
              <label htmlFor="image">URL de la Imagen:</label>
              <input
                type="text"
                id="image"
                name="image"
                onChange={handleInputChange}
                value={formData.image}
              />
            </div>
            <div className="button-group">
              <button className="create-button" type="submit">
                Crear producto
              </button>
              <button className="close-button" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
