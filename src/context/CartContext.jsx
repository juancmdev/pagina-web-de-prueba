import { createContext, useState } from "react"; // Importamos useState

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  // Aquí guardaremos la lista de productos del carrito
  const [carrito, setCarrito] = useState([]);

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (productoId) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== productoId
    );
    setCarrito(nuevoCarrito);
  };

  // Retornamos el CartContext.Provider
  return (
    <CartContext.Provider value={{ carrito, setCarrito, eliminarDelCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
