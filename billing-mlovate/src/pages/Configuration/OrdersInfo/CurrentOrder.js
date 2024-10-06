import React from 'react';
import { Box, Stack } from '@mui/material';
import { Tabs } from 'components/Design';
import { ColorIndicator } from 'components/common';
import All from './Tabs/All';
import DineIn from './Tabs/DineIn';
import Delivery from './Tabs/Delivery';
import PickUp from './Tabs/PickUp';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component="div">
      <Stack spacing={3}>
        <Box display="flex" justifyContent="space-between">
          <Tabs
            value={value}
            onChange={handleChange}
            tabs={[
              { label: 'All' },
              { label: 'Dine In' },
              { label: 'Delivery' },
              { label: 'Pick Up' },
            ]}
            wrapperProps={{ sx: { width: 'fit-content' } }}
          />
          <Box width="100%">
            <ColorIndicator
              items={[
                { title: 'Saved Bill', color: 'white' },
                { title: 'Printed Bill', color: 'green' },
                { title: 'Cancelled Bill', color: 'orange' },
                { title: 'Paid', color: 'yellow' },
              ]}
            />
          </Box>
        </Box>

        <TabPanel value={value} index={0}>
          <All />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DineIn />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Delivery />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PickUp />
        </TabPanel>
      </Stack>
    </Box>
  );
}
