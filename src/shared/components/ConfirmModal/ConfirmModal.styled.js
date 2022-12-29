import { Button, Dialog } from "@mui/material";
import styled from "styled-components";


export const ModalBody = styled(Dialog)`
    z-index: 999999 !important;
`;

export const Modal = styled.div`
    width: 498px;
    height: 226.28px;
    background: #FFFFFF;
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0px 40px;

    @media (max-width: 576px) {
        width: 100%;
        height: 250px;
    }
`;

export const Title = styled.p`
    margin-top: 33px;
    font-size: 28px;
    color: #000000;
    text-align: center;
    font-weight: bold;

    @media (max-width:  576px) {
        font-size: 20px;        
    }
`;

export const Message = styled.p`
    font-size: 18px;
    color: #4F4F4F;    
    text-align: center;
    margin-top: 13px;

    @media (max-width: 576px){
        font-size: 14px;
    }
`;

export const ButtonsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 31px;

    @media (max-width: 576px) {
        flex-direction: column-reverse;
    }
`;

export const CancelButton = styled(Button)`
    width: 106px !important;
    height: 33.79px !important;
    background: transparent !important;
    border: 2px solid #BDBDBD !important;
    border-radius: 4px !important;
    color: #BDBDBD !important;
    font-weight: bold !important;
    text-transform: capitalize !important;
    font-size: 18px !important;

    @media (max-width: 576px){
        width: 100% !important;
    }
`;

export const ConfirmButton = styled(CancelButton)`
    color: #FFF !important;
    background: #D63626 !important;
    border-color: #D63626 !important;
    margin-left: 29px !important;

    @media (max-width: 576px){
        margin-left: 0 !important;
        margin-bottom: 10px !important;
    }
`;