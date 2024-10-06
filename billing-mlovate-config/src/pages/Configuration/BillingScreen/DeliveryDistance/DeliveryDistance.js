import React from 'react';
import { Stack } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import { NoRecord } from 'components/common';

const DeliveryDistance = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Delivery Distance Listing" backBtn />
      <NoRecord />
    </Stack>
  );
};

export default DeliveryDistance;
