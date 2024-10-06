import React from 'react';
import { Box, Card, Stack, Grid } from '@mui/material';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';
import BookIcon from '@mui/icons-material/Book';
import ConfigTable from 'pages/Configuration/Components/ConfigTable';
import { PageHeader } from 'components/common/Header';

const ConfigHelper = [
  {
    title: 'Restaurant Configuration',
    IconName: ToggleOnIcon,
    key: 'restaurant configuration',
    link: '/configuration/setting/restaurant-configuration',
  },
  {
    title: 'Reset Bill No.',
    IconName: LockResetRoundedIcon,
    key: 'reset bill no.',
    link: '/configuration/setting/reset-bill-no',
  },
  {
    title: 'Reset Sync Code',
    IconName: SyncRoundedIcon,
    key: 'reset sync code',
    link: '/configuration/setting/restaurant-sync-code',
  },
  {
    title: 'Database Migeration',
    IconName: StorageRoundedIcon,
    key: 'database migeration',
    link: '/configuration/setting/database-migration',
  },
  {
    title: 'Remove All Order/KOT',
    IconName: RemoveCircleOutlineRoundedIcon,
    key: 'remove all order/kot',
    link: '/configuration/setting/remove-all-order',
  },
  {
    title: 'Remove Backup Files',
    IconName: CloudOffOutlinedIcon,
    key: 'remove backup files',
    link: '/configuration/setting/remove-backup-files',
  },
  {
    title: 'Logs',
    IconName: BookIcon,
    key: 'logs',
    link: '/configuration/setting/logs',
  },
];

function Setting() {
  return (
    <Stack spacing={3}>
      <PageHeader title="Billing Screen Configuration" backBtn />
      <Card>
        <Stack spacing={3}>
          <Box>
            <Grid container spacing={3} my={0}>
              {ConfigHelper.map(item => {
                return (
                  <Grid item key={item.key}>
                    <ConfigTable item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
}

export default Setting;
