import { Link } from "react-router-dom";
import React from "react";
import { GeneroDTO } from "../Generos/generos.model";
import { Field, Form, Formik } from "formik";

export default function Peliculas() {
  const valorInicial: PeliculasForm = {
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const generos: GeneroDTO[] = [
    { id: 1, nombre: "Accion" },
    { id: 2, nombre: "Comedia" },
    { id: 3, nombre: "Romance" },
  ];

  return (
    <>
      <h3>Peliculas</h3>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <Link className="btn btn-outline-success" to="../peliculas/crear">
          Crear Pelicula
        </Link>

        <Link className="btn btn-outline-primary" to="../peliculas/editar">
          Editar Pelicula
        </Link>

        <Link className="btn btn-outline-danger" to="../peliculas/eliminar">
          Eliminar Pelicula
        </Link>
      </div>

      <Formik
        initialValues={valorInicial}
        onSubmit={async (valores) => {
          console.log(valores);
        }}
      >
        {(formikProps) => (
          <Form>
            <div className="row g-3">
              <div className="form-group col-auto">
                <label htmlFor="titulo" className="sr-only">
                  Titulo
                </label>
                <Field
                  type="text"
                  id="titulo"
                  className="form-control"
                  placeholder="Introduzca el titulo de la pelicula..."
                  name="titulo"
                />
              </div>
              <div className="form-group  col-auto">
                <label htmlFor="generoId" className="sr-only">
                  Genero
                </label>
                <select
                  className="form-control"
                  id="generoId"
                  {...formikProps.getFieldProps("generoId")}
                >
                  <option value="0">---Seleccione un Genero---</option>
                  {generos.map((genero) => (
                    <option key={genero.id} value={genero.id}>
                      {genero.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mt-5 col-auto">
                <Field
                  name="proximosEstrenos"
                  className="form-check-input"
                  id="proximosEstrenos"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="proximosEstrenos">
                  Proximos Estrenos
                </label>
              </div>
              <div className="form-group mt-5 col-auto">
                <Field
                  className="form-check-input"
                  id="enCines"
                  name="enCines"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="enCines">
                  En Cines
                </label>
              </div>
              <div className="form-group  mt-4 col-auto">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => formikProps.submitForm()}
                >
                  Filtrar
                </button>
              </div>
              <div className="form-group  mt-4 col-auto">
                <input
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={() => formikProps.setValues(valorInicial)}
                  value="limpiar"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface PeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
}
