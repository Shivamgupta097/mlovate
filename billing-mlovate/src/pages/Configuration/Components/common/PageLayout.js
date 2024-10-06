import React from 'react';
import { Box } from '@mui/material';

const PageLayout = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>{children}</Box>
    </Box>
  );
};

export default PageLayout;
