import styled from "styled-components";

export const StyledChampion = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    min-height: 100vh;

    > hr {
        margin: 0;
        margin-top: 8px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .information {
        display: flex;

        .type {
            margin: 20px 10px;

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