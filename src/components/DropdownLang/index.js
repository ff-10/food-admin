import azFlag from "../../images/flags/az.png";
import enFlag from "../../images/flags/en.png";
import frFlag from "../../images/flags/fr.png";

import { useState } from "react";

import { Img, LangButton, LangItem, LangMenu } from "./dropDownLang.styled";




export default function LangDropdown() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <div>

            <LangButton onClick={handleClick} >
                <Img src={enFlag} alt="Language"/>
            </LangButton>

            <LangMenu anchorEl={anchorEl} open={open} onClose={handleClose} >
                <LangItem onClick={handleClose}><Img src={enFlag} alt="en"/></LangItem>
                <LangItem onClick={handleClose}><Img src={azFlag} alt="az"/></LangItem>
                <LangItem onClick={handleClose}><Img src={frFlag} alt="fr"/></LangItem>
            </LangMenu>
        </div>
    );
}


