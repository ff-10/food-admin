import { Button } from "@mui/material";
import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    background: linear-gradient(#2d3132, #000);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-x: auto;
`;

export const ImgContainer = styled.div`
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center
`;

export const GoBackBtn = styled(Button)`
    background-color: #C035A2 !important;
    width:250px;
    height: 60px;
    font-weight: bold;
    color: #FFF !important;
    position: absolute;
    z-index: 999;

    @media (max-width: 586px) {
        width: 150px;
        height: 40px;
    }
    
`;

export const Img = styled.img`
    border-radius: 5px;
    position: static;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: 20px auto;
    width: auto;
    height: auto;

    @media (max-width: 776px) {
        width: 70%;
    }
`;

