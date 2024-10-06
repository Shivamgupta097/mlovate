import React from 'react';
import { Stack } from '@mui/material';
import Modal from '../Common/Modal';
import { PageHeader } from 'components/common/Header';
import Form from '../Common/PageLayout';

const DatabaseMigration = () => {
  return (
    <>
      <Stack spacing={3}>
        <PageHeader title="Database Migration" backBtn />
        <Form>
          <Modal />
        </Form>
      </Stack>
    </>
  );
};

export default DatabaseMigration;
