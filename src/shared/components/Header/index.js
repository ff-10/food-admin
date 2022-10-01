import { AddProductButton, HeaderBody, Logo, ItemsArea, AdminLogo } from "./Header.styled";
import adminImg from "../../../images/logos/adminLogo.svg";
import LangDropdown from "../../../components/DropdownLang";
import LogoImg from "../../../images/logos/logo.svg"
import { BsPlusLg } from "react-icons/bs"


export default function Header() {


    return (
        <HeaderBody>
            <Logo>
                <img src={LogoImg} alt="Logo" />
            </Logo>
            <ItemsArea>
                <AddProductButton><BsPlusLg style={{ color: '#FFFFFF', marginRight: 3 }} />Add Product</AddProductButton>
                <LangDropdown />
                <AdminLogo>
                    <img src={adminImg} alt="Admin" style={{marginRight: 14}} />
                    <span>Admin</span>
                </AdminLogo>
            </ItemsArea>
        </HeaderBody>
    )


}
