// BasketContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  name: string;
  quantity: number;
}

interface BasketContextType {
  basketProducts: Product[];
  addProduct: (product: Product) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setBasketProducts(prevProducts => {
      // Check if the product already exists in the basket
      const existingProductIndex = prevProducts.findIndex(p => p.name === product.name);

      if (existingProductIndex > -1) {
        // If it exists, update the quantity
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + product.quantity,
        };
        return updatedProducts;
      } else {
        // If it doesn't exist, add it to the basket
        return [...prevProducts, product];
      }
    });
  };

  return (
    <BasketContext.Provider value={{ basketProducts, addProduct }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = React.useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
