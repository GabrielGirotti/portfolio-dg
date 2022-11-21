import styled from "@emotion/styled";
import { iconos } from "./iconos";

const ContenedorIconos = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 20px;
  width: 70vw;
  margin: auto; 
  margin-bottom: 50px;
`;

const Icon = styled.img`
  transition: transform 450ms;

  &:hover {
    transform: scale(1.1);
  }
`;

const Columna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Techs = styled.h3`
  text-align: center;
  font-weight: 700;
  margin: auto;
  margin-bottom: 30px;
  max-width: 70vw;
  line-height: 30px;

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

const Tecnologias = () => {
  return (
    <div>
      <Techs>Tecnologías con las que trabajo</Techs>
      <ContenedorIconos>
        {iconos.map((icono) => {
          return (
            <Columna key={icono.id}>
              <Icon src={icono.img} alt={icono.nombre} />
            </Columna>
          );
        })}
      </ContenedorIconos>
    </div>
  );
};

export default Tecnologias;
