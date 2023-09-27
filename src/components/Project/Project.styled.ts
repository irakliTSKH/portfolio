import styled from "styled-components";
import { CircleProps } from "../../types/types";

export const ProjectsStyled = styled.div`
  width: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  position: relative;
  background: white;
  color: #101023;
  overflow: hidden;
`;

export const Circle = styled.div<CircleProps>`
  position: absolute;
  border-radius: 50%;
  border: 10px solid #101023;
  filter: blur(4px);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  box-shadow: 20px 20px 20px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const ProjectDiv = styled.div`
  position: relative;
  width: 70vw;
  height: 60vh;
  margin: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 30px 40px;
  div {
    position: absolute;
    color: white;
    bottom: 10%;
    left: 10%;
    h2 {
      font-size: 30px;
    }

    a {
      font-size: 20px;
      color: white;
      text-decoration: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    filter: brightness(30%);
  }

  @media screen and (min-width: 920px) {
    width: 70vw;
    height: 70vh;
    margin: 100px;
    div {
      h2 {
        font-size: 50px;
      }

      a {
        font-size: 30px;
      }
    }
  }
`;
