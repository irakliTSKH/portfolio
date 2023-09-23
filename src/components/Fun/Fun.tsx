import { FunStyled, FunDiv, LetsFun } from "./Fun.styled";
import { forwardRef } from "react";
import Clock from "./FunProjects/Clock/Clock";
import CountryInfoComponent from "./FunProjects/CountryInfoComponent/CountryInfoComponent";
import Submit from "./FunProjects/Rating/Submit";

const arr = [Clock, Submit, CountryInfoComponent];

const Fun = forwardRef((_, ref: any) => {
  return (
    <>
      <LetsFun>
        <h2>Lets Fun</h2>
      </LetsFun>
      <FunStyled ref={ref}>
        {arr.map((MiniProj, index) => (
          <FunDiv key={index}>
            <MiniProj />
          </FunDiv>
        ))}
      </FunStyled>
    </>
  );
});

export default Fun;
