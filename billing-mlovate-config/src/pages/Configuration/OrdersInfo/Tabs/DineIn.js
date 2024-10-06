import React, { useState } from 'react';
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
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LanguageIcon from '@mui/icons-material/Language';
import Input from 'components/Design/Input';
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
  formAction,
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
    formAction,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData(1, '01', 12345, 24, 4.0, 1, 4.0, 2, 70, 1, [
    'Dispute',
    'View',
    'Reprint',
  ]),
  createData(15, '02', 997828, 37, 4.3, 2, 4.3, 2, 2, 70, ['View', 'Reprint']),
  createData(2, '03', 1682, 24, 6.0, 3, 6.0, 3, 2, 70, ['View', 'Reprint']),
  createData(3, '04', 387387, 67, 4.3, 4, 4.3, 4, 2, 70, ['View', 'Reprint']),
  createData(4, '05', 16871, 49, 3.9, 5, 3.9, 5, 2, 70, ['View', 'Reprint']),
  createData(5, '01', 12345, 24, 4.0, 1, 4.0, 2, 70, 1, ['View', 'Reprint']),
  createData(6, '02', 997828, 37, 4.3, 2, 4.3, 2, 70, 2, ['View', 'Reprint']),
  createData(7, '03', 1682, 24, 6.0, 3, 6.0, 3, 2, 70, ['View', 'Reprint']),
  createData(8, '04', 387387, 67, 4.3, 4, 4.3, 4, 2, 70, ['View', 'Reprint']),
  createData(9, '05', 16871, 49, 3.9, 5, 3.9, 2, 70, 100, ['View', 'Reprint']),
  createData(10, '01', 12345, 24, 4.0, 1, 4.0, 2, 70, 110, ['View', 'Reprint']),
  createData(11, '02', 997828, 37, 4.3, 2, 4.3, 2, 70, 120, [
    'View',
    'Reprint',
  ]),
  createData(12, '03', 1682, 24, 6.0, 3, 6.0, 2, 70, 130, ['View', 'Reprint']),
  createData(13, '04', 387387, 67, 4.3, 4, 4.3, 2, 70, 140, [
    'View',
    'Reprint',
  ]),
  createData(14, '05', 16871, 49, 3.9, 5, 3.9, 5, 150, 120, [
    'View',
    'Reprint',
  ]),
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
        <Table className={classes.table} size="small">
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
                <TableRow key={index}>
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
                  <TableCell align="center">
                    <Box sx={{ width: '200px' }}>
                      {data.formAction.map((actions, index) => {
                        return (
                          <Box
                            key={index}
                            sx={{
                              display: 'inline',
                              textDecoration: 'underline',
                            }}
                          >
                            <Typography
                              variant="button"
                              sx={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                              }}
                            >
                              {actions + '  | '}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
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

const DineIn = () => {
  const [state, setStateHook] = useState({});
  const setState = old => setStateHook(oldState => ({ ...oldState, ...old }));

  const handleChange = e => {
    return setState({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <Box>
        <Stack spacing={3}>
          <Accordian>
            <Grid container gap={4}>
              <Grid items md={2}>
                <Input
                  label="Order No."
                  name="orderNo"
                  value={state.orderNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  label="Payment Type"
                  name="paymentType"
                  value={state.paymentType}
                  options={[
                    {
                      label: 'Cash',
                      value: 'Cash',
                    },
                    {
                      label: 'Card',
                      value: 'Card',
                    },
                    {
                      label: 'Due Payment',
                      value: 'DuePayment',
                    },
                    {
                      label: 'Other',
                      value: 'Other',
                    },
                    {
                      label: 'Wallet',
                      value: 'Wallet',
                    },
                    {
                      label: 'Online',
                      value: 'Online',
                    },
                    {
                      label: 'Part Payment',
                      value: 'PartPayment',
                    },
                  ]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  label="Table No."
                  name="tableNo"
                  value={state.tableNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  label="Customer Name"
                  name="customerName"
                  value={state.customerName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  label="Mobile No."
                  name="mobileNo"
                  value={state.mobileNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  value={state.paymentType || ''}
                  label="Order Status"
                  name="paymentType"
                  options={[
                    {
                      label: 'Saved',
                      value: 'Saved',
                    },
                    {
                      label: 'Printed',
                      value: 'Printed',
                    },
                    {
                      label: 'Cancelled',
                      value: 'Cancelled',
                    },
                    {
                      label: 'Complimentory',
                      value: 'Complimentory',
                    },
                    {
                      label: 'Dispute',
                      value: 'Dispute',
                    },
                  ]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  value={state.onlinePartner || ''}
                  label="Online Partner"
                  name="onlinePartner"
                  options={[
                    {
                      label: 'Food Panda',
                      value: 'FoodPanda',
                    },
                    {
                      label: 'Zomato',
                      value: 'Zomato',
                    },
                    {
                      label: 'Swiggy',
                      value: 'Swiggy',
                    },
                  ]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  value={state.sortBy1 || ''}
                  label="Sort By"
                  name="sortBy1"
                  options={[
                    {
                      label: 'Created',
                      value: 'Created',
                    },
                    {
                      label: 'Total',
                      value: 'Total',
                    },
                  ]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Input
                  value={state.sortBy2 || ''}
                  label="Sort By"
                  name="sortBy2"
                  options={[
                    {
                      label: 'Asc',
                      value: 'Asc',
                    },
                    {
                      label: 'Desc',
                      value: 'Desc',
                    },
                  ]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items md={2}>
                <Box display="flex" gap={2}>
                  <Input
                    value={state.total || ''}
                    label="Total"
                    name="total"
                    options={[
                      {
                        label: '>',
                        value: '>',
                      },
                      {
                        label: '<',
                        value: '<',
                      },
                    ]}
                    onChange={handleChange}
                  />
                  <Input
                    value={state.totalValue || ''}
                    name="totalValue"
                    label=""
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

export default DineIn;
