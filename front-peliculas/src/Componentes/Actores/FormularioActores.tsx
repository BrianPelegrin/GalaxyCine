import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import * as React from "react";
import { Link } from "react-router-dom";
import FormGroupText from "../Utilidades/FormGroupText";
import { ActoresCreacionDTO } from "./actores.model.d";
import FormGroupFecha from "../Utilidades/FormGroupFecha";

export default function FormularioActores(props: FormularioActoresProps) {
  return (
    <>
      <Formik
        initialValues={props.modelo}
        onSubmit={props.onSumbit}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("El campo nombre es requerido")
            .primeraLetraMayuscula(),
        })}
      >
        {(formikProps) => (
          <Form>
            <div className="card mt-3 mb-3">
              <div className="card-header">
                <div className="card-title">
                  <h3>Crear Actores</h3>
                </div>
              </div>
              <div className="card-body">
                <FormGroupText
                  campo="nombre"
                  label="Nombre"
                  placeholder="Introduzca el genero..."
                />
                <FormGroupFecha
                  label="Fecha de Nacimiento"
                  campo="fechaNacimiento"
                />
              </div>
              <div className="card-footer ">
                <button
                  disabled={formikProps.isSubmitting}
                  type="submit"
                  className="btn btn-light border-3 border-dark col-md-4"
                >
                  Guardar
                </button>
                <Link
                  to={"../actores"}
                  className="btn btn-secondary text-light col-md-4"
                >
                  Volver
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface FormularioActoresProps {
  modelo: ActoresCreacionDTO;
  onSumbit(
    nombre: ActoresCreacionDTO,
    accion: FormikHelpers<ActoresCreacionDTO>
  ): void;
}
