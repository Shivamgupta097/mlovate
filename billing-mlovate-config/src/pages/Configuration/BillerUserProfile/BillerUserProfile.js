import React from 'react';
import {
  Box,
  TableCell,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PageHeader } from 'components/common/Header';

function createData(billerName, billerOriginalName, type) {
  return {
    billerName,
    billerOriginalName,
    type,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [createData('biller', 'Biller', 'Biller')];

const CustomerTable = () => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead sx={{ border: 'divider' }}>
            <TableRow sx={{ width: '100%' }}>
              <TableCell>
                <Typography variant="subtitle2">Biller Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">
                  Biller Original Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Type</Typography>
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
                    {data.billerName}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2">
                    {data.billerOriginalName}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2">{data.type}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const BillerUserProfile = () => {
  return (
    <>
      <PageHeader title="Billing User Profile" backBtn />
      <Box mt={2}>
        <CustomerTable />
      </Box>
    </>
  );
};

export default BillerUserProfile;
