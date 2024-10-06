import React from 'react';
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Divider,
  Button,
} from '@mui/material';

const Modal = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box mt={5}>
          <Box display="flex" sx={{ m: 2 }}>
            <Typography variant="subtitle1" width="150px" display="flex">
              Password
              <Typography color="red">*</Typography>
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{ width: '458px' }}
            />
          </Box>
          <Box display="flex" sx={{ m: 2 }}>
            <Typography variant="subtitle1" width="150px" display="flex">
              Reason
              <Typography color="red">*</Typography>
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={4}
              style={{ width: 450 }}
            />
          </Box>
          <Divider />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" width="100%" mt={2}>
        <Box display="flex" gap={2} width="20%">
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
