import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Card,
  Divider,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { PageHeader } from 'components/common/Header';
import ExpenseNewTable from './ExpenseNewTable';

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

const AddComment = ({
  handleClose,
  open,
  state,
  handleInputChange,
  handleFormSubmit,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Expense Form</DialogTitle>
      <Divider />
      <DialogContent>
        <Stack spacing={2}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box sx={{ width: '150px' }}>
                  <InputLabel htmlFor="reason">Reason</InputLabel>
                </Box>
                <Select
                  name="reason"
                  id="reason"
                  defaultValue="Select Reason"
                  sx={{ width: '300px' }}
                  size="small"
                  onChange={handleInputChange}
                >
                  {reasonData.map(item => (
                    <MenuItem key={item.key} value={item.reason}>
                      {item.reason}
                    </MenuItem>
                  ))}
                </Select>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Box sx={{ width: '150px' }}>
                  <InputLabel htmlFor="amount">Amount</InputLabel>
                </Box>

                <TextField
                  type="number"
                  name="amount"
                  value={state.amount}
                  placeholder="Enter Amount"
                  sx={{ width: '300px' }}
                  size="small"
                  onChange={handleInputChange}
                />
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Box sx={{ width: '150px' }}>
                  <InputLabel htmlFor="explanation">
                    Enter Explanation
                  </InputLabel>
                </Box>

                <TextField
                  type="text"
                  name="explanation"
                  value={state.explanation}
                  placeholder="Enter Explanation"
                  multiline
                  rows={5}
                  sx={{ width: '300px' }}
                  size="small"
                  onChange={handleInputChange}
                />
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Box sx={{ width: '150px' }}>
                  <InputLabel htmlFor="employee">Select Employee</InputLabel>
                </Box>

                <Select
                  name="employee"
                  id="select_employee"
                  value={state.employee}
                  sx={{ width: '300px' }}
                  size="small"
                  onChange={handleInputChange}
                >
                  <MenuItem value="selectEmployee">Select Employee</MenuItem>
                  <MenuItem value="biller">Biller</MenuItem>
                </Select>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <Box sx={{ width: '150px' }}>
                  <InputLabel htmlFor="paidFrom">Paid From</InputLabel>
                </Box>

                <Select
                  name="paidFrom"
                  id="sort_by"
                  sx={{ width: '300px' }}
                  size="small"
                  value={state.paidFrom}
                  onChange={handleInputChange}
                >
                  <MenuItem value="fromCash">From Cash</MenuItem>
                  <MenuItem value="fromBank">From Bank</MenuItem>
                </Select>
              </Box>
            </Stack>
          </form>
        </Stack>
      </DialogContent>

      <Divider />
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} variant="contained" autoFocus>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ExpenseDetails = () => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [state, setState] = useState({
    reason: 'Select Reason',
    amount: '',
    explanation: '',
    employee: 'Select Employee',
    paidFrom: 'From Cash',
  });

  const [details, setDetails] = useState([]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(old => ({ ...old, [name]: value }));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const newDetails = {
      id: Math.floor(Math.random() * 50),
      reason: state.reason,
      amount: state.amount,
      explanation: state.explanation,
      employee: state.employee,
      paidFrom: state.paidFrom,
    };
    const expensesData = [...details, newDetails];
    setDetails(expensesData);
    console.log(expensesData);
    setShow(false);
    setState({
      reason: 'Select Reason',
      amount: '',
      explanation: '',
      employee: 'Select Employee',
      paidFrom: 'From Cash',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedDate) {
      setShow(true);
      setShowError(false);
    } else {
      setShow(false);
      setShowError(true);
    }
  };

  const handleChange = event => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <Box>
        <Stack spacing={3}>
          <PageHeader title="Expense Details" backBtn />

          <Card>
            <form onSubmit={handleSubmit}>
              <Box display="flex" alignItems="center" gap={3}>
                <Typography variant="body2">Enter date</Typography>
                <TextField
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Done
                </Button>
              </Box>
            </form>

            {showError ? (
              <Typography color="secondary" mt={3}>
                Error : Please First enter the date
              </Typography>
            ) : null}
          </Card>

          <AddComment
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            state={state}
            setState={setState}
            open={show}
            handleClose={() => {
              setShow(false);
            }}
          />

          {details && details.length > 0 && (
            <ExpenseNewTable
              details={details}
              selectedDate={selectedDate}
              handleSubmit={handleSubmit}
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default ExpenseDetails;
