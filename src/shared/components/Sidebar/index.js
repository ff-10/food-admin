import { Sidebar, SidebarLink, SidebarIcon } from "./Sidebar.styled";


import { GiStrongbox } from 'react-icons/gi';
import { MdDashboard, MdOutlineStorefront, MdLocalOffer, MdOutlineLogout } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi"
import { useNavigate } from "react-router-dom";



export default function SideBar() {

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("isLogged");
        return navigate('/login');
        alert('ok');
    }


    return (
        <Sidebar>

            <SidebarLink to={'/dashboard'}>
                <SidebarIcon><MdDashboard /></SidebarIcon>
                <span>Dashboard</span>
            </SidebarLink>

            <SidebarLink to={'/products'}>
                <SidebarIcon><MdOutlineStorefront /></SidebarIcon>
                <span>Products</span>
            </SidebarLink>


            <SidebarLink to={'/restaurants'}>
                <SidebarIcon><HiOutlineClipboardList /></SidebarIcon>
                <span>Restaurants</span>
            </SidebarLink>


            <SidebarLink to={'/category'}>
                <SidebarIcon><GiStrongbox /></SidebarIcon>
                <span>Category</span>
            </SidebarLink>

            <SidebarLink to={'/offers'}>
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
