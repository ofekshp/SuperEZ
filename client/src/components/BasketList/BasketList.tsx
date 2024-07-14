import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import './BasketList.css';

interface BasketItemProps {
  image: string;
  name: string;
  quantity: number;
}

interface BasketListProps {
  items: BasketItemProps[];
  onRemoveItem: (index: number) => void;
}

const BasketList: React.FC<BasketListProps> = ({ items, onRemoveItem }) => {
  return (
    <div className="basket-list">
      {items.map((item, index) => (
        <BasketItem
          key={index}
          image={item.image}
          name={item.name}
          quantity={item.quantity}
          onRemove={() => onRemoveItem(index)}
        />
      ))}
    </div>
  );
};

export default BasketList;