import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../Menu/Menu.module.css";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-5 border-bottom border-danger">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          GalaxyCine
        </Link>
        <button className="navbar-toggler">
          <span
            className="navbar-toggler-icon"
            data-bs-toggle="collapse"
            data-bs-target="#MenuNavegacion"
          ></span>
        </button>
        <div id="MenuNavegacion" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <NavLink to="/generos" className="nav-link">
                Generos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/actores" className="nav-link">
                Actores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cines" className="nav-link">
                Cines
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/peliculas" className="nav-link">
                Peliculas
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
