import { createContext, useState } from "react"; // Importamos useState

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  // Aquí guardaremos la lista de productos del carrito
  const [carrito, setCarrito] = useState([]);

  // Retornamos el CartContext.Provider
  return (
    <CartContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
