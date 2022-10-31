import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import { CardContainer, HeaderCaption, ProductsBody, ProductsHeader, PaginationBody,Pagination } from "./Products.styled";
import { Select, MenuItem, Stack } from "@mui/material";
import ProductCard from "./ProductCard";



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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </CardContainer>

                <PaginationBody>
                    <Stack spacing={5} className="mt-5">
                        <Pagination count={page || 55} color="secondary" size="large" type="previous" />
                    </Stack>
                </PaginationBody>

            </ProductsBody>
        </Container>
    )
}
