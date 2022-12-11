import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    background-color: #5b50ef;
    display: flex;
    box-shadow: 0px 0px 10px black;
    z-index: 100;

    > div {
        margin-left: 30px;
        color: white;

        > a > img {
            width: 140px;
        }

        @media (max-width: 535px){
            margin-left: 15px;
            
            > a > img {
                width: 110px;
            }
        }
    }
        
    > input {
        border: none;
        outline: none;
        max-width: 300px;
        width: 100%;
        height: 35px;
        border-radius: 25px;
        overflow: hidden;
        margin: auto;
        font-size: 15px;
        padding-left: 12.5px;

        @media (max-width: 535px){
            margin-left: 16px;
            margin-right: 16px;
        }
    }
`