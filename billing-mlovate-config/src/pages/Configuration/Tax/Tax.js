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
  Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PageHeader } from 'components/common/Header';

function createData(taxTitle, taxType, type, amount, action) {
  return {
    taxTitle,
    taxType,
    type,
    amount,
    action,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData('SGST', 'Forward Tax', 'Percentage', 2.5, 'Edit'),
  createData('CGST', 'Forward Tax', 'Percentage', 2.5, 'Edit'),
];

const CustomerTable = () => {
  const classes = useStyles();

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
              <TableCell width="30%" sx={{ border: '1px solid red' }}>
                <Typography variant="subtitle2">Tax Title</Typography>
              </TableCell>
              <TableCell
                align="center"
                width="25%"
                sx={{ border: '1px solid red' }}
              >
                <Typography variant="subtitle2">Tax Type</Typography>
              </TableCell>
              <TableCell
                align="center"
                width="20%"
                sx={{ border: '1px solid red' }}
              >
                <Typography variant="subtitle2">Type</Typography>
              </TableCell>
              <TableCell align="center" width="25%">
                <Typography variant="subtitle2">Amount</Typography>
              </TableCell>
              <TableCell align="center" sx={{ border: '1px solid red' }}>
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((data, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  <Typography
                    display="flex"
                    alignItems="left"
                    variant="subtitle2"
                  >
                    {data.taxTitle}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2">{data.taxType}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2">{data.type}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2">{data.amount}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="subtitle2"
                    sx={{ textDecoration: 'underline' }}
                  >
                    {data.action}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const Tax = () => {
  return (
    <>
      <Box>
        <PageHeader title="Tax" backBtn />
        <Divider />
        <Stack spacing={3} mt={2}>
          <CustomerTable />
        </Stack>
      </Box>
    </>
  );
};

export default Tax;
