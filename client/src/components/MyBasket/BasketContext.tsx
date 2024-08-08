import React, { createContext, useState, useEffect, ReactNode } from 'react';
import CartService from '../../services/cart_service.ts';

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
  const cartService = new CartService();

  const [basketProducts, setBasketProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const myCart = cartService.getBasketProducts();
      setBasketProducts(myCart);
    } catch (error) {
      console.error('Error loading basket products:', error);
    }
  }, []);

  const addProduct = (product: Product) => {
    try{
      cartService.addProduct(product);
      setBasketProducts(cartService.getBasketProducts());
    }catch(error){
      console.error('Error adding product to basket:', error);
    }
  };

  const removeProduct = (productName: string) => {
    try{
    cartService.removeProduct(productName);
    setBasketProducts(cartService.getBasketProducts());
    }catch(error){
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
