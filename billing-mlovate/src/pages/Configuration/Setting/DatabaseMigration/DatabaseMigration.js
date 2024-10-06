import React from 'react';
import Modal from '../Common/Modal';
import { PageHeader } from 'components/common/Header';

const DatabaseMigration = () => {
  return (
    <>
      <PageHeader title="Database Migration" backBtn />
      <Modal />
    </>
  );
};

export default DatabaseMigration;
