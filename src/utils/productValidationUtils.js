const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

const productValidationRules = {
  title: {
    required: "El título es obligatorio",
    minLength: {
      value: 3,
      message: "La categoría debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 50,
      message: "La categoría no puede tener más de 50 caracteres",
    },
  },
  price: {
    required: "El precio es obligatorio",
    min: { value: 0, message: "El precio debe ser mayor que 0" },
  },
  description: {
    required: "La descripción es obligatoria",
    minLength: {
      value: 10,
      message: "La descripción debe tener al menos 10 caracteres",
    },
    maxLength: {
      value: 500,
      message: "La descripción no puede tener más de 500 caracteres",
    },
  },
  category: {
    required: "La categoría es obligatoria",
    minLength: {
      value: 3,
      message: "La categoría debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 50,
      message: "La categoría no puede tener más de 50 caracteres",
    },
  },
  imageUrl: {
    required: "La URL de la imagen es obligatoria",
    pattern: {
      value: urlPattern,
      message: "formato de URL no valido",
    },
  },
};

export { productValidationRules };
