import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams(); // Aquí puedes usar el id para obtener los detalles del producto desde una API o estado global
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { carrito } = useContext(CartContext); // Accedemos al carrito desde el contexto

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

  return (
    <div className="container mx-auto p-4">
      {isLoading && <p>Cargando producto...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {producto && !isLoading && !error && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
          <img src={producto.imagenUrl} alt={producto.nombre} />
          <p className="text-gray-700 mb-4">{producto.descripcion}</p>
          <p className="text-lg font-bold text-green-600">${producto.precio}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
