import { useFormikContext } from "formik";
import React from "react";
import MostrarErrorCampo from "./MostrarErrorCampo";
export default function FormGroupFecha(props: FormGroupFechaProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();

  return (
    <div className="form-group">
      <label htmlFor={props.campo} className="form-label">
        {props.label}
      </label>
      <input
        type="date"
        className="form-control"
        id={props.campo}
        name={props.campo}
        defaultValue={values[props.campo]}
        onChange={(e) => {
          const fecha = new Date(e.currentTarget.value + "T00:00:00");
          values[props.campo] = fecha;
          validateForm();
        }}
      />
      {touched[props.campo] && errors[props.campo] ? (
        <MostrarErrorCampo mensaje={errors[props.campo]?.toString()} />
      ) : null}
    </div>
  );
}

interface FormGroupFechaProps {
  campo: string;
  label: string;
}
