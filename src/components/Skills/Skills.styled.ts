import styled from "styled-components";

export const SkillsStyled = styled.div`
    padding: 200px  50px;
    gap: 20px;
    display: grid;
    grid-template-columns: auto auto;
    margin: 2px 0;
    background-color: white;
    

    @media screen and (min-width: 1200px){
        display: flex;
    }
    @media screen and (max-width: 720px){
        display: flex;
        flex-direction: column;
        padding: 20%;
    }
`

export const SkillDiv = styled.div`
    height: 40vh;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 20px; 
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 250%;
        height: 250%;
        background: linear-gradient(blue, white);
        animation: animate 2s linear infinite;
    }
    &::after {
        content: '';
        position: absolute;
        background: white;
        inset: 5px;
        border-radius: 16px;
    }
    
    p {
        position: relative;
        color: black;
        font-size: 1rem;
        z-index: 11;
    }
    
   
    @keyframes animate 
    {
        0%
        {
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`