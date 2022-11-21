import { HashLink as Link } from "react-router-hash-link";

import styled from "@emotion/styled";

const Nav = styled.nav`
  background-color: #161518;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  padding: 10px 0;
  z-index: 5;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  text-transform: uppercase;
  font-weight: 700;
`;

const NavLi = styled.li`
  font-size: 12px;
  cursor: pointer;
  color: #9761d1;

  & > a {
    text-decoration: none;
    color: #9761d1;
    transition: color 450ms;
  }

  & > a:hover {
    color: white;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <Link smooth to="#inicio">
            Inicio
          </Link>
        </NavLi>
        <NavLi>
          <Link smooth to="#identidad">
            Identidad
          </Link>
        </NavLi>
        <NavLi>
          <Link smooth to="#videos">
            Videos
          </Link>
        </NavLi>
        <NavLi>
          <Link smooth to="#medias">
            Medias
          </Link>
        </NavLi>
        <NavLi>
          <Link smooth to="#websites">
            Web
          </Link>
        </NavLi>
      </NavUl>
    </Nav>
  );
};

export default NavBar;
