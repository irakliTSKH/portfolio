import { SkillsStyled, SkillDiv, LetsFun } from "./Skills.styled";
import { forwardRef } from "react";
import Clock from "./FunProjects/Clock/Clock";
import Weather from "./FunProjects/Weather/Weather";
import CountryInfoComponent from "./FunProjects/CountryInfoComponent/CountryInfoComponent";

const arr = [Clock, Weather, CountryInfoComponent];

const Skills = forwardRef((_, ref: any) => {
  return (
    <>
      <LetsFun>
        <h2>Lets Fun</h2>
      </LetsFun>
      <SkillsStyled ref={ref}>
        {arr.map((MiniProj, index) => (
          <SkillDiv key={index}>
            <MiniProj />
          </SkillDiv>
        ))}
      </SkillsStyled>
    </>
  );
});

export default Skills;
