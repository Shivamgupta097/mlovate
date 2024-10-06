import { useState } from 'react';
import {
  IconButton,
  Box,
  Tooltip,
  TextField,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import {
  HistoryOutlined as HistoryOutlinedIcon,
  PercentOutlined as PercentOutlinedIcon,
  InfoOutlined as InfoOutlinedIcon,
  PaymentOutlined as PaymentOutlinedIcon,
} from '@mui/icons-material';

import { CustomerHistoryDialog } from './components';

const userHelperIcon = [
  { title: 'Order History', icon: HistoryOutlinedIcon },
  { title: 'GST', icon: PercentOutlinedIcon },
  { title: 'Information', icon: InfoOutlinedIcon },
  { title: 'Payment method', icon: PaymentOutlinedIcon },
];

/////////////////////////////////////////////////////////////////////////////////////////////////

//Here main component start
const AddUserInformation = () => {
  const [title, setTitle] = useState();
  const [open, setOpen] = useState(false);

  const iconHandle = item => {
    setTitle(item.title);
    setOpen(true);
  };

  return (
    <>
      <Box>
        <Stack spacing={3}>
          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ width: '60px' }}>
              <InputLabel htmlFor="mobile_number">Mobile:</InputLabel>
            </Box>

            <TextField
              id="mobile_number"
              name="mobile_number"
              size="small"
              sx={{ width: '150px' }}
              required
            />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ width: '60px' }}>
              <InputLabel htmlFor="name">Name:</InputLabel>
            </Box>

            <TextField
              id="name"
              name="name"
              size="small"
              sx={{ width: '200px' }}
              required
            />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {userHelperIcon.map(item => (
                <Tooltip title={item.title} key={item.title} arrow>
                  <IconButton
                    size="large"
                    color="primary"
                    onClick={() => iconHandle(item)}
                  >
                    <item.icon />
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ width: '60px' }}>
              <InputLabel htmlFor="address">Add:</InputLabel>
            </Box>

            <TextField
              id="address"
              name="address"
              size="small"
              sx={{ width: '400px' }}
              required
            />
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ width: '60px' }}>
              <InputLabel htmlFor="locality">Locality:</InputLabel>
            </Box>

            <TextField
              id="locality"
              name="locality"
              size="small"
              c1c
              sx={{ width: '395px' }}
              required
            />
          </Box>
          <Box>
            {title === 'Order History' ? (
              <CustomerHistoryDialog
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
              />
            ) : title === 'GST' ? (
              <Typography>Order History</Typography>
            ) : title === 'Information' ? (
              <Typography>Order History</Typography>
            ) : title === 'Payment method' ? (
              <Typography>Order History</Typography>
            ) : null}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default AddUserInformation;
