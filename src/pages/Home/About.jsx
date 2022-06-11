import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 100px 60px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

const SubTitle = styled.div`
  margin: 32px 0;
`;

const Text = styled.p`
  width: 80%;
  max-width: 820px;
  line-height: 2;
  text-align: center;
  font-size: 14px;
`;

const About = () => {
  return (
    <Container id="about">
      <Title>À PROPOS DE FLEUR BLANCHE</Title>
      <SubTitle>Qui sommes-nous?</SubTitle>
      <Text>
        Originaires de Madagascar nous avons récemment lancé notre société Fleur
        blanche. Fleur blanche est une société spécialisée dans l'exportation de
        vanille Madagascar. Ayant grandis à Madagascar, nous bénéficions de
        producteurs et de gousses de vanille de qualité. Nous proposons des
        gousses de vanille noire de Madagascar, également appelé vanille
        bourbon. Chacune de nos gousses de vanille fait entre 14 et 16 cm.
        Nouveau sur le marché français, nous serions ravi de discuter et de vous
        faire tester nos produits, qui attesteront de notre engagement.
      </Text>
    </Container>
  );
};

export default About;
