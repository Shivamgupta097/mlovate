import {
  Button,
  Box,
  TextField,
  Divider,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';

const GstDialog = (open, handleClose) => {
  <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
    <DialogTitle>Order Special Commment</DialogTitle>
    <Divider />
    <DialogContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box width={90}>
          <Typography variant="body2">GST No :</Typography>
        </Box>
        <TextField type="text" placeholder="Enter GST number..." fullWidth />
      </Box>
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
  </Dialog>;
};

export default GstDialog;
