import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const LogoDX = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    style={{ verticalAlign: "middle" }}
  >
    <rect width="40" height="40" rx="8" fill="#fff" />
    <text
      x="8"
      y="28"
      fontFamily="Arial"
      fontSize="24"
      fontWeight="bold"
      fill="#222"
    >
      DX
    </text>
  </svg>
);

const CartIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    style={{ verticalAlign: "middle" }}
  >
    <circle cx="9" cy="20" r="2" fill="#fff" />
    <circle cx="17" cy="20" r="2" fill="#fff" />
    <path
      d="M3 4h2l3.6 7.59a1 1 0 0 0 .92.61h7.72a1 1 0 0 0 .92-.61L21 7H7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const { carrito } = useContext(CartContext); // Accedemos al carrito desde el contexto

  return (
    <header style={{ background: "#222", padding: "1rem 0" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <LogoDX />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link
            to="/"
            className="text-white font-bold flex justify-center items-center relative"
          >
            Home
          </Link>
          <Link
            to="/productos"
            className="text-white font-bold flex justify-center items-center relative"
          >
            Productos
          </Link>
          <Link
            to="/contacto"
            className="text-white font-bold flex justify-center items-center relative"
          >
            Contacto
          </Link>
        </div>
        <div>
          <Link to={"/carrito"} className="text-white no-underline font-bold">
            <div className="flex justify-center items-center relative">
              <CartIcon />
              {carrito.length > 0 && (
                <span className="bg-red-500 text-white rounded-full h-5 w-5 inline-flex justify-center items-center ml-2 absolute -top-2.5 -right-6 text-[12px] font-bold">
                  {carrito.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
