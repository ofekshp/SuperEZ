import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Navbar from './components/NavBar/NavBar.tsx';
import LandingPage from './components/LandingPage/LandingPage.tsx';
import MyBasket from './components/MyBasket/MyBasket.tsx';
import FruitsAndVegetablesPage from './components/FruitVegetable/FruitsAndVegetablesPage.tsx';
import MeatFish from './components/MeatFish/MeatFish.tsx';
import Drinks from './components/Drinks/DrinksPage.tsx';
import Can_Dry_Page from './components/Can_Dry/Can_Dry_Page.tsx';
import Baking_Page from './components/Baking/Baking_Page.tsx';
import DeliPage from './components/Deli/DeliPage.tsx';
import FrozenPage from './components/Frozen/FrozenPage.tsx';
import CleaningDisposablePage from './components/CleaningDisposable/CleaningDisposablePage.tsx';
import PharmPage from './components/Pharm/PharmPage.tsx';
import { BasketProvider } from './components/MyBasket/BasketContext.tsx';
import SignInModal from './components/SignIn/SignIn.tsx';
import SignUpModal from './components/SignUp/SignUp.tsx';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  

  useEffect(() => {
    const checkLoginStatus = () => {
      const userEmail = localStorage.getItem('userEmail');
      const isLoggedIn = document.cookie.includes('isLoggedIn=true');
      if (userEmail && isLoggedIn) {
        setIsUserLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);


  return (
    <BasketProvider>
    <Router>
            <div className="App">
      <Navbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<MyBasket />} />
        <Route
          path="/login"
          element={
            isUserLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <SignInModal closeModal={() => {}} openSignUpModal={() => {}} setIsUserLoggedIn={setIsUserLoggedIn} />
            )
          }
        />
        <Route path="/signup" element={<SignUpModal />} />
        <Route path="/logout"/>
        <Route path="reset-password"/>
        <Route path="/MeatFish" element={<MeatFish />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Can_Dry" element={<Can_Dry_Page />} />
        <Route path="/Baking" element={<Baking_Page />} />
        <Route path="/fruits-vegetables" element={<FruitsAndVegetablesPage />} />
        <Route path="/dairy-products" element={<DeliPage />} />
          <Route path="/frozen" element={<FrozenPage />} />
          <Route path="/cleaning" element={<CleaningDisposablePage />} />
          <Route path="/pharm" element={<PharmPage />} />
      </Routes>
      <ToastContainer/>

  </div>
    </Router>
    </BasketProvider>

  );

}

export default App;
