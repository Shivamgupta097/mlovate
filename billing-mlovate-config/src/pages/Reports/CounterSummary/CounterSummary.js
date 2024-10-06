import React from 'react';
import { Box, Typography } from '@mui/material';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import PageHeader from '../../../components/common/Header/PageHeader';
import ReportsAccodion from '../common/ReportsAccodion';

const CounterSummary = () => {
  return (
    <Box>
      <PageHeader title="Counter Summary" backBtn />
      <ReportsAccodion />
      <Box
        border="1px solid black"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
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

export default CounterSummary;
