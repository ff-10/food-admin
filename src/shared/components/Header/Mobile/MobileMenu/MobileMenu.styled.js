import styled from "styled-components";
import { SidebarLink as SidebarLnk } from "../../../Sidebar/Sidebar.styled";

export const MobileMenuBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #C74FEB;
`;


export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-left: 6px;

`;

export const CloseMenu = styled.div`
    font-size: 20px;
    color:  #FFFFFF;
    margin-right: 8px;
`;

export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    width: 81%;
    height: 70px;
    background: #85399C;
    font-size: 12px;
    letter-spacing: 0.01em;
    color: #8E8E93;
`;

export const LogoImg = styled.img`
    margin-left: 13px;
    margin-top: 3px;
`;


export const MobileSidebar = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 32px;
    padding: 10px 22px;
`;



export const SidebarLink = styled(SidebarLnk)`
    &:hover{
        background: rgba(0,0,0,.1)
    }
`;

export const SidebarIcon = styled.div`
    margin-right: 15px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #FFFFFF;
`
