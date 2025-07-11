import React, { useState } from "react";

function ConsultasIA() {
  const [consulta, setConsulta] = useState("");
  const [respuesta, setRespuesta] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError("");
    setRespuesta(null);
    try {
      console.log("Enviando consulta a la IA:", consulta);
      const res = await fetch("http://localhost:8080/api/api/nlq/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ pregunta: consulta }),
      });

      console.log("Respuesta del servidor:", res.status, res.statusText);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error en la respuesta:", errorText);
        throw new Error(`Error ${res.status}: ${errorText}`);
      }

      const text = await res.text();
      setRespuesta(text);
    } catch (err) {
      console.error("Error completo:", err);
      setError(`Error: ${err.message}`);
    } finally {
      setCargando(false);
      setConsulta("");
    }
  };

  return (
    <div>
      <h2>Consultas de IA</h2>
      <p>Aquí podrás hacer consultas con IA sobre los datos de la Farmacia.</p>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: "2rem", maxWidth: 500 }}
      >
        <label
          htmlFor="consulta"
          style={{ display: "block", marginBottom: 8, fontWeight: 500 }}
        >
          Escribe tu consulta:
        </label>
        <textarea
          id="consulta"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 6,
            border: "1px solid #bdbdbd",
            resize: "vertical",
            fontSize: 16,
          }}
          placeholder="Escribe aquí tu pregunta o consulta..."
          required
        />
        <button
          type="submit"
          style={{
            marginTop: 16,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 24px",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          disabled={cargando}
        >
          {cargando ? "Consultando..." : "Enviar"}
        </button>
      </form>
      {error && <div style={{ color: "red", marginTop: 20 }}>{error}</div>}
      {respuesta && (
        <div
          style={{
            background: "#e3f2fd",
            color: "#1976d2",
            borderLeft: "6px solid #1976d2",
            padding: "1.2rem 1.5rem",
            borderRadius: 8,
            fontSize: "1.1rem",
            marginTop: 32,
            boxShadow: "0 1px 4px rgba(25, 118, 210, 0.06)",
            maxWidth: 600,
          }}
        >
          <strong>Respuesta de la IA:</strong>
          <div style={{ marginTop: 10, whiteSpace: "pre-line" }}>
            {respuesta}
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsultasIA;
