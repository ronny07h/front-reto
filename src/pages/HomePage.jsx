import React from "react";
import { Link } from "react-router-dom";
import { FaPills, FaUsers, FaShoppingCart, FaRobot } from "react-icons/fa";

function HomePage() {
  const secciones = [
    {
      titulo: "Medicamentos",
      descripcion: "Gestiona el inventario de medicamentos",
      icono: <FaPills size={40} />,
      ruta: "/medicamentos",
      color: "#4caf50",
    },
    {
      titulo: "Clientes",
      descripcion: "Administra la información de clientes",
      icono: <FaUsers size={40} />,
      ruta: "/clientes",
      color: "#2196f3",
    },
    {
      titulo: "Ventas",
      descripcion: "Registra y gestiona las ventas",
      icono: <FaShoppingCart size={40} />,
      ruta: "/venta",
      color: "#ff9800",
    },
  ];

  return (
    <div>
      <h2>Inicio</h2>
      <p className="welcome-message" style={{ marginBottom: "2rem" }}>
        Bienvenido al sistema de farmacia Farmaco Plus
      </p>

      {/* Secciones principales */}
      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ marginBottom: "1.5rem", color: "#333" }}>
          Gestión Principal
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {secciones.map((seccion, index) => (
            <Link
              key={index}
              to={seccion.ruta}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  border: `2px solid ${seccion.color}`,
                  borderRadius: "12px",
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div style={{ color: seccion.color, marginBottom: "1rem" }}>
                  {seccion.icono}
                </div>
                <h4
                  style={{
                    margin: "0 0 0.5rem 0",
                    color: seccion.color,
                    fontSize: "1.3rem",
                    fontWeight: "600",
                  }}
                >
                  {seccion.titulo}
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#666",
                    fontSize: "0.95rem",
                  }}
                >
                  {seccion.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sección de IA */}
      <div>
        <h3 style={{ marginBottom: "1.5rem", color: "#333" }}>
          Consultas Inteligentes
        </h3>
        <div
          style={{
            background: "#fff",
            border: "2px solid #9c27b0",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <Link
            to="/consultas-ia"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div style={{ color: "#9c27b0", marginBottom: "1rem" }}>
              <FaRobot size={40} />
            </div>
            <h4
              style={{
                margin: "0 0 0.5rem 0",
                color: "#9c27b0",
                fontSize: "1.3rem",
                fontWeight: "600",
              }}
            >
              Consultas de IA
            </h4>
            <p
              style={{
                margin: 0,
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              Realiza consultas inteligentes sobre los datos de la farmacia
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
