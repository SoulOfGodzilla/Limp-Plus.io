
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Principal/Navbar';
import ProductGrid from './components/Principal/ProductGrid';
import Carrusel from './components/Principal/Carrusel';
import Footer from './components/Principal/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

