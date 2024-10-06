import React from 'react';
import { Card, Stack } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import ConfigTable from 'pages/Configuration/Components/ConfigTable';
import { PageHeader } from 'components/common/Header';

const ConfigHelper = [
  {
    title: 'Distance Management',
    IconName: ConnectWithoutContactIcon,
    key: 'distance management',
    link: '/configuration/billing-screen/delivery-distance-listing',
  },
  {
    title: 'Billing Screen Configuration',
    IconName: ScreenshotMonitorIcon,
    key: 'billing screen configuration',
    link: '/configuration/billing-screen/billing-screen-config',
  },
];

function BillKotPrint() {
  return (
    <Stack spacing={3}>
      <PageHeader title="Billing Screen Configuration" backBtn />
      <Card>
        <Stack spacing={3} direction="row">
          {ConfigHelper.map(item => {
            return <ConfigTable item={item} key={item.key} />;
          })}
        </Stack>
      </Card>
    </Stack>
  );
}

export default BillKotPrint;
