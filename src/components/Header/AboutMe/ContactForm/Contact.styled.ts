import styled from "styled-components";
import { motion } from "framer-motion";


export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const AboutMeDiv = styled(motion.div)`
  width: 60vw;
  height: 30vh;
  background-color: whitesmoke;
  text-align: center;
  padding: 30px 30px;
  color: black;
  font-size: 14px;
  @media screen and (min-width: 720px) {
    font-size: 22px;
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