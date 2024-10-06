import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import PageHeader from '../../../components/common/Header/PageHeader';
import ReportsAccodion from '../common/ReportsAccodion';

const SalesSummary = () => {
  return (
    <Box>
      <PageHeader title="Sales Report" backBtn />
      <ReportsAccodion />
      <Box display="flex" gap={2} justifyContent="flex-end" pr={2} mt={1}>
        <Button variant="outlined">Yesterday Sales</Button>
        <Button variant="outlined">Today Sales</Button>
      </Box>
      <Box
        border="1px solid black"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Box
          sx={{ opacity: '0.4' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <DocumentScannerOutlinedIcon sx={{ fontSize: '100px' }} />
          <Typography variant="body1">There is no record available</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SalesSummary;
