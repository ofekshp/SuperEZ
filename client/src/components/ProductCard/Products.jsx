import React, { useState } from "react";
import ProductCard from "../Card/Card";
import "./Products.css";

const Products = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);

  const handleIncrement = (name) => {
    setProducts(products.map(product =>
      product.name === name
        ? { ...product, count: product.count + 1 }
        : product
    ));
  };

  const handleDecrement = (name) => {
    setProducts(products.map(product =>
      product.name === name && product.count > 0
        ? { ...product, count: product.count - 1 }
        : product
    ));
  };

  const handleSave = async () => {
    await onSave();
  }; 

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          image={product.image}
          name={product.name}
          count={product.count}
          onIncrement={() => handleIncrement(product.name)}
          onDecrement={() => handleDecrement(product.name)}
          onSave={() => handleSave}
        />
      ))}
    </div>
  );
};

export default Products;
