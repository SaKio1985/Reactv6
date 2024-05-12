import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-button">
      <button onClick={() => window.history.back()}>
        <i className="fa fa-arrow-left"></i> Volver
      </button>
    </div>
  );
};

export default BackButton;
