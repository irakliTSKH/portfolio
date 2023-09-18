import { SkillsStyled } from "./Skills.styled"
import { forwardRef } from "react";
import Skill from './Skill'

const Skills = forwardRef((props: any, ref: any)  => {
  return (
    <SkillsStyled ref={ref}>
        <Skill />
        <Skill />
        <Skill />
    </SkillsStyled>
  )
})

export default Skills;


console.log("here props")