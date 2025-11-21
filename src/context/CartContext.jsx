import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity = 1) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  // ⚠️ ESTA ES LA FUNCIÓN QUE TE FALTABA
  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addItem, 
        removeFromCart, 
        clearCart, 
        getTotalQuantity,
        getTotalPrice 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};




