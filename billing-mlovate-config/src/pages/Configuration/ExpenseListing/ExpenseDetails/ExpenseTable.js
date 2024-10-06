import React, { useState } from 'react';
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

const ExpenseTable = ({ selectedDate, renderNumber, setRenderNumber }) => {
  const [state, setState] = useState({
    reason: 'Select Reason',
    amount: '',
    explanation: '',
    employee: 'selectEmployee',
    paidFrom: 'fromCash',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(old => ({ ...old, [name]: value }));
  };

  console.log(state);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="body2">Selected date : </Typography>

        <Typography variant="body2" color="primary" ml={2}>
          {selectedDate}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table
          sx={{ maxWidth: '900px' }}
          size="small"
          aria-label="a dense table"
        >
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
            {[...Array(renderNumber)].map((cur, index) => (
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
                key={index}
              >
                <TableCell component="th" scope="row" align="left">
                  <Select
                    name="reason"
                    id="reason"
                    defaultValue="Select Reason"
                    sx={{ width: '180px' }}
                    size="small"
                    onChange={handleChange}
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
                    name="amount"
                    value={state.amount}
                    placeholder="Enter Amount"
                    sx={{ width: '180px' }}
                    size="small"
                    onChange={handleChange}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    type="text"
                    name="explanation"
                    value={state.explanation}
                    placeholder="Enter Explanation"
                    sx={{ width: '300px' }}
                    size="small"
                    onChange={handleChange}
                  />
                </TableCell>
                <TableCell align="left">
                  <Select
                    name="employee"
                    id="select_employee"
                    value={state.employee}
                    sx={{ width: '180px' }}
                    size="small"
                    onChange={handleChange}
                  >
                    <MenuItem value="selectEmployee">Select Employee</MenuItem>
                    <MenuItem value="biller">Biller</MenuItem>
                  </Select>
                </TableCell>

                <TableCell align="left">
                  <Select
                    name="paidFrom"
                    id="sort_by"
                    sx={{ width: '130px' }}
                    size="small"
                    value={state.paidFrom}
                    onChange={handleChange}
                  >
                    <MenuItem value="fromCash">From Cash</MenuItem>
                    <MenuItem value="fromBank">From Bank</MenuItem>
                  </Select>
                </TableCell>

                <TableCell align="left">
                  <Typography
                    component="anchor"
                    color="primary"
                    sx={{ cursor: 'pointer' }}
                  >
                    Clear
                  </Typography>
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

export default ExpenseTable;
