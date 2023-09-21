import { SkillsStyled, SkillDiv } from "./Skills.styled"
import { forwardRef } from "react";
import Clock from "./FunProjects/Clock/Clock";
import Weather from "./FunProjects/Weather/Weather";
import Fun3 from "./FunProjects/Fun3/Fun3";

const arr = [Clock, Weather, Fun3]

const Skills = forwardRef((_, ref: any)  => {
  return (
    <SkillsStyled ref={ref}>
        {arr.map((MiniProj, index) => 
        (<SkillDiv key={index} >
          <MiniProj />
        </SkillDiv>))}
      
    </SkillsStyled>
  )
})

export default Skills;

