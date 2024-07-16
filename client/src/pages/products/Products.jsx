import React from "react";
import ProductCard from "./Card"; // הכנס את כתובת המיקום המדויק של הקומפוננטת ProductCard
import "./Products.css";

const Products = ({ products, categoryTitle, icon }) => {
  const onGoBack = () => {
    console.log("onGoBack");
  };

  const onAddToCart = () => {
    console.log("onAddToCart");
  };
  const onRemoveFromCart = () => {
    console.log("onRemoveFromCart");
  };

  return (

      <div className="product-list">
        {/* כאן יש להכניס רשימת מוצרים עם קומפוננטת ProductCard */}
        {products.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
        {/* להוסיף ProductCard כמה שיש צורך */}
      </div>
   
  );
};

export default Products;
