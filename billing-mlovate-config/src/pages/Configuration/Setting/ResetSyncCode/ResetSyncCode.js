import React from 'react';
import { Stack } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import Form from '../Common/PageLayout';
import Modal from '../Common/Modal';

const ResetSyncCode = () => {
  return (
    <>
      <Stack spacing={3}>
        <PageHeader title="Reset Sync Code" backBtn />
        <Form>
          <Modal />
        </Form>
      </Stack>
    </>
  );
};

export default ResetSyncCode;
