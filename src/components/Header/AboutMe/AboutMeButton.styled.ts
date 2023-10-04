import styled  from "styled-components";



export const AboutButtonStyled = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  color: white;
  font-family: 'Inconsolata', monospace;
  padding: 8px 13px;
  border-radius: 5px;
  position: relative;
  z-index: 11;
  background: gray;
  transition:  1s;
  &:hover{
    background-color: red;
  }

  @media screen and (width > 720px){
    padding: 12px 18px;
  }
`;
