import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCart = JSON.parse(localStorage.getItem("cart"));
    if (existingCart) {
      existingCart = existingCart.filter((item) => item !== null); // Remove null entries
      setCart(existingCart);
      localStorage.setItem("cart", JSON.stringify(existingCart)); // Update storage
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
