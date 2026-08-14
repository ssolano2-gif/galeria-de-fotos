import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice.jsx";
import { plantsArray } from "../data/plants.js";

function ProductList({ onViewCart }) {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true
    }));
  };

  const calculateTotalQuantity = () => {
    return CartItems
      ? CartItems.reduce((total, item) => total + item.quantity, 0)
      : 0;
  };

  return (
    <main>
      <div className="cart-bar">
        <button onClick={onViewCart}>
          🛒 Cart ({calculateTotalQuantity()})
        </button>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <section key={index}>
            <h2 className="category-title">{category.category}</h2>

            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <article className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3 className="product-title">{plant.name}</h3>

                  <p className="product-description">
                    {plant.description}
                  </p>

                  <p className="product-cost">{plant.cost}</p>

                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name]
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default ProductList;