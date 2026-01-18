import React, { useState, useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import "../styles/Cart.css";

export default function Cart({ isOpen, onToggle }) {
  // Временные данные корзины
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      quantity: 1,
      image: "https://via.placeholder.com/60x60?text=iPhone",
      color: "Natural Titanium",
    },
    {
      id: 2,
      name: "AirPods Pro 2nd Gen",
      price: 249,
      quantity: 2,
      image: "https://via.placeholder.com/60x60?text=AirPods",
      color: "White",
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      price: 249,
      quantity: 2,
      image: "https://via.placeholder.com/60x60?text=AirPods",
      color: "White",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;
  const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const containerRef = useRef(null);

  const cartNode = (
    <div ref={containerRef} className={`floating-cart ${isOpen ? "expanded" : ""}`}>
      {/* Кнопка переключения */}
      <button
        className="cart-toggle-btn"
        onClick={onToggle}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        {itemsCount > 0 && <span className="cart-badge">{itemsCount}</span>}
        <span className="cart-label">Cart</span>
      </button>

      {/* Содержимое корзины */}
      <div className="cart-content">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <span className="items-count">{itemsCount} items</span>
        </div>

        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-mini-item">
                <img
                  src={item.image}
                  alt={item.id}
                  className="item-image"
                />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p className="item-color">{item.color}</p>
                  <div className="item-bottom">
                    <span className="item-price">${item.price}</span>
                    <div className="item-quantity">
                      <button
                        className="qty-mini-btn"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="qty-mini-btn"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-mini-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );

  // Close cart when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;
    function handleDown(e) {
      if (!containerRef.current) return;
      // If click is outside the cart container, toggle (close)
      if (!containerRef.current.contains(e.target)) {
        if (typeof onToggle === 'function') onToggle();
      }
    }

    function handleKey(e) {
      if (e.key === 'Escape') {
        if (typeof onToggle === 'function') onToggle();
      }
    }

    document.addEventListener('mousedown', handleDown);
    document.addEventListener('touchstart', handleDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('touchstart', handleDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onToggle]);

  // Render the floating cart into document.body so it stays fixed to viewport
  return createPortal(cartNode, document.body);
}