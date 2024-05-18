import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./AddProductModal.css";
import { productValidationRules } from "../utils/productValidationUtils";

const AddProductModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState,
    trigger, // Agrega trigger a las opciones del useForm
  } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    dispatch(isOpen(data));
    onClose();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}></span>
        <h2>Añadir Nuevo Producto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Título:
            <input
              type="text"
              {...register("title", { required: "El título es requerido" })}
              onBlur={() => handleBlur("title")}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </label>

          <label>
            Precio:
            <input
              type="number"
              {...register("price", productValidationRules.price)}
              onBlur={() => handleBlur("price")}
            />
            {errors.price && <span>{errors.price.message}</span>}
          </label>
          <label>
            Descripción:
            <textarea
              {...register("description", productValidationRules.description)}
              onBlur={() => handleBlur("description")}
            />
            {errors.description && <span>{errors.description.message}</span>}
          </label>
          <label>
            Categoría:
            <input
              type="text"
              {...register("category", productValidationRules.category)}
              onBlur={() => handleBlur("category")}
            />
            {errors.category && <span>{errors.category.message}</span>}
          </label>
          <label>
            URL de la Imagen:
            <input
              type="text"
              {...register("image", productValidationRules.image)}
              onBlur={() => handleBlur("image")}
            />
            {errors.image && <span>{errors.image.message}</span>}
          </label>
          <button type="submit">Añadir Producto</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
