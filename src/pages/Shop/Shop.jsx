import React from "react";
import products from "../../constants/products";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: max-content;
  column-gap: 100px;
  row-gap: 100px;
`;

const Shop = () => {
  return (
    <Container>
      <Grid>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;
