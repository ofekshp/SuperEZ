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

  const getDeliveryPrice = (cartName: string) => {
    switch (cartName) {
      case 'רמי לוי': // Rami Levi
        return 29.90; 
      case 'ויקטורי': // Victory
        return 30.00; 
      case 'חצי חינם': // Hazi-Hinam
        return 29.00; 
      default:
        return 0;
    }
  };

  const getLogo = (cartName: string) => {
    switch (cartName) {
      case 'רמי לוי': // Rami Levi
        return importImage('RamiLevi.png');
      case 'ויקטורי': // Victory
        return importImage('Victory.png');
      case 'חצי חינם': // Hazi-Hinam
        return importImage('HaziHinam.png');
      default:
        return null;
    }
  };

  return (
    <div className="comparing-carts-container">
      <h1 className="result-header">:תוצאה</h1>
      <div className="cart-column">
        {superCarts.map((cart: any) => {
          const deliveryPrice = getDeliveryPrice(cart.name);
          const totalWithDelivery = cart.totalPrice + deliveryPrice;
          const logo = getLogo(cart.name);
          
          return (
            <div key={cart.name} className="cart-row">
              <div className="cart-content">
                {logo && <img src={logo} alt={`${cart.name} Logo`} className="cart-logo" />}
                <h2 className="cart-header">{cart.name}</h2>
                <p className="cart-price">מחיר סל: {cart.totalPrice.toFixed(2)}</p>
                <p className="delivery-price">דמי משלוח: {deliveryPrice}</p>
                <p className="total-price">סה"כ לתשלום: {totalWithDelivery.toFixed(2)}</p>
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