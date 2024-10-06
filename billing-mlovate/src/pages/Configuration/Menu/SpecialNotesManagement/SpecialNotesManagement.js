import React from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import Accordian from '../AccordianManagement';
import { PageHeader } from 'components/common/Header';
import { NoRecord } from 'components/common';

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
            <Typography variant="h6">Name</Typography>
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </Grid>
        </Grid>
        <Grid items md={7}>
          <Button variant="contained">Click</Button>
          <Button variant="outlined">Cick</Button>
        </Grid>
      </Accordian>
      <AllNotes />
    </Stack>
  );
};

export default SearchNotes;
