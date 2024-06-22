import React, { useState } from 'react';
import './MeatFish.css';

const importImage = (imageName: string) => {
  return require(`../../assets/MeatFish/${imageName}`);
};

interface Item {
  id: number;
  name: string;
  image: string;
}

const meatItems: Item[] = [
  { id: 1, name: 'אנטריקוט', image: 'antrikot.jpeg' },
  { id: 2, name: 'כתף', image: 'katef.jpeg' },
  { id: 3, name: 'פילה מדומה', image: 'file_medume.png' },
  { id: 4, name: 'סינטה', image: 'sinta.jpeg' },
];

const fishItems: Item[] = [
  { id: 1, name: 'Salmon', image: 'salmon.png' },
  { id: 2, name: 'Tuna', image: 'tuna.png' },
  { id: 3, name: 'Cod', image: 'cod.png' },
];

const MeatFish: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const updateQuantity = (category: string, id: number, change: number) => {
    setQuantities(prev => {
      const key = `${category}-${id}`;
      const newQuantity = Math.max((prev[key] || 0) + change, 0);
      return { ...prev, [key]: newQuantity };
    });
  };

  const renderItem = (item: Item, category: string) => {
    const quantity = quantities[`${category}-${item.id}`] || 0;
    
    return (
      <div key={item.id} className="item">
        <p>{item.name}</p>
        <div className="image-container">
          <img src={importImage(item.image)} alt={item.name} />
          <div className="quantity-control">
            <button onClick={() => updateQuantity(category, item.id, -1)} disabled={quantity === 0}>-</button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(category, item.id, 1)}>+</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="meat-fish-container">
      <section className="category">
        <h2>Meat</h2>
        <div className="item-grid">
          {meatItems.map(item => renderItem(item, 'meat'))}
        </div>
      </section>
      
      <section className="category">
        <h2>Fish</h2>
        <div className="item-grid">
          {fishItems.map(item => renderItem(item, 'fish'))}
        </div>
      </section>
    </div>
  );
};

export default MeatFish;