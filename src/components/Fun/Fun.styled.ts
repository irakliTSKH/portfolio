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
  h2 {
    margin-top: 100px;
    font-size: 20px;
    color: white;
    animation: ${animate} 1s ease infinite;
  }
`;

export const FunStyled = styled.div`
  width: 60%;
  margin: 70px 0 100px;

  @media screen and (min-width: 1200px) {
    margin: 50px 0 200px;
  }
`;

export const FunDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 60vh;
`;

export const CustomSlickArrows = styled.div`
  .slick-next {
    height: 50px;
    width: 50px;
    position: absolute;
    right: -50px;
    &:hover {
      background-color: grey;
    }
    @media screen and (min-width: 720px) {
      right: -100px;
    }
  }
  .slick-prev {
    height: 50px;
    width: 50px;
    z-index: 11;
    position: absolute;
    left: -50px;
    &:hover {
      background-color: grey;
    }
    @media screen and (min-width: 720px) {
      left: -100px;
    }
  }
`;

export const Container = styled.div`
  .slick-slide {
    /* background-color: #f0f0f0; */
    /* border: 1px solid #ddd; */
    /* padding: 20px; */

    /* margin: 10px; */
    /* padding: 20px; */
  }
`;

console.log("slick slide here");
