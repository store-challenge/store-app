import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = productId => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalQuantity = () => cart.reduce((total, item) => total + item, 0);

  const quantity = getTotalQuantity();

  const value = {
    cart,
    addToCart,
    removeFromCart,
    quantity: Number.isNaN(quantity) ? 0 : quantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
