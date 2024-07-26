import React from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Baking/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Can_Dry_Page: React.FC = () => {
  const initialBaking = [
    {
      name: "נייר אפייה",
      image: importImage('Baking_paper.png'),
    },
    {
      name: "נייר כסף",
      image: importImage('Aluminum_foil.png'),
    }
  ];

  const [baking] = React.useState<{ name: string; image: string | null; }[]>(initialBaking);

  return (
    <div>
      <div>
        <ProductsPage
          products={baking}
          categoryTitle="אפייה"
          icon={<img alt="" src={importImage('')} />}
        />
      </div>
    </div>
  );
}

export default Can_Dry_Page;
