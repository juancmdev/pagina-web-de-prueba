import { useState, useEffect } from "react";


  

export default function Productos() {

  const [productos, setProductos] = useState([]);
useEffect(() => {
  fetch('http://localhost:3001/apiProductos')
  .then(response => response.json())
  .then(data => setProductos(data))
}, [])

  return (
    <>
      <h1 className="text-4xl">Productos</h1>
      {productos.map(producto => <h2 key={producto.id} className="text-2xl">{producto.nombre}</h2>)}
    </>
  )
}
