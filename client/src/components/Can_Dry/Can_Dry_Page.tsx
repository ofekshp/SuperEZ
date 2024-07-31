import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Can_Dry/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Can_Dry_Page: React.FC = () => {
  const initialCan = [
    {
      name: "זיתים ירוקים",
      image: importImage('Green_Olive.png'),
    },
    {
      name: "פטריות שמפניון",
      image: importImage('Champignon_Mushrooms.png'),
    }
  ];

  const initialDry = [
    {
      name: "מלח",
      image: importImage('Salt.png'),
    },
    {
      name: "סוכר",
      image: importImage('Sugar.png'),
    }
  ];

  const [cans] = React.useState<{ name: string; image: string | null; }[]>(initialCan);
  const [drys] = React.useState<{ name: string; image: string | null; }[]>(initialDry);

  return (
    <div>
      <div>
        <ProductsPage
          products={cans}
          categoryTitle="שימורים"
          icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}        />
      </div>
      <div>
        <ProductsPage
          products={drys}
          categoryTitle="יבשים"
          icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}        />
      </div>
    </div>
  );
}

export default Can_Dry_Page;
