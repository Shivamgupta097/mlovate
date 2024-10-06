import React from 'react';
import { Box, Card } from '@mui/material';

const PageLayout = ({ children }) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box width="80%" component={Card}>
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
