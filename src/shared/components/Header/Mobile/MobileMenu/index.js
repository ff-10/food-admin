import { Drawer } from "@mui/material";
import { MdOutlineArrowBackIosNew } from "react-icons/md"

import { createContext, useState } from "react";
import { MobileMenuBody, Header, CloseMenu, Footer, LogoImg } from "./MobileMenu.styled";
import SideBar from "../../../Sidebar";

import Logo from "../../../../../images/logos/logo.svg"
import FooterLogo from "../../../../../images/logos/eacampLogo.svg";
import useMobileMenuProvider from "../../../../../hooks/useMobileMenu";


export default function MobileMenu() {

    const {open, setOpen} = useMobileMenuProvider();




    return (
        <>
            <Drawer
                sx={{
                    width: "90%",
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'transparent',
                        position: "relative",
                        width: "90%",
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={open}
            >

                <MobileMenuBody>
                    <Header>
                        <CloseMenu onClick={() => setOpen(prev => !prev)}><MdOutlineArrowBackIosNew /></CloseMenu>
                        <img src={Logo} alt="Logo" />
                    </Header>
                    <SideBar />
                    <Footer>
                        <LogoImg src={FooterLogo} alt="Logo" />
                        <div style={{marginLeft: 50}}>
                            <p>Version 1.1</p>
                            <p>2022</p>
                        </div>
                    </Footer>
                </MobileMenuBody>
            </Drawer>
        </>

    )


}
