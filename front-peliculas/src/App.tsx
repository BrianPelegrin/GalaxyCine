import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Menu from "./Componentes/Utilidades/Menu/Menu";
import CrearGenero from "./Componentes/Generos/CrearGenero";
import Generos from "./Componentes/Generos/Generos";
import LandingPage from "./Componentes/LandingPage";
import EditarGenero from "./Componentes/Generos/EditarGenero";
import NotFoundPages from "./Componentes/Utilidades/NotFoundPages";
import Actores from "./Componentes/Actores/Actores";
import CrearActores from "./Componentes/Actores/CrearActores";
import EditarActores from "./Componentes/Actores/EditarActores";
import Cines from "./Componentes/Cines/Cines";
import CrearCines from "./Componentes/Cines/CrearCines";
import EditarCines from "./Componentes/Cines/EditarCines";
import Peliculas from "./Componentes/Peliculas/Peliculas";
import CrearPeliculas from "./Componentes/Peliculas/CrearPeliculas";
import EditarPeliculas from "./Componentes/Peliculas/EditarPeliculas";
import configurarValidaciones from "./Componentes/Utilidades/Validaciones";

configurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/generos/crear" element={<CrearGenero />} />
            <Route path="/generos/editar" element={<EditarGenero />} />
            <Route path="/generos" element={<Generos />} />
            <Route path="/actores/crear" element={<CrearActores />} />
            <Route path="/actores/editar" element={<EditarActores />} />
            <Route path="/actores" element={<Actores />} />
            <Route path="/cines/editar" element={<EditarCines />} />
            <Route path="/cines/crear" element={<CrearCines />} />
            <Route path="/cines" element={<Cines />} />
            <Route path="/peliculas/crear" element={<CrearPeliculas />} />
            <Route path="/peliculas/editar" element={<EditarPeliculas />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFoundPages />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
{rutas.map((ruta) => (
              <Route key={ruta.path} path={ruta.path} exact={ruta.exact}>
                <ruta.componente />
              </Route>
            ))}
            */
