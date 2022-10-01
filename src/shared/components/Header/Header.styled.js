import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const HeaderBody = styled.div`
    background-color: #27283C;
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Logo = styled.div`
    margin-left: 21px;
`


export const AddProductButton = styled(Button)`
    font-size: 12px;
    background: #C035A2 !important;
    border: 2px solid #C035A2;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px;
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 22px;
`

export const ItemsArea = styled.div`
    display: flex;
    align-items: center;
    margin-right: 13px;
`

export const AdminLogo = styled.div`
    margin-left: 13px;
    display: flex;
    align-items: center;
`