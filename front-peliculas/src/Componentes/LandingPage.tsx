import { useEffect, useState } from "react";
import ListadoPeliculas from "./ListadoPeliculas/ListadoPeliculas";
import { landingPageDTO } from "./Peliculas/PeliculaIndividual/peliculas.model";
import React from "react";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Spiderman: No Way Home",
            poster:
              "https://radioatalaya.net/wp-content/uploads/2021/12/Spider_Man_No_Way_Home-387287198-large.jpg",
          },
          {
            id: 2,
            titulo: "Avengers: END GAME",
            poster: "https://m.media-amazon.com/images/I/51yUkVmPOrL._AC_.jpg",
          },
          {
            id: 3,
            titulo: "Thor: Ragnarok",
            poster:
              "https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_SY679_.jpg",
          },
        ],
        proximoEstreno: [
          {
            id: 4,
            titulo: "Spiderman: No Way Home",
            poster:
              "https://radioatalaya.net/wp-content/uploads/2021/12/Spider_Man_No_Way_Home-387287198-large.jpg",
          },
          {
            id: 5,
            titulo: "Avengers: END GAME",
            poster: "https://m.media-amazon.com/images/I/51yUkVmPOrL._AC_.jpg",
          },
          {
            id: 6,
            titulo: "Thor: Ragnarok",
            poster:
              "https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_SY679_.jpg",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>Peliculas en Cartelera</h3>
      <ListadoPeliculas peliculas={peliculas.enCartelera} />
      <br />
      <h3>Proximos estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximoEstreno} />
    </>
  );
}
