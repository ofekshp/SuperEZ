import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo_super_ez.jpeg';
import defaultProfileImage from '../../assets/placeholder.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="SuperEZ Logo" />
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
            <Link to="/beverages" className="navbar-link">
              שתייה
            </Link>
          </li>
          <li>
            <Link to="/frozen" className="navbar-link">
              קפואים
            </Link>
          </li>
          <li>
            <Link to="/dry-goods" className="navbar-link">
              יבשים
            </Link>
          </li>
          <li>
            <Link to="/baking" className="navbar-link">
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
            <img src={defaultProfileImage} alt="Default Profile" />
            <Link to="/login" className="navbar-login">
              התחברות
            </Link>
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