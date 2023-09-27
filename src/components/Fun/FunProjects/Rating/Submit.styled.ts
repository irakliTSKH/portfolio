import styled from "styled-components";

export const MainDiv = styled.form`
  background: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  h1 {
    font-size: 10px;
  }
  p {
    font-size: 8px;
  }
  
  @media screen and (min-width: 720px){
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 12px;
    }
  }
  @media (720px <= width <= 1000px){
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
    button {
      font-size: 15px;
    }
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
  @media (720px <= width <= 1000px){
  width: 20px;
  height: 20px;
  border-radius: 5px;
  font-size: 10px;
}

`;
export const SubmitButton = styled.button`
  width: 70%;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid black;
  cursor: pointer;
  color: black;
  margin: 10px;
  transition: 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (720px <= width <= 1000px){
  height: 20px;
}
`;

