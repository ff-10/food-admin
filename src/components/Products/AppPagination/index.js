import { Pagination } from "./AppPagination.styled";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import PaginationApi from "../../../api/Pagination";

const cardsPerPage = 10;

export default function ProductPagination({ setProducts }) {
    

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: cardsPerPage
    });

    useEffect(() => {

        PaginationApi.getData({ from: pagination.from, to: pagination.to }).then(res => {
            setPagination({ ...pagination, count: res.count });
            setProducts(res.data);
        });

    }, [pagination.from, pagination.to]);

    const handlePageChange = (e, page) => {
        const from = (page - 1) * cardsPerPage;
        const to = (page - 1) * cardsPerPage + cardsPerPage;
        setPagination({ ...pagination, from, to });

    }

    return (
        <Box justifyContent={"center"} alignItems="center" display={"flex"} sx={{ marginTop: "80px" }}>
            <Pagination count={Math.ceil(pagination.count / cardsPerPage)} color="secondary" size="large"
                onChange={handlePageChange}
            >
            </Pagination>
        </Box>
    )

}