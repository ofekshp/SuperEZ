import React from "react";
import imgProduct from "../assets/placeholder.png";
import imgRedApple from "../assets/FruitsAndVegetables/red_apple.jpeg"
import imgGreenApple from "../assets/FruitsAndVegetables/green_apple.jpeg"
import './products/ProductsPage.css';
import ProductsPage from "./products/ProductsPage";

const FruitsAndVegetablesPage: React.FC = () => {
  const initialFruits = [
    {
      name: "קילו תפוח עץ אדום",
      image: imgRedApple,
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
      name: "קילו תפוח עץ ירוק",
      image: imgGreenApple,
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
