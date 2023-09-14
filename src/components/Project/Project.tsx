import { ProjectDiv } from "./Project.styled";


function Project(props: any) {
  return (
    <ProjectDiv
      // initial={{x: '100vw'}}
      // animate={{x: 0}}
      // transition={{ delay: 0.5, duration: 2}}
      // !!!  ვების რენდერისთაანავე იწყებს 
    >
      <img src={props.img} />
      <div>
        <h2>{props.title}</h2>
        <a href={props.url} target="_blank">Git Link</a>
      </div>
    </ProjectDiv>
  );
}

export default Project;
