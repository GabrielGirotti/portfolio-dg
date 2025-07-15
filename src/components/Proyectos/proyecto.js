import Maqueta from "../../assets/proyectos/maqueta-prueba.jpg";
import Rick from "../../assets/proyectos/Fotorick.png";
import qbs from "../../assets/proyectos/Fotoqbs.png";
import fit from "../../assets/proyectos/fit.jpg";
import oleada from "../../assets/proyectos/oleada.jpg";

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
    nombre: "Oleada Psycho",
    descripcion: "Website promocional para festival de música.",
    imagen: oleada,
    deploy: "https://oleadapsycho.netlify.app/",
    id: "p-102",
  },
];
