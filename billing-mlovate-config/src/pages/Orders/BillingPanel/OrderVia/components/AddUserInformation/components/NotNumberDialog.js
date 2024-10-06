import {
  Button,
  Divider,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';

const NotNumberDialog = (open, handleClose) => {
  <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
    <DialogTitle>Order Special Commment</DialogTitle>
    <Divider />
    <DialogContent>
      <Typography variant="body2">
        Please enter customer phone number.
      </Typography>
    </DialogContent>

    <Divider />
    <DialogActions>
      <Button onClick={handleClose} variant="contained" autoFocus>
        OK
      </Button>
    </DialogActions>
  </Dialog>;
};

export default NotNumberDialog;
