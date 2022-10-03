import { useContext } from "react";
import { mobileMenuContext } from "../provider/MobileMenuProvider";




export default function useMobileMenuProvider() {
    const provider = useContext(mobileMenuContext);
    return provider;
}