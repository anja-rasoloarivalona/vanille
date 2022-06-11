import styled from "styled-components";
import logo from "../assets/logo.webp";
import React from "react";

const Container = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

const LogoTextMain = styled.div`
  text-transform: uppercase;
  font-size: 24.1px;
  font-weight: 300;
`;

const LogoTextSub = styled.div`
  font-size: 15px;
  font-weight: 300;
`;

const Logo = () => {
  return (
    <Container>
      <LogoImage src={logo} alt="Fleur Blanche" />
      <LogoText>
        <LogoTextMain>Fleur blanche</LogoTextMain>
        <LogoTextSub>Vanille de Madagascar</LogoTextSub>
      </LogoText>
    </Container>
  );
};

export default Logo;
