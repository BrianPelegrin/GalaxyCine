import React from "react";
import { Link } from "react-router-dom";
import FormularioGenero from "./FormularioGenero";

export default function EditarGenero() {
  return (
    <>
      Editar Genero
      <FormularioGenero
        modelo={{ nombre: "Accion" }}
        onSumbit={async (valores) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(valores);
        }}
      />
    </>
  );
}
