import React from "react";
import styled from "styled-components";
const StyledImg = styled.img`
  height: 100%;
  width:100%
  margin: 0 auto;
`;
export const Img = ({ src }) => <StyledImg src={src} alt="slide img" />;
