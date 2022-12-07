import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #5b50ef;
    display: flex;
    box-shadow: 0px 0px 10px black;

    > div {
        margin-left: 30px;
        color: white;

        > h1 {
            color: #fff;
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
    }
`