import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <h1>Inicio de sesion</h1>
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
