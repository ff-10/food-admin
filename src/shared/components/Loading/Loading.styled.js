import styled from "styled-components";



export const LoadingImage = styled.img`
    width: 10%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    user-select: none;
    z-index: 99999999;
    box-shadow:  0 0 100px #000;
    border-radius: 50%;


    @media (max-width: 956px) {
        width: 25%;
    }
`;