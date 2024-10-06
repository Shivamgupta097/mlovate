import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  RadioGroup,
  TextField,
  Radio,
  Checkbox,
  Divider,
  Stack,
} from '@mui/material';
import PageLayout from '../Common/PageLayout';
import { PageHeader } from 'components/common/Header';

const RestaurantConfiguration = () => {
  const [closingHour, setClosingHour] = useState('04');
  const [closingMinutes, setClosingMinutes] = useState('00');
  const [batchPacketSize, setBatchPacketSize] = useState('100');
  const [orderLimit, setOrderLimit] = useState('500');
  const [autoSyncTime, setAutoSyncTime] = useState('5');
  const [pettyCashAmount, setPettyCashAmount] = useState('200');
  const [paymentRequestSyncTime, setPaymentRequestSyncTime] = useState('5');
  const [checkPaymentRequest, setCheckPaymentRequest] = useState('5');
  const [pendingOrderTime, setPendingOrderTime] = useState('5');
  const [minDeliveryTime, setMinDeliveryTime] = useState('30');
  const [minPrepTime, setMinPrepTime] = useState('30');
  const [decimalPoints, setDecimalPoints] = useState('2');
  const [fontConfig, setFontConfig] = useState('default');

  const handleClosingHour = event => {
    setClosingHour(event.target.value);
  };

  const handleClosingMinutes = event => {
    setClosingMinutes(event.target.value);
  };

  const handleBatchPacketSize = event => {
    setBatchPacketSize(event.target.value);
  };

  const handleOrderLimit = event => {
    setOrderLimit(event.target.value);
  };

  const handleSyncTime = event => {
    setAutoSyncTime(event.target.value);
  };

  const handlePettyCash = event => {
    setPettyCashAmount(event.target.value);
  };

  const handlePaymentRequestSyncTime = e => {
    setPaymentRequestSyncTime(e.target.value);
  };

  const handleCheckPaymentRequest = e => {
    setCheckPaymentRequest(e.target.value);
  };

  const handlePendingOrderTime = e => {
    setPendingOrderTime(e.target.value);
  };

  const handleMinDeliveryTime = e => {
    setMinDeliveryTime(e.target.value);
  };

  const handleMinPrepTime = e => {
    setMinPrepTime(e.target.value);
  };

  const handleDecimalPoint = e => {
    setDecimalPoints(e.target.value);
  };

  const handleFontConfig = e => {
    setFontConfig(e.target.value);
  };

  return (
    <Stack spacing={3}>
      <PageHeader title="Restaurant Configuration" backBtn />
      <PageLayout>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Restaurant Closing Hours</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <FormControl sx={{ width: '220px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={closingHour}
                label="Closing Hour"
                onChange={handleClosingHour}
              >
                {[
                  '00',
                  '01',
                  '02',
                  '03',
                  '04',
                  '05',
                  '06',
                  '07',
                  '08',
                  '09',
                ].map(number => {
                  return (
                    <MenuItem value={number} key={number}>
                      {number}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '220px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={closingMinutes}
                onChange={handleClosingMinutes}
              >
                {['00', '30'].map(number => (
                  <MenuItem value={number} key={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Sync Batch Packet Size</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <FormControl sx={{ width: '420px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={batchPacketSize}
                label="Batch Packet Size"
                onChange={handleBatchPacketSize}
              >
                {[
                  '02',
                  '03',
                  '04',
                  '05',
                  '10',
                  '20',
                  '30',
                  '40',
                  '50',
                  '60',
                  '70',
                  '80',
                  '90',
                  '100',
                ].map(count => (
                  <MenuItem value={count} key={count}>
                    {count}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Default Order Limit</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '220px' }}
              value={orderLimit}
              onChange={handleOrderLimit}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Default Auto Sync Time</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <FormControl sx={{ width: '220px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={autoSyncTime}
                label="Auto Sync Time"
                onChange={handleSyncTime}
              >
                {[
                  '5',
                  '10',
                  '15',
                  '30',
                  '45',
                  '60',
                  '75',
                  '90',
                  '105',
                  '120',
                  '135',
                  '150',
                  '165',
                  '180',
                ].map(number => (
                  <MenuItem value={number} key={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Default Petty Cash Amount</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '220px' }}
              value={pettyCashAmount}
              onChange={handlePettyCash}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Payment request Sync Time</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '220px' }}
              value={paymentRequestSyncTime}
              onChange={handlePaymentRequestSyncTime}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">
            Check Payment request Sync Time
          </Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '220px' }}
              value={checkPaymentRequest}
              onChange={handleCheckPaymentRequest}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">
            Default Pending Order Sync Time
          </Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <FormControl sx={{ width: '220px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pendingOrderTime}
                label="Pending Order Sync Time"
                onChange={handlePendingOrderTime}
              >
                {[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                ].map(number => (
                  <MenuItem value={number} key={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Minimun Delivery Time</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '220px' }}
              value={minDeliveryTime}
              onChange={handleMinDeliveryTime}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2">Minimun Preparation Time</Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '220px' }}
              value={minPrepTime}
              onChange={handleMinPrepTime}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            Select Decimal Points for Invoice Calculation
          </Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <FormControl sx={{ width: '220px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={decimalPoints}
                label="Decimal Points"
                onChange={handleDecimalPoint}
              >
                {['1', '2', '3'].map(count => (
                  <MenuItem value={count} key={count}>
                    {count}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            Font Configuration
          </Typography>
          <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
            <FormControl sx={{ width: '220px' }} size="small">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fontConfig}
                label="Font Config"
                onChange={handleFontConfig}
              >
                {['default', 'small'].map(font => (
                  <MenuItem value={font} key={font}>
                    {font}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            Display Type
          </Typography>
          <Box
            sx={{ width: '600px' }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={3}
          >
            <FormControl sx={{ marginLeft: '11px' }}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Touch Type"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Keyboard Type"
                  control={<Radio />}
                  label="Keyboard Type"
                />
                <FormControlLabel
                  value="Touch Type"
                  control={<Radio />}
                  label="Touch Type"
                />
              </RadioGroup>
            </FormControl>
            <Box display="flex" alignItems="center">
              <Checkbox />
              <Typography variant="body1">
                Want to open virtual keyboard?
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Checkbox />
              <Typography variant="body1" width="450px">
                Open Virtual Keyboard while entering order number in online
                order food ready text box.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Checkbox />
              <Typography variant="body1">
                Reset your stock on a day start
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            Default Login Screen
          </Typography>
          <Box
            sx={{ width: '600px' }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={3}
          >
            <FormControl sx={{ marginLeft: '11px' }}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Username/Password"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Username/Password"
                  control={<Radio />}
                  label="Username/Password"
                />
                <FormControlLabel
                  value="Passcode"
                  control={<Radio />}
                  label="Passcode"
                />
                <FormControlLabel
                  value="Swipe Card"
                  control={<Radio />}
                  label="Swipe Card"
                />
              </RadioGroup>
            </FormControl>
            <Box display="flex" alignItems="center">
              <Checkbox />
              <Typography variant="body1">
                Map digital transaction entries against invoices
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            Order Live View
          </Typography>
          <Box
            sx={{ width: '600px' }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={3}
          >
            <FormControl sx={{ marginLeft: '11px' }}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Desc"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Asc" control={<Radio />} label="Asc" />
                <FormControlLabel
                  value="Desc"
                  control={<Radio />}
                  label="Desc"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            KOT Live View
          </Typography>
          <Box
            sx={{ width: '600px' }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={3}
          >
            <FormControl sx={{ marginLeft: '11px' }}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Asc"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Asc" control={<Radio />} label="Asc" />
                <FormControlLabel
                  value="Desc"
                  control={<Radio />}
                  label="Desc"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" width="300px">
            Live View KOT Design
          </Typography>
          <Box
            sx={{ width: '600px' }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={3}
          >
            <FormControl sx={{ marginLeft: '11px' }}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="New"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="New" control={<Radio />} label="New" />
                <FormControlLabel value="Old" control={<Radio />} label="Old" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox checked />
          <Typography variant="body1" width="100%">
            From KDS/KOT live screen send Update to order screen
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox checked />
          <Typography variant="body1" width="100%">
            On marking done all items on KDS, Mark KOT as done.
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="body1" width="100%">
            Display Settle and Save button for all the order types
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="body1" width="100%">
            Save special notes into special notes master while saving KOT/Orders
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox checked />
          <Typography variant="body1" width="100%">
            Save AddOn Quantity with the total item quantity (multiplication) to
            Prepared Bill
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="body1" width="100%">
            Do not create memo for advance orders (Offline Order Only)
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="flex-end" mt={2} mb={1} mr={3}>
          <Button variant="contained">Save</Button>
        </Box>
      </PageLayout>
    </Stack>
  );
};

export default RestaurantConfiguration;
