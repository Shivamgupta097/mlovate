import {
  Button,
  Box,
  TextField,
  Divider,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const CustomerInformationDialog = ({ open, handleClose }) => {
  // const [discountOpen, setDiscountOpen] = useState(false);
  <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
    <DialogTitle>Customer Details</DialogTitle>
    <Divider />
    <DialogContent>
      <Stack spacing={2}>
        <Typography variant="h6"> Enter below information</Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width={180}>
            <Typography variant="body2">Email</Typography>
          </Box>

          <TextField
            type="text"
            placeholder="Enter customer comment..."
            fullWidth
          />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width={180}>
            <Typography variant="body2">Date Of Birth</Typography>
          </Box>
          <TextField type="date" fullWidth />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width={180}>
            <Typography variant="body2">Anniversary</Typography>
          </Box>
          <TextField type="date" fullWidth />
        </Box>

        <FormControl>
          <RadioGroup row onChange={() => {}}>
            <Box display="flex" justifyContent="space-between">
              <FormControlLabel
                label="Do not send any update"
                control={<Radio />}
                checked
              />
              <FormControlLabel label="Mark as Favorite" control={<Radio />} />
            </Box>
          </RadioGroup>
        </FormControl>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box width={180}>
            <Typography variant="body2">Customer Tags</Typography>
          </Box>
          <TextField type="text" fullWidth />
        </Box>
      </Stack>
    </DialogContent>

    <Divider />
    <DialogActions>
      <Button onClick={handleClose} variant="outlined">
        Cancel
      </Button>
      <Button onClick={handleClose} variant="contained" autoFocus>
        Save
      </Button>
    </DialogActions>
  </Dialog>;
};

export default CustomerInformationDialog;
