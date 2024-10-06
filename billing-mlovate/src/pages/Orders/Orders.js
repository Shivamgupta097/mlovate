import React from 'react';
import { Grid } from '@mui/material';
import MenuPanel from './MenuPanel';
import BillingPanel from './BillingPanel';

export default function Orders() {
  return (
    <>
      <Grid container height="100%">
        <Grid item md={7}>
          <MenuPanel />
        </Grid>
        <Grid item md={5}>
          <BillingPanel />
        </Grid>
      </Grid>
    </>
  );
}
