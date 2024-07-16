import React from "react";
import Products from "./Products";
import "./ProductsPage.css";

const ProductsPage = ({ categoryTitle, products, icon }) => {
  return (
    <div className="products">
      <h1>תוצאות חיפוש: {categoryTitle}</h1>
      <div className="header">
        {/* <button onClick={onGoBack}>חזרה</button> */}
        <h1>{categoryTitle}</h1>
        <div className="icon">{icon}</div>
      </div>
      <Products
        products={products}
        categoryTitle={categoryTitle}
        icon={icon}
        //   products, categoryTitle, icon
      />
    </div>
  );
};

export default ProductsPage;
