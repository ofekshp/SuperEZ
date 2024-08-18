import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage.jsx";
import { useBasket } from "../MyBasket/BasketContext.tsx";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Can_Dry/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Can_Dry_Page: React.FC = () => {
  const { addProduct } = useBasket();
  const savedBasket = JSON.parse(localStorage.getItem('basketProducts') || '[]');

  const initialCan = [
    {
      name: "זיתים ירוקים",
      image: importImage('Green_Olive.png'),
    },
    {
      name: "פטריות שמפניון",
      image: importImage('Champignon_Mushrooms.png'),
    }
  ];

  const initialDry = [
    {
      name: "מלח",
      image: importImage('Salt.png'),
    },
    {
      name: "סוכר",
      image: importImage('Sugar.png'),
    }
  ];

 const [cans, setCans] = useState<{ name: string; image: string | null; count: number }[]>(
  initialCan.map(can => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === can.name);
    return {
      ...can,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

const [drys, setDrys] = useState<{ name: string; image: string | null; count: number }[]>(
  initialDry.map(dry => {
    const basketItem = savedBasket.find((p: { name: string; quantity: number }) => p.name === dry.name);
    return {
      ...dry,
      count: basketItem ? basketItem.quantity : 0,
    };
  })
);

  const handleIncrement = (name: string) => {
    setCans(cans.map(can =>
      can.name === name ? { ...can, count: can.count + 1 } : can
    ));
    setDrys(drys.map(dry =>
      dry.name === name ? { ...dry, count: dry.count + 1 } : dry
    ));
  };

  const handleDecrement = (name: string) => {
    setCans(cans.map(can =>
      can.name === name && can.count > 0 ? { ...can, count: can.count - 1 } : can
    ));
    setDrys(drys.map(dry =>
      dry.name === name && dry.count > 0 ? { ...dry, count: dry.count - 1 } : dry
    ));
  };

  const handleSave = async () => {
    const cansToSave = cans.filter(can => can.count > 0).map(can => ({ ...can, quantity: can.count }));
    const drysToSave = drys.filter(dry => dry.count > 0).map(dry => ({ ...dry, quantity: dry.count }));

    const allItems = [...cansToSave, ...drysToSave];
    allItems.forEach(item => addProduct(item));

    // setCans(cans.map(can => ({ ...can, count: 0 })));
    // setDrys(drys.map(dry => ({ ...dry, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={cans}
          categoryTitle="שימורים"
          icon={<img alt="" src={importImage('can_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={drys}
          categoryTitle="יבשים"
          icon={<img alt="" src={importImage('dry_icon.png')} />}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default Can_Dry_Page;
