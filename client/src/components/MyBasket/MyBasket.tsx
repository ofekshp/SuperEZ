import React, { useState } from 'react';
import { useBasket } from '../MyBasket/BasketContext.tsx';
import { useNavigate } from 'react-router-dom';
import './MyBasket.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartService from '../../services/cart_service.ts';

const MyBasket: React.FC = () => {
  const cartService = new CartService();
  const navigate = useNavigate();
  const { basketProducts , addProduct , removeProduct} = useBasket();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [streetAndHouse, setStreetAndHouse] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  
  const handleSubmit = async () => {
    try{
      const response = await cartService.getCheapCart(basketProducts);
      navigate('/comparingCarts', { state: { superCarts: response } });
      console.log(response);
    }catch (error) {
      console.error('Error add product:', error);
    }
  }

  return (
    <div className="my-basket" dir="rtl">
      <h1 className="my-basket__title">הסל שלי</h1>
      <div className="my-basket__content">
        <div className="my-basket__product-list">
          {basketProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <span className="product-name">{product.name}</span>
              <span className="product-quantity">כמות: {product.quantity}</span>
              <button
                className="delete-button"
                onClick={() => removeProduct(product.name)}
                aria-label={`Remove ${product.name}`}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
        <h1 className="my-basket__title">פרטי משלוח</h1>
        <div className="my-basket__form-container">
          <div className="my-basket__address-form">
            <div>
              <label htmlFor="email" className="my-basket__form-label">אימייל:</label>
              <input
                id="email"
                type="email"
                className="my-basket__form-input"
                placeholder="הכנס אימייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone" className="my-basket__form-label">טלפון:</label>
              <input
                id="phone"
                type="text"
                className="my-basket__form-input"
                placeholder="הכנס טלפון"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="fullName" className="my-basket__form-label">שם מלא:</label>
              <input
                id="fullName"
                type="text"
                className="my-basket__form-input"
                placeholder="הכנס שם מלא"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city" className="my-basket__form-label">עיר:</label>
              <input
                id="city"
                type="text"
                className="my-basket__form-input"
                placeholder="הכנס עיר"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="streetAndHouse" className="my-basket__form-label">רחוב ומספר בית:</label>
              <input
                id="streetAndHouse"
                type="text"
                className="my-basket__form-input"
                placeholder="הכנס רחוב ומספר בית"
                value={streetAndHouse}
                onChange={(e) => setStreetAndHouse(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="floorNumber" className="my-basket__form-label">מספר קומה:</label>
              <input
                id="floorNumber"
                type="text"
                className="my-basket__form-input"
                placeholder="הכנס מספר קומה"
                value={floorNumber}
                onChange={(e) => setFloorNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="apartmentNumber" className="my-basket__form-label">מספר דירה:</label>
              <input
                id="apartmentNumber"
                type="text"
                className="my-basket__form-input"
                placeholder="הכנס מספר דירה"
                value={apartmentNumber}
                onChange={(e) => setApartmentNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="my-basket__login-prompt">
            <span>רוצים לשמור את הסל שלכם? </span>
            <a href="#" className="my-basket__login-link">התחברו כאן</a>
          </div>
          <div>
          <button className="my-basket__order-button" onClick={handleSubmit}>הזמן עכשיו</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBasket;
