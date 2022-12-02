import { Sidebar, SidebarLink, SidebarIcon, SidebarImg } from "./Sidebar.styled";


import { GiStrongbox } from 'react-icons/gi';
import { MdDashboard, MdOutlineStorefront, MdLocalOffer, MdOutlineLogout } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi"
import { NavLink, useNavigate } from "react-router-dom";

import ordersSvg from "../../../images/icons/orders.svg";
// import ConfirmModal from "../ConfirmModal";

import "../../../styles/Sidebar.css";

export default function SideBar() {

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("isLogged");
        navigate("/login");
    }


    return (
        <Sidebar>

            <SidebarLink to={'/dashboard'} className="link">
                <SidebarIcon><MdDashboard /></SidebarIcon>
                <span>Dashboard</span>
            </SidebarLink>

            <SidebarLink to={'/products'} className="link">
                <SidebarIcon><MdOutlineStorefront /></SidebarIcon>
                <span>Products</span>
            </SidebarLink>


            <SidebarLink to={'/restaurants'} className="link">
                <SidebarIcon><HiOutlineClipboardList /></SidebarIcon>
                <span>Restaurants</span>
            </SidebarLink>


            <SidebarLink to={'/category'} className="link">
                <SidebarIcon><GiStrongbox /></SidebarIcon>
                <span>Category</span>
            </SidebarLink>

            <SidebarLink to={'/orders'} className="link">
                <SidebarImg src={ordersSvg} alt="Orders" />
                <span>Orders</span>
            </SidebarLink>


            <SidebarLink to={'/offers'} className="link">
                <SidebarIcon><MdLocalOffer /></SidebarIcon>
                <span>Offers</span>
            </SidebarLink>

            <SidebarLink onClick={logout}>
                <SidebarIcon><MdOutlineLogout /></SidebarIcon>
                <span>Logout</span>
            </SidebarLink>


        </Sidebar>
    );

};
