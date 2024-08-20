import React from "react";
import "../Card/Card.css";

const ProductCard = ({ image, name, count, onIncrement, onDecrement, onSave }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
      <h2>{name}</h2>
        <div className="buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={onDecrement}
            className="buttonAction"
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
          <span>{count}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={onIncrement}
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
        </div>
        <div className="save-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            onClick={onSave}
            className="buttonAction"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
