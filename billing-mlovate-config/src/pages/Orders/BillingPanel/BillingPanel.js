import { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Button, Card, useTheme } from '@mui/material';
import OrderVia from './OrderVia';
import OrderTable from './OrderTable';
import BillingUpDrawer from './BillingUpDrawer';
import { orderMode } from './utils/helper';

const rows = [
  {
    menuId: '1',
    itemId: '2',
    title: 'Pizza',
    addOns: [{ id: '1', qty: 2 }],
    total: 159,
    quantity: 1,
  },

  {
    menuId: '2',
    title: 'Burger',
    itemId: '3',
    addOns: [{ id: '2', qty: 1 }],
    total: 189,
    quantity: 1,
  },
  {
    menuId: '3',
    title: 'veg Burger',
    itemId: '4',
    addOns: [{ id: '2', qty: 1 }],
    total: 129,
    quantity: 1,
  },

  {
    menuId: '4',
    title: ' Chicken Burger',
    itemId: '5',
    addOns: [{ id: '3', qty: 1 }],
    total: 145,
    quantity: 1,
  },
];

const BillingPanel = () => {
  const theme = useTheme();
  const [type, setType] = useState('dineIn');

  // using order Table method here

  const [orderItemList, setOrderItemList] = useState(rows);

  //To count total item and total price

  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState();

  useEffect(() => {
    totalItemPrice();
    totalItemQuantity();
  }, []);

  const totalItemPrice = () => {
    const sum = orderItemList.map(cur => cur.total * cur.quantity);
    console.log(sum);
    const totalCost = sum && sum.reduce((acc, cur) => acc + cur, 0);
    console.log(totalCost);
    setTotalPrice(totalCost);

    return;
  };

  const totalItemQuantity = () => {
    const totalItem = orderItemList.map(cur => cur.quantity);
    console.log(totalItem);
    const total = totalItem && totalItem.reduce((acc, cur) => acc + cur, 0);
    console.log(total);
    setTotalQuantity(total);
    return;
  };

  //Delete the row
  function onHandleDeleteItem(item) {
    const index = orderItemList.findIndex(p => p.menuId === item.menuId);
    const temp = orderItemList.slice();

    temp.splice(index, 1);
    console.log('temp', temp);
    setOrderItemList(temp);
  }

  //Adding the quantity on click
  function handleIncrement(item) {
    console.log('orderItemList', orderItemList);
    const orderList = orderItemList.map(cur =>
      cur.menuId === item.menuId
        ? {
            ...cur,
            quantity: cur.quantity > 0 ? cur.quantity + 1 : cur.quantity,
          }
        : cur,
    );
    setOrderItemList(orderList);
    console.log('orderList', orderList);

    totalItemPrice();
    totalItemQuantity();
  }

  //Subtracting the quantity on click

  const handleDecrement = item => {
    console.log('orderItemList', orderItemList);
    const orderList = orderItemList
      .map(cur =>
        cur.menuId === item.menuId
          ? { ...cur, quantity: cur.quantity - 1 }
          : cur,
      )
      .filter(cur => cur.quantity !== 0);
    setOrderItemList(orderList);
    console.log('orderList', orderList);

    totalItemPrice();
    totalItemQuantity();
  };

  //On input text handler

  const inputHandler = (event, item) => {
    const orderList = orderItemList
      .map(cur =>
        cur.menuId === item.menuId
          ? { ...cur, quantity: +event.target.value }
          : cur,
      )
      .filter(cur => cur.quantity !== 0);
    console.log(orderList);

    setOrderItemList(orderList);
    totalItemPrice();
    totalItemQuantity();
  };

  // To count total cost and quantityof cart of item

  return (
    <Card
      sx={{
        px: 0,
        py: 2,
        height: `calc(100% - ${theme.spacing(2 * 2)})`,
        justifyContent: 'space-between',
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box px={2}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={type} onChange={(_, newValue) => setType(newValue)}>
              <Tab value="dineIn" label="Dine In" />
              <Tab value="delivery" label="Delivery" />
              <Tab value="pickUp" label="Pick up" />
            </Tabs>
          </Box>
        </Box>

        <Box my={2} px={2}>
          <OrderVia mode={orderMode[type].mode} name={orderMode[type].action} />
        </Box>

        <Box>
          <OrderTable
            onHandleDeleteItem={onHandleDeleteItem}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            inputHandler={inputHandler}
            orderItemList={orderItemList}
            setOrderItemList={setOrderItemList}
          />
        </Box>
      </Box>
      <Box>
        <BillingUpDrawer
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
        />
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <Button variant="outlined">Print & eBill</Button>
          <Button variant="outlined">KOT & Print</Button>
          <Button variant="outlined">Hold</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default BillingPanel;