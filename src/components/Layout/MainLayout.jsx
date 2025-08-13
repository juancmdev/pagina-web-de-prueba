import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({children}) {
  return (
    <>
      <Header />
      {/* Aquí es donde se renderizará el contenido de la página */}
      {children}
      <Footer />
    </>
  )
}
