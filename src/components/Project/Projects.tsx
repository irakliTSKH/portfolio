import { ProjectsStyled } from "./Project.styled";
import { forwardRef } from "react";
import Project from "./Project";
import  game  from "../../assets//spark plugs 2.png";
import { ProjectListType } from '../../types/types';

const projectList: ProjectListType[] = [
  {
    key:1,
    title: "mini-Game",
    img: game,
    url: "https://iraklitskh.github.io/mini-Game/",
    
  },
  {
    key:2,
    title: "Mini-Game2",
    img: game,
    url: "https://iraklitskh.github.io/mini-Game/",
    
  },
  {
    key:3,
    title: "Mini-Game3",
    img: game,
    url: "https://iraklitskh.github.io/mini-Game/",
    
  }
];


// TS error
const Projects = forwardRef((props: any, ref: any) => {
  return (
    <ProjectsStyled ref={ref}>
      <h2>My Projects</h2>
      {projectList.map((project: ProjectListType) => (
        <Project
         title={project.title} 
         key={project.key} 
         img={project.img} 
         url={project.url} />
      ))}
    </ProjectsStyled>
  );
});

export default Projects;
