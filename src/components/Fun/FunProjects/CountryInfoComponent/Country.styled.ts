import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  background-color: white;
  h1 {
    font-size: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 10px;
    }
    h3 {
      font-size: 8px;
    }
    img {
      width: 70px;
      height: 50px;
    }
  }

  input {
    padding: 5px;
    border: 1px solid red;
    border-radius: 5px;
  }
  button {
    padding: 5px;
    background-color: red;
    color: white;
    font-size: 10px;
    border: 1px solid red;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
      background-color: white;
      color: red;
    }
  }

  @media screen and (min-width: 720px) {
    h1 {
      font-size: 20px;
    }

    div {
      h2 {
        font-size: 15px;
      }
      h3 {
        font-size: 10px;
      }
      img {
        width: 100px;
        height: 70px;
      }
    }

    input {
      padding: 10px;
    }
    button {
      font-size: 15px;
    }
  }
`;
