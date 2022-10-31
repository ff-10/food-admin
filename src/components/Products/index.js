import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import { CardContainer, HeaderCaption, ProductsBody, ProductsHeader, PaginationBody, Pagination } from "./Products.styled";
import { Select, MenuItem, Stack } from "@mui/material";
import ProductCard from "./ProductCard";

import productsJSON from "../../mocks/products/product.json";


const handleChange = (event) => {
    console.log(event.target.value);
};


const page = ""


export default function Products() {

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
                    {productsJSON.map(product => (
                        <ProductCard key={`product-card-index-${product.id}`} image={product.image} name={product.product_name} resturant={product.restaurant_name} const={product.product_price} id={product.id} />
                    ))}
                </CardContainer>

                <PaginationBody>
                    <Stack spacing={5} className="mt-5">
                        <Pagination count={page || 1} color="secondary" size="large" type="previous" />
                    </Stack>
                </PaginationBody>

            </ProductsBody>
        </Container>
    )
}
