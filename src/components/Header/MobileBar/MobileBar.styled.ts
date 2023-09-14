import styled from "styled-components";

export const MobileBarStyled = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    width: 250px;
    height: 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 999;
    @media screen and (min-width: 720px){
        display: none;
    }
    `