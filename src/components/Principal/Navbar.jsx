import React from 'react';
import "/Users/ornel/mi-proyecto-react/src/components/Principal/Nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="https://i.ibb.co/5x56BZV/logo.png" alt="Mi Logo" title="MiLog" />
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav custom-nav">
        <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="#Foot">Inicio Sesion</a>
          </li>
          
          <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="Princi.html">Inicio</a>
          </li>
          <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="#producte">Productos</a>
          </li>
          <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="#Foot">Contacto</a>
          </li>
          <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="#Foot">Administrador</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
