import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './MyProfile.css';  
import UserService from '../../services/user_service.ts';
import CartService from '../../services/cart_service.ts';
import { toast } from "react-toastify";
import { useBasket } from '../MyBasket/BasketContext.tsx'; 
import { useNavigate } from 'react-router-dom';

interface MyProfileModalProps {
  closeModal: () => void;
}

interface Product {
  name: string;
  quantity: number;
}

interface Cart {
  date: string;
  products: Product[];
}

const MyProfileModal: React.FC<MyProfileModalProps> = ({ closeModal }) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [previousCarts, setPreviousCarts] = useState<Cart[]>([]);
  const { addProduct } = useBasket(); // השתמש ב־addProduct
  const {clearBasket}= useBasket(); // ניקוי הסל הנוכחי
  const navigate = useNavigate();


  const userService = new UserService();
  const cartService = new CartService();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await userService.getUserProfile(); // קריאה ללא פרמטרים
        setName(userProfile.name);
        setPhone(userProfile.phone);
        const carts = await cartService.getUserCarts(); // קריאה ללא פרמטרים
        setPreviousCarts(carts);
      } catch (error) {
        console.error('Error fetching user profile or carts:', error);
        setPreviousCarts([]);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSaveChanges = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (phone.length !== 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    try {
      const updatedDetails = { name, phone, password };
      if (password) {
        if (password.length < 6) {
          toast.error("Password must be at least 6 characters");
          return;
        }
        updatedDetails.password = password;
      }

      await userService.updateUserProfile(updatedDetails);
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };



  const handleSelectCart = async (cart: Cart) => {
 

    try {
      console.log('Before clearing basket:');
      await clearBasket();
      console.log('After clearing basket:');
      
      // Wait a short time to ensure the basket is cleared before adding new products
      await new Promise(resolve => setTimeout(resolve, 100));
      await cart.products.forEach(product => {
  addProduct({ name: product.name, quantity: product.quantity });
      });
      toast.success('הסל שבחרת נוסף בהצלחה לסל שלך');
      closeModal();
navigate('/cart');
    } catch (error) {
      console.error('Error adding cart to basket:', error);
      toast.error('Failed to add cart to basket. Please try again.');
    }
  };
  
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="close-button" onClick={closeModal}>X</button>
        <h2 className="modal-title">אזור אישי</h2>
        <form onSubmit={handleSaveChanges}>
          <div className="form-control">
            <label htmlFor="name" className="input-label">שם מלא</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              value={name}
              onChange={handleChangeName}
              required
            />
          </div>
      
          <div className="form-control">
            <label htmlFor="phone" className="input-label">טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              value={phone}
              onChange={handleChangePhone}
              required
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="password" className="input-label">סיסמה חדשה (אופציונלי)</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          
          <div className="button-container">
            <button type="submit" className="save-button-profile">שמור שינויים</button>
          </div>
        </form>
        <h3 className="subtitle">הסלים הקודמים שלי</h3>
        <div className="previous-carts-container">
  {previousCarts.length > 0 ? (
    <div className="carts-scrollable-list">
      {previousCarts.map((cart, index) => (
        <div key={index} className="cart-item">
          <h4>סל מספר {index + 1}</h4>
          <p>תאריך רכישה: {formatDate(cart.date) || 'לא זמין'}</p>
          <p>כמות פריטים: {cart.products ? cart.products.length : 0}</p>
          <div className="products-list">
            {cart.products && cart.products.map((product, prodIndex) => (
              <li key={prodIndex}>
                {product.name} - כמות: {product.quantity}
              </li>
            ))}
          </div>
          <button className="select-button" onClick={() => handleSelectCart(cart)}>
                    בחר
                  </button>
        </div>
      ))}
    </div>
  ) : (
    <p>אין סלים קודמים</p>
  )}
</div>

      </div>
    </div>
  );
};

export default MyProfileModal;
