import React from 'react';
import {
  Box,
  Divider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';

const TaxDialog = ({ open, handleClose }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Applied Tax</DialogTitle>
        <Divider />
        <DialogContent sx={{ overflow: 'auto', maxHeight: 300 }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <RestaurantMenuOutlinedIcon sx={{ width: 120, height: 120 }} />
            <Typography variant="body2">You do not have any taxes</Typography>
          </Box>
        </DialogContent>

        <Divider />
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Discard
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default TaxDialog;
