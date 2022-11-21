import styled from "@emotion/styled";
import { DiccionarioProyecto } from "./proyecto";

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;

  &::after {
    content: "";
    width: 70vw;
    height: 1px;
    background-color: #652da1;
    display: block;
    margin: auto;
    opacity: 0.4;
  }

  @media screen and (max-width: 900px) {
    gap: 0px;
  }
`;

const Descripcion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  width: 500px;
  max-width: 70vw;
`;

const Imagen = styled.img`
  border-radius: 20px;
  max-width: 80vw;
  width: 500px;
`;

const Titulo = styled.h2`
  font-weight: 900;
  padding: 0;
  margin: 0;
`;
const Texto = styled.p`
  margin: 0;
  padding: 10px 0;
  color: #b7b7b7;
`;

const Botones = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Boton = styled.a`
  padding: 10px;
  background-color: #652da1;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 450ms;
  text-decoration: none;
  margin-bottom: 50px;

  &:hover {
    background-color: #421d6a;
  }
`;

const MisProyectos = styled.h2`
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

const ImagenLink = styled.a`
  padding: 0;
  margin: 0;
`;

const Proyectos = () => {
  return (
    <>
      <MisProyectos id="websites">Websites</MisProyectos>
      {DiccionarioProyecto.map((proyecto) => {
        return (
          <Contenedor key={proyecto.id}>
            <ImagenLink
              href={proyecto.deploy}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Imagen src={proyecto.imagen} alt={proyecto.nombre} />
            </ImagenLink>
            <Descripcion>
              <Titulo>{proyecto.nombre}</Titulo>
              <Texto>{proyecto.descripcion}</Texto>
              <Botones>
                <Boton
                  href={proyecto.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ver website
                </Boton>
              </Botones>
            </Descripcion>
          </Contenedor>
        );
      })}
    </>
  );
};

export default Proyectos;
