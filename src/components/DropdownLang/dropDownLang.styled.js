import styled from "styled-components";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export const LangButton = styled(Button)`
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const LangMenu = styled(Menu)`
    width: 120px !important;
    padding: 0 !important;
`

export const LangItem = styled(MenuItem)``;


export const Img = styled.img`
    width: 41px;
    height: 41px;
    border-radius: 50% !important;
    object-fit: cover;
`