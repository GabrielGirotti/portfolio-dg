import Maqueta from "../../assets/proyectos/maqueta-prueba.jpg";
import Rick from "../../assets/proyectos/Fotorick.png";
import qbs from "../../assets/proyectos/Fotoqbs.png";
import ecommerce from "../../assets/proyectos/Fotoecommerce.png";
import aires from "../../assets/proyectos/Fotoaires.png";
import fit from "../../assets/proyectos/fit.jpg";

export const DiccionarioProyecto = [
  {
    nombre: "FitFusion",
    descripcion:
      "Plataforma de entrenamiento realizada con React, Vite, Typescript y TailwindCss. Proyecto realizado en un entorno de trabajo simulado propuesto por Igrowker.",
    imagen: fit,
    deploy: "https://fitfusionigrowker.netlify.app/",
    codigo: "https://github.com/igrowker/i002-fitfusion-front/",
    id: "p-007",
  },
  {
    nombre: "Prueba Técnica",
    descripcion:
      "Prueba técnica para puesto de Maquetador Web, utilizando Html, Css, Sass y Javascript. Arquitectura ITCSS y automatización de tareas con Gulp.",
    imagen: Maqueta,
    deploy: "https://maqueta-ecommerce-shopsport.netlify.app/",
    id: "p-005",
  },
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
