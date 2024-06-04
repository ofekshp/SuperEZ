import React, { useState } from 'react';
import './MyBasket.css';

interface BasketItemProps {
  image: string;
  name: string;
  quantity: number;
}

const BasketItem: React.FC<BasketItemProps> = ({ image, name, quantity }) => (
  <div className="basket-item">
    <img src={image} alt={name} className="basket-item__image" />
    <div className="basket-item__details">
      <div className="basket-item__name-quantity">
        <h3 className="basket-item__name">{name}</h3>
        <span className="basket-item__quantity">+ יחידות {quantity}</span>
      </div>
    </div>
  </div>
);

const BasketList: React.FC<{ items: BasketItemProps[] }> = ({ items }) => (
  <div className="basket-list">
    {items.map((item, index) => (
      <BasketItem
        key={index}
        image={item.image}
        name={item.name}
        quantity={item.quantity}
      />
    ))}
  </div>
);

const MyBasket: React.FC = () => {
  const [basketItems, setBasketItems] = useState<BasketItemProps[]>([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [streetAndHouse, setStreetAndHouse] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');

  const handleAddItem = (item: BasketItemProps) => {
    setBasketItems([...basketItems, item]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...basketItems];
    newItems.splice(index, 1);
    setBasketItems(newItems);
  };

  return (
    <div className="my-basket" dir="rtl">
      <div className="my-basket__header">
          <h2 className="my-basket__title">הסל שלי</h2>
      </div>
      <div className="basket-list-container">
        <BasketList items={basketItems} />
      </div>
      <div className="my-basket__form-container">
        <div className="my-basket__address-form">
          <div>
            <label htmlFor="email" className="my-basket__form-label">
            </label>
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
            <label htmlFor="phone" className="my-basket__form-label">
            </label>
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
            <label htmlFor="fullName" className="my-basket__form-label">
            </label>
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
            <label htmlFor="city" className="my-basket__form-label">
            </label>
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
            <label htmlFor="streetAndHouse" className="my-basket__form-label">
            </label>
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
            <label htmlFor="floorNumber" className="my-basket__form-label">
            </label>
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
            <label htmlFor="apartmentNumber" className="my-basket__form-label">
            </label>
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
          <a href="#" className="my-basket__login-link">
            התחברו כאן
          </a>
        </div>
      </div>
      <div className="my-basket__footer-container">
        <div className="my-basket__footer">
          <button className="my-basket__checkout-button">המשך לתשלום</button>
        </div>
      </div>
    </div>
  );
};

export default MyBasket;