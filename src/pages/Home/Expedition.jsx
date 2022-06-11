import React from "react";
import styled from "styled-components";
import expedition from "../../assets/expedition.webp";
import Button from "../../components/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 1100px;
  padding: 100px 0;
`;

const Image = styled.img`
  width: 500px;
  object-fit: contain;
`;

const Content = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;

const Text = styled.p`
  line-height: 2;
  margin-bottom: 20px;
  font-size: 14px;
  max-width: 80%;
`;

const Expedition = () => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>EXPÉDITION ET </Title>
          <Title>LIVRAISON</Title>
        </TitleContainer>
        <Text>
          Chacun de nos produits sont directement livrés à l'emplacement de
          votre choix (France métropolitaine). Afin de commander et régler vos
          commandes, veuillez nous contacter directement à travers ce site web,
          nous vous rappellerons dans les meilleurs délais. Notre adresse e-mail
          ainsi que notre numéro de téléphone sont également à disposition pour
          toutes commandes.
        </Text>
        <Button>Contact</Button>
      </Content>
      <Image src={expedition} alt="Expedition" />
    </Container>
  );
};

export default Expedition;
