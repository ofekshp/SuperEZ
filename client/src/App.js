import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar.tsx';
import LandingPage from './components/LandingPage/LandingPage.tsx';
import SignInModal from './components/SignIn/SignIn.tsx';
import SignUpModal from './components/SignUp/SignUp.tsx';

import MyBasket from './components/MyBasket/MyBasket.tsx';


function App() {
 
  return (
    <Router>
    <Navbar />
    <div className="app-container"></div>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/cart" element={<MyBasket />} />
    <Route path="/login" element={<SignInModal />} />
    <Route path="/signup" element={<SignUpModal />} />
    </Routes>
  </Router>
  );
 
   
}

export default App;
