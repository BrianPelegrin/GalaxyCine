import { ErrorMessage, Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import MostrarErrorCampo from "./MostrarErrorCampo";
export default function FormGroupText(props: FormGroupTextProps) {
  return (
    <div className="input-group mb-3">
      {props.label ? (
        <span className="input-group-text">{props.label}</span>
      ) : null}
      <Field
        name={props.campo}
        className="form-control"
        placeholder={props.placeholder}
      />
      <ErrorMessage name={props.campo}>
        {(mensaje) => <MostrarErrorCampo mensaje={mensaje} />}
      </ErrorMessage>
    </div>
  );
}

interface FormGroupTextProps {
  campo: string;
  label?: string;
  placeholder?: string;
}
