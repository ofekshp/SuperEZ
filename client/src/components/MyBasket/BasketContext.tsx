import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface Product {
  name: string;
  quantity: number;
}

interface BasketContextType {
  basketProducts: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productName: string) => void; 
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with data from local storage
  const [basketProducts, setBasketProducts] = useState<Product[]>(() => {
    const savedBasket = localStorage.getItem('basketProducts');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  // Save to local storage whenever basketProducts changes
  useEffect(() => {
    localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
  }, [basketProducts]);

  const addProduct = (product: Product) => {
    setBasketProducts(prevProducts => {
      const existingProductIndex = prevProducts.findIndex(p => p.name === product.name);

      if (existingProductIndex > -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + product.quantity,
        };
        return updatedProducts;
      } else {
        return [...prevProducts, product];
      }
    });
  };

  const removeProduct = (productName: string) => {
    setBasketProducts(prevProducts => prevProducts.filter(product => product.name !== productName));
  };

  return (
    <BasketContext.Provider value={{ basketProducts, addProduct , removeProduct }}>
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
