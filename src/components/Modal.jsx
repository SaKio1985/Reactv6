import { useContext, useNavigate,,useState } from "react";
import { ProductsContext } from "../context/ProductContext";


const Modal = ({ isOpen, onClose }) => {
  if (isOpen) return null;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const { addProduct } = useContext(ProductsContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct({ title, price, description, category,image });
    navigate("/");
  }
  return (
    <div className="modal-overlay">
      <div>
        <h2>Nuevo Producto</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" />
          <input type="number" placeholder="Price" />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Category" />
          <input type="text" placeholder="Image" />
          <button type="submit">Crear producto</button>
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};
