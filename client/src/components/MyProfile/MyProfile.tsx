import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './MyProfile.css';  
import UserService from '../../services/user_service.ts';
import { toast } from "react-toastify";

interface MyProfileModalProps {
  closeModal: () => void;
}

const MyProfileModal: React.FC<MyProfileModalProps> = ({ closeModal }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [previousCarts, setPreviousCarts] = useState<string[]>([]);
  const uid = localStorage.getItem('user_id');

  const userService = new UserService();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await userService.getUserProfile();
        setName(userProfile.name);
        setPhone(userProfile.phone);
        // Assuming the API returns previous carts
        setPreviousCarts(userProfile.previousCarts || []);
      } catch (error) {
        console.error('Error fetching user profile:', error);
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
      const updatedDetails = { name, phone , password};
      if (password) {
        if (password.length < 6) {
          toast.error("Password must be at least 6 characters");
          return;
        }
        updatedDetails.password = password;
      }

      await userService.updateUserProfile(updatedDetails);
      alert('Profile updated successfully');
    } catch (error) {
      alert('Failed to update profile. Please try again.');
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

        <h3 className="subtitle">סלים קודמים</h3>
        <div className="previous-carts-container">
          {previousCarts.length > 0 ? (
            <ul className="previous-carts-list">
              {previousCarts.map((cart, index) => (
                <li key={index}>{cart}</li>
              ))}
            </ul>
          ) : (
            <p>אין סלים קודמים</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfileModal;