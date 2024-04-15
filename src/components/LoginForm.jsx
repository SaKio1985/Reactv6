import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre</label>
        <input
          type="text"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};
export default LoginForm;
