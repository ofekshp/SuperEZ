import React, { useState } from "react";
import ProductsPage from "../ProductCard/ProductsPage";
import { useBasket } from "../MyBasket/BasketContext";
import '../ProductCard/ProductsPage.css';

const importImage = (imageName: string) => {
  try {
    return require(`../../assets/Frozen/${imageName}`);
  } catch (error) {
    return null;
  }
};

const FrozenPage: React.FC = () => {
  const { addProduct } = useBasket();

  const initialVegetables = [
    {
      name: "שעועית ירוקה",
      image: importImage('green_beans.jpeg'),
    },
  ];

  const initialDoughsPizzasPastries = [
    {
      name: "בצק פילו",
      image: importImage('phyllo_dough.jpeg'),
    },
  ];

  const initialPreparedFoods = [
    {
      name: "שניצלונים עוף טוב",
      image: importImage('schnitzels_oftov.jpeg'),
    },
  ];

  const initialHerbsSpices = [
    {
      name: "שום כתוש",
      image: importImage('minced_garlic.jpeg'),
    },
  ];

  const initialFruit = [
    {
      name: "פירות יער מוקפאים",
      image: importImage('frozen_berries.jpeg'),
    },
  ];

  const [vegetables, setVegetables] = useState<{ name: string; image: string | null; count: number }[]>(initialVegetables.map(product => ({ ...product, count: 0 })));
  const [doughsPizzasPastries, setDoughsPizzasPastries] = useState<{ name: string; image: string | null; count: number }[]>(initialDoughsPizzasPastries.map(product => ({ ...product, count: 0 })));
  const [preparedFoods, setPreparedFoods] = useState<{ name: string; image: string | null; count: number }[]>(initialPreparedFoods.map(product => ({ ...product, count: 0 })));
  const [herbsSpices, setHerbsSpices] = useState<{ name: string; image: string | null; count: number }[]>(initialHerbsSpices.map(product => ({ ...product, count: 0 })));
  const [fruit, setFruit] = useState<{ name: string; image: string | null; count: number }[]>(initialFruit.map(product => ({ ...product, count: 0 })));

  const handleIncrement = (name: string) => {
    setVegetables(vegetables.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setDoughsPizzasPastries(doughsPizzasPastries.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setPreparedFoods(preparedFoods.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setHerbsSpices(herbsSpices.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
    setFruit(fruit.map(product =>
      product.name === name ? { ...product, count: product.count + 1 } : product
    ));
  };

  const handleDecrement = (name: string) => {
    setVegetables(vegetables.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setDoughsPizzasPastries(doughsPizzasPastries.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setPreparedFoods(preparedFoods.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setHerbsSpices(herbsSpices.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
    setFruit(fruit.map(product =>
      product.name === name && product.count > 0 ? { ...product, count: product.count - 1 } : product
    ));
  };

  const handleSave = async () => {
    const allProducts = [
      ...vegetables.filter(product => product.count > 0),
      ...doughsPizzasPastries.filter(product => product.count > 0),
      ...preparedFoods.filter(product => product.count > 0),
      ...herbsSpices.filter(product => product.count > 0),
      ...fruit.filter(product => product.count > 0)
    ].map(product => ({ ...product, quantity: product.count }));

    allProducts.forEach(product => addProduct(product));

    // Reset quantities after saving
    setVegetables(vegetables.map(product => ({ ...product, count: 0 })));
    setDoughsPizzasPastries(doughsPizzasPastries.map(product => ({ ...product, count: 0 })));
    setPreparedFoods(preparedFoods.map(product => ({ ...product, count: 0 })));
    setHerbsSpices(herbsSpices.map(product => ({ ...product, count: 0 })));
    setFruit(fruit.map(product => ({ ...product, count: 0 })));
  };

  return (
    <div>
      <div>
        <ProductsPage
          products={vegetables}
          categoryTitle="ירקות קפואים"
          icon={<img alt="" src={importImage('vegetables_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={doughsPizzasPastries}
          categoryTitle="בצקים, פיצות ומאפים"
          icon={<img alt="" src={importImage('doughs_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={preparedFoods}
          categoryTitle="מאכלים מוכנים"
          icon={<img alt="" src={importImage('prepared_foods_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={herbsSpices}
          categoryTitle="עשבי תיבול ותבלינים"
          icon={<img alt="" src={importImage('herbs_spices_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
      <div>
        <ProductsPage
          products={fruit}
          categoryTitle="פירות קפואים"
          icon={<img alt="" src={importImage('fruit_icon.png')} />} // Add appropriate icon
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default FrozenPage;
