import React from 'react';
import {
  Box,
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
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LanguageIcon from '@mui/icons-material/Language';
import Accordian from '../common/Accordian/OrderAccordian';

function createData(
  orderNo,
  orderType,
  customerNo,
  customerName,
  paymentType,
  myAmount,
  tax,
  discount,
  grandTotal,
  createdOn,
) {
  return {
    orderNo,
    orderType,
    customerNo,
    customerName,
    paymentType,
    myAmount,
    tax,
    discount,
    grandTotal,
    createdOn,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData(1, '01', 12345, 24, 4.0, 1, 4.0, 2, 70, 1, 10, 10),
  createData(15, '02', 997828, 37, 4.3, 2, 4.3, 2, 2, 70, 20, 10),
  createData(2, '03', 1682, 24, 6.0, 3, 6.0, 3, 2, 70, 30, 10),
  createData(3, '04', 387387, 67, 4.3, 4, 4.3, 4, 2, 70, 40, 10),
  createData(4, '05', 16871, 49, 3.9, 5, 3.9, 5, 2, 70, 50, 10),
  createData(5, '01', 12345, 24, 4.0, 1, 4.0, 2, 70, 1, 60, 10),
  createData(6, '02', 997828, 37, 4.3, 2, 4.3, 2, 70, 2, 70, 10),
  createData(7, '03', 1682, 24, 6.0, 3, 6.0, 3, 2, 70, 80, 10),
  createData(8, '04', 387387, 67, 4.3, 4, 4.3, 4, 2, 70, 90, 10),
  createData(9, '05', 16871, 49, 3.9, 5, 3.9, 2, 70, 5, 100, 10),
  createData(10, '01', 12345, 24, 4.0, 1, 4.0, 2, 70, 1, 110, 10),
  createData(11, '02', 997828, 37, 4.3, 2, 4.3, 2, 70, 2, 120, 10),
  createData(12, '03', 1682, 24, 6.0, 3, 6.0, 2, 70, 3, 130, 10),
  createData(13, '04', 387387, 67, 4.3, 4, 4.3, 2, 70, 4, 140, 10),
  createData(14, '05', 16871, 49, 3.9, 5, 3.9, 5, 150, 10),
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
                <Typography variant="subtitle2">Order No.</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Order Type</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography variant="subtitle2">Customer Phone</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Customer Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Payment Type</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">My Amount</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Tax</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography variant="subtitle2">Discount</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Grand Total</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Created On</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
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

const All = () => {
  const [paymentType, setPaymentType] = React.useState('All');
  const [orderStatus, setOrderStatus] = React.useState('All');
  const [onlinePartner, setOnlinePartner] = React.useState('All');
  const [sortedByCreation, setSortedByCreation] = React.useState('All');
  const [sortedOrder, setSortedOrder] = React.useState('All');
  const [total, setTotal] = React.useState('All');

  const handleChangePaymentType = event => {
    setPaymentType(event.target.value);
  };

  const handleChangeOrderStatus = event => {
    setOrderStatus(event.target.value);
  };

  const handleChangeOnlinePartner = event => {
    setOnlinePartner(event.target.value);
  };

  const handleChangeSortedByCreation = event => {
    setSortedByCreation(event.target.value);
  };

  const handleChangeSortedOrder = event => {
    setSortedOrder(event.target.value);
  };

  const handleChangeTotal = event => {
    setTotal(event.target.value);
  };

  return (
    <>
      {/* Repeated */}
      <Box>
        <Stack spacing={3}>
          <Accordian>
            <Grid container gap={4}>
              <Grid items md={2}>
                <Typography variant="h6">Order No.</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Payment Type</Typography>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={paymentType}
                      label="All"
                      size="small"
                      placeholder="All"
                      onChange={handleChangePaymentType}
                    >
                      {[
                        'Cash',
                        'Card',
                        'Due Payment',
                        'Other',
                        'Wallet',
                        'Online',
                        'Part Payment',
                      ].map((items, index) => {
                        return (
                          <MenuItem key={index} value={items}>
                            {items}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Table No.</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Customer Name</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Mobile No.</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Order Status</Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orderStatus}
                    size="small"
                    label="All"
                    onChange={handleChangeOrderStatus}
                  >
                    {[
                      'Saved',
                      'Printed',
                      'Cancelled',
                      'Complimentory',
                      'Dispute',
                    ].map((items, index) => {
                      return (
                        <MenuItem key={index} value={items}>
                          {items}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Online Partner</Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={onlinePartner}
                    size="small"
                    label="All"
                    onChange={handleChangeOnlinePartner}
                  >
                    {['Food Panda', 'Zomato', 'Swiggy'].map((items, index) => {
                      return (
                        <MenuItem key={index} value={items}>
                          {items}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Sort By</Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortedByCreation}
                    size="small"
                    label="All"
                    onChange={handleChangeSortedByCreation}
                  >
                    {['Created', 'Total'].map((items, index) => {
                      return (
                        <MenuItem key={index} value={items}>
                          {items}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Sort By</Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortedOrder}
                    size="small"
                    label="All"
                    onChange={handleChangeSortedOrder}
                  >
                    {['Asc', 'Desc'].map((items, index) => {
                      return (
                        <MenuItem key={index} value={items}>
                          {items}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid items md={2}>
                <Typography variant="h6">Total</Typography>
                <Box display="flex" gap={2}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={total}
                      size="small"
                      label="All"
                      onChange={handleChangeTotal}
                    >
                      {['>', '<'].map((items, index) => {
                        return (
                          <MenuItem key={index} value={items}>
                            {items}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>
            <Box display="flex" gap={2} justifyContent="flex-end" mt={2}>
              <Button variant="outlined">Reset</Button>
              <Button variant="outlined">
                <Typography variant="body2" display="flex" gap={1}>
                  <LanguageIcon />
                  <Typography mt={0.5}>Search From Web</Typography>
                </Typography>
              </Button>
              <Button variant="contained">Search</Button>
            </Box>
          </Accordian>
          <CustomerTable />
        </Stack>
      </Box>
    </>
  );
};

export default All;
