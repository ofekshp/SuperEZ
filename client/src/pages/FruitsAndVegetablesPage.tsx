import React from "react";
import imgProduct from "../assets/placeholder.png";
import './products/ProductsPage.css';
import ProductsPage from "./products/ProductsPage";

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

  const [fruits, setFruits] = React.useState<string[]>(initialFruits);

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
