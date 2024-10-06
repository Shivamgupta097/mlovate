import React from 'react';
import { Stack } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { PageHeader } from 'components/common/Header';
import { Button } from 'components/Design';
import Booking from './Booking';
import AllTable from './AllTable';

const Billing = () => {
  return (
    <Stack spacing={4}>
      <PageHeader title="Table View">
        <Button variant="contained">Delivery</Button>
        <Button variant="contained">Pick Up</Button>
        <Button variant="contained" startIcon={<AddOutlinedIcon />}>
          Add Table
        </Button>
      </PageHeader>
      <Booking />
      <AllTable />
    </Stack>
  );
};

export default Billing;
