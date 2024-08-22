import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';
import SignInModal from '../SignIn/SignIn.tsx';
import SignUpModal from '../SignUp/SignUp.tsx';
import MyProfileModal from '../MyProfile/MyProfile.tsx';
import UserService from '../../services/user_service.ts';
import { toast } from 'react-toastify';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Navbar: React.FC = () => {
  const defaultProfileImage = importImage('placeholder.png');
  const CartImage = importImage('Cart.png');
  const [modalOpen, setModalOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [myProfileOpen, setMyProfileOpen] = useState(false); 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
    setSignUpOpen(false); 
    setMyProfileOpen(false); 
  };

  const openSignUpModal = () => {
    setModalOpen(false); 
    setTimeout(() => setSignUpOpen(true), 300); 
  };

  const openMyProfileModal = () => {
    setMyProfileOpen(true); 
  };

  const handleSignOut = async () => {
    const userService = new UserService();
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

  const goToCart = () => {
    navigate('/cart');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={importImage('logo_super_ez.png')} alt="SuperEZ Logo" />
          </Link>
          <form className="navbar-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="חיפוש"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
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
            {isUserLoggedIn ? (
              <>
                <button onClick={handleSignOut} className="navbar-logout">התנתקות</button>
                <button onClick={openMyProfileModal} className="navbar-profile-button">אזור אישי</button>
              </>
            ) : (
              <>
              <img src={defaultProfileImage} alt="Default Profile" />
              <button onClick={openModal} className="navbar-login">התחברות</button>   
             
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
            {myProfileOpen && <MyProfileModal closeModal={closeModal}  />} 
          </div>
          
          <img className="navbar-cart-img" src={CartImage} alt="cart" />

          <button onClick={goToCart} className="navbar-cart">
            הסל שלי
          </button>
     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;