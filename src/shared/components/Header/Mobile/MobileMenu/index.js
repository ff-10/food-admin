import { Drawer } from "@mui/material";
import { MdOutlineArrowBackIosNew } from "react-icons/md"

import { MobileMenuBody, Header, CloseMenu, Footer, LogoImg, MobileSidebar, SidebarLink, SidebarIcon } from "./MobileMenu.styled";

import Logo from "../../../../../images/logos/logo.svg"
import FooterLogo from "../../../../../images/logos/eacampLogo.svg";
import useMobileMenuProvider from "../../../../../hooks/useMobileMenu";

import { GiStrongbox } from 'react-icons/gi';
import { MdDashboard, MdOutlineStorefront, MdLocalOffer, MdOutlineLogout } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi"


function logout() {
    localStorage.removeItem("isLogged");
    // forward to login
}



export default function MobileMenu() {


    const { open, setOpen } = useMobileMenuProvider();


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
                        <CloseMenu onClick={() => { setOpen(prev => !prev) }}><MdOutlineArrowBackIosNew /></CloseMenu>
                        <img src={Logo} alt="Logo" />
                    </Header>

                    <MobileSidebar>

                        <SidebarLink>
                            <SidebarIcon><MdDashboard /></SidebarIcon>
                            <span>Dashboard</span>
                        </SidebarLink>

                        <SidebarLink>
                            <SidebarIcon><MdOutlineStorefront /></SidebarIcon>
                            <span>Products</span>
                        </SidebarLink>


                        <SidebarLink>
                            <SidebarIcon><HiOutlineClipboardList /></SidebarIcon>
                            <span>Restaurants</span>
                        </SidebarLink>


                        <SidebarLink>
                            <SidebarIcon><GiStrongbox /></SidebarIcon>
                            <span>Category</span>
                        </SidebarLink>

                        <SidebarLink>
                            <SidebarIcon><MdLocalOffer /></SidebarIcon>
                            <span>Offers</span>
                        </SidebarLink>

                        <SidebarLink onClick={logout}>
                            <SidebarIcon><MdOutlineLogout /></SidebarIcon>
                            <span>Logout</span>
                        </SidebarLink>

                    </MobileSidebar>

                    <Footer>
                        <LogoImg src={FooterLogo} alt="Logo" />
                        <div style={{ marginLeft: 50 }}>
                            <p>Version 1.1</p>
                            <p>2022</p>
                        </div>
                    </Footer>
                </MobileMenuBody>
            </Drawer>
        </>

    )


}
