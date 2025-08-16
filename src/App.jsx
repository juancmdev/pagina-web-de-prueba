import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          {/* Aquí puedes agregar más rutas según sea necesario */}
          <Route path="/productos/:id" element={<ProductDetails />} />{" "}
          {/* Detalles del producto */}
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
