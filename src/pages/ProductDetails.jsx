import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams(); // Aquí puedes usar el id para obtener los detalles del producto desde una API o estado global
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { carrito, setCarrito } = useContext(CartContext); // Accedemos al carrito desde el contexto

  useEffect(() => {
    // Definimos la función de fetch dentro del efecto
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/apiProductos/${id}`
        );

        if (!response.ok) {
          // Si la respuesta no es 200, lanzamos un error que el catch capturará
          throw new Error("Producto no encontrado");
        }

        const data = await response.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    // Aquí podrías actualizar el estado del carrito en el contexto
    setCarrito(nuevoCarrito);
    console.log("Producto añadido al carrito:", producto);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center">
      {isLoading && <p>Cargando producto...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {producto && !isLoading && !error && (
        <div className=" p-6 rounded-lg shadow-md w-[700px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-6">{producto.nombre}</h2>
          <img
            src={producto.imagenUrl}
            alt={producto.nombre}
            className="w-[200px] mb-6"
          />
          <p className="text-gray-700 mb-6">{producto.descripcion}</p>
          <p className="text-2xl font-bold text-green-700">
            Precio: ${producto.precio}
          </p>
        </div>
      )}
      <button
        className="p-2 bg-black text-white mt-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
        onClick={() => agregarAlCarrito(producto)}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductDetails;
