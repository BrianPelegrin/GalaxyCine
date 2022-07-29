import React from "react";
import { Link } from "react-router-dom";
import FormularioActores from "./FormularioActores";
export default function Actores() {
  return (
    <>
      <Link to="../actores/crear">Crear</Link>
      <Link to="../actores/editar">Editar</Link>
      <h3> Actores</h3>
    </>
  );
}
