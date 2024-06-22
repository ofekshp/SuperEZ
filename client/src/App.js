import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar.tsx';
import LandingPage from './components/LandingPage/LandingPage.tsx';
import MyBasket from './components/MyBasket/MyBasket.tsx';
import MeatFish from './components/MeatFish/MeatFish.tsx';


function App() {
 
  return (
    <Router>
    <Navbar />
    <div className="app-container"></div>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/MeatFish" element={<MeatFish />} />
    <Route path="/cart" element={<MyBasket />} />

    </Routes>
  </Router>
  );
 
   
}

export default App;
