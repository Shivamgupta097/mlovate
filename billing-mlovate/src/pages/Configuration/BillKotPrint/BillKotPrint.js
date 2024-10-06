import React from 'react';
import { Box, Card, Stack, Grid } from '@mui/material';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ConfigTable from 'pages/Configuration/Components/ConfigTable';
import { PageHeader } from 'components/common/Header';

const ConfigHelper = [
  {
    title: 'Multi Printer Setting',
    IconName: LocalPrintshopIcon,
    key: 'multi printer setting',
    link: '/configuration/bill-kot-print/print-listing',
  },
  {
    title: 'Bill/KOT Preferred Configuration',
    IconName: DocumentScannerIcon,
    key: 'bill/kOT preferred configuration',
    link: '/configuration/bill-kot-print/preferred-config',
  },
];

function BillingScreen() {
  return (
    <Stack spacing={3}>
      <PageHeader title="Bill/KOT Print Configuration" backBtn />
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

export default BillingScreen;
