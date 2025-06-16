import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import CartPopup from "./CartPopup";
import "./LaboratoryTests.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestCard = ({ test, onAddToCart }) => {
  return (
    <div
      className="card mx-2"
      style={{
        minWidth: "280px",
        flex: "0 0 auto",
        backgroundColor: "#f3f7fd",
        border: "none",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <h6 className="fw-semibold">{test.testName}</h6>
      {test.testType && (
        <p className="text-muted mb-2" style={{ fontSize: "0.85rem" }}>
          Known as {test.testType}
        </p>
      )}
      <p className="fw-bold mb-3">
        Rs. {test.fee}
        {test.maxFee ? ` - ${test.maxFee}` : ""}
      </p>
      <button
        className="btn w-100"
        style={{
          backgroundColor: "#00005c",
          color: "#fff",
          fontWeight: "500",
          fontSize: "0.9rem",
        }}
        onClick={() => onAddToCart(test)}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

const PopularRadiologyTests = ({ labName = "" }) => {
  const [laboratories, setLaboratories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleAddToCart = (test) => {
    addToCart({
      ...test,
      openfda: { brand_name: [test.testName] },
      price: test.fee,
      quantity: 1,
    });
    setIsCartVisible(true);
  };

  useEffect(() => {
    const fetchLabs = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/laboratories");
        const data = await res.json();
        setLaboratories(data);
      } catch (err) {
        console.error("Error loading labs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLabs();
  }, []);

  const allTests = laboratories.reduce((acc, lab) => {
    if (labName && lab.labName !== labName) return acc;
    const radiologyTests = lab.tests
      .filter((test) => test.testType === "Radiology")
      .map((test) => ({ ...test, labName: lab.labName }));
    return [...acc, ...radiologyTests];
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <h4 className="fw-semibold text-dark mb-1">Popular Radiology Tests</h4>
        <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
          {labName
            ? `Radiology tests from ${labName}`
            : "Browse top radiology tests across labs"}
        </p>

        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "150px" }}
          >
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : allTests.length > 0 ? (
          <div className="position-relative">
            <ChevronLeft
              className="position-absolute top-50 start-0 translate-middle-y z-1 bg-white border rounded-circle p-1"
              size={30}
              onClick={scrollLeft}
              role="button"
            />

            <div
              className="d-flex px-4"
              ref={scrollRef}
              style={{
                overflowX: "auto",
                scrollBehavior: "smooth",
                whiteSpace: "nowrap",
                gap: "1rem",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {allTests.map((test, i) => (
                <TestCard key={i} test={test} onAddToCart={handleAddToCart} />
              ))}
            </div>

            <style>
              {`
                .d-flex::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            <ChevronRight
              className="position-absolute top-50 end-0 translate-middle-y z-1 bg-white border rounded-circle p-1"
              size={30}
              onClick={scrollRight}
              role="button"
            />
          </div>
        ) : (
          <p className="text-center text-muted">No radiology tests found.</p>
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

export default PopularRadiologyTests;
