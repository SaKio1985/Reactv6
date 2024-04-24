import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-button">
      <Link to={"/"}>
        <i className="fa fa-arrow-left"></i> Volver
      </Link>
    </div>
  );
};

export default BackButton;
