import React from 'react';
import { Button, Stack, Box } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import { Tabs } from 'components/Design';
import CurrentOrder from './CurrentOrder';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function OrdersInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={3}>
      <PageHeader title="Orders" backBtn>
        <Button variant="contained">Get Past Order</Button>
      </PageHeader>

      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          tabs={[{ label: 'Offline Orders' }, { label: 'Online Orders' }]}
        />

        <TabPanel value={value} index={0}>
          <CurrentOrder />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <CurrentOrder />
        </TabPanel>
      </Box>
    </Stack>
  );
}

export default OrdersInfo;
