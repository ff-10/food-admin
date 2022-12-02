import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";



export const Sidebar = styled.div`
    width: 256px;
    height: 474px;
    background: #C74FEB;
    border-radius: 14px;
    padding: 24px 16px;
    position: fixed;
    top: 90px;

    @media screen and (max-width: 576px) {
        display: none;
    }

`;

export const SidebarLink = styled(NavLink)`

    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: all 500ms;
    border-radius: 4px;
    user-select: none;
    margin: 8px 0;
    color: #FFF;
    text-decoration: none;

    &:hover{
        background-color: rgba(255,255,255,.2);
    }


`;

export const SidebarIcon = styled.div`
    margin-right: 15px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    font-size: 20px;

`;

export const SidebarImg = styled.img`
    margin-right: 15px;
    margin-left: 5px;
`;