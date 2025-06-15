import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartPopup from "./CartPopup";
import { useCart } from "./CartContext";
import "./LaboratoryTests.module.css";

const TestCard = ({ test, onAddToCart }) => {
  return (
    <div className="card">
      <h2 className="card-title">{test.testName}</h2>
      <p>Type: {test.testType}</p>
      <div className="price">
        Rs. {test.fee} <span style={{ fontWeight: "normal" }}>per test</span>
      </div>
      <div>
        <button className="btn btn-cart" onClick={() => onAddToCart(test)}>
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

const LaboratoryTests = () => {
  const [laboratories, setLaboratories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleAddToCart = (test) => {
    addToCart({
      ...test,
      openfda: { brand_name: [test.testName] }, // Adapting to match drug cart structure
      price: test.fee,
      quantity: 1
    });
    setIsCartVisible(true);
  };

  useEffect(() => {
    const fetchLaboratories = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/laboratories');
        const data = await response.json();
        setLaboratories(data);
      } catch (error) {
        console.error('Error fetching laboratories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLaboratories();
  }, []);

  // Flatten all tests from all laboratories
  const allTests = laboratories.reduce((acc, lab) => {
    const labTests = lab.tests.map(test => ({
      ...test,
      labName: lab.labName
    }));
    return [...acc, ...labTests];
  }, []);

  const totalPages = Math.ceil(allTests.length / itemsPerPage);
  const paginatedTests = allTests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-3">Laboratory Tests</h1>
        <p className="text-center text-muted mb-4">
          Find and book your medical tests online
        </p>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : allTests.length > 0 ? (
          <>
            <div className="row g-4">
              {paginatedTests.map((test, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <TestCard
                    test={test}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center mt-5 gap-4">
              <button
                className="modern-pagination-btn"
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="modern-pagination-btn"
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-muted">No tests found.</p>
        )}
      </div>

      {isCartVisible && (
        <CartPopup
          cart={cart}
          onClose={() => setIsCartVisible(false)}
          onRemove={(index) => removeFromCart(index)}
          onCheckout={() => {
            setIsCartVisible(false);
            navigate("/cart");
          }}
        />
      )}
    </div>
  );
};

export default LaboratoryTests;