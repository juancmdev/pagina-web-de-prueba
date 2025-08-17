import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // Aquí puedes usar el id para obtener los detalles del producto desde una API o estado global

  const [producto, setProducto] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/apiProductos/${id}`)
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalles del Producto {id}</h1>
      {/* Aquí puedes renderizar los detalles del producto */}
      <p>El ID del producto es: {id}</p>
      {/* Puedes agregar más información del producto aquí */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
        <img src={producto.imagenUrl} alt={producto.nombre} />
        <p className="text-gray-700 mb-4">{producto.descripcion}</p>
        <p className="text-lg font-bold text-green-600">${producto.precio}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
