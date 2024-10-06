import React from 'react';
import { Box, Card, Stack, Typography, Grid } from '@mui/material';
import {
  EmailOutlined as EmailIcon,
  AddIcCallOutlined as PhoneIcon,
} from '@mui/icons-material';
import { SectionA } from './utils/reportPageHepler';
import ConfigTable from 'pages/Configuration/Components/ConfigTable';
import { PageHeader } from 'components/common/Header';

const Reports = () => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Report" spacing={3}>
        {[
          { title: '9999123409', icon: PhoneIcon },
          { title: 'support@mlovate.com', icon: EmailIcon },
        ].map(({ title, icon: Icon }) => (
          <Box
            key={title}
            display="flex"
            alignItems="center"
            component={Typography}
            variant="body1"
            gap={0.5}
          >
            <Icon sx={{ height: '20px' }} />
            <span>{title}</span>
          </Box>
        ))}
      </PageHeader>

      <Card>
        <Stack spacing={3}>
          <Box>
            <Grid container spacing={3} my={0}>
              {SectionA.map(item => {
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
};

export default Reports;
