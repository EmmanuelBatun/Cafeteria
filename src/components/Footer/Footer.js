import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import  logo  from "../../assets/logo.jpg"

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>enfold detroit</h3>
            <p>4870 Cass Ave</p>
            <p>Detroit, MI, United States</p>
            <p>(555) 389 976</p>
            <Link to="#" className="text-white">
              detroit@enfold-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>enfold L.A.</h3>
            <p>1818 N Vermont Ave</p>
            <p>Los Angeles, CA, United States</p>
            <p>(555) 774 433</p>
            <Link to="#" className="text-white">
              LA@enfold-restaurant.com
            </Link>
          </div>

          <div className="footer-grid-item">
            <h3>enfold seattle</h3>
            <p>4326 University Way NE</p>
            <p>Seattle, WA, United States</p>
            <p>(555) 345 888</p>
            <Link to="#" className="text-white">
              seattle@enfold-restaurant.com
            </Link>
          </div>
          <div>
          <FloatingWhatsApp 
          phoneNumber="9981592390" 
          accountName="Estacion Cafe"
          placeholder="Hola Necesito infromacion..."
          chatMessage="Hola en que podemos ayudarte"
          darkMode= "true"
          statusMessage="Respuesta en menos de 30min"
          avatar={logo}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
