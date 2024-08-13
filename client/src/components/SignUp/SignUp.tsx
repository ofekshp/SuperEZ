import React, { useState, ChangeEvent, FormEvent } from "react";
import "./SignUp.css";
import { toast } from "react-toastify";
import UserService from "../../services/user_service.ts";

interface SignUpModalProps {
  closeModal: () => void; // Updated prop name to 'closeModal'
}

const SignUpModal: React.FC<SignUpModalProps> = ({ closeModal }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleRegisterWithEmail = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    // Form validation
    if (!name || !email || !password || !phone) {
      toast.error("Please fill all the fields");
      return;
    }
    if (phone.length !== 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    const dataToSend = {
      email,
      password,
      name,
      phone,
    };

    const userService:UserService = new UserService();
    try{
      const response = await userService.registerUser(dataToSend);
      if (response) {
        closeModal();
        toast.success("Register Success!");
        await userService.loginUser(dataToSend);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        toast.error("Failed to register, please try again later.");
      }
    }
    catch (error) {
      console.error(error);
      toast.error("Failed to register, please try again later.");
    }
}

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal-box">
        <h2 className="modal-title">הרשמה</h2>
        <form onSubmit={handleRegisterWithEmail}>
          <button type="button" className="close-button" onClick={closeModal}>
            X
          </button>
          <div className="form-control">
            <label htmlFor="email" className="input-label">
              כתובת מייל
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="fullName" className="input-label">
              שם מלא
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="input-field"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone" className="input-label">
              מספר טלפון
            </label>
            <div className="phone-input-container">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input-field phone-input"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                required
              />
            </div>
            <p className="phone-disclaimer">
              לא נשתף את מספר הטלפון שלך עם אף אחד
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="password" className="input-label">
              סיסמה
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>
          <button type="submit" className="continue-button">
            המשך
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUpModal;
