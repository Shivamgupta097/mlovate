import React from 'react';
import { Stack } from '@mui/material';
import SadIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { PageHeader } from '../Header';
import NoRecord from '../NoRecord';

const ComingSoon = ({ headerProps, ...rest }) => {
  return (
    <Stack spacing={3}>
      <PageHeader title="Coming Soon" backBtn {...headerProps} />
      <NoRecord
        icon={SadIcon}
        title="Opps.. This Page is Comming Soon"
        {...rest}
      />
    </Stack>
  );
};

export default ComingSoon;
