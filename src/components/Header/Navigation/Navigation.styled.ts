import styled from "styled-components";
import { motion } from "framer-motion";


export const MobileBarStyled = styled.div`
    background-color: rgba(205, 205, 205, 0.6);
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

export const NavBarStyled = styled(motion.div)`

    display: none;
    position: fixed;
    color: grey;
    font-size: 20px;
    background: #101023;
    z-index: 111;
    padding: 0 100px;
    top: 0;
    left: 0;
    right: 0;
    
    img {
        width: 40px;
        height: 40px;
        background-color: grey;   
        cursor: pointer;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 60px;
        li{
            cursor: pointer;
            &:hover {
                color: white;
                transition: all 1s ease;
            }
        }
        
    }
    @media screen and (min-width: 720px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`