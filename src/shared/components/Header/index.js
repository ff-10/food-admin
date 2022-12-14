import { AddProductButton, HeaderBody, Logo, ItemsArea, AdminLogo } from "./Header.styled";
import adminImg from "../../../images/logos/adminLogo.svg";
import LangDropdown from "../../../components/DropdownLang";
import LogoImg from "../../../images/logos/logo.svg"
import { BsPlusLg } from "react-icons/bs"
import MobileHeader from "./Mobile/MobileHeader";
import useProductFormProvider from "../../../hooks/useProductForm";


export default function Header() {

    const {open, setOpen} = useProductFormProvider();

    return (
        <>
            {/* showing in mobile dimensions when media query code executed. */}
            <MobileHeader />
            
            <HeaderBody>
                <Logo>
                    <img src={LogoImg} alt="Logo" />
                </Logo>
                <ItemsArea>
                    <AddProductButton onClick={() => setOpen(prev => !prev)}><BsPlusLg style={{ color: '#FFFFFF', marginRight: 3 }} />Add Product</AddProductButton>
                    <LangDropdown />
                    <AdminLogo>
                        <img src={adminImg} alt="Admin" style={{ marginRight: 14 }} />
                        <span>Admin</span>
                    </AdminLogo>
                </ItemsArea>
            </HeaderBody>
        </>
    )


}
