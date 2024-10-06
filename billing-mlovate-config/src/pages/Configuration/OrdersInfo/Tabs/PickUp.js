import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material';
import Accordian from '../common/Accordian/OrderAccordian';
import { NoRecord } from 'components/common';

const CustomerTable = () => {
  return (
    <>
      <NoRecord />
    </>
  );
};

const PickUp = () => {
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
    <Stack spacing={3}>
      <Accordian>
        <Grid container gap={4}>
          <Grid items md={2}>
            <Typography variant="h6">Order No.</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
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
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Grid>
          <Grid items md={2}>
            <Typography variant="h6">Customer Name</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Grid>
          <Grid items md={2}>
            <Typography variant="h6">Mobile No.</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
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
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" gap={2} justifyContent="flex-end" mt={2}>
          <Button variant="outlined">Reset</Button>
          <Button variant="outlined">
            <Typography variant="body2">Search From Web</Typography>
          </Button>
          <Button variant="contained">Search</Button>
        </Box>
      </Accordian>
      <CustomerTable />
    </Stack>
  );
};

export default PickUp;
