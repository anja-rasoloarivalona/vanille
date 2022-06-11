import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 80px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary.light};
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px;
  background: ${({ theme }) => theme.colors.primary.main};
`;

const NavLinks = styled.div`
  a {
    text-decoration: none !important;
    margin-right: 12px;
    font-size: 14px;
    color: black !important;
  }
`;

const NavEmail = styled.div`
  font-size: 14px;
`;

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavContainer>
        <NavLinks>
          <Link to="/">Accueil</Link>
          <Link to="/boutique">Boutique</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/#about">À propos de nous</Link>
        </NavLinks>
        <NavEmail>fleurblanche.vanille@outlook.fr</NavEmail>
      </NavContainer>
    </Container>
  );
};

export default Header;
