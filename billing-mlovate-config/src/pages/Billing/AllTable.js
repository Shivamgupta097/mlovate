import React from 'react';
import { Box, Grid, Card, Divider, Typography, Stack } from '@mui/material';
import BookingTable from './Components/BookingTable';

const AllTable = props => {
  return (
    <Box {...props}>
      <Card>
        <Stack spacing={3}>
          <Box>
            <Typography variant="body1" fontWeight={600}>
              AC
            </Typography>
            <Grid container spacing={3} my={0}>
              {[
                { title: 'T1', status: 'blank' },
                { title: 'T2', status: 'blank' },
                { title: 'T3', status: 'running' },
                { title: 'T4', status: 'blank' },
                { title: 'T5', status: 'blank' },
                { title: 'T6', status: 'running' },
                { title: 'T7', status: 'blank' },
                { title: 'T8', status: 'printed' },
                { title: 'T9', status: 'paid' },
                { title: 'T10', status: 'blank' },
                { title: 'T11', status: 'kotrunning' },
              ].map((item, idx) => {
                return (
                  <Grid item key={idx}>
                    <BookingTable {...item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Divider />

          <Box>
            <Typography variant="body1" fontWeight={600}>
              Non AC
            </Typography>
            <Grid container spacing={3} my={0}>
              {[
                { title: 'T1', status: 'blank' },
                { title: 'T2', status: 'blank' },
                { title: 'T3', status: 'running' },
                { title: 'T4', status: 'blank' },
                { title: 'T5', status: 'blank' },
                { title: 'T6', status: 'running' },
                { title: 'T7', status: 'blank' },
                { title: 'T8', status: 'printed' },
                { title: 'T9', status: 'paid' },
                { title: 'T10', status: 'blank' },
                { title: 'T11', status: 'kotrunning' },
                { title: 'T12', status: 'blank' },
                { title: 'T13', status: 'blank' },
                { title: 'T14', status: 'running' },
                { title: 'T15', status: 'blank' },
                { title: 'T16', status: 'blank' },
                { title: 'T17', status: 'running' },
                { title: 'T18', status: 'blank' },
                { title: 'T19', status: 'printed' },
                { title: 'T20', status: 'paid' },
                { title: 'T21', status: 'blank' },
                { title: 'T22', status: 'kotrunning' },
              ].map((item, idx) => {
                return (
                  <Grid item key={idx}>
                    <BookingTable {...item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default AllTable;
