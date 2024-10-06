import * as React from 'react';
import { TextField, Box } from '@mui/material';

export default function SearchBar() {
  return (
    <Box width="100%">
      <TextField fullWidth color="primary" placeholder="Order Search" />
    </Box>
  );
}
