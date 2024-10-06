import React from 'react';
import { Stack, Typography, IconButton } from '@mui/material';

const ActionButton = ({ text }) => {
  return (
    <Stack direction="row" spacing={2}>
      {text.map(act => {
        return (
          <IconButton key={act.type}>
            <Typography color="primary">{act.type}</Typography>
          </IconButton>
        );
      })}
    </Stack>
  );
};

export default ActionButton;
