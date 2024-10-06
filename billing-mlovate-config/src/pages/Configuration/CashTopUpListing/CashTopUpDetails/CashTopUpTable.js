import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
} from '@mui/material';
import ButtonListing from 'pages/Configuration/Components/common/ButtonListing';
import ActionButton from 'pages/Configuration/Components/common/ActionButton';

const reasonData = [
  {
    reason: 'Select Reason',
    key: 'selectReason',
  },

  {
    reason: 'Milk',
    key: 'milk',
  },

  {
    reason: 'Petrol',
    key: 'petrol',
  },

  {
    reason: 'Salary',
    key: 'salary',
  },

  {
    reason: 'Advance Salary',
    key: 'advanceSalary',
  },

  {
    reason: 'Stationary',
    key: 'stationary',
  },

  {
    reason: 'Vegetables',
    key: 'vegetables',
  },

  {
    reason: 'Groceries',
    key: 'groceries',
  },

  {
    reason: 'Stationary',
    key: 'stationary',
  },

  {
    reason: 'Staff-Expense',
    key: 'staffExpense',
  },
  {
    reason: 'Delivery Boy',
    key: 'deliveryBoy',
  },
  {
    reason: 'Electricity',
    key: 'electricity',
  },
  {
    reason: 'Gas',
    key: 'gas',
  },
];
const CashTopUpTable = ({ selectedDate, renderNumber, setRenderNumber }) => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="body2">Selected date : </Typography>

        <Typography variant="body2" color="primary" ml={2}>
          {selectedDate}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
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
                <Typography variant="subtitle2">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(renderNumber)].map((cur, index) => (
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
                key={index}
              >
                <TableCell component="th" scope="row" align="left">
                  <Select
                    name="sortBy"
                    id="reason"
                    defaultValue="Select Reason"
                    sx={{ width: '180px' }}
                    size="small"
                  >
                    {reasonData.map(item => (
                      <MenuItem key={item.key} value={item.reason}>
                        {item.reason}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell align="left">
                  <TextField
                    type="number"
                    placeholder="Enter Amount"
                    sx={{ width: '180px' }}
                    size="small"
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    type="text"
                    placeholder="Enter Explanation"
                    sx={{ width: '690px' }}
                    size="small"
                  />
                </TableCell>

                <TableCell align="left">
                  <ActionButton text={[{ type: 'Clear', action: 'onClear' }]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ButtonListing setRenderNumber={setRenderNumber} detailsBtn />
      </TableContainer>
    </>
  );
};

export default CashTopUpTable;
