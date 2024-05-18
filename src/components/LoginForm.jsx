import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./LoginForm.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const { login, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const password = watch("password");
  const passwordRepeat = watch("passwordRepeat");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const { name, email, password, passwordRepeat } = data;
    try {
      await login({ name, email });
      onLogin();

      const { from } = location.state || { from: { pathname: "/" } };
      navigate(from.pathname || "/cart");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  });

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  };

  return (
    <div className="login-form-container">
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={onSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Nombre es requerido" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Por favor, registre su email.",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Ingrese un correo electrónico válido",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Contraseña es requerida" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="passwordRepeat">Repetir Contraseña</label>
            <input
              type="password"
              id="passwordRepeat"
              {...register("passwordRepeat", {
                required: "Repetir contraseña es requerida",
                validate: (value) =>
                  value === password || "Las contraseñas deben coincidir",
              })}
            />
            {errors.passwordRepeat && (
              <span>{errors.passwordRepeat.message}</span>
            )}
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
