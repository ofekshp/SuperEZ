import React, { useState } from 'react';
import { useBasket } from '../MyBasket/BasketContext';
import './MyBasket.css';

interface Product {
  name: string;
  quantity: number;
}

const MyBasket: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([
  //   { name: 'Apple', quantity: 2 },
  //   { name: 'Banana', quantity: 3 },
  //   { name: 'Orange', quantity: 5 },
  // ]);

  // const addProduct = (newProduct: Product) => {
  //   setProducts([...products, newProduct]);
  // };

  // const removeProduct = (productName: string) => {
  //   setProducts(products.filter((product) => product.name !== productName));
  // };

  const { basketProducts, addProduct } = useBasket();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [streetAndHouse, setStreetAndHouse] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  
  return (
    <div className="my-basket" dir="rtl">
      <div className="my-basket__header">
        <h2 className="my-basket__title">פרטי התקשרות</h2>
      </div>
      <div className="my-basket__content">
        <div className="my-basket__product-list">
          {basketProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <span className="product-name">{product.name}</span>
              <span className="product-quantity">כמות: {product.quantity}</span>
            </div>
          ))}
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default MyBasket;
