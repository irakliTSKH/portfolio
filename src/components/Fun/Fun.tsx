
import { FunStyled, LetsFun } from "./Fun.styled";
import { forwardRef } from "react";
import  SliderComponent from "./SliderComponent";


const Fun = forwardRef((_, ref: any) => {
  return (
    <>
      <LetsFun  ref={ref}>
        <h2>Lets Fun</h2>
      </LetsFun>
      <FunStyled>
        <SliderComponent /> 
      </FunStyled>
    </>
  );
});


export default Fun;