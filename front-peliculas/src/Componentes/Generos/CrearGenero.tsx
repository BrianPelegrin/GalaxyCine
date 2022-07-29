import FormularioGenero from "./FormularioGenero";
import * as React from "react";

export default function CrearGenero() {
  return (
    <>
      <FormularioGenero
        modelo={{ nombre: "" }}
        onSumbit={async (valores) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(valores);
        }}
      />
    </>
  );
}
