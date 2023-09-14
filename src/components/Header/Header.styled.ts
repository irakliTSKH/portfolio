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
  margin: 100px;
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
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-width: 720px) {
    display: flex;
  }
`;
export const AboutButtonStyled = styled(motion.button)`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: white;
  padding: 1em 2em;
  border-radius: 5px;
  position: relative;
  isolation: isolate;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #d41212,
      #e10040,
      #da0074,
      #b200b1,
      #2e12eb
    );
    inset: 0;
    scale: 1 0;
    transition: scale 500ms;
    transform-origin: bottom;
  }

  &:hover::after,
  &:focus-visible::after {
    transform-origin: bottom;
    scale: 1 1;
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

//  Form styles
export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;

  input {
    width: 80%;
    border: none;
    height: 20px;
    padding: 10px;
  }
  textarea {
    padding: 20px;
    width: 60%;
  }

  button {
    width: 50%;
    height: 30px;
    padding: 5px;
    cursor: pointer;
  }
`;
