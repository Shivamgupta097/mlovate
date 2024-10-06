import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VegDot from '../FoodType/VegItem';
import RedDot from '../FoodType/NonVegItem';

const TableButton = styled(Button)(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90px',
  minWidth: '100px',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#000000',
  backgroundColor: '#c8f7f5',
  '&:hover': {},
}));

const AddOnQuant = styled(Box)(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '15px',
  minWidth: '30px',
  position: 'relative',
  cursor: 'pointer',
  color: 'black',
  backgroundColor: 'skyblue',
}));

const ItemQuant = styled(Box)(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20px',
  width: '20px',
  position: 'relative',
  cursor: 'pointer',
  color: 'black',
  backgroundColor: 'skyblue',
  borderRadius: '25px',
}));

export default function BasicModal({ open, onClose, ...rest }) {
  const dispatch = useDispatch();
  const [itemsWithAddOn, setItemWithAddOn] = useState();
  const [order, setOrder] = useState([]);
  let [totalPrice, setTotalPrice] = useState(rest.list.price);
  const [addOn, setAddOn] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [submit, setSubmit] = useState({});

  //console.log({ ...rest.list });

  const handleAddON = addOnItem => {
    setOrder([...order, addOnItem]);
  };

  useEffect(() => {
    for (let addOnItem in order) {
      setAddOn([...addOn, order[addOnItem].item]);
      setTotalPrice(totalPrice + order[addOnItem].price);
      setQuantity(quantity + 1);
    }
  }, [order]);

  // console.log(addOn);
  // console.log(totalPrice);

  const handleSubmit = () => {
    if (submit[rest.list.id]) {
      submit[rest.list.id].item = rest.list.item;
      submit[rest.list.id].addOn = addOn;
      submit[rest.list.id].price = totalPrice;
      submit[rest.list.id].quantity = quantity;
      console.log(submit[rest.list.id]);
    } else {
      submit[rest.list.id] = rest.list;
    }
  };

  return (
    <Dialog
      maxWidth="lg"
      open={open}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      {...rest}
    >
      <DialogTitle
        component="div"
        display="flex"
        justifyContent="space-between"
      >
        <Typography variant="h4">Add On</Typography>
        <Typography mt={1} display="flex" alignItems="flex-end">
          <Typography variant="h5" component="span" mr={2}>
            {rest.list.item}
          </Typography>
          <Typography component="span">
            {' Base Price - Rs. ' + rest.list.price}
          </Typography>
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{ width: '700px' }}>
          <Grid container>
            {rest.alladdon.map((addOnItem, index) => {
              return (
                <Grid item md={2} mb={2} key={index}>
                  <DialogContentText id="alert-dialog-slide-description">
                    {!addOnItem.item ? (
                      <></>
                    ) : (
                      <TableButton
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}
                        onClick={() => handleAddON(addOnItem)}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}
                        >
                          {addOnItem.isVeg ? <VegDot /> : <RedDot />}
                          <ItemQuant mr={0.6}>2</ItemQuant>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <Typography variant="h6" mb={1} sx={{}}>
                              {addOnItem.item}
                            </Typography>
                            <Typography variant="body1" sx={{}}>
                              {'@ RS. ' + addOnItem.price}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              height: '40px',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                            }}
                          >
                            <AddOnQuant sx={{ marginLeft: '7px' }}>
                              -
                            </AddOnQuant>
                          </Box>
                        </Box>
                      </TableButton>
                    )}
                  </DialogContentText>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Discard
        </Button>
        <Button
          onClick={() => {
            handleSubmit();
          }}
          variant="contained"
        >
          Add To Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}
