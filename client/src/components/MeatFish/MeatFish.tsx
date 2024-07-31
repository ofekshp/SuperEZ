import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/MeatFish/${imageName}`);
  } catch (error) {
    return null;
  }
};

const MeatFish: React.FC = () => {
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

  const [meats, setMeats] = React.useState<{ name: string; image: string | null; }[]>(initialMeat);
  const [fishes, setFishes] = React.useState<{ name: string; image: string | null; }[]>(initialFish);

  return (
    <div>
      <div>
        <ProductsPage
          products={meats}
          categoryTitle="בשר"
          icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}        />
      </div>
      <div>
        <ProductsPage
          products={fishes}
          categoryTitle="דגים"
          icon={<img alt="" src={importImage('')} />} onIncrement={undefined} onDecrement={undefined}        />
      </div>
    </div>
  );
}

export default MeatFish;
