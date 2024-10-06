import React, { useState } from 'react';
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TablePagination,
} from '@mui/material';

const CustomerData = [
  {
    id: 1,
    customerNumber: 8293893231,
    customerName: 'Shivam',
    address: 'HNo.:9, Vikasnagar,Yamunangar,Haryana',
  },
  {
    id: 2,
    customerNumber: 8293893231,
    customerName: 'Utsav',
    address: 'HNo.:9,jamnagar,Gujrat',
  },
  {
    id: 3,
    customerNumber: 8293893231,
    customerName: 'Mahender',
    address: 'HNo.:9, Model calony, jamnagar,Gujrat',
  },
  {
    id: 4,
    customerNumber: 8293893231,
    customerName: 'Shivam',
    address: 'HNo.:9, Vikasnagar,Yamunangar,Haryana',
  },
  {
    id: 5,
    customerNumber: 8293893231,
    customerName: 'Shivam',
    address: 'HNo.:9, Vikasnagar,Yamunangar,Haryana',
  },
  {
    id: 6,
    customerNumber: 8293893231,
    customerName: 'Shivam',
    address: 'HNo.:9, Vikasnagar,Yamunangar,Haryana',
  },
  {
    id: 7,
    customerNumber: 8293893231,
    customerName: 'Shivam',
    address: 'HNo.:9, Vikasnagar,Yamunangar,Haryana',
  },
];

const CustomerTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2"> Sr No.</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Customer Name</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Mobile No.</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Address</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {CustomerData.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage,
            ).map((data, index) => (
              <TableRow
                key={data.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" align="left">
                  <Typography variant="body1">{index + 1}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.customerName}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.customerNumber}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{data.address}</Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    component="anchor"
                    color="primary"
                    sx={{ cursor: 'pointer' }}
                  >
                    Edit
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={CustomerData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default CustomerTable;
