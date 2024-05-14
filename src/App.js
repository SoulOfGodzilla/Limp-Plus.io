import './App.css';
import Navbar from './components/Principal/Navbar';
import Carousel from './components/Principal/Carrusel';
import ProductCard from './components/Principal/ProductGrid';
import Footer from './components/Principal/Footer';
import Categorias from './components/Principal/Categorias';
import Login from './components/Principal/Login';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Categorias/>
      <Carousel />
      <h2 className="Subtitle">---------------Productos------------------</h2>
      <div className="contenedor-tarjetas">
        <ProductCard 
          image="/imagenes/1.png"
          title="Ariel de 5L"
          description="Contiene una fórmula que te permite usar menos producto por carga de lavado."
          price="$100"
          detailsLink="detalle.html"
        />
        <ProductCard 
          image="imagenes/2.png"
          title="Lysol"
          description="Este producto cuenta con envase recargable para contribuir al medio ambiente."
          price="7.99"
          link="detalle2.html"
        />
        <ProductCard 
          image="imagenes/3.jpeg"
          title="Windex"
          description="¡Con Windex añade brillo a tu vida! Es nuestra mejor solución para iluminar y dar brillo a su hogar."
          price="4.99"
          link="detalle3.html"
        />
        <ProductCard 
          image="imagenes/4.jpg"
          title="Lysol Pro"
          description="Contiene una solución que se disuelve con agua, ofreciendo una solución más compacta y fácil de almacenar."
          price="6.99"
          link="detalle4.html"
        />
        <ProductCard 
          image="imagenes/5.jpg"
          title="Harpic Power Ultra Todo en 1 Original 2 Pack 750ml c/u"
          description="Su fórmula biodegradable permite desatascar las tuberías de manera efectiva y sin dañarlas."
          price="110.00"
          link="detalle5.html"
        />
        <ProductCard 
          image="imagenes/6.png"
          title="Vanish Quitamanchas en Gel Multiusos para Ropa de Color 3.6 L"
          description="Funciona a temperatura más baja ayudando a ahorrar energía y proteger los tejidos delicados."
          price="179.00"
          link=""
        />
        <ProductCard 
          image="imagenes/pinolito.jpg"
          title="Pinol El Original limpiador multiusos desinfectante pino 3.7 lt"
          description="Fórmula biodegradable que contribuye al impacto ambiental."
          price="179.00"
          link=""
        />
        <ProductCard 
          image="imagenes/Fabuloso.jpg"
          title="Limpiador líquido Fabuloso aroma lavanda 1L"
          description="Su fórmula de dosificación permite a los usuarios mezclar el producto de mejor manera."
          price="25.00"
          link=""
        />
        <ProductCard 
          image="imagenes/10.jpg"
          title="Cloralex Toallas Desinfectantes Húmedas, 48 Piezas"
          description="Su nuevo material biodegradable ayuda a reducir el impacto ambiental."
          price="25.00"
          link=""
        />
        <ProductCard 
          image="imagenes/glade.webp"
          title="Aromatizante ambiental Glade campos de lavanda en aerosol 270 ml"
          description="Fragancias naturales que ofrecen una opción amigable con el medio ambiente."
          price="45.00"
          link=""
        />
        {/* Agrega las otras tarjetas de productos aquí */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
