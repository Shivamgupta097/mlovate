import React, { useState } from 'react';
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
  Button,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import { PageHeader } from 'components/common/Header';

function createData(
  printerName,
  printerType,
  reportType,
  action,
  printerAssign,
) {
  return {
    printerName,
    printerType,
    reportType,
    action,
    printerAssign,
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  createData('e-bill printer', 'e-bill printer', 'No', ['Edit', 'Remove']),
  createData('Billing', 'general', 'Yes', ['Edit'], 'Assign'),
];

const CustomerTable = () => {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
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
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle2">Printer Assign</Typography>
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
                      {data.printerName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.printerType}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.reportType}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.action.map((action, index) => {
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
                              {action + '  | '}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">
                      {data.printerAssign}
                    </Typography>
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
