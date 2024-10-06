import { useState } from 'react';
import { Box, Stack, Grid } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import AccordionSearch from '../../Components/common/AccordionSearch';
import ButtonListing from '../../Components/common/ButtonListing';
import ItemTable from './ItemTable';
import Input from 'components/Design/Input';

const ItemManagement = () => {
  const [state, setStateHook] = useState({});
  const setState = old => setStateHook(oldState => ({ ...oldState, ...old }));

  const handleChange = e => {
    return setState({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <Box>
        <Stack spacing={3}>
          <PageHeader title="Item Listing" backBtn />

          <AccordionSearch>
            <Grid container component="form" gap={3}>
              <Grid item md={2}>
                <Input
                  label="Item Name"
                  name="itemName"
                  value={state.itemName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item md={2}>
                <Input
                  label="Sort By"
                  name="sortBy"
                  value={state.sortBy}
                  options={[
                    {
                      label: 'Short Code',
                      value: 'shortCode',
                    },
                    {
                      label: 'Name',
                      value: 'name',
                    },
                  ]}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item md={2}>
                <Input
                  label="Short Code"
                  name="shortCode"
                  value={state.shortCode}
                  onChange={handleChange}
                />
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
