import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px;
  padding-bottom: 0;
`;

const Titulo = styled.h1`
  margin: 80px 0 0 0;
  padding: 0;
`;
const Subtitulo = styled.p`
  text-align: center;
`;

const Header = () => {
  return (
    <>
      <Contenedor id="inicio">
        <Titulo>Gabriel Girotti</Titulo>
        <Subtitulo>Diseñador Gráfico | Editor de Videos | Maquetador Web</Subtitulo>
      </Contenedor>
    </>
  );
};

export default Header;
