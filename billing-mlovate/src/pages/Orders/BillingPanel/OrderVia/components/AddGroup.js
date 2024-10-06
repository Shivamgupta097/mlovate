import React from 'react';
import { Box, TextField, InputLabel } from '@mui/material';

const AddGroup = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap={2}>
        <InputLabel htmlFor="Group_number">Enter number Of People</InputLabel>

        <TextField
          id="Group_number"
          name="Group_number"
          size="small"
          sx={{ width: '100px' }}
          required
        />
      </Box>
    </>
  );
};

export default AddGroup;
