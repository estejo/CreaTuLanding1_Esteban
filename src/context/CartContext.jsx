import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('cart_v1');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart_v1', JSON.stringify(cart));
    } catch (e) {
      console.error('Error', e);
    }
  }, [cart]);

  const addToCart = (product, quantity=1) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p);
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const getTotalQuantity = () => cart.reduce((s, p) => s + (p.quantity || 0), 0);

  const getTotalPrice = () => cart.reduce((s, p) => s + (p.price * (p.quantity || 0)), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
