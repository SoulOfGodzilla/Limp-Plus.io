import React from 'react';
import "/Users/ornel/mi-proyecto-react/src/components/Principal/Footer.css";

function Footer() {
  return (
    <footer id="Foot" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Información</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="Terminos_Condi.html">Términos y condiciones</a></li>
              <li><a href="Politica.html">Política de privacidad</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Clientes</h4>
            <ul>
              <li><a href="#">Mi cuenta</a></li>
              <li><a href="#">Historial de pedidos</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Soporte</h4>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Devoluciones</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Redes sociales</h4>
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=61558889497777&mibextid=LQQJ4d">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="https://www.instagram.com/limpieza_pluss?igsh=ZWVueGcyMWhsMmFw">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
