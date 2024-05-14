import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "/Users/ornel/mi-proyecto-react/src/components/Principal/Carrusel.css";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <OwlCarousel
          className="owl-carousel owl-theme"
          loop={true}
          margin={10}
          nav={true}
          autoplay={true}
          autoplayTimeout={3000}
          autoplayHoverPause={true}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          }}
        >
          <div className="item"><img src="imagenes/Fabuloso.png" alt="Descripción de la imagen 1" title="DP1" /></div>
          <div className="item"><img src="imagenes/Lysol.png" alt="Descripción de la imagen 2" title="DP2" /></div>
          <div className="item"><img src="imagenes/foca.png" alt="Descripción de la imagen 3" title="DP3" /></div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
