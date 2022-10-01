import { Button, TextField } from "@mui/material";
import styled from "styled-components";



export const LoginBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Logo = styled.img`
    position: absolute;
    top: 57px;
    left: 32px;

    @media screen and (max-width: 576px) {
        top: 20px;
        left: 10px;
    }
`;

export const FormBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38394E;
    width: 50%;
    height: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        background-color: transparent;
        width: 100%;
        height: 70%;
    }

    @media screen and (max-width: 576px) {
        margin: 150px 0;
    }

`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 5;

    @media screen and (max-width: 1200px) {
        width: 40%;
    }

    @media screen and (max-width: 960px) {
        width: 60%;
    }

    @media screen and (max-width: 576px) {
        width: 80%;
    }


`
export const CoverImage = styled.div`
    background-color: #FFF;
    flex: 5;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 1200px) {
        background-color: transparent;
    }

`

export const Caption = styled.h1`
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    color: #C7C7C7;
    margin-bottom: 41px;
`;


export const Input = styled(TextField)`
    color: #FFFFFF !important;
    background-color: #5A5B70;
    width: 80%;
    border-radius: 10px !important;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    @media screen and (max-width: 576px) {
        width: 100%;
    }


`

export const LoginButton = styled(Button)`
  color: #FFF !important;
  background-color: #C035A2 !important;
  font-weight: bold !important;
  width: 80%;
  height: 50px;

  @media screen and (max-width: 1200px) {
        width: 100%;
    }

`;


export const ErrorText = styled.span`
    color: #C035A2;
    font-weight: bold;
    margin: 5px 0;
    letter-spacing: 1px;
`;


export const LangDropdownBox = styled.div`

    position: absolute;
    right: 5px;
    top: 5px;

`