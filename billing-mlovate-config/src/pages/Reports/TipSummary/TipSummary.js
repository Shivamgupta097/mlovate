import React from 'react';
import { Box, Button } from '@mui/material';
import PageHeader from '../../../components/common/Header/PageHeader';
import ReportsAccodion from '../common/ReportsAccodion';

const TipSummary = () => {
  return (
    <Box>
      <PageHeader title="Tip Summary" backBtn />
      <ReportsAccodion />
      <Box
        display="flex"
        justifyContent="flex-end"
        gap={2}
        backgroundColor="white"
        height="70px"
        alignItems="center"
        pr={3}
        mt={2}
      >
        <Button variant="outlined">Export Excel</Button>
        <Button variant="outlined">Print</Button>
      </Box>
    </Box>
  );
};

export default TipSummary;
