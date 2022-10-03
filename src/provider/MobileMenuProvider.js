import { useState, createContext } from "react";


export const mobileMenuContext = createContext({});

export default function MenuProvider({children}) {

    const [open, setOpen] = useState(false);

    const values = {
        open,
        setOpen
    }

    return (
        <mobileMenuContext.Provider value={values}>
            {children}
        </mobileMenuContext.Provider>
    );
};