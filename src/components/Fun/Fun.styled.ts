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
  width: 70%;
  margin: 70px 0 100px;

  @media screen and (min-width: 720px) {
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    margin: 50px 0 200px;
    width: 30%;
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
    height: 30px;
    width: 30px;
    position: absolute;
    right: -50px;
    background-color: gray;
    border-radius: 50%;
    transition: all 1s ease;
    visibility: hidden;
    &:hover {
      background-color: red;
    }

    @media screen and (min-width: 720px) {
      right: -100px;
      height: 50px;
      width: 50px;
      visibility: visible;
    }
  }
  .slick-prev {
    height: 30px;
    width: 30px;
    z-index: 11;
    position: absolute;
    left: -50px;
    background-color: gray;
    border-radius: 50%;
    transition: all 1s ease;
    visibility: hidden;

    &:hover {
      background-color: red;
    }
    @media screen and (min-width: 720px) {
      left: -100px;
      height: 50px;
      width: 50px;
      visibility: visible;
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

console.log("slick slide here styled");
