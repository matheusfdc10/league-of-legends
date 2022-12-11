import styled from "styled-components";

export const StyledChampion = styled.div`
    flex: 1 0 auto;
    margin-top: 100px;

    @media (max-width: 535px){
        margin-top: 75px;
    }

    > hr {
        margin: 0;
        margin-top: 8px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .information {
        display: flex;

        .type {
            margin: 20px;

            h4 {
                margin: 0;
            }
    
            ul {
                padding-left: 20px;
            }
        }

        .blurb {
            flex: 1;
            margin: 20px;

            h4 {
                margin: 0;
            }

            p {
                text-align: justify;
            }
        }
    }
`