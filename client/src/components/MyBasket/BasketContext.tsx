// BasketContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import CartService from '../../services/cart_service.ts';

interface Product {
  name: string;
  quantity: number;
}

interface BasketContextType {
  basketProducts: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productName: string |React.JSX.Element) => void; 
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cartService = new CartService();
  const [basketProducts, setBasketProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadBasketProducts() {
      try {
        const myCart = await cartService.getBasketProducts();
        setBasketProducts(myCart);
      } catch (error) {
        console.error('Error loading basket products:', error);
        setBasketProducts([]);
      }
    } 
    loadBasketProducts();
  }, []);

  const addProduct = async (product: Product) => {
    try {
      const updatedProducts = await cartService.addProduct(product);
      setBasketProducts(updatedProducts);
    } catch (error) {
      console.error('Error adding product to basket:', error);
    }
  };

  const removeProduct = async (productName) => {
    try {
      const updatedProducts = await cartService.removeProduct(productName);
      setBasketProducts(updatedProducts);
    } catch (error) {
      console.error('Error removing product from basket:', error);
    }
  };

  return (
    <BasketContext.Provider value={{ basketProducts, addProduct, removeProduct }}>
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
