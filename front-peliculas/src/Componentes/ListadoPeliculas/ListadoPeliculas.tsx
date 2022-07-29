import PeliculaIndividual from "../Peliculas/PeliculaIndividual/PeliculaInvidual";
import { pelicula } from "../Peliculas/PeliculaIndividual/peliculas.model";
import css from "./ListadoPeliculas.module.css";
import React from "react";

export default function ListadoPeliculas(props: ListadoPeliculasProps) {
  if (!props.peliculas) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  } else if (props.peliculas.length === 0) {
    return <>No Hay Elementos para Mostrar</>;
  } else {
    return (
      <div className={css.div}>
        {props.peliculas.map((pelicula) => (
          <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
        ))}
      </div>
    );
  }
}

interface ListadoPeliculasProps {
  peliculas?: pelicula[];
}
