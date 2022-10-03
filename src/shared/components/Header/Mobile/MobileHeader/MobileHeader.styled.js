import styled from "@emotion/styled";
import { Button } from "@mui/material";


export const HeaderBody = styled.div`
    background-color: #27283C;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: none;
    align-items: center;
    justify-content: space-between;
    

    @media screen and (max-width: 576px) {
        display: flex;
    }
`;


export const HamburgerMenu = styled.div`
    background-color: transparent;
    margin-right: 5px;
    margin-left: 11px;
    font-size: 25px;
    cursor: pointer;
    user-select: none;
    perspective: 300px;
    transform:  rotateY(180deg);

`


export const Logo = styled.div`
    margin-left: 0px;
`


export const AddProductButton = styled(Button)`
    font-size: 12px;
    background: #C035A2 !important;
    border: 2px solid #C035A2;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px;
    color: #FFFFFF;
    font-weight: bold;
`

export const ItemsArea = styled.div`
    display: flex;
    align-items: center;
    margin-right: 13px;
`

export const MenuArea = styled.div`
    display: flex;
    align-items: center;
    margin-right: 13px;
`

export const AdminLogo = styled.div`
    margin-left: 13px;
    display: flex;
    align-items: center;
`