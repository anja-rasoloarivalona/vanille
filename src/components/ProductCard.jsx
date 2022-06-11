import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 206px;
`;

const Image = styled.img`
  width: 100%;
  height: 206px;
  object-fit: cover;
`;

const Text = styled.div``;

const Title = styled.div`
  font-size: 16px;
  margin: 8px 0;
`;

const Price = styled.div`
  font-weight: bold;
`;

const ProductCard = ({ image, title, price }) => {
  return (
    <Container>
      <Image src={image} alt="Vanille image" />
      <Text>
        <Title>{title}</Title>
        <Price>{price} €</Price>
      </Text>
    </Container>
  );
};

export default ProductCard;
