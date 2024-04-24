import React, { useEffect } from "react";
import "./banner.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Banner = () => {
  const { isAuthenticated, user, isLoading } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="banner">
      <p className="banner-text">
        {isAuthenticated ? (
          <>¡Aprovechate de tu 20% de descuento!</>
        ) : (
          <>Crea una cuenta para disfrutar de nuestros descuentos</>
        )}
      </p>
    </div>
  );
};

export default Banner;
