import styled from "@emotion/styled";

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

const ContFigma = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 90vw;
  gap: 20px;
  flex-wrap: wrap;
`;

const Figma = () => {
  return (
    <Contenedor id="Figma">
      <Titulo>Diseño de interfaces de usuario</Titulo>
      <ContFigma>
        <iframe
          width="560"
          height="315"
          src="https://embed.figma.com/proto/ISkJ0jtRnPoV9N9WYIiUYX/Ecommerce-Mobile-App?node-id=4-288&p=f&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=4%3A288&embed-host=share"
          title="Figma Prototipe FastShoes"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://embed.figma.com/design/ISkJ0jtRnPoV9N9WYIiUYX/Ecommerce-Mobile-App?node-id=1-3&embed-host=share"
          title="Figma Project FastShoes"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContFigma>
      <br />
      <ContFigma>
        <iframe
          width="560"
          height="315"
          src="https://embed.figma.com/proto/tY6SpR7DMiP9ejPZ34RRHt/Parked?node-id=13-159&p=f&scaling=scale-down&content-scaling=fixed&page-id=11%3A9&starting-point-node-id=11%3A14&embed-host=share"
          title="Figma Prototipe Parked"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://embed.figma.com/design/tY6SpR7DMiP9ejPZ34RRHt/Parked?node-id=11-9&embed-host=share"
          title="Figma Project Parked"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://embed.figma.com/proto/h4qEdkJpxUUOFAd3YRxu1g/MAQUETA-AIRE-ACONDICIONADO?node-id=8-3&p=f&scaling=scale-down&content-scaling=fixed&page-id=8%3A2&starting-point-node-id=8%3A3&embed-host=share"
          title="Figma Prototipe ServiAir"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://embed.figma.com/design/h4qEdkJpxUUOFAd3YRxu1g/MAQUETA-AIRE-ACONDICIONADO?node-id=8-2&embed-host=share"
          title="Figma Project ServiAir"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContFigma>
    </Contenedor>
  );
};

export default Figma;
