import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Products from "./components/Products/Products";
import "./App.css";
import NavBar from "./components/NavBar/navbar";

import { BrowserRouter as Router } from "react-router-dom";

// Initialize Chec Commerce
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <>
      <Router>
        <NavBar totalItems={cart.total_items}/>
        <Container className="mt-5">
          <Products products={products} onAddToCart={handleAddToCart}/>
        </Container>
      </Router>
    </>
  );
};

export default App;
