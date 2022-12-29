import { useRef, useState } from "react";
import { Caption, CloseButton, FormArea, FormBody, SpaceDivider, ImageUpload, ImageUploadArea, ImageUploadText, ProductFormArea, Label, Input, Title, UploadIcon, AddProductForm, BigInput, Select, Divider, ButtonsContainer, CancelButton, CreateButton, ErrorBoxContainer } from "./ProductForm.styled";

import { IoClose } from "react-icons/io5";
import { useFormik } from "formik";

import { MdCloudUpload } from "react-icons/md";

import rests from "../../../mocks/restaurants/restaurnat.json";
import useProductFormProvider from "../../../hooks/useProductForm";
import { Alert } from "@mui/material";

export default function ProductForm() {

    const { open, setOpen } = useProductFormProvider();
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);
    
    const closeForm = () =>{
        setOpen(prev => !prev);
        formik.resetForm();
    };

    const openFileExplorer = () => {
        inputRef.current.click();
    }

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        formik.values.image = URL.createObjectURL(e.target.files[0]) || "";
        formik.errors.image = false;
        return formik.values.image;
    }


    const formik = useFormik({
        initialValues: {
            image: "",
            name: "",
            description: "",
            price: "",
            restaurant: ""
        },
        validate: ({name, description, price, image, restaurant}) => {
            const errors = {};

            if (!image) {
                errors.image = "Image is required!";//i18
            }

            if (!name) {
                errors.name = "Name is required!";//i18
            }

            if (!description) {
                errors.description = "Description is required!";//i18
            }

            if (!price) {
                errors.price = "Price is required!";//i18
            }

            if (!restaurant) {
                errors.restaurant = "Resturant is required!";//i18
            }

            return errors;
        },
        onSubmit: ({name, description, price, image, restaurant}, formikFunctions) => {

            const product = {
                name,
                description,
                price,
                image,
                restaurant
            };


            alert('submit sucessful, open console for see values');
            console.log(product);
            setTimeout(() => formikFunctions.resetForm(), 2000);
        }
    });


    return (
        <>
            <FormBody
                anchor="right"
                open={open}
                onClose={closeForm}
            >

                <FormArea onSubmit={formik.handleSubmit}>
                    <Title>Add product</Title>

                    <ImageUploadArea>
                        <Caption>Upload your product image</Caption>
                        <ErrorBoxContainer>
                            <ImageUpload onClick={openFileExplorer}>
                                <UploadIcon><MdCloudUpload /></UploadIcon>
                                <ImageUploadText>upload</ImageUploadText>
                            </ImageUpload>
                            {formik.errors.image ? <Alert severity="error">{formik.errors.image}</Alert> : null}
                        </ErrorBoxContainer>

                        <input
                            ref={inputRef}
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleChange}
                            style={{ display: "none" }
                            }
                        />

                    </ImageUploadArea>

                    <ProductFormArea>
                        <Caption> Add your Product description <br /> and necessary information </Caption>

                        <AddProductForm>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name"  id="name" value={formik.values.name || ""} onChange={formik.handleChange} placeholder={formik.errors.name ? 'REQUIRED!' : null} style={formik.errors.name ? {border: '1px solid red'} : null} />
                            <SpaceDivider />
                            <Label htmlFor="description">Description</Label>
                            <BigInput name="description" id="description" type="textarea" value={formik.values.description || ""} onChange={formik.handleChange} placeholder={formik.errors.name ? 'REQUIRED!' : null} style={formik.errors.name ? {border: '1px solid red'} : null} />
                            <SpaceDivider />
                            <Label htmlFor="price">Price</Label>
                            <Input name="price" id="price" value={formik.values.price || ""} onChange={formik.handleChange} placeholder={formik.errors.name ? 'REQUIRED!' : null} style={formik.errors.name ? {border: '1px solid red'} : null} />
                            <SpaceDivider />
                            <Label >Restaurant</Label>
                            <Select name="restaurant" style={formik.errors.name ? {border: '1px solid red'} : null} onChange={formik.handleChange} value={formik.values.restaurant || ""} >
                                <option value="" disabled>{formik.errors.restaurant ? formik.errors.restaurant : "Select a restaurant." }</option>
                                {rests.map(res => <option key={`product-restaurant-id-${res.id}}`}>{res.restaurant_name}</option>)};
                            </Select>
                        </AddProductForm>
                    </ProductFormArea>
                    <Divider />
                    <ButtonsContainer>
                        <CancelButton onClick={closeForm}>Cancel</CancelButton>
                        <CreateButton type="submit">Create Product</CreateButton>
                    </ButtonsContainer>
                </FormArea>
            </FormBody>
            {
                open ? <CloseButton onClick={closeForm}><IoClose style={{ fontSize: 25 }} /></CloseButton> : null
            }
        </>
    );

};

