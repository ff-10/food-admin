import { useFormik } from 'formik';
import { FormBody, LoginBody, LoginButton, Logo, Form, CoverImage, Caption, Input, ErrorText, LangDropdownBox } from './login.styled';
import LogoImg from "../../images/logos/logo.svg";
import LoginCover from "../../images/loginCover.svg"
import LangDropdown from "../DropdownLang"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const navigate = useNavigate();


    useEffect(() => {

        const isLogged = localStorage.getItem('isLogged');

        if (isLogged === "true") {
            // alert('already logged');
            navigate('/dashboard');
        }

    }, []);

    const [testUsername, testPassword] = ['admin', '123456'];//for testing, after connect Redux Toolkit.

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: values => {
            const errors = {};

            if (!values.username) {
                errors.username = "Wrong Username";
            }
            if (!values.password || values.password <= 4) {
                errors.password = "Wrong Password";
            }

            return errors;
        },

        onSubmit: values => {
            if (values.username !== testUsername) {
                alert('username wrong')
            }
            else if (values.password !== testPassword) {
                alert('password is wrong');
            }
            else {
                alert('login successfully')
                localStorage.setItem('isLogged', true)
                navigate('/dashboard')
            }
        }

    });

    return (
        <LoginBody>
            <Logo src={LogoImg} alt='Logo' />
            <FormBody>
                <Form onSubmit={formik.handleSubmit}>
                    <Caption>Welcome Admin</Caption>
                    <Input placeholder='Username' type="text" name="username" onChange={formik.handleChange} value={formik.values.username} style={{ marginBottom: 26 }} />
                    <ErrorText>{formik.errors.username && formik.errors.username}</ErrorText>
                    <Input placeholder='Password' type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    <ErrorText>{formik.errors.password && formik.errors.password}</ErrorText>
                    <LoginButton type='submit' style={{ marginTop: 35 }} >Sign in</LoginButton>
                </Form>

                <CoverImage>
                    <LangDropdownBox><LangDropdown /></LangDropdownBox>

                    <img src={LoginCover} width={"90%"} alt='Login Image' />
                </CoverImage>
            </FormBody>
        </LoginBody>
    )
} 