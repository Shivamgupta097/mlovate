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
  Radio,
  Checkbox,
  Divider,
  TextField,
  Stack,
  Card,
} from '@mui/material';
import { PageHeader } from 'components/common/Header';
import Form from '../../Components/common/PageLayout';

const BillingScreenConfig = () => {
  const [orderType, setOrderType] = useState('Dinein');
  const [paymentType, setPaymentType] = useState('Cash');

  const handleOrderTypeChange = e => {
    setOrderType(e.target.value);
  };

  const handlePaymentTypeChange = e => {
    setPaymentType(e.target.value);
  };
  return (
    <Stack spacing={3}>
      <PageHeader title="Billing Screen Configuration" backBtn />
      <Form>
        <Card>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body2">Default Order Type</Typography>
            <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
              <FormControl sx={{ width: '220px' }} size="small">
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select1"
                  value={orderType}
                  label="Order Type"
                  onChange={handleOrderTypeChange}
                >
                  <MenuItem value="Delivery">Delivery</MenuItem>
                  <MenuItem value="PickUp">PickUp</MenuItem>
                  <MenuItem value="Dinein">Dinein</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body2">Default Payment Type</Typography>
            <Box sx={{ width: '620px', m: 2 }} display="flex" gap={3}>
              <FormControl sx={{ width: '220px' }} size="small">
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={paymentType}
                  label="Payment Type"
                  onChange={handlePaymentTypeChange}
                >
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="Card">Card</MenuItem>
                  <MenuItem value="Dual Payment">Dual Payment</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography variant="body2" mt={2}>
              Default Table No.
            </Typography>
            <Box
              sx={{ width: '620px', m: 2 }}
              display="flex"
              flexDirection="column"
            >
              <TextField
                id="outlined-basic1"
                variant="outlined"
                size="small"
                sx={{ width: '220px' }}
              />
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">
                  Display & Calculate Delivery Charges
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography variant="body2" sx={{ display: 'flex' }} mt={2}>
              Default Delivery Charges (Only for Delivery)
              <Typography color="red">*</Typography>
            </Typography>
            <Box
              sx={{ width: '620px', m: 2 }}
              display="flex"
              flexDirection="column"
            >
              <TextField
                id="outlined-basic2"
                variant="outlined"
                size="small"
                sx={{ width: '220px' }}
              />
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">
                  Display & Calculated Container Charge
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" width="300px">
              Calculate Container Charge Automatically
            </Typography>
            <Box
              sx={{ width: '645px' }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={3}
            >
              <FormControl sx={{ marginLeft: '11px' }}>
                <Box display="flex">
                  <Box display="flex" alignItems="center">
                    <Checkbox checked />
                    <Typography variant="body1">Delivery</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Checkbox checked />
                    <Typography variant="body1">Pick Up</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Checkbox />
                    <Typography variant="body1">Dine In</Typography>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">Container Charge</Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r1"
                  defaultValue="Item Wise"
                  name="row-radio-buttons-group-r1"
                >
                  <FormControlLabel
                    value="Item Wise"
                    control={<Radio />}
                    label="Item Wise"
                  />
                  <FormControlLabel
                    value="Order Wise"
                    control={<Radio />}
                    label="Order Wise"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1" mt={1.5}>
              Container Charge Label
            </Typography>
            <Box
              sx={{ width: '620px', m: 2 }}
              display="flex"
              flexDirection="column"
            >
              <Box>
                <TextField
                  id="outlined-basic-2"
                  variant="outlined"
                  size="small"
                  sx={{ width: '220px' }}
                  placeholder="Container Charge"
                />
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    Display & Calculate Serving Charges
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    Calculate Tax Before Discount Calculation
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    Calculate Backward Tax After Discount
                  </Typography>
                </Box>
                <Typography vraint="body1">
                  Note: Ignore the setting if you are using forward tax
                  Configuration for your outlet
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Special Discount Calculation On
            </Typography>

            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r2"
                  defaultValue="Total"
                  name="row-radio-buttons-group-r2"
                >
                  <FormControlLabel
                    value="Total"
                    control={<Radio />}
                    label="Total"
                  />
                  <FormControlLabel
                    value="Core"
                    control={<Radio />}
                    label="Core"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1" mt={1.5}>
              Discount Label
            </Typography>
            <Box
              sx={{ width: '620px', m: 2 }}
              display="flex"
              flexDirection="column"
            >
              <Box>
                <TextField
                  id="outlined-basic-4"
                  variant="outlined"
                  size="small"
                  sx={{ width: '220px' }}
                  placeholder="Coupon Code"
                />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1" mt={1.5}>
              Discount Calculate Button Text
            </Typography>
            <Box
              sx={{ width: '620px', m: 2 }}
              display="flex"
              flexDirection="column"
            >
              <Box>
                <TextField
                  id="outlined-basic-5"
                  variant="outlined"
                  size="small"
                  sx={{ width: '220px' }}
                  placeholder="Apply"
                />
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="">
            <Typography variant="body2" width="350px">
              Customer Phone Validation on Billing Screen
            </Typography>
            <Box
              sx={{ width: '600px', marginLeft: '10px' }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap={3}
            >
              <Typography variant="body1">Discount</Typography>
              <Box>
                <Box display="flex" alignItems="center">
                  <Checkbox checked />
                  <Typography variant="body1">
                    Merge Duplicate item (On Billing Screen)
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox checked />
                  <Typography variant="body1">
                    Merge Duplicate item (During Bill Print)
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox checked />
                  <Typography variant="body1">
                    Save KOT on save Bill (Only first time not in edit)
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox checked />
                  <Typography variant="body1">
                    Show CWT(Customer Wise taxes) bifurcation on billing screen
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox checked />
                  <Typography variant="body1">
                    Display Leave as it is. (No Discount) on Discount Screen
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    Auto Apply related item/Category Wise Discount
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    Show item/Category wise Discoount Box while adding Items
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    By default make tax area open
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox />
                  <Typography variant="body1">
                    By default make discount area open
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Checkbox checked />
                  <Typography variant="body1">
                    Merge e-bill and print bill
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Default Screen
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r3"
                  defaultValue="Total Management"
                  name="row-radio-buttons-group-r3"
                >
                  <FormControlLabel
                    value="Billing"
                    control={<Radio />}
                    label="Billing"
                  />
                  <FormControlLabel
                    value="Total Management"
                    control={<Radio />}
                    label="Total Management"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Lock Active Table
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r4"
                  defaultValue="Save & Print"
                  name="row-radio-buttons-group-r4"
                >
                  <FormControlLabel
                    value="Save & Print"
                    control={<Radio />}
                    label="Save & Print"
                  />
                  <FormControlLabel
                    value="Settle & Save"
                    control={<Radio />}
                    label="Settle & Save"
                  />
                  <FormControlLabel
                    value="None"
                    control={<Radio />}
                    label="None"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Release Table On
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r5"
                  defaultValue="Settle & Save"
                  name="row-radio-buttons-group-r5"
                >
                  <FormControlLabel
                    value="Settle & Save"
                    control={<Radio />}
                    label="Settle & Save"
                  />
                  <FormControlLabel
                    value="Print Bill"
                    control={<Radio />}
                    label="Print Bill"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body2"
              width="300px"
              height="40px"
              display="flex"
              alignItems="center"
            >
              Release Recent Section On
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r6"
                  defaultValue="Settle & Save"
                  name="row-radio-buttons-group-r6"
                >
                  <FormControlLabel
                    value="Settle & Save"
                    control={<Radio />}
                    label="Settle & Save"
                  />
                  <FormControlLabel
                    value="Print Bill"
                    control={<Radio />}
                    label="Print Bill"
                  />
                </RadioGroup>
              </FormControl>

              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  AddOn Min-Max Validation
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Auto add items to billing screen on select
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Auto add items to billing screen from variation/addon popup
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">
                  Display search item option on billing screen (Only for Touch
                  View)
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Calculate tax on Container Charge
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">Allow Negative Quantity</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Display GroupWise/Virtual Outlet
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">Display Item Price</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">
                  Display Settled Amount Textbox
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">
                  Display Discount/Coupon Textbox
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Show settled start by/bill created by information on billing
                  screen
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Show KOT details (KOT ID and Time) while View/Merge KOT
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Default focus while adding item from table view (only for keyboard
              View)
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r7"
                  defaultValue="Add Item"
                  name="row-radio-buttons-group-r7"
                >
                  <FormControlLabel
                    value="Add Item"
                    control={<Radio />}
                    label="Add Item"
                  />
                  <FormControlLabel
                    value="Assign to"
                    control={<Radio />}
                    label="Assign to"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Round Off Option
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r8"
                  defaultValue="Normal"
                  name="row-radio-buttons-group-r8"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Normal"
                      control={<Radio />}
                      label="Normal"
                    />
                    <FormControlLabel
                      value="Round Off Up"
                      control={<Radio />}
                      label="Round Off Up"
                    />
                  </Box>
                  <Box display="flex">
                    <FormControlLabel
                      value="Round Off Down"
                      control={<Radio />}
                      label="Round Off Down"
                    />
                    <FormControlLabel
                      value="None"
                      control={<Radio />}
                      label="None"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Default Action while pressing (CTRL+A) Online Order Accept
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r9"
                  defaultValue=""
                  name="row-radio-buttons-group-r9"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Save"
                      control={<Radio />}
                      label="Save"
                    />
                    <FormControlLabel
                      value="Print & E-bill"
                      control={<Radio />}
                      label="Print & E-bill"
                    />
                  </Box>
                  <Box display="flex">
                    <FormControlLabel
                      value="KOT"
                      control={<Radio />}
                      label="KOT"
                    />
                    <FormControlLabel
                      value="KOT & Print"
                      control={<Radio />}
                      label="KOT & Print"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Split Bill Options
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r10"
                  defaultValue="Generate Seperate Bill"
                  name="row-radio-buttons-group-r10"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Print Group Wise"
                      control={<Radio />}
                      label="Print Group Wise"
                    />
                    <FormControlLabel
                      value="Generate Seperate Bill"
                      control={<Radio />}
                      label="Generate Seperate Bill"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" width="300px">
              Action When Items goes out of stock
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r11"
                  defaultValue="Hide Item"
                  name="row-radio-buttons-group-r11"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Hide Item"
                      control={<Radio />}
                      label="Hide Item"
                    />
                    <FormControlLabel
                      value="Disable Item"
                      control={<Radio />}
                      label="Disable Item"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" width="300px">
              Invoice Structure
            </Typography>
            <Box sx={{ width: '635px' }}>
              <Box display="flex" gap={4}>
                <TextField
                  id="outlined-basic-6"
                  variant="outlined"
                  size="small"
                  sx={{ width: '150px' }}
                  placeholder="Prefix"
                />
                <TextField
                  id="outlined-basic-7"
                  variant="outlined"
                  size="small"
                  sx={{ width: '150px' }}
                  placeholder="Number Length"
                />
                <TextField
                  id="outlined-basic-8"
                  variant="outlined"
                  size="small"
                  sx={{ width: '150px' }}
                  placeholder="Suffix"
                />
              </Box>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body1">
                    Note: Enter any Value from configured Set
                  </Typography>
                </Box>
                <Box>
                  <Stack spacing={1.5}>
                    <Box display="flex">
                      <Typography variant="body1" width={100}>
                        [yy]:
                      </Typography>
                      <Typography variant="body1">
                        Ex. 18[Current Year]
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography variant="body1" width={100}>
                        [yyyy]:
                      </Typography>
                      <Typography variant="body1">
                        Ex. 2022[Current Year]
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography variant="body1" width={100}>
                        [mm]:
                      </Typography>
                      <Typography variant="body1">
                        Ex. 01[Current Year]
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography variant="body1" width={100}>
                        [nmn]:
                      </Typography>
                      <Typography variant="body1">
                        Ex. Jan[Current Year]
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography variant="body1" width={100}>
                        [dd]:
                      </Typography>
                      <Typography variant="body1">
                        Ex. 01[Current Year]
                      </Typography>
                    </Box>
                    <Box>
                      <Stack spacing={1}>
                        <Box display="flex">
                          <Typography variant="body1" width={100}>
                            If Ex.:
                          </Typography>
                          <Box display="flex" gap={4}>
                            <TextField
                              id="outlined-basic-9"
                              variant="outlined"
                              size="small"
                              sx={{ width: '150px' }}
                              value="[YY]/ABC"
                            />
                            <TextField
                              id="outlined-basic-10"
                              variant="outlined"
                              size="small"
                              sx={{ width: '150px' }}
                              value="2"
                            />
                            <TextField
                              id="outlined-basic-11"
                              variant="outlined"
                              size="small"
                              sx={{ width: '150px' }}
                            />
                          </Box>
                        </Box>
                        <Box display="flex" gap={5}>
                          <Typography>means invoice will be</Typography>
                          <TextField
                            id="outlined-basic-12"
                            variant="outlined"
                            size="small"
                            sx={{ width: '150px' }}
                            value="18/ABC02"
                          />
                        </Box>
                      </Stack>
                      <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography variant="body1">
                          Skip Item Special notes focus on billing screen (only
                          for Keyboard View)
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography variant="body1">
                          Split a bill when multiple groups present in Print
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography width="300px" variant="body2" mt={1}>
              Set Option for Quick Links for items in table view screen
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r12"
                  defaultValue="Both"
                  name="row-radio-buttons-group-r12"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Save and Print"
                      control={<Radio />}
                      label="Save and Print"
                    />
                    <FormControlLabel
                      value="View KOT"
                      control={<Radio />}
                      label="View KOT"
                    />
                    <FormControlLabel
                      value="Both"
                      control={<Radio />}
                      label="Both"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">No. of Person Mandatory</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Custom Payment information Mandatory
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">Show Tip</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">Order Wise Information</Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography width="300px" variant="body2" mt={1}>
              Set Loyality Data (Only for Table Order)
            </Typography>
            <Box sx={{ width: '635px' }}>
              <FormControl sx={{ marginLeft: '11px' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label-r13"
                  defaultValue="Print Bill"
                  name="row-radio-buttons-group-r13"
                >
                  <Box display="flex">
                    <FormControlLabel
                      value="Print Bill"
                      control={<Radio />}
                      label="Print Bill"
                    />
                    <FormControlLabel
                      value="Settle & Save"
                      control={<Radio />}
                      label="Settle & Save"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
              <Box display="flex" alignItems="center">
                <Checkbox checked />
                <Typography variant="body1">Default Loyalty Flag</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" width="80%">
                  Disable Taxes and Other Charges(Packing Charge, Delivery
                  Charge, Service Charge) on Complimentary Bill
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" width="80%">
                  Show Biller an option to release urgent KOTs while cancelling
                  a bill (within same day KOTs only.) So biller can create new
                  Bill using older KOTs.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" width="80%">
                  Apply Bogo Automatically
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" width="80%">
                  Ignore Add-On Price while calculating discount (works for all
                  types for discount)
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1" width="80%">
                  Special Discount reason Mandatory
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <Typography variant="body1">
                  Do not allow the Biller to punch item Quantity in Decimal
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="flex-end" mt={2} mb={1} mr={3}>
            <Button variant="contained">Save</Button>
          </Box>
        </Card>
      </Form>
    </Stack>
  );
};

export default BillingScreenConfig;
