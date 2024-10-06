import React from 'react';
import {
  Box,
  Stack,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { PageHeader } from 'components/common/Header';
import AccordionSearch from '../../Components/common/AccordionSearch';
import ButtonListing from '../../Components/common/ButtonListing';
import ItemTable from './ItemTable';

const ItemManagement = () => {
  return (
    <>
      <Box>
        <Stack spacing={3}>
          <PageHeader title="Item Listing" backBtn />

          <AccordionSearch>
            <Grid container component="form" gap={3}>
              <Grid item md={2}>
                <InputLabel htmlFor="item_name">Item Name</InputLabel>
                <TextField
                  id="item_name"
                  name="itemName"
                  size="small"
                  placeholder="Enter item name"
                />
              </Grid>

              <Grid item md={2}>
                <InputLabel htmlFor="short_code">Short Code</InputLabel>
                <TextField
                  id="short_code"
                  name="shortCode"
                  size="small"
                  placeholder="Enter Short Code"
                />
              </Grid>

              <Grid item md={2}>
                <InputLabel htmlFor="sort_by">Sort By</InputLabel>

                <Select
                  name="sortBy"
                  id="sort_by"
                  size="small"
                  sx={{ width: '200px' }}
                >
                  <MenuItem>Short Code</MenuItem>
                  <MenuItem>Name</MenuItem>
                </Select>
              </Grid>

              <Grid item md={2}>
                <InputLabel htmlFor="sort_by">Sort By</InputLabel>
                <Select
                  name="sortBy"
                  id="sort_by"
                  sx={{ width: '200px' }}
                  size="small"
                >
                  <MenuItem>DESC</MenuItem>
                  <MenuItem>ASC</MenuItem>
                </Select>
              </Grid>
              <ButtonListing listingBtn />
            </Grid>

            {/* Accordian Search */}
          </AccordionSearch>

          {/* Item Table */}
          <ItemTable />
        </Stack>
      </Box>
    </>
  );
};

export default ItemManagement;
