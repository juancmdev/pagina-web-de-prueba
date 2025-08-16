import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // Aquí puedes usar el id para obtener los detalles del producto desde una API o estado global

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalles del Producto {id}</h1>
      {/* Aquí puedes renderizar los detalles del producto */}
      <p>El ID del producto es: {id}</p>
      {/* Puedes agregar más información del producto aquí */}
    </div>
  );
};

export default ProductDetails;
