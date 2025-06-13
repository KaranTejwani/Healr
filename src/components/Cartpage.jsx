import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext"; // ✅ correct import

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useCart(); // ✅ use from context

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleRemove = (index) => {
    removeFromCart(index); // ✅ remove using context method
  };

  const total = cart.reduce((sum, d) => sum + d.price, 0);

  const handleOrder = (e) => {
    e.preventDefault();
    alert("Order placed! ✅");
    clearCart(); // ✅ clear via context
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between"
              >
                <div>
                  <strong>{item.openfda?.brand_name?.[0]}</strong>
                  <br />
                  Qty: {item.quantity} — Rs. {item.price}
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemove(i)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <h4>Total: Rs. {total}</h4>

          <form className="mt-4" onSubmit={handleOrder}>
            <h5>📦 Shipping Address</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={formData.address}
                required
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={formData.city}
                required
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Zip Code"
                value={formData.zip}
                required
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              ✅ Place Order
            </button>
          </form>
        </>
      )}

      <button className="btn btn-link mt-4" onClick={() => navigate(-1)}>
        🔙 Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;
