import React from 'react';
import {
  Stack,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TablePagination,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import { PageHeader } from 'components/common/Header';

function createData(orderNo, orderType, customerNo, customerName, paymentType) {
  return {
    orderNo,
    orderType,
    customerNo,
    customerName,
    paymentType,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData('e-bill printer', 'e-bill printer', 'Yes'),
  createData('Billing', 'general', 'Yes'),
];

const CustomerTable = () => {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">
                  Department Wise Printer Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Printer Type</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Report Print</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Printer Assign</Typography>
              </TableCell>{' '}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: '#c4f5f5',
                  }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <Typography
                      display="flex"
                      alignItems="left"
                      variant="subtitle2"
                    >
                      {data.orderNo}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.orderType}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.customerNo}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.customerName}
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography component="anchor">
                      {data.paymentType}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">{data.myAmount}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">{data.tax}</Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography component="anchor">{data.discount}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography component="anchor">
                      {data.grandTotal}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography component="">{data.createdOn}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 30 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

const PrintListing = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Printer Listing" backBtn>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add Printer
        </Button>
      </PageHeader>
      <CustomerTable />
    </Stack>
  );
};

export default PrintListing;
