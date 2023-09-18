import { SkillsStyled } from "./Skills.styled"
import { forwardRef } from "react";
import Skill from './Skill'

const Skills = forwardRef((_, ref: any)  => {
  return (
    <SkillsStyled ref={ref}>
        <Skill />
        <Skill />
        <Skill />
    </SkillsStyled>
  )
})

export default Skills;

