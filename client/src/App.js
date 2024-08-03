// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import MyBasket from './components/MyBasket/MyBasket';
import FruitsAndVegetablesPage from './components/FruitVegetable/FruitsAndVegetablesPage';
import MeatFish from './components/MeatFish/MeatFish';
import Drinks from './components/Drinks/DrinksPage';
import Can_Dry_Page from './components/Can_Dry/Can_Dry_Page';
import Baking_Page from './components/Baking/Baking_Page';
import DeliPage from './components/Deli/DeliPage';
import FrozenPage from './components/Frozen/FrozenPage';
import CleaningDisposablePage from './components/CleaningDisposable/CleaningDisposablePage';
import PharmPage from './components/Pharm/PharmPage';
import { BasketProvider } from './components/MyBasket/BasketContext';

function App() {
  return (
    <BasketProvider>
    <Router>
      <Navbar />
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
          <Route path="/pharm" element={<PharmPage />} />
        </Routes>
    </Router>
    </BasketProvider>
  );  
}

export default App;
