import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        const newQuantity = Math.min(existingItem.quantity + quantity, product.stock);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: Math.min(quantity, product.stock) }];
      }
    });
  };
  
 
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };


  const clear = () => {
    setCart([]);
  };

 
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
