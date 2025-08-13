export default function ProductCard({ producto }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {/* Aquí mostraremos los datos del producto */}
        {/*Nombre del producto */}
        <h1 className="text-4xl">{producto.nombre}</h1>
        {/* Imagen del Producto */}
        <img src={producto.imagenUrl} alt={producto.imagenUrl} className="w-full h-48 object-cover mb-4" />
        {/*Precio del Producto*/}
        <h2 className="text-3xl">{producto.precio}</h2>
    </div>
  );
}