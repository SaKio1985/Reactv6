import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Email: info@mitienda.com</p>
                    <p>Telefono: +34 123 456 789 </p>
                </div>
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-botton">
                    <p>&copy; 2023 MiTienda. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;