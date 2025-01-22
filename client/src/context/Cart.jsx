import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCart = JSON.parse(localStorage.getItem("cart"));
    if (existingCart) {
      setCart(existingCart);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
