import { useState, useEffect } from "react";
import ProductCard from "../components/Layout/ProductCard";


  

export default function Productos() {

  const [productos, setProductos] = useState([]);
useEffect(() => {
  fetch('http://localhost:3001/apiProductos')
  .then(response => response.json())
  .then(data => setProductos(data))
}, [])

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 mt-5 text-center">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> {/* Añadimos un grid para el layout */}
        {productos.map(producto => <ProductCard key={producto.id} producto = {producto}/>)}
      </div>
    </>
  )
}
