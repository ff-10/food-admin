import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import { CardContainer, HeaderCaption, ProductsBody, ProductsHeader, PaginationContainer } from "./Products.styled";
import { Select, MenuItem } from "@mui/material";

import ProductCard from "./ProductCard";
import ProductPagination from "./AppPagination";
import { useState } from "react";
import ProductForm from "./ProductForm";



export default function Products() {

    //filter items function
    const handleChange = (event) => {
        console.log(event.target.value);
    };


    const [products, setProducts] = useState([]);


    return (
        <Container>
            <Header />
            <Sidebar />
            <Footer />
            <ProductsBody>
                <ProductsHeader>
                    <HeaderCaption>
                        Products
                    </HeaderCaption>

                    <Select
                        value={"All"}
                        onChange={handleChange}
                        sx={{
                            height: 35,
                            width: 199,
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#F2F2F2",
                            backgroundColor: "#5A5B70",
                            borderRadius: 14
                        }}
                    >
                        <MenuItem value="All" selected>
                            Category type
                        </MenuItem>

                        <MenuItem value="item-1">
                            Item1
                        </MenuItem>

                        <MenuItem value="item-2">
                            Item2
                        </MenuItem>

                    </Select>

                </ProductsHeader>

                <CardContainer>
                    {products.map(product => (
                        <ProductCard key={`product-card-index-${product.id}`} image={product.image} name={product.product_name} resturant={product.restaurant_name} cost={product.product_price} id={product.id} />
                    ))}
                </CardContainer>

                <ProductPagination setProducts={(products) => setProducts(products)} />
            </ProductsBody>
            
            <ProductForm/>

        </Container>
    )
};
