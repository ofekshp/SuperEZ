import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FruitsAndVegetablesPage: React.FC = () => {
  const initialFruits = [
    {
      name: "תפוח",
      image: importImage(`placeholder.png`),
    },
    {
      name: "אגס",
      image: importImage(`placeholder.png`),
    },
    {
      name: "אפרסק",
      image: importImage(`placeholder.png`),
    },
    {
      name: "בננה",
      image: importImage(`placeholder.png`),
    },
    {
      name: "תפוח",
      image: importImage(`placeholder.png`),
    },
    {
      name: "אגס",
      image: importImage(`placeholder.png`),
    },
    {
      name: "אפרסק",
      image: importImage(`placeholder.png`),
    },
    {
      name: "בננה",
      image: importImage(`placeholder.png`),
    },
  ];

  const [fruits] = React.useState<{ name: string; image: any; }[]>(initialFruits);

  return (
    <div>
      <ProductsPage
        products={fruits}
        categoryTitle="פירות וירקות"
        icon={<img alt="" src={importImage('')} />}
      />
    </div>
  );
};

export default FruitsAndVegetablesPage;
