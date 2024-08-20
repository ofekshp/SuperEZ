import React, { useState, useEffect } from "react";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import "./MyBasket.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import SignInModal from "../SignIn/SignIn.tsx";
import SignUpModal from "../SignUp/SignUp.tsx";
import { useNavigate } from 'react-router-dom';
import './MyBasket.css';
import CartService from '../../services/cart_service.ts';


const MyBasket: React.FC = () => {
  const { basketProducts, removeProduct } = useBasket();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [streetAndHouse, setStreetAndHouse] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const cartService = new CartService();
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = document.cookie.includes("isLoggedIn=true");
    setIsUserLoggedIn(isLoggedIn);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSignUpOpen(false);
  };

  const openSignUpModal = () => {
    setModalOpen(false);
    setTimeout(() => setSignUpOpen(true), 300);
  };

  
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
                aria-label={'Remove ${product.name}'}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        </div>
        <h1 className="my-basket__title">פרטי משלוח</h1>
        <div className="my-basket__form-container">
          <div className="my-basket__address-form">
            {isUserLoggedIn ? (
              <>
                <div>
                  <label htmlFor="city" className="my-basket__form-label">
                    עיר:
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
                  <label
                    htmlFor="streetAndHouse"
                    className="my-basket__form-label"
                  >
                    רחוב ומספר בית:
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
                  <label
                    htmlFor="floorNumber"
                    className="my-basket__form-label"
                  >
                    מספר קומה:
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
                  <label
                    htmlFor="apartmentNumber"
                    className="my-basket__form-label"
                  >
                    מספר דירה:
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
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="email" className="my-basket__form-label">
                    אימייל:
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
                    טלפון:
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
                    שם מלא:
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
                    עיר:
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
                  <label
                    htmlFor="streetAndHouse"
                    className="my-basket__form-label"
                  >
                    רחוב ומספר בית:
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
                  <label
                    htmlFor="floorNumber"
                    className="my-basket__form-label"
                  >
                    מספר קומה:
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
                  <label
                    htmlFor="apartmentNumber"
                    className="my-basket__form-label"
                  >
                    מספר דירה:
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

                <div className="my-basket__login-prompt">
                  <span>רוצים לשמור את הסל שלכם? </span>
                  <button className="my-basket__login-link" onClick={openModal}>
                    התחברו כאן
                  </button>
                </div>
              </>
            )}
            {modalOpen && (
              <SignInModal
                closeModal={closeModal}
                openSignUpModal={openSignUpModal}
                setIsUserLoggedIn={setIsUserLoggedIn}
              />
            )}
            {signUpOpen && <SignUpModal closeModal={closeModal} />}
          </div>
          <div>
          <button className="my-basket__order-button" onClick={handleSubmit}>הזמן עכשיו</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBasket;