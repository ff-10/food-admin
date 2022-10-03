import FooterLogo from "../../../images/logos/eacampLogo.svg";
import { FooterBody, DimmedInfo } from "./Footer.styled";


export default function Footer() {

    return (

        <FooterBody>
            <img src={FooterLogo} />
            <DimmedInfo>
                <p>Version 1.1</p>
                <p>2022</p>
            </DimmedInfo>
        </FooterBody>

    )

}
