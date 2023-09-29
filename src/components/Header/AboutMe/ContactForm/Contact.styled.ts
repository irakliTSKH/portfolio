import styled from "styled-components";
import { motion } from "framer-motion";


export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  background-color: #2e303e;
  color: white;
`;

export const AboutMeDiv = styled(motion.div)`
  width: 60vw;
  height: 30vh;
  background-color: whitesmoke;
  text-align: center;
  padding: 30px 30px;
  color: black;
  font-size: 12px;
  @media screen and (min-width: 720px) {
    font-size: 16px;
    width: 30vw;
    height: 50vh;
  }
`;
export const ContactDiv = styled(AboutMeDiv)`
  background-color: #2e303e;
`;

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;

  input {
    color: white;
    width: 80%;
    background-color: #2e303e;
    height: 7px;
    padding: 10px;
  }
  textarea {
    color: white;
    background-color: #2e303e;
    padding: 10px;
    width: 80%;
    height: 30%;
  }

  button {
    width: 50%;
    height: 20px;
    cursor: pointer;
    background-color: #2e303e;
    color: white;
    @media screen and (min-width: 720px) {
      height: 30px;
  }
  }
`;