import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { NoRecord } from 'components/common';
import { PageHeader } from 'components/common/Header';

const WithdrawalListing = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Withdrawal Listing" backBtn>
        <Button
          variant="contained"
          component={Link}
          to="/configuration/withdrawal-listing/withdrawal-details"
        >
          Add Withdrawal
        </Button>
      </PageHeader>

      <NoRecord />
    </Stack>
  );
};

export default WithdrawalListing;
