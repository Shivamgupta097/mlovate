import {
  Button,
  TextField,
  Divider,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
} from '@mui/material';

const CustomerHistoryDialog = ({ open, handleClose }) => {
  // const [discountOpen, setDiscountOpen] = useState(false);
  <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
    <DialogTitle>Order Special Commment</DialogTitle>
    <Divider />
    <DialogContent>
      <Stack spacing={2}>
        <TextField
          id="comment"
          name="comment"
          multiline
          rows={5}
          variant="outlined"
          type="text"
          placeholder="Enter customer comment..."
          fullWidth
        />
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
  </Dialog>;
};
export default CustomerHistoryDialog;
