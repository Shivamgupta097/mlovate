import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Button } from '@mui/material';
import { NoRecord } from 'components/common';
import { PageHeader } from 'components/common/Header';

const ExpenseListing = () => {
  return (
    <>
      <Box>
        <Stack spacing={3}>
          <PageHeader title="Expense Listing" backBtn>
            <Button
              variant="contained"
              component={Link}
              to="/configuration/expense-listing/expense-details"
            >
              Add Expense
            </Button>
          </PageHeader>

          <NoRecord />
        </Stack>
      </Box>
    </>
  );
};

export default ExpenseListing;
