import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar.tsx';
import LandingPage from './components/LandingPage/LandingPage.tsx';
import MyBasket from './components/MyBasket/MyBasket.tsx';
import FruitsAndVegetablesPage from './components/FruitVegetable/FruitsAndVegetablesPage.tsx';
import MeatFish from './components/MeatFish/MeatFish.tsx';
import Drinks from './components/Drinks/DrinksPage.tsx';

function App() {
 
  return (
    <Router>
    <Navbar />
    <div className="app-container"></div>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/cart" element={<MyBasket />} />
    <Route path="/MeatFish" element={<MeatFish />} />
    <Route path="/Drinks" element={<Drinks />} />
    <Route path="/fruits-vegetables" element={<FruitsAndVegetablesPage />} />
    </Routes>
  </Router>
  );  
}
export default App;
