import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import FarmHomePage from './components/FarmHome/FarmHomePage.tsx';

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
    <Route path="/Can_Dry" element={<Can_Dry_Page />} />
    <Route path="/Baking" element={<Baking_Page />} />
    <Route path="/fruits-vegetables" element={<FruitsAndVegetablesPage />} />
    <Route path="/dairy-products" element={<DeliPage />} />
    <Route path="/frozen" element={<FrozenPage />} />
    <Route path="/cleaning" element={<CleaningDisposablePage />} />
    <Route path="/pharm" element={<FarmHomePage />} />
    </Routes>
  </Router>
  );  
}
export default App;
