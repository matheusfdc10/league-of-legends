import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 100px;
    /* background: #2d2b44; */
    background: #111111;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

        p { 
            text-align: center;
            color: white;
            align-items: center;
            a {
                font-weight: bold;
                color: #0078d7;
                text-decoration: none;
            }
        }

        @media (max-width: 600px) {
            p {
                font-size: 12px;
            }
        }
    
`