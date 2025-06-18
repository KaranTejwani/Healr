import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import CartPopup from "./CartPopup";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestCard = ({ test, onAddToCart }) => {
  return (
    <div
      style={{
        minWidth: "280px",
        flex: "0 0 auto",
        backgroundColor: "#f3f7fd",
        border: "none",
        borderRadius: "1rem",
        padding: "1rem",
        margin: "0 0.5rem",
      }}
    >
      <h6 style={{ fontWeight: 600 }}>{test.testName}</h6>
      {test.testType && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "#6c757d",
            marginBottom: "0.5rem",
          }}
        >
          Known as {test.testType}
        </p>
      )}
      <p style={{ fontWeight: 700, marginBottom: "1rem" }}>
        Rs. {test.fee}
        {test.maxFee ? ` - ${test.maxFee}` : ""}
      </p>
      <button
        style={{
          width: "100%",
          backgroundColor: "#00005c",
          color: "#fff",
          fontWeight: 500,
          fontSize: "0.9rem",
          border: "none",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
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
    <div style={{ backgroundColor: "#f8f9fa", padding: "2rem 0" }}>
      <div style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
          Popular Radiology Tests
        </h4>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#6c757d",
            marginBottom: "1.5rem",
          }}
        >
          {labName
            ? `Radiology tests from ${labName}`
            : "Browse top radiology tests across labs"}
        </p>

        {loading ? (
          <div
            style={{
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
                color: "#6c757d",
              }}
            >
              Loading tests...
            </div>
          </div>
        ) : allTests.length > 0 ? (
          <div style={{ position: "relative" }}>
            <ChevronLeft
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "50%",
                padding: "0.25rem",
                zIndex: 1,
                cursor: "pointer",
              }}
              size={30}
              onClick={scrollLeft}
            />

            <div
              ref={scrollRef}
              style={{
                display: "flex",
                overflowX: "auto",
                whiteSpace: "nowrap",
                gap: "1rem",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {allTests.map((test, i) => (
                <TestCard key={i} test={test} onAddToCart={handleAddToCart} />
              ))}
            </div>

            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <ChevronRight
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "50%",
                padding: "0.25rem",
                zIndex: 1,
                cursor: "pointer",
              }}
              size={30}
              onClick={scrollRight}
            />
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#6c757d" }}>
            No radiology tests found.
          </p>
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
