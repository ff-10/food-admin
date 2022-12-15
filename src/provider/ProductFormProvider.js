import { useState, createContext } from "react";

export const productFormContext = createContext({});

export default function ProductFormProvider({children}) {

    const [open, setOpen] = useState(false);

    const values = {
        open,
        setOpen
    }

    return (
        <productFormContext.Provider value={values}>
            {children}
        </productFormContext.Provider>
    );
};