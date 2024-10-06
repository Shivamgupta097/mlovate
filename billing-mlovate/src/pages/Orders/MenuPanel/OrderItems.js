import React, { useState } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import BasicModal from './Dialog/BasicModal';
import VegDot from './FoodType/VegItem';
import RedDot from './FoodType/NonVegItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { orderBilling } from '../../../setup/redux/actions/orderAction';

const TableButton = styled(Button)(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '90px',
  minWidth: '90px',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#000000',
  backgroundColor: '#c8f7f5',
  '&:hover': {},
}));

export default function OrderItems({ data }) {
  const dispatch = useDispatch();
  const listData = useSelector(state => state.list);

  const [addOn, setAddOn] = useState([]);
  const [order, setOrder] = useState();
  const [modal, setModal] = useState(false);
  const [orderItem, setOrderItem] = useState({});

  const handleItems = items => {
    const currentId = items.id;

    /* adding Add On to component if it is available */

    setAddOn([]);
    for (let temp of items.addOn) {
      setAddOn(addOn => [...addOn, temp]);
    }

    /* Set List of Order  */

    setOrder(items);

    /* setting quantity of Items */

    if (orderItem[currentId]) {
      orderItem[currentId].quantity += 1;
    } else {
      orderItem[currentId] = items;
    }
    setOrderItem({ ...orderItem });

    /* check the add on and show dialog if there is no add on */

    if (items.addOn.length > 0) {
      setModal(true);
    } else {
      dispatch(orderBilling(orderItem));
    }
  };

  return (
    <>
      {data?.map(item => {
        return (
          <Grid container sx={{ maxHeight: '73vh' }} key={item.id}>
            {item.subitem.map(elem => {
              return (
                <Grid item pl={2} pb={2} md={3} key={elem.id}>
                  <TableButton
                    onClick={() => {
                      handleItems(elem);
                    }}
                  >
                    <Typography sx={{ marginTop: '-25px' }}>
                      {elem.isVeg ? <VegDot /> : <RedDot />}
                    </Typography>
                    <Grid container>
                      <Grid item md={12}>
                        <Typography variant="h6" fontWeight={600}>
                          {elem.item}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableButton>
                </Grid>
              );
            })}
          </Grid>
        );
      })}

      {modal && (
        <BasicModal
          list={order}
          alladdon={addOn}
          onClose={() => setModal(false)}
          open={modal}
        />
      )}
    </>
  );
}
