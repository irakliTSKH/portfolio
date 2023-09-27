import  styled from "styled-components";


export const FooterStyled = styled.div`
    width: 100%;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid grey;

    div {
        display: flex;
        gap: 10px;
        font-size: 30px;
        color: white;
        flex-wrap: wrap;
    }
    
    a {
        margin: 80px 30px 0 ;
        color: grey;
        font-size: 20px;
        &:hover{
            color: white;
            transition: all 1s ease;
        }
    }

    h3 {
        color: grey;
        font-size: 10px;
    }
`

