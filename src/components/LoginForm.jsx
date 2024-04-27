import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(mail);
    login({ name, mail });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(event) => setMail(event.target.value)}
        />
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};
export default LoginForm;
