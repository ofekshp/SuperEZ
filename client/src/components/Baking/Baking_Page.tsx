import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Baking/${imageName}`);
  } catch (error) {
    return null;
  }
};

const BakingPage: React.FC = () => {
  const { addProduct } = useBasket(); // Get addProduct from the basket context

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

  const [baking, setBaking] = useState<{ name: string; image: string | null; count: number }[]>(
    initialBaking.map(item => ({ ...item, count: 0 }))
  );

  const handleIncrement = (name: string) => {
    setBaking(baking.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  };

  const handleDecrement = (name: string) => {
    setBaking(baking.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const handleSave = async () => {
    const itemsToSave = baking.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

    itemsToSave.forEach(item => addProduct(item)); // Use addProduct to save items to the basket
    setBaking(baking.map(item => ({ ...item, count: 0 }))); // Reset counts
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={baking}
          categoryTitle="אפייה"
          icon={<img alt="" src={importImage('baking_icon.png')} />} // Assuming baking_icon.png is available
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
      <div className="button-group">
        <button className="btn btn-primary" onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
}

export default BakingPage;
