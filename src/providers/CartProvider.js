import React, { createContext, useContext, useState, useEffect } from 'react';

const CART_STORAGE_KEY = 'cart';
const ITEM_QUANTITY_STORAGE_KEY = 'itemQuantities';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});

  const expirationTimeInHours = 0.05;

  const updateCartAndStorage = (updatedCart, updatedQuantities) => {
    setCart(updatedCart);
    setItemQuantities(updatedQuantities);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
    localStorage.setItem(ITEM_QUANTITY_STORAGE_KEY, JSON.stringify(updatedQuantities));
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    const savedItemQuantities = JSON.parse(localStorage.getItem(ITEM_QUANTITY_STORAGE_KEY)) || {};

    updateCartAndStorage(savedCart, savedItemQuantities);
    setTimeout(
      () => {
        localStorage.removeItem(CART_STORAGE_KEY);
        localStorage.removeItem(ITEM_QUANTITY_STORAGE_KEY);
      },
      expirationTimeInHours * 60 * 60 * 1000,
    );
  }, [expirationTimeInHours]);

  const addToCart = (item, selectedQuantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    const updatedCart = existingItem
      ? cart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + selectedQuantity } : cartItem,
        )
      : [...cart, { ...item, quantity: selectedQuantity }];

    const updatedQuantities = {
      ...itemQuantities,
      [item.id]: (itemQuantities[item.id] || 0) + selectedQuantity,
    };

    updateCartAndStorage(updatedCart, updatedQuantities);
  };

  const removeFromCart = productId => {
    const updatedCart = cart.filter(item => item.id !== productId);
    const updatedQuantities = { ...itemQuantities };
    delete updatedQuantities[productId];

    updateCartAndStorage(updatedCart, updatedQuantities);
  };

  const getTotalQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);
  const quantity = getTotalQuantity();

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, quantity: Number.isNaN(quantity) ? 0 : quantity, itemQuantities }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
