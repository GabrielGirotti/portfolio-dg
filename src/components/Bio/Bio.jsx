import styled from "@emotion/styled";
import Tecnologias from "../Tecnologias/Tecnologias";
import pdf from "../../assets/cv/GabrielGirottiDG.pdf";

const Biografia = styled.p`
  width: 70vw;
  text-align: center;
  margin: auto;
  padding: 20px;
  color: #b7b7b7;
`;

const CvButton = styled.a`
  text-decoration: none;
  padding: 10px 30px;
  background-color: #652da1;
  color: white;
  border-radius: 15px;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 450ms;

  &:hover {
    background-color: #421d6a;
  }
`;

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    width: 70vw;
    height: 1px;
    background-color: #652da1;
    display: block;
    margin: 40px auto;
    opacity: 0.2;
  }
`;

const Bio = () => {
  return (
    <Contenedor>
      <Biografia>
        Soy egresado de la FPS en DAW (Desarrollo de Aplicaciones Web) en el
        ISPC (Argentina) y de la FPS en Diseño Gráfico, en la Escuela Superior
        de Artes Visuales Martin A. Malharro (Argentina). Con más de 13 años de
        experiencia, trabajando por cuenta ajena y de manera freelance para
        clientes de distintas partes del mundo, he desarrollado videos,
        identidad corporativa, social medias y páginas web, entre otras piezas.
      </Biografia>

      <Tecnologias />
      <CvButton href={pdf} target="_blank" rel="noopener noreferrer">
        Descargar Cv
      </CvButton>
    </Contenedor>
  );
};

export default Bio;
