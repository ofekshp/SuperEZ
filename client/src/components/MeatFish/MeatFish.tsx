import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/MeatFish/${imageName}`);
  } catch (error) {
    return null;
  }
};

const MeatFish: React.FC = () => {
  const { addProduct } = useBasket();

  const initialMeat = [
    {
      name: "סינטה",
      image: importImage('sinta.jpeg'),
    },
    {
      name: "אנטריקוט",
      image: importImage('antrikot.jpeg'),
    },
    {
      name: "כתף",
      image: importImage('katef.jpeg'),
    },
    {
      name: "פילה מדומה",
      image: importImage('File_Medome.png'),
    }
  ];
  initialMeat.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const initialFish = [
    {
      name: "סלמון",
      image: importImage('salmon.png'),
    },
    {
      name: "קוד",
      image: importImage('cod.png'),
    },
    {
      name: "טונה",
      image: importImage('tuna.png'),
    }
  ];
  initialFish.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [meats, setMeats] = useState<{ name: string; image: string | null; count: number }[]>(initialMeat.map(item => ({ ...item, count: 0 })));
  const [fishes, setFishes] = useState<{ name: string; image: string | null; count: number }[]>(initialFish.map(item => ({ ...item, count: 0 })));

  const handleIncrement = (name: string) => {
    setMeats(meats.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
    setFishes(fishes.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  };

  const handleDecrement = (name: string) => {
    setMeats(meats.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
    setFishes(fishes.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const handleSave = async () => {
    const meatsToSave = meats.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const fishesToSave = fishes.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

    const allItems = [...meatsToSave, ...fishesToSave];
    allItems.forEach(item => addProduct(item));

    // Reset quantities after saving
    setMeats(meats.map(item => ({ ...item, count: 0 })));
    setFishes(fishes.map(item => ({ ...item, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={meats}
          categoryTitle="בשר"
          icon={<img alt="" src={importImage('meat_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
      <div>
        <ProductsPage
          products={fishes}
          categoryTitle="דגים"
          icon={<img alt="" src={importImage('fish_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
      <div className="button-group">
        <button className="btn btn-primary" onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
};

export default MeatFish;
