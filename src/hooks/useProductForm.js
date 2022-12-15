import { useContext } from "react";
import { productFormContext } from "../provider/ProductFormProvider";




export default function useProductFormProvider() {
    const provider = useContext(productFormContext);
    return provider;
}