import styled from "@emotion/styled";
import gestum from "../../assets/logos/GESTUM.jpg";
import ecib from "../../assets/logos/ecib.jpg";
import daddy from "../../assets/logos/chicos/daddy.jpg";
import david from "../../assets/logos/chicos/david.jpg";
import local from "../../assets/logos/chicos/local.jpg";
import squirt from "../../assets/logos/chicos/squirt.jpg";

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

const Imagenes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 20px;
  background-color: white;
`;

const Imagen = styled.img`
  padding: 0;
  margin: 0;
  width: 50vw;

  @media screen and (max-width: 1000px) {
    width: 70vw;
  }

  @media screen and (max-width: 750px) {
    width: 80vw;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
  }

  @media screen and (max-width: 400px) {
    width: 100vw;
  }
`;

const ImagenesChicas = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
`;

const ImagenChica = styled.img`
  border-radius: 15px;
  width: 15vw;

  @media screen and (max-width: 1000px) {
    width: 25vw;
  }

  @media screen and (max-width: 750px) {
    width: 35vw;
  }

  @media screen and (max-width: 500px) {
    width: 45vw;
  }

  @media screen and (max-width: 400px) {
    width: 65vw;
  }
`;

const Logos = () => {
  return (
    <Contenedor id="identidad">
      <Titulo>Identidad Corporativa</Titulo>
      <Imagenes>
        <Imagen src={gestum} alt="gestum" />
        <Imagen src={ecib} alt="ECIB" />
        <ImagenesChicas>
          <ImagenChica src={local} alt="The Local Experience" />
          <ImagenChica src={squirt} alt="Squirt Dj" />
          <ImagenChica src={daddy} alt="Daddy Duke" />
          <ImagenChica src={david} alt="David Voss" />
        </ImagenesChicas>
      </Imagenes>
    </Contenedor>
  );
};

export default Logos;
