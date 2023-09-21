import styled, { keyframes } from "styled-components";


// const animate = keyframes`
//     0% {
//         transform: rotate(-50deg);
//     }
//     25% {
//         transform: rotate(0);
//     }
//     50% {
//         transform: rotate(50deg);
//     }
//     75% {
//         transform: rotate(0);
//     }
//     100% {
//         transform: rotate(-50deg);
//     }

// `


export const LetsFun = styled.div`
    position: relative;
    top: 20px;

    h2 {
        font-size: 20px;
        color: white;
      
    }

    
`
export const SkillsStyled = styled.div`
    padding: 200px  50px;
    gap: 20px;
    display: grid;
    grid-template-columns: auto auto;
    
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
    height: 250px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    @media screen and (min-width: 720px){
        height: 350px;
         width: 350px;
    }
    `

