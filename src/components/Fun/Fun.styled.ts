import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    color:white;
  
  }
  50% {
    color:red;
    scale: 1.1;

  }
  100% {
    color:white;
  
  }
`;
export const LetsFun = styled.div`
  position: relative;
  top: 100px;
  h2 {
    font-size: 20px;
    color: white;
    animation: ${animate} 1s ease infinite;
  }
`;
export const FunStyled = styled.div`
  padding: 200px 50px;
  gap: 20px;
  display: grid;
  grid-template-columns: auto auto;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding: 20%;
  }
`;

export const FunDiv = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 5px solid red;
  overflow: hidden;

  @media screen and (min-width: 720px) {
    height: 350px;
    width: 350px;
  }
`;
