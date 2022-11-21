import styled from "@emotion/styled";

import yt from "../../assets/icons/youtubeicono.svg";
import lin from "../../assets/icons/linkedinicono.svg";
import cv from "../../assets/icons/cvicono.svg";
import pdf from '../../assets/cv/GabrielGirottiDG.pdf'

const FooterG = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;

  gap: 0;
`;

const RedesLink = styled.a`
  padding: 0;
`;

const ContImagen = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Imagen = styled.img`
  transition: transform 450ms;
  width: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Texto = styled.p`
  margin: 5px auto 20px auto;
  color: #b7b7b7;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <FooterG>
      <ContImagen>
        <RedesLink
          href="https://www.youtube.com/channel/UCBJA7igiDiwKDM9sXBxChLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Imagen src={yt} alt="Youtube" />
        </RedesLink>
        <RedesLink
          href="https://www.linkedin.com/in/gabriel-girotti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Imagen src={lin} alt="Linkedin" />
        </RedesLink>
        <RedesLink
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Imagen src={cv} alt="Curriculum Vitae" />
        </RedesLink>
      </ContImagen>
      <Texto>Gabriel Girotti - 2022</Texto>
    </FooterG>
  );
};

export default Footer;
