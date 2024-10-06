import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
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
import Head from '../Components/common/Head';

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
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={{ border: '1px solid black', width: '100%' }}>
              <TableCell width="30%" sx={{ border: '1px solid red' }}>
                <Typography variant="subtitle2">Biller Name</Typography>
              </TableCell>
              <TableCell
                align="center"
                width="25%"
                sx={{ border: '1px solid red' }}
              >
                <Typography variant="subtitle2">
                  Biller Original Name
                </Typography>
              </TableCell>
              <TableCell
                align="center"
                width="20%"
                sx={{ border: '1px solid red' }}
              >
                <Typography variant="subtitle2">Type</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((data, index) => (
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
  const navigate = useNavigate();
  return (
    <>
      <Head>
        <Box>Billing User Profile</Box>
        <Button
          variant="outlined"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </Head>
      <CustomerTable />
    </>
  );
};

export default BillerUserProfile;
