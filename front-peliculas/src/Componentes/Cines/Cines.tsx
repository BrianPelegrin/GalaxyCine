import { Link } from "react-router-dom";
import React from "react";

export default function Cines() {
  return (
    <>
      <Link to="../generos/crear">Crear Genero</Link>
      <Link to="../generos/editar">Editar</Link>
      Cines
    </>
  );
}
