import { useState } from 'react';
import { Box, Stack, Grid } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import AccordionSearch from '../Components/common/AccordionSearch';
import ButtonListing from '../Components/common/ButtonListing';
import CustomerTable from './CustomerTable';
import Input from 'components/Design/Input';

const CustomerListing = () => {
  const [state, setStateHook] = useState({});
  const setState = old => setStateHook(oldState => ({ ...oldState, ...old }));

  const handleChange = e => {
    return setState({ [e.target.name]: e.target.value });
  };
  return (
    <Box>
      <Stack spacing={3}>
        <PageHeader title="Customer Listing" backBtn />
        <AccordionSearch>
          <Grid container component="form" gap={3}>
            <Grid item md={2}>
              <Input
                label="Mobile No"
                name="mobileNo"
                value={state.mobileNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={2}>
              <Input
                label="Customer Name"
                name="customerName"
                value={state.customerName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={2}>
              <Input
                label="Address"
                name="address"
                value={state.address}
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={2}>
              <Input
                label="Customer Type"
                name="customerType"
                value={state.customerType}
                options={[
                  {
                    label: 'All',
                    value: 'all',
                  },
                  {
                    label: 'Favorite',
                    value: 'favorite',
                  },
                  {
                    label: 'Send me update',
                    value: 'sendMeUpdate',
                  },
                ]}
                onChange={handleChange}
              />
            </Grid>

            <ButtonListing listingBtn />
          </Grid>
        </AccordionSearch>

        <CustomerTable />
      </Stack>
    </Box>
  );
};

export default CustomerListing;
