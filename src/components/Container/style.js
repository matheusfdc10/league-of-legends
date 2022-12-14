import styled from "styled-components";

export const StyledContainer = styled.div`
    margin-top: 100px;
    flex: 1 0 auto;
    padding: 15px;

    @media (max-width: 535px){
        margin-top: 75px;
    }

    > section {
        display: flex;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        flex: 1;

        > div {
            margin: 10px;
            display: flex;

            > .link {
                padding: 12px;
                border: solid 1px;
                justify-content: center;
                text-decoration: none;
                color: black;

                > img {
                    box-shadow: 0px 0px 8px black;
                }

                > span {
                    font-size: 20px;
                    font-weight: bold;
                    display: block;
                    text-align: center;
                }
            }
        }

        > div:hover {
            background: #0002;
            cursor: pointer;
        }
    }

    @media (max-width: 411px){
        margin-top: 75px;
        img {
            width: 100px;
        }
    }

    @media (max-width: 321px){
        img {
            width: 80px;
        }
    }
`