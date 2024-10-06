import { useState } from 'react';
import { Box, Stack, Grid } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import { ColorIndicator } from 'components/common';
import AccordionSearch from '../Components/common/AccordionSearch';
import ButtonListing from '../Components/common/ButtonListing';
import Input from 'components/Design/Input';
import KotTable from './KotTable';

const KotListing = () => {
  const [state, setStateHook] = useState({});
  const setState = old => setStateHook(oldState => ({ ...oldState, ...old }));

  const handleChange = e => {
    return setState({ [e.target.name]: e.target.value });
  };
  return (
    <Box>
      <Stack spacing={3}>
        <PageHeader title="KOT Listing" backBtn />

        <AccordionSearch>
          <Grid container component="form" spacing={3}>
            <Grid item md={2}>
              <Input
                label="KOT No."
                name="kotNo"
                value={state.kotNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={2}>
              <Input
                label="Table No."
                name="TableNo"
                value={state.TableNo}
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
                label="Mobile No"
                name="mobileNo"
                value={state.mobileNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={2}>
              <Input
                label="Order Type"
                name="orderType"
                value={state.orderType}
                options={[
                  {
                    label: 'All',
                    value: 'all',
                  },
                  {
                    label: 'Dine In',
                    value: 'dineIn',
                  },
                  {
                    label: 'Delivery',
                    value: 'delivery',
                  },

                  {
                    label: 'Pick up',
                    value: 'pickUp',
                  },
                ]}
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={2}>
              <Input
                label="KOT Status"
                name="kotStatus"
                value={state.orderType}
                options={[
                  {
                    label: 'Used in Bill',
                    value: 'usedInBill',
                  },
                  {
                    label: 'Cancelled',
                    value: 'cancelled',
                  },
                  {
                    label: 'Active',
                    value: 'active',
                  },
                ]}
                onChange={handleChange}
              />
            </Grid>

            <ButtonListing listingBtn />
          </Grid>
        </AccordionSearch>

        <Box display="flex" justifyContent="end">
          <ColorIndicator
            items={[
              { title: 'Used in Bill', color: 'white' },
              { title: 'Active', color: 'green' },
              { title: 'Cancelled', color: 'orange' },
              { title: 'Not Prepared', color: 'blue' },
              { title: 'Prepairing', color: 'yellow' },
            ]}
          />
        </Box>

        <KotTable />
      </Stack>
    </Box>
  );
};

export default KotListing;
