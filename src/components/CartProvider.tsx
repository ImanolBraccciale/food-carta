// CartProvider.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { CartContextType, CartItem } from '../utils/components.dto';
 
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      // Check if item already exists in the cart
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Update the quantity if item already exists
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Add new item to the cart
      return [...prevItems, item];
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
 
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
