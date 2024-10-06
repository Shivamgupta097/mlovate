import React from 'react';

import {
  Box,
  Divider,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
} from '@mui/material';

const DiscountDialog = ({ open, handleClose }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Applied Discount</DialogTitle>
        <Divider />
        <DialogContent sx={{ overflow: 'auto', maxHeight: 300 }}>
          <Stack spacing={2}>
            <Box>
              <Typography variant="h6" component="span">
                Custom Discount
              </Typography>
            </Box>

            <TextField
              type="text"
              placeholder="Reason"
              size="small"
              fullWidth
            />

            <FormControl>
              <RadioGroup row onChange={() => {}}>
                <Box display="flex" justifyContent="space-between">
                  <FormControlLabel
                    value="percentage"
                    label="Percentage"
                    control={<Radio />}
                    checked
                  />
                  <FormControlLabel
                    value="fixed"
                    label="Fixed"
                    control={<Radio />}
                  />
                </Box>
                <Box>
                  <TextField
                    type="text"
                    sx={{ width: '80px', marginX: '4px' }}
                    size="small"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Stack>
        </DialogContent>

        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Discard
          </Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DiscountDialog;
