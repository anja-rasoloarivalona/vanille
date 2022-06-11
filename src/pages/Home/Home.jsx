import React, { useEffect } from "react";
import styled from "styled-components";
import image from "../../assets/home__header.webp";
import Slider from "./Slider";
import Expedition from "./Expedition";
import About from "./About";
import ContactForm from "./ContactForm";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    user-select: none;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  padding-top: 100px;
  background: ${({ theme }) => theme.colors.primary.light};
`;

const Image = styled.img`
  width: 90vw;
  max-width: 1100px;
  object-fit: contain;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background: ${({ theme }) => theme.colors.primary.light};
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 84px;
  font-weight: 400;
`;

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash != null) {
      const current = hash.replace("#", "");
      if (current != null) {
        const el = document.getElementById(current);
        if (el != null) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location]);

  return (
    <Container>
      <ImageContainer>
        <Image src={image} atl="Vanille de Madagascar" />
      </ImageContainer>
      <TitleContainer>
        <Title>Une sélection de</Title>
        <Title>gousses uniques</Title>
      </TitleContainer>
      <Slider />
      <Expedition />
      <About />
      <ContactForm />
    </Container>
  );
};

export default Home;
