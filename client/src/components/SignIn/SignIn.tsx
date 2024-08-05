import React, { useState, ChangeEvent, FormEvent } from 'react';
import './SignIn.css';
import { toast } from 'react-toastify';

interface SignInModalProps {
  closeModal: () => void;
  openSignUpModal: () => void;
  setIsUserLoggedIn: (loggedIn: boolean) => void;
  

}

const SignInModal: React.FC<SignInModalProps> = ({ closeModal, openSignUpModal,setIsUserLoggedIn }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  // Updated function name for consistency
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Updated function name for consistency
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Improved error handling and validation
  const handleSignInWithEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation checks
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    const user = { email, password };

    // Using environment variables for server URL and port
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const port = process.env.REACT_APP_SERVER_PORT;

    if (!serverUrl || !port) {
      console.error('Server URL or port is not defined');
      return;
    }

    const apiUrl = `${serverUrl}:${port}/users/login`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        toast.success("Login successful");
        console.log('User data:', data); // Log user data
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userId', data.userId);
        document.cookie = `isLoggedIn=true;path=/`;
        setIsUserLoggedIn(true);
        closeModal();
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData); // Log error details
        toast.error(errorData.message || "Failed to login, please try again later.");
      }
    } catch (error) {
      console.error('Login error:', error); // Log fetch error
      toast.error("Failed to login, please try again later.");
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal-box">
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
  );
};

export default SignInModal;
