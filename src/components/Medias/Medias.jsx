import styled from "@emotion/styled";
import Carrousel from "./Carrousel/Carrousel";

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

const Titulo = styled.h2`
  text-align: center;
  font-weight: 700;
  margin: auto;
  margin-bottom: 30px;

  &::after {
    content: "";
    width: 150px;
    height: 3px;
    background-color: #421d6a;
    display: block;
    margin: auto;
    margin-top: 10px;
  }
`;

const Medias = () => {
  return (
    <Contenedor id="medias">
      <Titulo>Social Medias</Titulo>
      <Carrousel />
    </Contenedor>
  );
};

export default Medias;
