import React from 'react';
import { Box, Stack, Card, Typography } from '@mui/material';
import { colors } from './constants';

const Status = ({ title, color = 'white' }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        bgcolor={colors[color] || colors.white}
        height="10px"
        width="10px"
        borderRadius="50%"
        mr={1}
      ></Box>
      {title && (
        <Typography variant="caption" fontWeight={600}>
          {title}
        </Typography>
      )}
    </Box>
  );
};

const ColorIndicator = ({ items, ...rest }) => {
  return (
    <Box display="flex" justifyContent="end" {...rest}>
      <Card sx={{ width: 'fit-content' }}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={2} direction="row">
              {items.map(({ title, color }, idx) => {
                return <Status title={title} color={color} key={idx} />;
              })}
            </Stack>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ColorIndicator;
