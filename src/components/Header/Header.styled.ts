import styled from "styled-components";
import { motion } from "framer-motion";
import { PropsType } from "../../types/types";
import { FaStar } from "react-icons/fa";

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background: #101023;
`;
// header
export const HeaderStyled = styled.div`
  width: 100%;
  height: 95vh;
  color: white;
`;

export const IconDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 30px;
  position: absolute;
  right: 5%;
  top: 30%;
  a {
    color: grey;
  }
  a:hover {
    color: white;
    transition: all 1s ease;
  }

  @media screen and (max-width: 720px) {
    visibility: hidden;
  }
`;

export const InfoDiv = styled.div`
  margin: 50px;
  img {
    width: 100px;
    height: 100px;
    background-color: white;
    margin: auto;
  }
  @media screen and (min-width: 720px) {
    font-size: 2rem;
    margin: 150px;
    img {
      display: none;
    }
  }
`;
// END header

// AboutMe
export const AboutWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-width: 720px) {
    display: flex;
    top: 100px;
  }
`;


// END AboutMe

// Stars style
export const FaStarStyled = styled(FaStar)`
  color: gold;
  width: 10px;
  height: 10px;
`;
export const StarsDiv = styled(motion.div)<PropsType>`
  width: 10px;
  height: 10px;
  position: absolute;
  top: ${(props) => props.x}px;
  left: ${(props) => props.y}px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
//  end Stars styles
