import React from "react";
import ProductCard from "../Card/Card";
import "./ProductsPage.css";

const ProductsPage = ({ products, categoryTitle, icon, onIncrement, onDecrement, onSave }) => {
  return (
    <div className="products-page">
      <div className="header">
        <h1>{categoryTitle}</h1>
        <div className="icon">{icon}</div>
      </div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            count={product.count}
            onIncrement={() => onIncrement(product.name)}
            onDecrement={() => onDecrement(product.name)}     
            onSave={() => onSave()}      
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
