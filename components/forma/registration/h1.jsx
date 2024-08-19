"use client";
import styled from "styled-components";

const SH1 = styled.div`
  grid-area: 1/6/2/20;
  color: #fff;
  text-align: center;
  justify-self: center;
  align-self: center;
  font-size: 20px;
  font-family: 'saira', sans-serif;
`;

const H1 = () => {
  return <SH1><strong>чат</strong></SH1>;
};

export default H1;
