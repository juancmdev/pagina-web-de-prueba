import { useState, useEffect } from "react";
import ProductCard from "../components/Layout/ProductCard";
import { Link } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/apiProductos")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 mt-5 text-center">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mr-10 ml-10">
        {" "}
        {/* Añadimos un grid para el layout */}
        {productos.map((producto) => (
          <Link key={producto.id} to={`/productos/${producto.id}`}>
            <ProductCard producto={producto} />
          </Link>
        ))}
      </div>
    </>
  );
}
