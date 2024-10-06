import React from 'react';
import { Box, Stack, Card, Typography } from '@mui/material';
import { tableStatusColor } from './utils/constants';

const TableStatus = ({ title, status = 'blank' }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        bgcolor={tableStatusColor[status] || tableStatusColor.blank}
        height="10px"
        width="10px"
        borderRadius="50%"
        mr={1}
      ></Box>
      <Typography variant="caption" fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
};

const Booking = props => {
  return (
    <Box display="flex" justifyContent="end" {...props}>
      <Card sx={{ width: 'fit-content' }}>
        <Box display="flex" justifyContent="space-between">
          {/* 
            TODO! action buttons space if any 
            <Stack spacing={2} direction="row">{"Action Buttons here"}</Stack>
          */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={2} direction="row">
              {[
                { title: 'Blank Table', status: 'blank' },
                { title: 'Running Table', status: 'running' },
                { title: 'Printed Table', status: 'printed' },
                { title: 'Paid Table', status: 'paid' },
                { title: 'Running Table', status: 'kotrunning' },
              ].map(({ title, status }, idx) => {
                return <TableStatus title={title} status={status} key={idx} />;
              })}
            </Stack>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Booking;
