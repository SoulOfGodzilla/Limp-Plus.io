import React from 'react';
import "/Users/ornel/mi-proyecto-react/src/components/Principal/ProductGrid.css";

function ProductCard({ image, title, description, price, link }) {
  return (
    <div className="tarjeta-producto">
      <img src={image} alt="Producto" title={title} />
      <div className="contenido">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="precio">${price}</p>
        <a href={link}>
          <button className="boton">Ver detalles</button>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
