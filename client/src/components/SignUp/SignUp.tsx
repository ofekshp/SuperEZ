import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SignUp.css';
import { toast } from 'react-toastify';

interface SignUpModalProps {
  closemodal: () => void; // Function to close Sign-Up modal
}

const SignUpModal: React.FC<SignUpModalProps> = ({ closemodal }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleRegisterWithEmail = async (event: FormEvent) => {
    event.preventDefault();
    if (!name || !email || !password || !phone) {
      toast("Please fill all the fields");
      return;
    }
    if (phone.length !== 10) {
      toast("Please enter a valid phone number");
      return;
    }
    if (password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }
    if (!isValidEmail(email)) {
      toast("Please enter a valid email");
      return;
    }

    const formData = {
      email,
      password,
      name,
      phone,
    };

    try {
      const response = await fetch('/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast("Registration successful");
        closemodal(); // Close Sign-Up modal
      } else {
        toast("Failed to register, please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast("Failed to register, please try again later.");
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal-box">
        <h2 className="modal-title">הרשמה</h2>
        <form onSubmit={handleRegisterWithEmail}>
          <button type="button" className="close-button" onClick={closemodal}>X</button>
          <div className="form-control">
            <label htmlFor="email" className="input-label">כתובת מייל</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="fullName" className="input-label">שם מלא</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="input-field"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone" className="input-label">מספר טלפון</label>
            <div className="phone-input-container">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input-field phone-input"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                required
              />
              <span className="country-code">+972</span>
            </div>
            <p className="phone-disclaimer">לא נשתף את מספר הטלפון שלך עם אף אחד</p>
          </div>
          <div className="form-control">
            <label htmlFor="password" className="input-label">סיסמה</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="continue-button">המשך</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
