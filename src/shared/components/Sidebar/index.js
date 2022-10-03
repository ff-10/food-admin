import { Sidebar, SidebarLink, SidebarIcon } from "./Sidebar.styled";


import { GiStrongbox } from 'react-icons/gi';
import { MdDashboard, MdOutlineStorefront, MdLocalOffer, MdOutlineLogout } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi"

function logout() {
    localStorage.removeItem("isLogged");
    // forward to login
}


export default function SideBar() {






    return (
        <Sidebar>

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



        </Sidebar>
    )

}
