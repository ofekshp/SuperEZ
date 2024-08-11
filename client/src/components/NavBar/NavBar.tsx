import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import SignInModal from '../SignIn/SignIn.tsx';
import SignUpModal from '../SignUp/SignUp.tsx';
import { toast } from 'react-toastify';
import UserService from "../../services/user_service.ts";

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Navbar: React.FC = () => {
  const defaultProfileImage = importImage('placeholder.png');
  const [modalOpen, setModalOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = document.cookie.includes('isLoggedIn=true');
    setIsUserLoggedIn(isLoggedIn);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSignUpOpen(false); // Ensure Sign-Up modal is also closed
  };

  const openSignUpModal = () => {
    setModalOpen(false); // Close Sign-In modal first
    setTimeout(() => setSignUpOpen(true), 300); // Wait a bit before opening Sign-Up
  };

  const handleSignOut = async () => {
    const userService:UserService = new UserService();
    try {
      const response = await userService.logoutUser();
      if (response) {
        toast.success('Logout successful');
        setIsUserLoggedIn(false);
        navigate('/');
      } else {
        toast.error('Failed to logout, please try again later.');
      }
    } catch (error) {
      toast.error('Logout error, please try again later.');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={importImage('logo_super_ez.jpeg')} alt="SuperEZ Logo" />
          </Link>
          <div className="navbar-search">
            <input type="text" placeholder="חיפוש" />
          </div>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/fruits-vegetables" className="navbar-link">
              פרי/ירק
            </Link>
          </li>
          <li>
            <Link to="/dairy-products" className="navbar-link">
              מעדנייה
            </Link>
          </li>
          <li>
            <Link to="/MeatFish" className="navbar-link">
              בשר/דגים
            </Link>
          </li>
          <li>
            <Link to="/Drinks" className="navbar-link">
              שתייה
            </Link>
          </li>
          <li>
            <Link to="/frozen" className="navbar-link">
              קפואים
            </Link>
          </li>
          <li>
            <Link to="/Can_Dry" className="navbar-link">
              יבשים/שימורים
            </Link>
          </li>
          <li>
            <Link to="/Baking" className="navbar-link">
              בישול/אפייה
            </Link>
          </li>
          <li>
            <Link to="/Baking" className="navbar-link">
              מתוקים 
            </Link>
          </li>
          <li>
            <Link to="/cleaning" className="navbar-link">
              ניקיון/חד"פ
            </Link>
          </li>
          <li>
            <Link to="/pharm" className="navbar-link">
              פארם/בית
            </Link>
          </li>
        </ul>
        <div className="navbar-right">
          <div className="navbar-profile">
            <img src={defaultProfileImage} alt="Default Profile" />
            {isUserLoggedIn ? (
              <button onClick={handleSignOut} className="navbar-login">
                התנתקות
              </button>
            ) : (
              <button onClick={openModal} className="navbar-login">
                התחברות
              </button>
            )}
            {modalOpen && (
              <SignInModal
                closeModal={closeModal}
                openSignUpModal={openSignUpModal}
                setIsUserLoggedIn={setIsUserLoggedIn}
              />
            )}
            {signUpOpen && <SignUpModal closeModal={() => setSignUpOpen(false)} />}
          </div>
          <Link to="/cart" className="navbar-cart">
            הסל שלי
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;