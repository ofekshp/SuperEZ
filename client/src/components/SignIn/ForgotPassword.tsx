import React, { useState, ChangeEvent, FormEvent } from 'react';
import './ForgotPassword.css';
import { toast } from 'react-toastify';
import UserService from "../../services/user_service.ts";

interface ForgotPasswordModalProps {
  closeModal: () => void;
  setIsUserLoggedIn: (loggedIn: boolean) => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ closeModal, setIsUserLoggedIn }) => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !phone || !newPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    const dataToSend = { email, phone, newPassword };
    const userService: UserService = new UserService();

    try {
      const response = await userService.resetPassword(dataToSend);
      if (response.success) {
        toast.success("Password changed successfully");

        // Auto login the user
        const loginResponse = await userService.loginUser({ email, password: newPassword, name: '', phone: '' });
        if (loginResponse) {
          toast.success("Login successful");
          setIsUserLoggedIn(true);
          closeModal();
        } else {
          toast.error("Failed to login after password change");
        }
      } else {
        toast.error(response.message);
        toast.error("Invalid email or phone number");
      }
    } catch (error) {
      toast.error("Failed to reset password, please try again later.");
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal-box">
        <h2 className="modal-title">שחזור סיסמה</h2>
        <form onSubmit={handleResetPassword}>
          <button type="button" className="close-button" onClick={closeModal}>X</button>
          <div className="form-control">
            <label htmlFor="email" className="input-label">כתובת מייל</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone" className="input-label">מספר טלפון</label>
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
            <label htmlFor="newPassword" className="input-label">סיסמה חדשה</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="input-field"
              value={newPassword}
              onChange={handleChangeNewPassword}
              required
            />
          </div>
          <button type="submit" className="change-password-button">שנה סיסמה</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
