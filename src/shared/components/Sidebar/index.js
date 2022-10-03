import { SidebarBody, Sidebar, SidebarLink, SidebarIcon } from "./Sidebar.styled";

import {MdDashboard} from "react-icons/md";
import { Link } from "react-router-dom";

function logout() {
    // clear local storage
    // forward to login
}


export default function SideBar() {


    



    return (
        <SidebarBody>
            <Sidebar>

                <SidebarLink>
                    <SidebarIcon><MdDashboard/></SidebarIcon>
                    <span>Dashboard</span>
                </SidebarLink>

                <SidebarLink>
                    <SidebarIcon><MdDashboard/></SidebarIcon>
                    <span>Dashboard</span>
                </SidebarLink>


                <SidebarLink>
                    <SidebarIcon><MdDashboard/></SidebarIcon>
                    <span>Dashboard</span>
                </SidebarLink>
            </Sidebar>
            
        </SidebarBody>
    )

}
