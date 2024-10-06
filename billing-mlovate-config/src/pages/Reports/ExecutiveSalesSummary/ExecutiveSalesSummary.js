import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import PageHeader from '../../../components/common/Header/PageHeader';
import ReportsAccodion from '../common/ReportsAccodion';

const ExecutiveSalesSummary = () => {
  return (
    <Box>
      <PageHeader title="Executive Sales Report" backBtn />
      <ReportsAccodion />
      <Stack spacing={1}>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          pr={2}
          mt={1}
          justifyContent="flex-end"
        >
          <Button variant="outlined">Yesterday Sales</Button>
          <Button variant="outlined">Today Sales</Button>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          gap={2}
          backgroundColor="white"
          height="70px"
          alignItems="center"
          pr={3}
        >
          <Button variant="outlined">Export Excel</Button>
          <Button variant="outlined">Print</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ExecutiveSalesSummary;
