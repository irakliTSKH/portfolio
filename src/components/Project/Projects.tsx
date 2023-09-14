import { ProjectsStyled } from "./Project.styled";
import { forwardRef } from "react";
import Project from "./Project";
import { projectList } from "./ProjectsAPI"
import { ProjectListType } from '../../types/types';



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
