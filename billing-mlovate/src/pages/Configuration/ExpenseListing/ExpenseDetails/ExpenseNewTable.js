import React from 'react';
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import ButtonListing from 'pages/Configuration/Components/common/ButtonListing';

const ExpenseNewTable = ({
  selectedDate,
  details,
  handleSubmit = { handleSubmit },
}) => {
  console.log(details);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="body2">Selected date : </Typography>

        <Typography variant="body2" color="primary" ml={2}>
          {selectedDate}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography variant="subtitle2"> Reason</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Amount</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Explanation</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">Employee</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Paid from</Typography>
              </TableCell>

              <TableCell align="left">
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map(cur => (
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
                key={cur.id}
              >
                <TableCell align="left">
                  <Typography variant="body1">{cur.reason}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{cur.amount}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{cur.explanation}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{cur.employee}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body1">{cur.paidFrom}</Typography>
                </TableCell>

                <TableCell align="left">
                  <Typography color="primary" sx={{ cursor: 'pointer' }}>
                    Clear
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonListing detailsBtn handleSubmit={handleSubmit} />
    </>
  );
};

export default ExpenseNewTable;
