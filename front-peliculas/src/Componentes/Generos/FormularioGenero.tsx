import { Formik, Form, FormikHelpers } from "formik";
import * as React from "react";
import { Link } from "react-router-dom";
import FormGroupText from "../Utilidades/FormGroupText";
import * as Yup from "yup";
import { GeneroCreacionDTO } from "./generos.model";

export default function FormularioGenero(props: FormularioGeneroProps) {
  return (
    <>
      <Formik
        initialValues={props.modelo}
        onSubmit={props.onSumbit}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("El Campo Genero es requerido")
            .primeraLetraMayuscula(),
        })}
      >
        {(formikProps) => (
          <Form>
            <div className="card mt-3 mb-3">
              <div className="card-header">
                <div className="card-title">
                  <h3>Genero</h3>
                </div>
              </div>
              <div className="card-body">
                <FormGroupText
                  campo="nombre"
                  label="Genero"
                  placeholder="Introduzca el genero..."
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
                  to={"../generos"}
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

interface FormularioGeneroProps {
  modelo: GeneroCreacionDTO;
  onSumbit(
    values: GeneroCreacionDTO,
    accion: FormikHelpers<GeneroCreacionDTO>
  ): void;
}
