import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Paper,
  Button,
} from '@mui/material';
import { DiscountDialog, TaxDialog } from './component';

const ExpandedView = ({ totalPrice, totalQuantity }) => {
  const [discountOpen, setDiscountOpen] = useState(false);
  const [taxOpen, setTaxOpen] = useState(false);

  return (
    <>
      <Paper sx={{ overflow: 'auto', mt: '20px', maxHeight: '300px' }}>
        <List>
          <ListItem divider>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Sub total</Typography>
                <Typography>{totalQuantity}</Typography>
                <Typography>{totalPrice}</Typography>
              </Box>
            </ListItemText>
          </ListItem>

          <ListItem divider>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="body">Discount</Typography>
                  <Button
                    color="primary"
                    ml={2}
                    onClick={() => setDiscountOpen(old => !old)}
                  >
                    More
                  </Button>
                </Box>
                <Typography>0.00</Typography>
              </Box>
            </ListItemText>
          </ListItem>

          <ListItem divider>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Delivery Charge</Typography>
                <TextField
                  type="text"
                  sx={{ width: '80px', marginX: '4px' }}
                  size="small"
                />
              </Box>
            </ListItemText>
          </ListItem>

          <ListItem divider>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Customer Paid</Typography>
                <TextField
                  type="text"
                  sx={{ width: '80px', marginX: '4px' }}
                  size="small"
                />
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem divider>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="body">Tax</Typography>
                  <Button
                    component="button"
                    color="primary"
                    ml={2}
                    onClick={() => setTaxOpen(old => !old)}
                  >
                    More
                  </Button>
                </Box>
                <Typography>0.00</Typography>
              </Box>
            </ListItemText>
          </ListItem>

          <ListItem divider>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Return to Customer</Typography>
                <Typography>0.00</Typography>
              </Box>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Tip</Typography>
                <TextField
                  type="text"
                  sx={{ width: '80px', marginX: '4px' }}
                  size="small"
                  pattern="[1-9]*"
                />
              </Box>
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
      <DiscountDialog
        open={discountOpen}
        handleClose={() => {
          setDiscountOpen(false);
        }}
      />

      <TaxDialog
        open={taxOpen}
        handleClose={() => {
          setTaxOpen(false);
        }}
      />
    </>
  );
};

export default ExpandedView;
