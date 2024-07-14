import React, { useState } from "react";
import "./Card.css";

const ProductCard = ({ image, name, onAddToCart, onRemoveFromCart }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    onAddToCart();
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemoveFromCart();
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <div className="buttons">
          {/* <button onClick={decrementCount}>-</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={incrementCount}
            className="buttonAction"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M12 19V5m7 7H5"
            ></path>
          </svg>
          <span>{count}</span>
          {/* <button onClick={incrementCount}>+</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={decrementCount}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
