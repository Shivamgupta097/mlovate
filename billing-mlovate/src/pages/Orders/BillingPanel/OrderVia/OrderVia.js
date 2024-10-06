import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  Tooltip,
  Collapse,
  Stack,
  useTheme,
} from '@mui/material';
import {
  AddComment,
  AddGroup,
  AddTable,
  AddUserInformation,
} from './components';

const OrderVia = ({ mode, name }) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [modeKey, setModeKey] = useState(null);

  const handleMode = key => {
    if (key === 'comment') {
      setDialogOpen(true);
    } else {
      setModeKey(modeKey === key ? null : key);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack spacing={2} direction="row">
          {mode.map(({ iconName: Icon, title, key }) => (
            <Tooltip title={title} key={key} arrow>
              <Button
                variant="text"
                color={modeKey === key ? 'primary' : 'primary'}
                onClick={() => handleMode(key)}
                sx={{
                  py: 1,
                  border: `1px solid ${
                    modeKey === key ? theme.palette.primary.main : '#00000000'
                  }`,
                }}
              >
                <Icon sx={{ height: '20px', width: '20px' }} />
              </Button>
            </Tooltip>
          ))}
        </Stack>

        <Button variant="contained" color="primary">
          {name}
        </Button>
      </Box>

      {modeKey && (
        <Card sx={{ mt: 2, border: '1px solid #DAE1E7' }}>
          <Collapse in={modeKey === 'table'}>
            <AddTable />
          </Collapse>

          <Collapse in={modeKey === 'userInformation'}>
            <AddUserInformation />
          </Collapse>

          <Collapse in={modeKey === 'group'}>
            <AddGroup />
          </Collapse>
        </Card>
      )}

      <AddComment
        open={dialogOpen}
        handleClose={() => {
          setDialogOpen(false);
        }}
      />
    </Box>
  );
};

export default OrderVia;
