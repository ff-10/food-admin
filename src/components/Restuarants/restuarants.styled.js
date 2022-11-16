import { Button, Card } from "@mui/material";
import styled from "styled-components";
import { CardContainer as ProductCrdCntr } from "../Products/Products.styled";


export const CardContainer = styled(ProductCrdCntr)`

    justify-content: flex-start !important;
    align-items: flex-start !important;

`

export const ResHeader = styled.div`
    height: 73px;
    background: #27283C;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 52px;
`;


export const HeaderCaption = styled.p`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.01em;
    color: #C7C7C7;
`;


export const AddResBtn = styled(Button)`
    background: #C035A2 !important;
    border: 2px solid #C035A2;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px;
    letter-spacing: 0.25px;
    color: #FFFFFF !important;
`;


export const ResCard = styled(Card)`
    position: relative;
    display: flex;
    align-items: center;
    width: 247px;
    height: 83px;
    box-shadow: 0px 4px 4px rgba(57, 57, 57, 0.25);
    border-radius: 5px;
    margin-right: 44px;
    margin-bottom: 10px;
`;

export const ResImage = styled.img`
    width: 65px;
    height: 57px;
    margin: 11px 15px 11px 12px;
`;

export const ResDetail = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ResName = styled.p`
    font-size: 18px;
    letter-spacing: 0.01em;
    color: #1E1E30;
    font-weight: 500;
`;

export const ResType = styled.p`
    letter-spacing: 0.01em;
    color: #828282;
    font-size: 14px;
    font-weight: 500;
`;

export const DeleteResBtn = styled(Button)`
    position: absolute !important;
    top: 3px;
    right: -5px;
`;
