import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Can_Dry/${imageName}`);
  } catch (error) {
    return null;
  }
};

const Can_Dry_Page: React.FC = () => {
  const { addProduct } = useBasket(); // Get addProduct from the basket context

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

  // State for products with count management
  const [cans, setCans] = useState<{ name: string; image: string | null; count: number }[]>(
    initialCan.map(can => ({ ...can, count: 0 }))
  );

  const [drys, setDrys] = useState<{ name: string; image: string | null; count: number }[]>(
    initialDry.map(dry => ({ ...dry, count: 0 }))
  );

  // Increment and decrement handlers
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

  // Save function
  const handleSave = async () => {
    const cansToSave = cans.filter(can => can.count > 0).map(can => ({ ...can, quantity: can.count }));
    const drysToSave = drys.filter(dry => dry.count > 0).map(dry => ({ ...dry, quantity: dry.count }));

    const allItems = [...cansToSave, ...drysToSave];
    allItems.forEach(item => addProduct(item)); // Use addProduct to save items to the basket
    // Reset counts
    setCans(cans.map(can => ({ ...can, count: 0 })));
    setDrys(drys.map(dry => ({ ...dry, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={cans}
          categoryTitle="שימורים"
          icon={<img alt="" src={importImage('can_icon.png')} />} // Assuming can_icon.png is available
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={drys}
          categoryTitle="יבשים"
          icon={<img alt="" src={importImage('dry_icon.png')} />} // Assuming dry_icon.png is available
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default Can_Dry_Page;
