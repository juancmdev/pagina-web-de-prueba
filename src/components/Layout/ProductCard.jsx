export default function ProductCard({ producto }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {/* Aquí mostraremos los datos del producto */}
      {/*Nombre del producto */}
      <h1 className="text-4xl text-center mb-5">{producto.nombre}</h1>
      {/* Imagen del Producto */}
      <img
        src={producto.imagenUrl}
        alt={producto.imagenUrl}
        className="w-[48] h-[48] mb-4 mx-auto mt-2"
      />
      {/*Precio del Producto*/}
      <h2 className="text-3xl text-center">${producto.precio}</h2>
    </div>
  );
}
