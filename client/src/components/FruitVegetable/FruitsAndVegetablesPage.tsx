import React from "react";
import imgProduct from "./../../assets/placeholder.png";
import ProductsPage from "../ProductCard/ProductsPage";
import '../ProductCard/ProductsPage.css';

const FruitsAndVegetablesPage: React.FC = () => {
  const initialFruits = [
    {
      name: "תפוח",
      image: imgProduct,
    },
    {
      name: "אגס",
      image: imgProduct,
    },
    {
      name: "אפרסק",
      image: imgProduct,
    },
    {
      name: "בננה",
      image: imgProduct,
    },
    {
      name: "תפוח",
      image: imgProduct,
    },
    {
      name: "אגס",
      image: imgProduct,
    },
    {
      name: "אפרסק",
      image: imgProduct,
    },
    {
      name: "בננה",
      image: imgProduct,
    },
  ];

  const [fruits, setFruits] = React.useState<{ name: string; image: any; }[]>(initialFruits);

  return (
    <div>
      <ProductsPage
        products={fruits}
        categoryTitle="פירות וירקות"
        icon={<img alt="" src={imgProduct} />}
      />
    </div>
  );
};

export default FruitsAndVegetablesPage;
