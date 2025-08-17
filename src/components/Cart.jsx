import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { carrito } = useContext(CartContext); // Accedemos al carrito desde el contexto
  return (
    <>
      <h1 className="text-3xl m-7 max-w-2xl mx-auto">
        Productos en tu carrito
      </h1>
      <ul className="max-w-2xl mx-auto">
        {carrito.map((producto) => (
          <li
            key={producto.id}
            className="p-4 bg-white shadow-md rounded-lg mb-4"
          >
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </>
  );
}
