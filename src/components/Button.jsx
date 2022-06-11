import styled from "styled-components";
import React from "react";

const ButtonComponent = styled.button`
  padding: 10px 20px;
  background: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = (props) => {
  return <ButtonComponent>{props.children}</ButtonComponent>;
};

export default Button;
