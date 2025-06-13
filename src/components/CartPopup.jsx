// src/components/CartPopup.js
import React from "react";
import "./Cartpopup.css";

const CartPopup = ({ cart, onClose, onCheckout, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose}>
          ×
        </button>
        <h4>🛒 Your Cart</h4>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <div>
                    <strong>{item.openfda?.brand_name?.[0]}</strong>
                    <br />
                    Qty: {item.quantity}
                  </div>
                  <div>
                    Rs. {item.price}
                    <button
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => onRemove(index)}
                    >
                      ❌
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mb-3">
              <strong>Total: Rs. {total}</strong>
            </div>
            <button className="btn btn-success w-100" onClick={onCheckout}>
              ✅ Go to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
