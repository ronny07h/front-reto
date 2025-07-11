import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRobot } from "react-icons/fa";

function Header() {
  return (
    <header
      style={{
        background: "#1976d2",
        color: "#fff",
        padding: "1.5rem 2rem 1rem 2rem",
        boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <nav style={{ marginTop: "0.5rem", display: "flex", gap: "1.5rem" }}>
          <Link
            to="/"
            style={{
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 12px",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.15)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <FaHome style={{ marginRight: 6, marginBottom: 2 }} /> Inicio
          </Link>
          <Link
            to="/consultas-ia"
            style={{
              color: "#fff",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "1.1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 12px",
              borderRadius: "6px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.15)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <FaRobot style={{ marginRight: 6, marginBottom: 2 }} /> Consultas de
            IA
          </Link>
        </nav>
        <div style={{ textAlign: "right" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "2.2rem",
              letterSpacing: "1px",
              fontWeight: 800,
            }}
          >
            Farmacia <span style={{ color: "#ffb300" }}>Farmaco Plus</span>
          </h1>
          <span style={{ fontSize: "1rem", fontWeight: 400, color: "#e3f2fd" }}>
            Sistema de gestión y consultas
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
