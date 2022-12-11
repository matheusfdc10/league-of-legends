import styled from "styled-components";

export const StyledChampion = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    min-height: 100vh;

    .information {
        display: flex;

        .type {
            margin: 10px;

            h4 {
                margin: 0;
            }
    
            ul {
                padding-left: 20px;
                margin: 0;
                margin-top: 5px;
            }
        }

        .blurb {
            flex: 1;
            margin: 10px;

            h4 {
                margin: 0;
            }

            p {
                text-align: justify;
            }
        }
    }
`