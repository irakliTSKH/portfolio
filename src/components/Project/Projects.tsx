import { ProjectsStyled, Circle } from "./Project.styled";
import { forwardRef } from "react";
import Project from "./Project";
import { projectList } from "./ProjectsAPI";
import { ProjectListType } from "../../types/types";

const Projects = forwardRef((_, ref: any) => {
  return (
    <ProjectsStyled ref={ref}>
      <Circle top={200} left={100} width={200} height={200} />
      <Circle top={300} right={200} width={60} height={60} />
      <Circle top={800} left={400} width={100} height={100} />
      <Circle top={1600} right={200} width={100} height={100} />
      <Circle top={1800} left={200} width={300} height={300} />
      <h2>My Projects</h2>
      {projectList.map((project: ProjectListType) => (
        <Project
          title={project.title}
          key={project.key}
          img={project.img}
          url={project.url}
        />
      ))}
    </ProjectsStyled>
  );
});

export default Projects;

