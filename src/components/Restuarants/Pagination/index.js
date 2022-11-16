import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { resPaginationApi } from "../../../api/ResPag";

const cardsPerPage = 16;



export default function ResPagination({ setRestaurants }) {


    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: cardsPerPage
    });

    useEffect(() => {

        resPaginationApi.getData({ from: pagination.from, to: pagination.to }).then(res => {
            setPagination({ ...pagination, count: res.count });
            setRestaurants(res.data);
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
                onChange={handlePageChange} style={{ backgroundColor: "#fff", padding: "10px 18px", borderRadius: 5, marginBottom: 10 }}
            >
            </Pagination>

        </Box>
    )

}