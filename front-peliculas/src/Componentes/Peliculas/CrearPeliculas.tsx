import React from "react";
import { useNavigate } from "react-router-dom";

export default function CrearPelicula() {
  const navegador = useNavigate();

  return (
    <>
      <h3>Crear Pelicula</h3>
      <button
        onClick={() => navegador("/peliculas")}
        className="btn btn-dark text-danger"
      >
        Guardar
      </button>
    </>
  );
}
