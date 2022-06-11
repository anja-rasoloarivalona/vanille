import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
`;

const PageContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default PageContainer;
