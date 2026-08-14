import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./components/AboutUs.jsx";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1>Paradise Nursery</h1>
        <p>Your online plant shop</p>
      </header>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <ProductList onViewCart={() => setShowCart(true)} />
      )}
    </div>
  );
}

export default App;