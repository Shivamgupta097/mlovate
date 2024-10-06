import React from 'react';
import { Button, Box, TextField, InputLabel } from '@mui/material';

const AddTable = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={2}>
          <InputLabel htmlFor="table_number">Enter Table Number</InputLabel>

          <TextField
            id="table_number"
            name="table_number"
            size="small"
            sx={{ width: '100px' }}
            required
          />
        </Box>

        <Box>
          <Button variant="outlined">View KOT</Button>
        </Box>
      </Box>
    </>
  );
};

export default AddTable;
