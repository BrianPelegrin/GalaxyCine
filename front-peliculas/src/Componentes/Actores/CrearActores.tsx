import React from "react";
import FormularioActores from "./FormularioActores";
export default function CrearActores() {
  return (
    <>
      <h3>Crear Actores</h3>
      <FormularioActores
        modelo={{ nombre: "", fechaNacimiento: undefined }}
        onSumbit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          console.log(values);
        }}
      />
    </>
  );
}
