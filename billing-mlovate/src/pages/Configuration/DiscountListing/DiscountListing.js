import React from 'react';
import { Stack } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import { NoRecord } from 'components/common';

const DiscountListing = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Discount Listing" backBtn />
      <NoRecord />
    </Stack>
  );
};

export default DiscountListing;
