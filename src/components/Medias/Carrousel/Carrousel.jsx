import { useState } from "react";
import styled from "@emotion/styled";
import { imagenesAndar } from "./imagenesAndar";

const ContCarrou = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  background-color: white;
  width: 100vw;
`;

const CarroImg = styled.img`
  width: 550px;
  max-width: 60vw;
  border-radius: 10px;
`;

const CarroButton = styled.button`
  color: white;
  background-color: #652da1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  padding: 5px 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #421d6a;
  }
`;

const Carrousel = () => {
  const [indexImg, setIndexImg] = useState(0);
  const [imagen, setImagen] = useState(imagenesAndar[0]);

  const previous = () => {
    const condicion = indexImg > 0;
    const proximoIndex = condicion ? indexImg - 1 : imagenesAndar.length - 1;
    setImagen(imagenesAndar[proximoIndex]);
    setIndexImg(proximoIndex);
  };

  const next = () => {
    const condicion = indexImg < imagenesAndar.length - 1;
    const proximoIndex = condicion ? indexImg + 1 : 0;
    setImagen(imagenesAndar[proximoIndex]);
    setIndexImg(proximoIndex);
  };

  return (
    <ContCarrou>
      <CarroButton onClick={previous}>{"<"}</CarroButton>
      <CarroImg src={imagen} alt="Andar" />
      <CarroButton onClick={next}>{">"}</CarroButton>
    </ContCarrou>
  );
};

export default Carrousel;
