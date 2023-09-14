import { ProjectDiv } from "./Project.styled";
import { ProjectProps } from "../../types/types";


function Project(props: ProjectProps) {
  return (
    <ProjectDiv >
      <img src={props.img} />
      <div>
        <h2>{props.title}</h2>
        <a href={props.url} target="_blank">Link</a>
      </div>
    </ProjectDiv>
  );
}

export default Project;
