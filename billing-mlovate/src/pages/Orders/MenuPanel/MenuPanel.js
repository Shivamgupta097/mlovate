import React, { useState } from 'react';
import { Grid, Box, Stack } from '@mui/material';
import OrdersCategory from './OrdersCategory';
import OrderItems from './OrderItems';
import Search from '../components/SearchOrder';
import { Menu } from './generator';

export default function MenuPanel() {
  const [newItem, setNewItem] = useState([Menu[0]]);

  const getData = item => {
    setNewItem(
      Menu.filter(element => {
        return element.id === item;
      }),
    );
  };

  return (
    <Box width="100%">
      <Stack spacing={3}>
        <Search />
        <Grid container>
          <Grid item md={4}>
            <OrdersCategory onAddData={getData} menu={Menu} />
          </Grid>
          <Grid item md={8}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <OrderItems data={newItem} />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
