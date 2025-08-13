import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";


function App() {

  return (
    <>
      <MainLayout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        {/* Aquí puedes agregar más rutas según sea necesario */}
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
