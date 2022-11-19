import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import PageContainer from "../../shared/components/PageContainer";


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CategoryHeader, HeaderCaption } from "./Orders.styled";
import { BsPlusLg } from "react-icons/bs";

import { IDCell } from "../Category/Category.styled"
import { Button } from "@mui/material";

import offers from "../../mocks/offers/offers.json";

const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'customerID', label: 'Customer ID', minWidth: 100 },
    {
        id: 'time',
        label: 'Time',
        minWidth: 170
    },
    {
        id: 'address',
        label: 'Delivery Address',
        minWidth: 170
    },
    {
        id: 'amount',
        label: 'Amount',
        minWidth: 170
    },
    {
        id: 'paymentMethod',
        label: 'Payment Method',
        minWidth: 170
    },
    {
        id: 'contact',
        label: 'Contact',
        minWidth: 170
    },
    {
        id: '',
        label: '',
        minWidth: 170
    },
];


function deleteCategory(id) {
    alert(id);
}

function createData(id, customerID, time, address, amount, paymentMethod, contact) {
    return { id, customerID, time, address, amount, paymentMethod, contact };
}

const rows = [
    //categories.map(category => ... onClick(id));
    //fetch from API
    offers.map(offer => {
        console.log(offer);
        createData(<IDCell>1</IDCell>, <IDCell>X</IDCell>);
    })

];

export default function Orders() {


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };



    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <Container>
            <Header />
            <Sidebar />
            <Footer />

            <PageContainer>

                <CategoryHeader>
                    <HeaderCaption>
                        Category
                    </HeaderCaption>
                </CategoryHeader>

                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, textAlign: "center", fontWeight: "bold" }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align} style={{ textAlign: "center" }}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>


            </PageContainer>
        </Container>

    )

}
