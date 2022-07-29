import React from "react";
import FormularioActores from "./FormularioActores";
export default function EditarActores() {
  return (
    <>
      <h3>Editar Actores</h3>
      <FormularioActores
        modelo={{
          nombre: "Vin Diesel",
          fechaNacimiento: new Date("1996-06-01T00:00:00"),
        }}
        onSumbit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          console.log(values);
        }}
      />
    </>
  );
}
