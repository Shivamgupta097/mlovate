import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import { NoRecord } from 'components/common';

const CashTopUpListing = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <PageHeader title="Cash Top-Up  Listing" backBtn>
          <Button
            variant="contained"
            component={Link}
            to="/configuration/cash-top-up-listing/cash-top-up-details"
          >
            Add Cash Top-Up
          </Button>
        </PageHeader>

        <NoRecord />
      </Stack>
    </Box>
  );
};

export default CashTopUpListing;
