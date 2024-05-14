import React, { useEffect } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
  useToggleForms();

  return (
    <div className="container">
      <BotonRegresar />
      <ContenedorFormularios />
      <ContenedorPaneles />
    </div>
  );
}

function useToggleForms() {
  useEffect(() => {
    const btnIniciarSesion = document.getElementById('sign-in-btn');
    const btnRegistrarse = document.getElementById('sign-up-btn');
    const contenedor = document.querySelector('.container');

    if (btnIniciarSesion && btnRegistrarse && contenedor) {
      btnIniciarSesion.addEventListener('click', () => {
        contenedor.classList.remove('sign-up-mode');
      });

      btnRegistrarse.addEventListener('click', () => {
        contenedor.classList.add('sign-up-mode');
      });
    }
  }, []);
}

function BotonRegresar() {
  return (
    <a href="./princi.html" style={{ position: 'fixed', top: '10px', left: '10px', zIndex: '9999' }}>
      <img src="/imagenes/back.png" alt="Icono" style={{ width: '40px', height: '40px' }} />
    </a>
  );
}

function ContenedorFormularios() {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <FormularioIniciarSesion />
        <FormularioRegistrarse />
      </div>
    </div>
  );
}

function FormularioIniciarSesion() {
  return (
    <form action="" className="sign-in-form">
      <h2 className="title">Inicia sesión</h2>
      <CampoEntrada icon={faUser} type="text" placeholder="Nombre de usuario" />
      <CampoEntrada icon={faLock} type="password" placeholder="Contraseña" />
      <input type="submit" value="Iniciar sesión" className="btn solid" />
      <p className="social-text">Inicia sesión de manera rápida</p>
      <RedesSociales />
    </form>
  );
}

function FormularioRegistrarse() {
  return (
    <form action="" className="sign-up-form">
      <h2 className="title">Registro</h2>
      <CampoEntrada icon={faUser} type="text" placeholder="Nombre de usuario" />
      <CampoEntrada icon={faEnvelope} type="email" placeholder="Correo electrónico" />
      <CampoEntrada icon={faLock} type="password" placeholder="Contraseña" />
      <input type="submit" value="Registrarse" className="btn solid" />
      <p className="social-text">Regístrate con facilidad</p>
      <RedesSociales />
    </form>
  );
}

function CampoEntrada({ icon, type, placeholder }) {
  return (
    <div className="input-field">
      <FontAwesomeIcon icon={icon} />
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

function RedesSociales() {
  return (
    <div className="social-media">
      <IconoRedSocial href="#" icon={faFacebookF} />
      <IconoRedSocial href="#" icon={faTwitter} />
      <IconoRedSocial href="#" icon={faGoogle} />
      <IconoRedSocial href="#" icon={faLinkedinIn} />
    </div>
  );
}

function IconoRedSocial({ href, icon }) {
  return (
    <a href={href} className="social-icon">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

function ContenedorPaneles() {
  return (
    <div className="panels-container">
      <Panel 
        className="left-panel" 
        title="¿Eres nuevo por aquí?" 
        text="Regístrate ahora" 
        buttonText="Registro" 
        buttonId="sign-up-btn" 
        imgSrc="./imagenes/Icono1.png"
      />
      <Panel 
        className="right-panel" 
        title="¿Ya tienes una cuenta?" 
        text="Inicia sesión y navega en nuestro sitio web" 
        buttonText="Iniciar sesión" 
        buttonId="sign-in-btn" 
        imgSrc="./imagenes/Icono2.png"
      />
    </div>
  );
}

function Panel({ className, title, text, buttonText, buttonId, imgSrc }) {
  return (
    <div className={className}>
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="btn transparent" id={buttonId}>{buttonText}</button>
      </div>
      <img src={imgSrc} className="image" alt="" />
    </div>
  );
}

export default App;
