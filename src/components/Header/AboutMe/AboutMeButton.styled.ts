import { motion } from "framer-motion";
import styled from "styled-components";

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
