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

const ContVideos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  gap: 20px;
  flex-wrap: wrap;
`;

const Videos = () => {
  return (
    <Contenedor id="videos">
      <Titulo>Videos</Titulo>
      <ContVideos>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g98_nNrRzIQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TbNvwnX4tKs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H0e-2WJOf9E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9F8UMKqdAq8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ContVideos>
    </Contenedor>
  );
};

export default Videos;
