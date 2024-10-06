import React from 'react';
import {
  Box,
  Stack,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

import { PageHeader } from 'components/common/Header';
import AccordionSearch from '../Components/common/AccordionSearch';
import ButtonListing from '../Components/common/ButtonListing';
import CustomerTable from './CustomerTable';

const CustomerListing = () => {
  return (
    <>
      {/* Repeated */}
      <Box>
        <Stack spacing={3}>
          <PageHeader title="Customer Listing" backBtn />
          <AccordionSearch>
            <Grid container component="form" gap={3}>
              <Grid item md={2}>
                <InputLabel htmlFor="mobile_no">Mobile</InputLabel>
                <TextField
                  id="mobile_no"
                  name="mobileNo"
                  placeholder="Enter mobile number"
                  size="small"
                />
              </Grid>
              <Grid item md={2}>
                <InputLabel htmlFor="customer_name">Customer Name</InputLabel>
                <TextField
                  id="customer_name"
                  name="customerName"
                  placeholder="Enter customer name"
                  size="small"
                />
              </Grid>

              <Grid item md={2}>
                <InputLabel htmlFor="customer_name">Adddress</InputLabel>
                <TextField
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  size="small"
                />
              </Grid>

              <Grid item md={2}>
                <InputLabel htmlFor="customer_type">Customer Type</InputLabel>
                <Select
                  name="customerType"
                  id="customer_type"
                  sx={{ width: '200px' }}
                  size="small"
                  defaultValue="all"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="favorite">Favorite</MenuItem>
                  <MenuItem value="notSend">Do not send any update</MenuItem>
                </Select>
              </Grid>
              <ButtonListing listingBtn />
            </Grid>
          </AccordionSearch>

          <CustomerTable />
        </Stack>
      </Box>
    </>
  );
};

export default CustomerListing;
