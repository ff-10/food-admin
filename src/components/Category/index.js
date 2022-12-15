import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Sidebar from "../../shared/components/Sidebar";

import Container from "../../shared/components/Container";
import PageContainer from "../../shared/components/PageContainer";
import AddProductForm from "../../shared/components/ProductForm";


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import { MdDelete, MdDeleteForever, MdDeleteOutline } from "react-icons/md";
import { AddCategoryBtn, CategoryHeader, HeaderCaption } from "./Category.styled";
import { BsPlusLg } from "react-icons/bs";

import { IDCell } from "./Category.styled"
import { Button } from "@mui/material";

const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'img', label: 'Image', minWidth: 100 },
    {
        id: 'name',
        label: 'Name',
        minWidth: 170
    },
    {
        id: 'slug',
        label: 'Slug',
        minWidth: 170
    },
    {
        id: 'del',
        label: '',
        minWidth: 170
    },
];


function deleteCategory(id) {
    alert(id);
}

function createData(id, img, name, slug, del) {
    return { id, img, name, slug, del };
}

const rows = [
    //categories.map(category => ... onClick(id));
    //fetch from API
    createData(
        <div style={{ display: 'flex', justifyContent: "center" }}><IDCell>504</IDCell></div>, 
        'X', 'Pizza', 'yummy-pizza', <Button onClick={() => deleteCategory(12)}><MdDeleteOutline style={{ color: "rgba(235, 87, 87, 0.61)", fontSize: 24 }} /></Button>),
        
];

export default function Category() {


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
            <AddProductForm/>
            <Header />
            <Sidebar />
            <Footer />

            <PageContainer>

                <CategoryHeader>
                    <HeaderCaption>
                        Category
                    </HeaderCaption>

                    <AddCategoryBtn><BsPlusLg style={{ color: '#FFFFFF', marginRight: 5, fontSize: 13 }} />Add Category</AddCategoryBtn>
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
