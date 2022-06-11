import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

const LogoContainer = styled.div`
  margin-bottom: 60px;
`;

const Media = styled.div`
  display: flex;

  svg {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.grey.main};
  }
`;

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Media>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagramSquare} />
        <FontAwesomeIcon icon={faLinkedin} />
      </Media>
    </Container>
  );
};

export default Footer;
