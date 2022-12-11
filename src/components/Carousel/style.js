import styled from "styled-components";

export const StyledCarousel = styled.div`
    
    > h1 {
        margin: 10px 0;
        text-align: center;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;

        .inner {
            display: flex;

            .skin {
                min-width: 400px;
                padding: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    pointer-events: none;
                }

                span {
                    font-size: 20px;
                    margin-top: 5px;
                    font-weight: bold;
                    text-align: center;
                }

                @media (max-width: 460px){
                    min-width: 300px;

                    img {
                        width: 300px;
                        height: 201px;
                    }

                    span {
                        font-size: 18px;
                    }
                }
            }

        }
    }

`