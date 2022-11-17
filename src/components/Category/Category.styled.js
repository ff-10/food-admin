import { Button } from "@mui/material";
import styled from "styled-components";


export const CategoryHeader = styled.div`
    height: 73px;
    background: #27283C;
    border-radius: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 52px;
    margin-bottom: 41px;
`;



export const HeaderCaption = styled.p`
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 0.01em;
    color: #C7C7C7;
`;



export const AddCategoryBtn = styled(Button)`
    width: 168px;
    height: 35px;
    font-weight: bold !important;
    background: #C035A2 !important;
    border: 2px solid #C035A2 !important;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px !important;
    letter-spacing: 0.25px;
    color: #FFFFFF !important;
`;

export const IDCell = styled.p`
    padding: 2px 12px;
    border: 1px solid #DFE2E9;
    border-radius: 8px;
    width: 57px;
    height: 24px;
`;