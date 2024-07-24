import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import './SignIn.css';
import SignUpModal from '../SignUp/SignUp.tsx';

interface SignInModalProps {
  closeModal: () => void;
  openSignUpModal: () => void; // Add this prop
}

const SignInModal: React.FC<SignInModalProps> = ({ closeModal, openSignUpModal }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const server_url = process.env.REACT_APP_SERVER_URL;
  const server_port = process.env.REACT_APP_SERVER_PORT;

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignInWithEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      toast("Please enter your email and password");
      return;
    }
    try {
      const user = { email, password };
      const loginResponse = await fetch(`${server_url}:${server_port}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const data = await loginResponse.json();
      if (loginResponse.ok) {
        toast("Login successful");
        closeModal(); // Close Sign-In modal
      } else {
        toast("Failed to login, please try again later.");
      }
    } catch (error) {
      console.error('Login error:', error);
      toast("Failed to login, please try again later.");
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <h2 className="modal-title">ברוך שובך!</h2>
          <form onSubmit={handleSignInWithEmail}>
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
              <label htmlFor="password" className="input-label">סיסמה</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input-field"
                value={password}
                onChange={handleChangePassword}
                required
              />
            </div>
            <p className="forgot-password">
              <a href="#" className="forgot-password-link">שכחתי סיסמה</a>
            </p>
            <button type="submit" className="continue-button">המשך</button>
            <div className="signup-box">
              <p className="signup-text">
                אין לך חשבון?
                <button
                  type="button"
                  onClick={openSignUpModal}
                  className="signup-link"
                >
                  הרשם
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInModal;
