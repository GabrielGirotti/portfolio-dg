import Rick from "../../assets/proyectos/Fotorick.png";
import qbs from "../../assets/proyectos/Fotoqbs.png";
import ecommerce from "../../assets/proyectos/Fotoecommerce.png";
import aires from "../../assets/proyectos/Fotoaires.png";

export const DiccionarioProyecto = [
  {
    nombre: "QBS",
    descripcion:
      "Buscador de trailers de películas. Este fue mi primer proyecto en React, con el consumo de la API de IMDB y Youtube.",
    imagen: qbs,
    deploy: "https://qbs.netlify.app/",
    id: "p-001",
  },
  {
    nombre: "Rick & Morty",
    descripcion:
      "Buscador de personajes de la serie Rick and Morty. Este fue un challenge propuesto por la gente de Gentleman Programming, el cual me permitió participar en primer Hackathon.",
    imagen: Rick,
    deploy: "https://rick-and-morty-jackpot.netlify.app/",
    id: "p-002",
  },
  {
    nombre: "Aires Serranos",
    descripcion: "Website para complejo de cabañas de Cordoba (Argentina).",
    imagen: aires,
    deploy: "https://airesserranos.netlify.app/index.html",
    id: "p-003",
  },
  {
    nombre: "Ecommerce",
    descripcion:
      "Primer simulacro de Ecommerce, con login y consumo de API pública.",
    imagen: ecommerce,
    deploy: "https://ecomercespa.netlify.app/",
    id: "p-004",
  },
];
