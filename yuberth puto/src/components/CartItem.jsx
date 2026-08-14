import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity
} from "../CartSlice.jsx";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach((item) => {
      const quantity = item.quantity;
      const cost = parseFloat(item.cost.substring(1));
      total += cost * quantity;
    });

    return total;
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return cost * item.quantity;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleAddAgain = (item) => {
    dispatch(addItem(item));
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <article className="cart-item" key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: {item.cost}</p>

              <div className="quantity-controls">
                <button
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: ${calculateTotalCost(item).toFixed(2)}
              </p>

              <button
                className="remove-button"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>

              <button
                className="add-again-button"
                onClick={() => handleAddAgain(item)}
              >
                Add One More
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>

        <button onClick={handleContinueShopping}>
          Continue Shopping
        </button>

        <button onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;