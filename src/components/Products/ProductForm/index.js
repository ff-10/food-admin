import { useRef,useState } from "react";
import { Caption, CloseButton, FormArea, FormBody, SpaceDivider, ImageUpload, ImageUploadArea, ImageUploadText, ProductFormArea, Label, Input, Title, UploadIcon, AddProductForm, BigInput, Select, Divider, ButtonsContainer, CancelButton, CreateButton } from "./ProductForm.styled";

import { IoClose } from "react-icons/io5";
import { useFormik } from "formik";

import { MdCloudUpload } from "react-icons/md";

import rests from "../../../mocks/restaurants/restaurnat.json";
import useProductFormProvider from "../../../hooks/useProductForm";

export default function ProductForm() {

    const {open, setOpen} = useProductFormProvider();
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

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
            restaurants: ""
        },
        validate: (vals) => {
            const errors = {};

            if (!vals.image) {
                errors.image = "*";//i18
            }

            if (!vals.name) {
                errors.name = "*";//i18
            }

            if (!vals.description) {
                errors.description = "*";//i18
            }

            if (!vals.price) {
                errors.price = "*";//i18
            }

            if (!vals.restaurants) {
                errors.restaurants = "*";//i18
            }

            return errors;
        },
        onSubmit: (vals) => {
            //
            alert('submit sucessful, values, open console for see values');
            console.log(vals);
        }
    });


    return (
        <>
            <FormBody
                anchor="right"
                open={open}
                onClose={() => setOpen(prev => !prev)}
            >

                <FormArea onSubmit={formik.handleSubmit}>
                    <Title>Add product</Title>

                    <ImageUploadArea>
                        <Caption>Upload your product image *</Caption>
                        <ImageUpload onClick={openFileExplorer}>
                            <UploadIcon><MdCloudUpload /></UploadIcon>
                            <ImageUploadText>upload</ImageUploadText>
                        </ImageUpload>

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
                            <Input id="name" type="text" />
                            <SpaceDivider />
                            <Label htmlFor="description">Description</Label>
                            <BigInput id="description" />
                            <SpaceDivider />
                            <Label htmlFor="price">Price</Label>
                            <Input id="price" type="number" />
                            <SpaceDivider />
                            <Label >Restaurants</Label>
                            <Select>
                                {rests.map(res => <option key={`product-restaurant-id-${res.id}}`}>{res.restaurant_name}</option>)};
                            </Select>
                        </AddProductForm>
                    </ProductFormArea>
                    <Divider />
                    <ButtonsContainer>
                        <CancelButton onClick={() => setOpen(prev => !prev)}>Cancel</CancelButton>
                        <CreateButton>Create Product</CreateButton>
                    </ButtonsContainer>
                </FormArea>
            </FormBody>
            {
                open ? <CloseButton onClick={() => setOpen(prev => !prev)}><IoClose style={{ fontSize: 25 }} /></CloseButton> : null
            }
        </>
    );

};

