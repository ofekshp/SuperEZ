import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Drinks/${imageName}`);
  } catch (error) {
    return null;
  }
};

const DrinksPage: React.FC = () => {
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

  const [sweets] = React.useState<{ name: string; image: string | null; }[]>(initialSweetDrinks);
  const [alcohols] = React.useState<{ name: string; image: string | null; }[]>(initialAlcoholDrinks);

  return (
    <div>
      <div>
        <ProductsPage
          products={sweets}
          categoryTitle="שתייה מתוקה"
          icon={<img alt="" src={importImage('')} />}
        />
      </div>
      <div>
        <ProductsPage
          products={alcohols}
          categoryTitle="שתייה חריפה"
          icon={<img alt="" src={importImage('')} />}
        />
      </div>
    </div>
  );
}

export default DrinksPage;
