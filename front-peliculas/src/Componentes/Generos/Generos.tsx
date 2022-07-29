import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Generos() {
  return (
    <>
      <h3> AQUI BAJAMO CON LO REALE GENEROS</h3>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <Link className="btn btn-outline-success" to="../generos/crear">
          Crear Genero
        </Link>

        <Link className="btn btn-outline-primary" to="../generos/editar">
          Editar Genero
        </Link>

        <Link className="btn btn-outline-danger" to="../generos/eliminar">
          Crear Genero
        </Link>
      </div>
    </>
  );
}
