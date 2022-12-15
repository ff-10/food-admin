import styled from "@emotion/styled";
import { Button, Drawer } from "@mui/material";


export const FormBody = styled(Drawer)`
    color: red;
    z-index: 999999;
    width: 100%;
    transition: all 500ms;
`;

export const FormArea = styled.form`
    width: 70vw;
    height: 100%;
    background-color: #38394E;
    position: relative;
    display: flex;
    flex-direction: column;
`;


export const Title = styled.p`
    font-size: 25px;
    letter-spacing: 0.01em;
    color: #C7C7C7;
    margin-top: 28px;
    margin-left: 30px;
    margin-bottom: 33px;
`;

export const ImageUploadArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;
    
`;

export const ProductFormArea = styled.div`
    margin-top: 78px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
`;

export const Caption = styled.p`
    font-size: 18px;
    letter-spacing: 0.01em;
    color: #C7C7C7;
    font-weight: bold;
`;

export const ImageUpload = styled.div`
    width: 526px;
    height: 122px;
    background: #43445A;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`;

export const ImageUploadText = styled.p`
    color: #FFF;
    font-weight: bold;

`;

export const UploadIcon = styled.div`
   transform: scale(4);
   margin-bottom: 10px;    
   color: #EC5CF8;
   user-select: none;
`;


export const AddProductForm = styled.form`
    background: #43445A;
    border-radius: 14px;
    width: 70%;
    padding: 20px 15px;
    width: 526px;
`;

export const Label = styled.label`
    font-size: 16px;
    letter-spacing: 0.01em;
    color: #C7C7C7;
    font-weight: bold;
`;

export const Input = styled.input`
    margin-top: 8px;
    border: none;
    outline: none;
    color: #fff;
    background: #5A5B70;
    border-radius: 14px;
    padding: 13px 18px;
    font-size: 16px;
    width: 100%;
`;

export const BigInput = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    outline: none;
    color: #fff;
    background: #5A5B70;
    border-radius: 14px;
    padding: 13px 18px;
    font-size: 16px;
    width: 100%;
    height: 133px;
    border-radius: 14px;
    margin-top: 8px;
`;

export const Select = styled.select`
    margin-top: 8px;
    display: block;
    border: none;
    outline: none;
    color: #fff;
    background: #5A5B70;
    border-radius: 14px;
    padding: 13px 18px;
    font-size: 16px;
    width: 100%;

`;


export const SpaceDivider = styled.div`
    margin-top: 13px;
    margin-bottom: 13px;
`;

export const Divider = styled.div`
    height: 1.5px;
    background: #43445A;
    border-radius: 14px;
    width: 95%;
    margin: 20px auto;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 56px;
    margin-top: 22px;
`;

export const CancelButton = styled(Button)`
    height: 50px;
    background: #43445A;
    border: 2px solid #38394E;
    box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.2);
    border-radius: 14px;
    flex: 5;
    color: #FFF;
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
`;

export const CreateButton = styled(CancelButton)`
    background: #C035A2;
    margin-left: 42px;

    &:hover{
        background: #C8102E;
    }
`;

export const CloseButton = styled.button`
    width: 27px !important;
    height: 27px !important;
    background: #C74FEB;
    border-radius: 14px;
    position: absolute;
    left: 460px;
    top: 31px;
    z-index: 9999999;
    color: #FFF;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms;

    &:hover{
        opacity: 0.8;
        transform: scale(0.98);
        background-color: #E30A17;
    }

`;
