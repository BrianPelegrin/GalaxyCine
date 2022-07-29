import React from "react";
import { useParams } from "react-router-dom";

export default function EditarPelicula() {
  const { id }: any = useParams();
  return (
    <>
      <h3>Editar Pelicula</h3>
      <h4>el id es {id}</h4>
    </>
  );
}
