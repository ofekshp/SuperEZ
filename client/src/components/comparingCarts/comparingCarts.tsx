import React from 'react';
import { useLocation } from 'react-router-dom';
import './comparingCarts.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Supers/${imageName}`);
  } catch (error) {
    return null;
  }
};

const ComparingCarts: React.FC = () => {
  const location = useLocation();
  const { superCarts } = location.state || {};

  const getDeliveryPrice = (index: number) => {
    switch (index) {
      case 0: // Rami Levi
        return 29.90; 
      case 1: // Victory
        return 30.00; 
      case 2: // Hazi-Hinam
        return 29.00; 
      default:
        return 0;
    }
  };

  const getLogo = (index: number) => {
    switch (index) {
      case 0: // Rami Levi
        return importImage('RamiLevi.png');
      case 1: // Victory
        return importImage('Victory.png');
      case 2: // Hazi-Hinam
        return importImage('HaziHinam.png');
      default:
        return null;
    }
  };

  return (
    <div className="comparing-carts-container">
      <h1 className="result-header">:תוצאה</h1>
      <div className="cart-column">
        {superCarts.map((cart: any, index: number) => {
          const deliveryPrice = getDeliveryPrice(index);
          const totalWithDelivery = cart.totalPrice + deliveryPrice;
          const logo = getLogo(index);
          
          return (
            <div key={index} className="cart-row">
              <div className="cart-content">
                {logo && <img src={logo} alt={`${cart.name} Logo`} className="cart-logo" />}
                <h2 className="cart-header">{cart.name}</h2>
                <p className="cart-price">מחיר סל: {cart.totalPrice}</p>
                <p className="delivery-price">דמי משלוח: {deliveryPrice}</p>
                <p className="total-price">סה"כ לתשלום: {totalWithDelivery}</p>
              </div>
              <button className="order-btn">להזמנה</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparingCarts;