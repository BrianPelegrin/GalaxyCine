import React from "react";
export default function MostrarErrorCampo(props: MostrarErrorCampoProps) {
  return <span className="input-group-text text-danger">{props.mensaje}</span>;
}

interface MostrarErrorCampoProps {
  mensaje?: string;
}
