import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import Accordian from '../AccordianManagement';
import { PageHeader } from 'components/common/Header';
import { NoRecord } from 'components/common';
import Input from 'components/Design/Input';
import ButtonListing from '../../Components/common/ButtonListing';

const AllNotes = ({ data = [] }) => {
  if (!data.length) return <NoRecord />;
  return <></>;
};

const SearchNotes = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Special Notes Listing" backBtn>
        <Button variant="contained">Add Special Notes</Button>
      </PageHeader>
      <Accordian>
        <Grid container gap={4}>
          <Grid items md={2}>
            <Input label="Name" name="name" />
          </Grid>
          <Grid items md={9}>
            <ButtonListing listingBtn />
          </Grid>
        </Grid>
      </Accordian>
      <AllNotes />
    </Stack>
  );
};

export default SearchNotes;
