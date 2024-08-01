import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Deli/${imageName}`);
  } catch (error) {
    return null;
  }
};

const DeliPage: React.FC = () => {
  const { addProduct } = useBasket();

  const initialMilk = [
    {
      name: "חלב 3%",
      image: importImage(`milk3%.jpeg`),
    },
  ];

  const initialSoftCheeses = [
    { 
      name: "קוטג׳ 5%",
      image: importImage(`cottage_cheese.jpeg`)
    },
  ];

  initialMilk.sort((a, b) => a.name.localeCompare(b.name, 'he'));
  initialSoftCheeses.sort((a, b) => a.name.localeCompare(b.name, 'he'));

  const [milk, setMilk] = useState<{ name: string; image: any; count: number }[]>(initialMilk.map(item => ({ ...item, count: 0 })));
  const [softCheese, setSoftCheese] = useState<{ name: string; image: any; count: number }[]>(initialSoftCheeses.map(item => ({ ...item, count: 0 })));

  const handleIncrement = (name: string) => {
    setMilk(milk.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
    setSoftCheese(softCheese.map(item =>
      item.name === name ? { ...item, count: item.count + 1 } : item
    ));
  };

  const handleDecrement = (name: string) => {
    setMilk(milk.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
    setSoftCheese(softCheese.map(item =>
      item.name === name && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const handleSave = async () => {
    const milkToSave = milk.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));
    const softCheeseToSave = softCheese.filter(item => item.count > 0).map(item => ({ ...item, quantity: item.count }));

    const allItems = [...milkToSave, ...softCheeseToSave];
    allItems.forEach(item => addProduct(item));
    setMilk(milk.map(item => ({ ...item, count: 0 })));
    setSoftCheese(softCheese.map(item => ({ ...item, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={milk}
          categoryTitle="חלב ומשקאות חלב"
          icon={<img alt="" src={importImage('milk_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
      <div>
        <ProductsPage
          products={softCheese}
          categoryTitle="גבינות רכות"
          icon={<img alt="" src={importImage('cheese_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
      <div className="button-group">
        <button className="btn btn-primary" onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
};

export default DeliPage;
