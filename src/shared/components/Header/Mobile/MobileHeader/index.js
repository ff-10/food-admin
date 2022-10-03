import adminImg from "../../../../../images/logos/adminLogo.svg";
import LogoImg from "../../../../../images/logos/logo.svg"

import { HamburgerMenu, HeaderBody, ItemsArea, Logo, AddProductButton, AdminLogo, MenuArea } from "./MobileHeader.styled";
import { BsPlusLg } from "react-icons/bs"
import { MdSegment } from "react-icons/md"

export default function MobileHeader() {


    return (
        <HeaderBody>
            <MenuArea>
                <HamburgerMenu>
                    <MdSegment />
                </HamburgerMenu>
                <Logo>
                    <img src={LogoImg} alt="Logo" />
                </Logo>
            </MenuArea>
            <ItemsArea>
                <AddProductButton><BsPlusLg style={{ color: '#FFFFFF', marginRight: 3 }} /></AddProductButton>
                <AdminLogo>
                    <img src={adminImg} alt="Admin" style={{ marginRight: 14 }} />
                </AdminLogo>
            </ItemsArea>
        </HeaderBody>
    )


}
