import styled from "styled-components";

export const MainDiv = styled.form`
  background: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
`;

export const RaitingButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid gray;
  margin: 5px;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;
export const SubmitButton = styled.button`
  width: 70%;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  border: 2px solid black;
  cursor: pointer;
  color: black;
  margin: 10px;
  transition: 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }
`;

