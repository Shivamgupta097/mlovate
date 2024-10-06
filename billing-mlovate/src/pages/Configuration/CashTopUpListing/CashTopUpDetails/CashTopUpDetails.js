import React, { useState } from 'react';
import { Box, Stack, Typography, Button, TextField, Card } from '@mui/material';
import { PageHeader } from 'components/common/Header';
import CashTopUpTable from './CashTopUpTable';

const CashTopUpDetails = () => {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [renderNumber, setRenderNumber] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedDate) {
      setShow(true);
      setShowError(false);
    } else {
      setShow(false);
      setShowError(true);
    }
  };
  const handleChange = event => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <Box>
        <Stack spacing={3}>
          <PageHeader title="Withdrawal Listing" backBtn />

          <Card>
            <form onSubmit={handleSubmit}>
              <Box display="flex" alignItems="center" gap={3}>
                <Typography variant="body2">Enter date</Typography>
                <TextField
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Done
                </Button>
              </Box>
            </form>

            {showError ? (
              <Typography color="secondary" mt={3}>
                Error : Please First enter the date
              </Typography>
            ) : null}
          </Card>

          {show && (
            <CashTopUpTable
              selectedDate={selectedDate}
              renderNumber={renderNumber}
              setRenderNumber={setRenderNumber}
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default CashTopUpDetails;
