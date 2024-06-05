import React from 'react';
import './BasketItem.css';

interface BasketItemProps {
  image: string;
  name: string;
  quantity: number;
  onRemove?: () => void;
}

const BasketItem: React.FC<BasketItemProps> = ({ image, name, quantity, onRemove }) => {
  return (
    <div className="basket-item">
      <img src={image} alt={name} className="basket-item__image" />
      <div className="basket-item__details">
        <div className="basket-item__name-quantity">
          <h3 className="basket-item__name">{name}</h3>
          <span className="basket-item__quantity">+ יחידות {quantity}</span>
          {onRemove && (
            <button className="basket-item__remove-button" onClick={onRemove}>
              הסר
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketItem;