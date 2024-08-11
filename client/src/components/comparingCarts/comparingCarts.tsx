import React from 'react';
import { useLocation } from 'react-router-dom';
import './comparingCarts.css';

const ComparingCarts: React.FC = () => {
  const location = useLocation();
  const { superCarts } = location.state || {};

  return (
    <div className="comparing-carts-container">
      <h1 className="result-header">:תוצאה</h1>
      <div className="cart-columns">
        {superCarts.map((cart: any, index: number) => (
          <div key={index} className="cart-row">
            <div className="cart-content">
              <h2 className="cart-header">{cart.name}</h2>
              <p className="cart-total">מחיר מלא: {cart.totalPrice}</p>
            </div>
            <button className="order-btn">להזמנה</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparingCarts;