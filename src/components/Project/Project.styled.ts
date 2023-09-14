import styled from "styled-components";

export const ProjectsStyled = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

export const ProjectDiv = styled.div`
  position: relative;
  width: 70vw;
  height: 40vh;
  margin: 80px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 30px 40px;
  div {
    position: absolute;
    color: white;
    bottom: 10%;
    left: 10%;
    h2 {
        font-size: 50px;
    }

    a {
      font-size: 30px;
      color: white;
      text-decoration: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    filter: brightness(30%);
  }

  @media screen and (min-width: 920px) {
    width: 70vw;
    height: 80vh;
    margin: 100px;
  }
`
