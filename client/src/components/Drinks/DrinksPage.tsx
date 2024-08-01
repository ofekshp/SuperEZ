import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Drinks/${imageName}`);
  } catch (error) {
    return null;
  }
};

const DrinksPage: React.FC = () => {
  const { addProduct } = useBasket();

  const initialSweetDrinks = [
    {
      name: "קוקה קולה",
      image: importImage('Cola.png'),
    },
    {
      name: "קוקה קולה זירו",
      image: importImage('Cola_Zero.png'),
    }
  ];

  const initialAlcoholDrinks = [
    {
      name: "בלאק לייבל",
      image: importImage('Black_Label.png'),
    },
    {
      name: "רד לייבל",
      image: importImage('Red_Label.png'),
    }
  ];

  const [sweets, setSweets] = useState<{ name: string; image: string | null; count: number }[]>(initialSweetDrinks.map(drink => ({ ...drink, count: 0 })));
  const [alcohols, setAlcohols] = useState<{ name: string; image: string | null; count: number }[]>(initialAlcoholDrinks.map(drink => ({ ...drink, count: 0 })));

  const handleIncrement = (name: string) => {
    setSweets(sweets.map(drink =>
      drink.name === name ? { ...drink, count: drink.count + 1 } : drink
    ));
    setAlcohols(alcohols.map(drink =>
      drink.name === name ? { ...drink, count: drink.count + 1 } : drink
    ));
  };

  const handleDecrement = (name: string) => {
    setSweets(sweets.map(drink =>
      drink.name === name && drink.count > 0 ? { ...drink, count: drink.count - 1 } : drink
    ));
    setAlcohols(alcohols.map(drink =>
      drink.name === name && drink.count > 0 ? { ...drink, count: drink.count - 1 } : drink
    ));
  };

  const handleSave = async () => {
    const sweetDrinksToSave = sweets.filter(drink => drink.count > 0).map(drink => ({ ...drink, quantity: drink.count }));
    const alcoholDrinksToSave = alcohols.filter(drink => drink.count > 0).map(drink => ({ ...drink, quantity: drink.count }));

    const allDrinks = [...sweetDrinksToSave, ...alcoholDrinksToSave];
    allDrinks.forEach(drink => addProduct(drink));

    // Reset quantities after saving
    setSweets(sweets.map(drink => ({ ...drink, count: 0 })));
    setAlcohols(alcohols.map(drink => ({ ...drink, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={sweets}
          categoryTitle="שתייה מתוקה"
          icon={<img alt="" src={importImage('sweet_drinks_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={alcohols}
          categoryTitle="שתייה חריפה"
          icon={<img alt="" src={importImage('alcohol_drinks_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>    
    </div>
  );
};

export default DrinksPage;
