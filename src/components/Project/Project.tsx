import { ProjectDiv } from "./Project.styled";


function Project(props: any) {
  return (
    <ProjectDiv
      // initial={{x: '100vw'}}
      // animate={{x: 0}}
      // transition={{ delay: 0.5, duration: 2}}
      // !!!  ვების რენდერისთაანავე იწყებს 
    >
        {props.title}
    </ProjectDiv>
  );
}

export default Project;
