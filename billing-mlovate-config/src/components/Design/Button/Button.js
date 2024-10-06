import React from 'react';
import { Button as MuiButton, Box, CircularProgress } from '@mui/material';

const Button = ({ children, loading, disabled, sx, ...rest }) => {
  return (
    <MuiButton
      {...rest}
      disabled={disabled || loading}
      sx={{ position: 'relative', ...sx }}
    >
      {children}
      {loading && (
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          position="absolute"
          justifyContent="center"
        >
          <CircularProgress size={22} />
        </Box>
      )}
    </MuiButton>
  );
};

export default Button;
